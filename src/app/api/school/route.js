import { NextResponse } from "next/server";

const endpointBuilders = {
  academicYears: () => "/api/onlineapp/v1/school/getAcademicYears",
  states: () => "/api/common/get/states",
  cities: ({ stateId }) => `/api/common/get/city/${stateId}`,
  campuses: ({ cityId, academicYearId }) =>
    `/api/onlineapp/v1/school/getCampusesByCity?city_id=${cityId}&acdc_year_id=${academicYearId}`,
  boards: ({ campusId, academicYearId }) =>
    `/api/onlineapp/v1/school/getBoardTypesByCampus?campus_id=${campusId}&acdc_year_id=${academicYearId}`,
  classes: ({ campusId, boardId, academicYearId }) =>
    `/api/onlineapp/v1/school/getClassesByCampusAndBoard?campus_id=${campusId}&board_id=${boardId}&acdc_year_id=${academicYearId}`,
  orientations: ({ campusId, academicYearId, classId }) =>
    `/api/onlineapp/v1/school/getOrientationsByCampusClass?campus_id=${campusId}&acdc_year_id=${academicYearId}&class_id=${classId}`,
  sections: ({ classId, orientationId }) =>
    `/api/onlineapp/v1/school/getSectionsByClassAndOrientation?class_id=${classId}&orientation_id=${orientationId}`,
  studentTypes: ({ campusId, orientationId, academicYearId }) =>
    `/api/onlineapp/v1/school/getStudentTypesByCampusAndOrientation?campus_id=${campusId}&orientation_id=${orientationId}&acdc_year_id=${academicYearId}`,
  quotas: () => "/api/onlineapp/v1/school/getQuotas",
  admissionTypes: () => "/api/onlineapp/v1/school/getAdmissionTypes",
  occupations: () => "/api/onlineapp/v1/school/getOccupations",
  districts: ({ stateId }) => `/api/common/get/districts/${stateId}`,
  mandals: ({ districtId }) => `/api/common/get/mandals/district/${districtId}`,
  proEmployee: ({ payrollId }) =>
    `/api/onlineapp/v1/school/checkProEmployee?payroll_id=${encodeURIComponent(payrollId)}`,
  orientationFees: ({ academicYearId, branchId, classId, orientationId, studentType }) =>
    `/api/onlineapp/v1/school/getOrientationFeeAmounts?academic_year_id=${academicYearId}&branch_id=${branchId}&class_id=${classId}&orientation=${orientationId}&student_type=${studentType}&token=GET_ORIENTATION_FEE_AMOUNTS`,
};

const postEndpointBuilders = {
  saveStudent: () =>
    "http://192.168.20.14:8088/api/onlineapp/v1/school/online_std_create?token=chaitanya",
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get("endpoint");
  const buildEndpoint = endpointBuilders[endpoint];
  const apiBase = process.env.SCHOOL_API_BASE;

  if (!buildEndpoint) {
    return NextResponse.json({ success: false, message: "Unknown endpoint" }, { status: 400 });
  }

  if (!apiBase) {
    return NextResponse.json(
      { success: false, message: "SCHOOL_API_BASE is not configured" },
      { status: 500 },
    );
  }

  const params = Object.fromEntries(searchParams.entries());
  const apiPath = buildEndpoint(params);

  try {
    const response = await fetch(`${apiBase}${apiPath}`, {
      headers: { accept: "application/json" },
      cache: "no-store",
    });
    const text = await response.text();

    try {
      return NextResponse.json(JSON.parse(text), { status: response.status });
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: `The ${endpoint} API did not return JSON. Please check the upstream API service.`,
        },
        { status: response.ok ? 502 : response.status },
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: `Could not reach the ${endpoint} API. Please check the API host and network.`,
      },
      { status: 502 },
    );
  }
}

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get("endpoint");
  const buildEndpoint = postEndpointBuilders[endpoint];
  const apiBase = process.env.SCHOOL_API_BASE;

  if (!buildEndpoint) {
    return NextResponse.json({ success: false, message: "Unknown endpoint" }, { status: 400 });
  }

  if (!apiBase) {
    return NextResponse.json(
      { success: false, message: "SCHOOL_API_BASE is not configured" },
      { status: 500 },
    );
  }

  let payload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request payload" },
      { status: 400 },
    );
  }

  try {
    const apiPath = buildEndpoint();
    const apiUrl = apiPath.startsWith("http") ? apiPath : `${apiBase}${apiPath}`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        accept: "*/*",
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    const text = await response.text();

    try {
      const responsePayload = JSON.parse(text);

      console.log("online_std_create response", {
        status: response.status,
        payload: responsePayload,
      });

      return NextResponse.json(responsePayload, { status: response.status });
    } catch {
      console.log("online_std_create response", {
        status: response.status,
        payload: text,
      });

      return NextResponse.json(
        {
          success: response.ok,
          message: text || "The save API did not return JSON.",
        },
        { status: response.ok ? 200 : response.status },
      );
    }
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Could not reach the student details save API. Please check the API host and network.",
      },
      { status: 502 },
    );
  }
}
