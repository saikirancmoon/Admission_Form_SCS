"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Bus,
  CheckCircle2,
  Clock,
  Compass,
  FlaskConical,
  GraduationCap,
  Home,
  Info,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import styles from "./Home2InnerPage.module.css";
import { home2InnerPages } from "./home2InnerPagesData";
import managementImage from "../../imgs/about/management.jpg";
import missionImage from "../../imgs/about/mission.jpg";
import journeyImage from "../../imgs/about/our_journey.jpg";
import razorpayImage from "../../imgs/about/razorpay.png";
import visionImage from "../../imgs/about/vision.jpg";
import whoWeAreImage from "../../imgs/about/who_we_are.jpg";

gsap.registerPlugin(ScrollTrigger);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function HighlightTitle({ page }) {
  const parts = page.title.split(page.highlight);

  if (parts.length === 1) {
    return page.title;
  }

  return (
    <>
      {parts[0]}
      <span>{page.highlight}</span>
      {parts.slice(1).join(page.highlight)}
    </>
  );
}

function Hero({ page, variant = "split" }) {
  return (
    <section className={`${styles.hero} ${styles[`hero${variant}`] || ""}`}>
      <div className={styles.heroBg}>
        <div className={styles.planetGlow} />
        <div className={styles.blueGlow} />
        <div className={styles.coralGlow} />
        <div className={styles.starField} />
      </div>

      <div className={styles.heroContainer}>
        <motion.div
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.13 }}
        >
          <motion.h1 className={styles.title} variants={fadeUp}>
            <HighlightTitle page={page} />
          </motion.h1>
          <motion.p className={styles.intro} variants={fadeUp}>
            {page.intro}
          </motion.p>
          <motion.div className={styles.heroActions} variants={fadeUp}>
            <Link href="/admissions" className={styles.primaryBtn}>
              Enquire Now <ArrowRight size={18} />
            </Link>
            <Link href="/admissions" className={styles.secondaryBtn}>
              Plan Visit <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.94, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <div className={styles.imageShell}>
            <Image
              src={page.heroImage}
              alt={page.title}
              fill
              sizes="(max-width: 768px) 100vw, 48vw"
              className={styles.heroImage}
              priority
              unoptimized
            />
          </div>
          <div className={`${styles.floatBadge} ${styles.badgeTop}`}>
            <strong>{page.stats[0]?.value}</strong>
            <span>{page.stats[0]?.label}</span>
          </div>
          <div className={`${styles.floatBadge} ${styles.badgeBottom}`}>
            <strong>{page.stats[2]?.value}</strong>
            <span>{page.stats[2]?.label}</span>
          </div>
          <div className={`${styles.gem} ${styles.gemOne}`} />
          <div className={`${styles.gem} ${styles.gemTwo}`} />
        </motion.div>
      </div>
    </section>
  );
}

function StatStrip({ stats }) {
  return (
    <div className={styles.statsDock}>
      {stats.map((stat) => (
        <div className={styles.statItem} key={`${stat.value}-${stat.label}`}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

function FeatureCard({ card }) {
  const Icon = card.icon;

  return (
    <article
      className={`${styles.featureCard} ${styles[card.tone]} home2-inner-reveal`}
    >
      <div className={styles.cardImageWash} />
      <div className={styles.featureIcon}>
        <Icon size={24} />
      </div>
      <h2>{card.title}</h2>
      <p>{card.text}</p>
      <span className={styles.cardArrow}>
        <ArrowRight size={16} />
      </span>
    </article>
  );
}

function AdmissionField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  visualRequired = required,
  defaultValue,
  readOnly = false,
  disabled = false,
  options,
  value,
  onChange,
  onBlur,
  inputMode,
  pattern,
  min,
  step,
  maxLength,
  variant,
  digitsOnly = false,
  verified = false,
  helpText,
  endAction,
}) {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const labelText = visualRequired ? `${label}*` : label;
  const controlledProps =
    value !== undefined ? { value } : { defaultValue: defaultValue ?? "" };
  const inputValueProps = value !== undefined ? { value } : { defaultValue };

  return (
    <label className={styles.admissionFormField}>
      <span className={styles.fieldLabel}>
        {labelText}
        {helpText ? (
          <button
            className={styles.fieldInfoButton}
            type="button"
            onClick={(event) => {
              event.preventDefault();
              setIsHelpOpen((current) => !current);
            }}
            aria-label={`Show help for ${label}`}
            aria-expanded={isHelpOpen}
          >
            <Info size={14} />
          </button>
        ) : null}
      </span>
      {isHelpOpen ? (
        <span className={styles.fieldHelpText}>{helpText}</span>
      ) : null}
      {variant === "radio" ? (
        <div className={styles.admissionRadioGroup}>
          {options.map((option) => {
            const optionValue = option.value ?? option;

            return (
              <label key={optionValue}>
                <input
                  type="radio"
                  name={name}
                  value={optionValue}
                  required={required}
                  defaultChecked={defaultValue === optionValue}
                />
                {option.label ?? option}
              </label>
            );
          })}
        </div>
      ) : options ? (
        <select
          name={name}
          required={required}
          onChange={onChange}
          disabled={disabled}
          {...controlledProps}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options.map((option) => (
            <option value={option.value ?? option} key={option.value ?? option}>
              {option.label ?? option}
            </option>
          ))}
        </select>
      ) : (
        <div className={styles.inputShell}>
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            readOnly={readOnly}
            disabled={disabled}
            onChange={onChange}
            onBlur={onBlur}
            onInput={
              digitsOnly
                ? (event) => {
                    event.currentTarget.value =
                      event.currentTarget.value.replace(/\D/g, "");
                  }
                : undefined
            }
            inputMode={inputMode}
            pattern={pattern}
            min={min}
            step={step}
            maxLength={maxLength}
            {...inputValueProps}
          />
          {verified ? (
            <CheckCircle2
              aria-label="Verified"
              className={styles.verifiedIcon}
              size={20}
            />
          ) : null}
          {endAction ? (
            <button
              className={styles.inputEndAction}
              type="button"
              onClick={endAction.onClick}
            >
              {endAction.label}
            </button>
          ) : null}
        </div>
      )}
    </label>
  );
}

function AdmissionFormSection({ title, children, active = true, stepIndex }) {
  return (
    <fieldset
      className={`${styles.admissionFormSection} ${
        active
          ? styles.admissionFormSectionActive
          : styles.admissionFormSectionHidden
      }`}
      data-step-index={stepIndex}
    >
      {title ? <legend>{title}</legend> : null}
      <div className={styles.admissionFormGrid}>{children}</div>
    </fieldset>
  );
}

function normalizeAmountInput(value) {
  const cleanedValue = value.replace(/[^\d.]/g, "");
  const [wholePart, ...decimalParts] = cleanedValue.split(".");
  const decimalPart = decimalParts.join("").slice(0, 2);

  return decimalParts.length ? `${wholePart}.${decimalPart}` : wholePart;
}

function getTodayDateInputValue() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getSelectedOptionLabel(options, value) {
  return (
    options.find((option) => String(option.value ?? option) === String(value))
      ?.label ?? value
  );
}

function formatDateForAdmissionApi(value) {
  if (!value) {
    return "";
  }

  const [year, month, day] = value.split("-");

  if (!year || !month || !day) {
    return value;
  }

  return `${Number(day)}-${Number(month)}-${year}`;
}

function parseAmountValue(value) {
  const parsedValue = Number.parseFloat(value);

  return Number.isFinite(parsedValue) ? parsedValue : 0;
}

function formatAmountValue(value) {
  return parseAmountValue(value).toFixed(2);
}

function formatIndianCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(parseAmountValue(value));
}

const admissionFieldHelp = {
  orientation:
    "The learning programme or course track available for the selected branch, class, and academic year.",
  applicationScoreId:
    "An optional score or application reference ID, used only when the student already has one.",
  section:
    "The classroom section allotted under the selected class and orientation.",
  studentType:
    "The student category, such as day scholar or another campus-supported student type.",
  quota:
    "The admission category used for eligibility, fee rules, or internal classification.",
  admissionType:
    "Choose Direct Walkin for a regular enquiry, or PRO when the admission is referred by a PRO employee.",
  referredEmployee:
    "The PRO employee payroll ID. A verified ID unlocks mobile matching for OTP validation.",
};

const admissionSteps = [
  {
    title: "Academic Details",
    heading: "Admission Form",
    description: "Select the campus and programme for admission.",
  },
  {
    title: "Student Details",
    heading: "Student Details",
    description: "Enter the applicant profile, dates, and fee details.",
  },
  {
    title: "Parent Details",
    heading: "Parent Details",
    description: "Add parent contact, occupation, quota, and referral details.",
  },
  {
    title: "Address Details",
    heading: "Address Details",
    description: "Complete the student address information.",
  },
  {
    title: "Review & Pay",
    heading: "Review & Pay",
    description: "Confirm payment details and choose the gateway.",
  },
];

const admissionSelectOptions = {
  board: [{ label: "Board 1", value: 1 }],
  gender: [
    { label: "Female", value: 1 },
    { label: "Male", value: 2 },
  ],
  branch: [{ label: "Branch 323", value: 323 }],
  class: [{ label: "Class 18", value: 18 }],
  section: [{ label: "Section 1", value: 1 }],
  academicYear: [{ label: "Academic Year 27", value: 27 }],
  studentType: [{ label: "Student Type 1", value: 1 }],
  orientation: [{ label: "Orientation 3191", value: 3191 }],
  quota: [{ label: "Quota 1", value: 1 }],
  admissionType: [
    { label: "Direct Walkin", value: "direct_walkin" },
    { label: "PRO", value: "pro" },
  ],
  state: [{ label: "State 1", value: 1 }],
  city: [{ label: "City 19", value: 19 }],
  district: [{ label: "District 3", value: 3 }],
  mandal: [{ label: "Mandal 7", value: 7 }],
};

const optionReaders = {
  city: { label: ["cityName", "name"], value: ["cityId", "id"] },
  default: { label: ["name", "label"], value: ["id", "value"] },
};

function readFirst(item, keys) {
  return keys
    .map((key) => item?.[key])
    .find((value) => value !== undefined && value !== null);
}

function normalizeApiOptions(payload, type = "default") {
  const rows = Array.isArray(payload) ? payload : payload?.data;
  const readers = optionReaders[type] || optionReaders.default;

  if (!Array.isArray(rows)) {
    return [];
  }

  return rows
    .map((item) => {
      const label = readFirst(item, readers.label);
      const value = readFirst(item, readers.value);

      if (label === undefined || value === undefined) {
        return null;
      }

      return { label: String(label).trim(), value: String(value) };
    })
    .filter(Boolean);
}

async function fetchSchoolOptions(endpoint, params = {}, type = "default") {
  const searchParams = new URLSearchParams({ endpoint });

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.set(key, value);
    }
  });

  const response = await fetch(`/api/school?${searchParams.toString()}`);
  const payload = await parseSchoolResponse(response, endpoint);

  if (!response.ok) {
    throw new Error(payload?.message || `Failed to load ${endpoint}`);
  }

  return normalizeApiOptions(payload, type);
}

async function fetchSchoolData(endpoint, params = {}) {
  const searchParams = new URLSearchParams({ endpoint });

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.set(key, value);
    }
  });

  const response = await fetch(`/api/school?${searchParams.toString()}`);
  const payload = await parseSchoolResponse(response, endpoint);

  if (!response.ok) {
    throw new Error(payload?.message || `Failed to load ${endpoint}`);
  }

  return payload;
}

async function postSchoolData(endpoint, payload) {
  const searchParams = new URLSearchParams({ endpoint });
  const response = await fetch(`/api/school?${searchParams.toString()}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  const result = await parseSchoolResponse(response, endpoint);

  if (!response.ok) {
    throw new Error(result?.message || `Failed to submit ${endpoint}`);
  }

  return result;
}

async function parseSchoolResponse(response, endpoint) {
  const text = await response.text();

  try {
    return JSON.parse(text);
  } catch {
    throw new Error(
      `The ${endpoint} API returned an invalid response. Please check the API service.`,
    );
  }
}

function AboutPage() {
  const aboutNav = [
    ["WHO WE ARE", "who-we-are"],
    ["VISION & MISSION", "vision-mission"],
    ["MANAGEMENT", "management"],
    ["OUR JOURNEY", "our-journey"],
    ["DIVERSITY", "diversity"],
  ];

  const missionValues = [
    ["Morals", "The ability to discriminate between right and wrong"],
    ["Values", "The unique beliefs and feelings of an individual"],
    ["Ethics", "The principles that define everyday behaviour"],
    ["Problem-solving Techniques", "The skill to resolve difficult issues"],
    ["Positive Attitude", "The highest indicator of a healthy personality"],
  ];

  return (
    <>
      <section className={styles.aboutHero}>
        <div className={styles.aboutAurora} />
        <div className={styles.aboutHeroTimeline} aria-hidden="true">
          <div className={styles.aboutTimelineRail} />
          <div
            className={`${styles.aboutTimelineNode} ${styles.aboutTimelineNodeOne}`}
          >
            <Sparkles size={18} />
            <span>Vision</span>
          </div>
          <div
            className={`${styles.aboutTimelineNode} ${styles.aboutTimelineNodeTwo}`}
          >
            <Brain size={18} />
            <span>Values</span>
          </div>
          <div
            className={`${styles.aboutTimelineNode} ${styles.aboutTimelineNodeThree}`}
          >
            <Trophy size={18} />
            <span>Growth</span>
          </div>
          <div className={styles.aboutTimelinePulse} />
        </div>
        <div className={styles.container}>
          <motion.div
            className={styles.aboutHeroContent}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.h1 className={styles.title} variants={fadeUp}>
              ABOUT <span>US</span>
            </motion.h1>
            <motion.p className={styles.intro} variants={fadeUp}>
              A future-ready academic ecosystem built on vision, discipline,
              leadership, and opportunity.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <nav className={styles.aboutSectionNav} aria-label="About sections">
        <div className={styles.container}>
          {aboutNav.map(([label, id]) => (
            <a href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </div>
      </nav>

      <section
        id="who-we-are"
        className={`${styles.aboutInfoSection} ${styles.whoWeAreSection}`}
      >
        <div className={styles.sectionGlowBlue} />
        <div className={styles.floatingShapeOne} />
        <div className={styles.container}>
          <div className={styles.aboutTwoCol}>
            <div className={styles.aboutImagePanel}>
              <Image
                src={whoWeAreImage}
                alt="Sri Chaitanya teacher"
                fill
                className={styles.aboutImage}
                priority
              />
            </div>
            <div className={styles.aboutTextPanel}>
              <h2>WHO WE ARE</h2>
              <p>
                The world today is a global village and people are its citizens.
                As boundaries of location, people and time cease to exist, it is
                of utmost importance that we move with the times. At Sri
                Chaitanya, we have created a unique blend of world-class
                curricula, contemporary teaching methodologies, and equal focus
                on intellectual, physical and personality development, resulting
                future leaders who are ready to take on the world. Today, we
                stand as the force behind creating countless world-class
                doctors, engineers, IAS officers, chartered accountants, and so
                much more..
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="vision-mission"
        className={`${styles.aboutInfoSection} ${styles.visionMissionSection}`}
      >
        <div className={styles.sectionMesh} />
        <div className={styles.container}>
          <div className={styles.visionMissionGrid}>
            <article className={styles.visionCard}>
              <div className={styles.cardMedia}>
                <Image
                  src={visionImage}
                  alt="Sri Chaitanya vision"
                  fill
                  className={styles.aboutImage}
                />
              </div>
              <div>
                <h2>VISION</h2>
                <p>
                  We endeavour to be the right mentor for IIT-JEE aspirants,
                  while also helping them develop a global perspective, with a
                  keen interest in community life. We prepare students for
                  competitive exams by providing in-depth knowledge of various
                  subjects at an intermediate level.
                </p>
              </div>
            </article>
            <article className={styles.missionCard}>
              <div className={styles.cardMedia}>
                <Image
                  src={missionImage}
                  alt="Sri Chaitanya mission"
                  fill
                  className={styles.aboutImage}
                />
              </div>
              <div>
                <h2>MISSION</h2>
                <p>
                  Our goal is to focus on the holistic development of each
                  child, and to give them a competitive edge with the help of an
                  extensive curriculum and dynamic teaching methodologies.
                </p>
                <div className={styles.missionList}>
                  {missionValues.map(([label, text]) => (
                    <p key={label}>
                      <strong>{label} :</strong> {text}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="management"
        className={`${styles.aboutInfoSection} ${styles.managementSection}`}
      >
        <div className={styles.sectionGlowPurple} />
        <div className={styles.floatingShapeTwo} />
        <div className={styles.container}>
          <div className={`${styles.aboutTwoCol} ${styles.reverseOnMobile}`}>
            <div className={styles.aboutTextPanel}>
              <h2>MANAGEMENT</h2>
              <p>
                Our management’s futuristic vision, determination and leadership
                has enabled them to set new benchmarks, ultimately resulting in
                a world-class education system. Taking our founders’ vision
                further, our team of young, dynamic, determined leaders continue
                to groom our community of global learners, through methodologies
                that are an extraordinary blend of conventional and contemporary
              </p>
            </div>
            <div className={styles.aboutImagePanel}>
              <Image
                src={managementImage}
                alt="Sri Chaitanya management"
                fill
                className={styles.aboutImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="our-journey"
        className={`${styles.aboutInfoSection} ${styles.journeySection}`}
      >
        <div className={styles.timelineGlow} />
        <div className={styles.container}>
          <div className={styles.aboutTwoCol}>
            <div className={styles.aboutImagePanel}>
              <Image
                src={journeyImage}
                alt="Sri Chaitanya journey"
                fill
                className={styles.aboutImage}
              />
            </div>
            <div className={styles.aboutTextPanel}>
              <h2>OUR JOURNEY</h2>
              <p>
                Sri Chaitanya first surfaced on the academic horizon in the year
                1986 and within a span of 38 years went on to become Asia&apos;s
                largest educational group. The past two and a half decades
                witnessed Sri Chaitanya introducing novel academic programmes
                that have helped students enter the nation&apos;s premier
                engineering and medical colleges. The manner in which the Group
                has transformed the outlook towards education has been nothing
                short of exemplary.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="diversity"
        className={`${styles.aboutInfoSection} ${styles.diversitySection}`}
      >
        <div className={styles.diversityPattern} />
        <div className={styles.container}>
          <div className={styles.diversityGrid}>
            <div className={styles.aboutTextPanel}>
              <h2>DIVERSITY</h2>
              <p>
                At Sri Chaitanya, we understand the importance of equal
                opportunity and it reflects in the constant rise in the
                percentage of female employees.
              </p>
              <div className={styles.ratioText}>
                <strong>Female - 57%</strong>
                <span>|</span>
                <strong>Male - 43%</strong>
              </div>
            </div>
            <div
              className={styles.ratioGraphic}
              aria-label="Employee ratio Female 57 percent, Male 43 percent"
            >
              <div className={styles.donutChart}>
                <div className={styles.donutCenter}>
                  <strong>100%</strong>
                  <span>Employees</span>
                </div>
              </div>
              <div className={styles.ratioLegend}>
                <div>
                  <span className={styles.femaleSwatch} />
                  <strong>Female</strong>
                  <b>57%</b>
                </div>
                <div>
                  <span className={styles.maleSwatch} />
                  <strong>Male</strong>
                  <b>43%</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AcademicsPage() {
  const primaryObjectives = [
    "To make learning fun by introducing elements beyond the four walls of the classroom",
    "To develop knowledge and skills of a student in stages",
    "To address both the physical and cognitive needs of the child",
    "To give equal attention to the intelligence and emotional quotients of the child",
    "To induce the right kind of aptitude for global success",
    "To create a focused perception through unique teaching methodologies",
  ];

  return (
    <>
      <section className={styles.academicsHero}>
        <div className={styles.aboutAurora} />
        <div className={styles.academicsHeroStack} aria-hidden="true">
          <div className={styles.academicsStackHalo} />
          <div
            className={`${styles.academicsStackCard} ${styles.academicsStackCardOne}`}
          >
            <BookOpen size={24} />
            <span>Primary</span>
          </div>
          <div
            className={`${styles.academicsStackCard} ${styles.academicsStackCardTwo}`}
          >
            <Brain size={24} />
            <span>Concepts</span>
          </div>
          <div
            className={`${styles.academicsStackCard} ${styles.academicsStackCardThree}`}
          >
            <Target size={24} />
            <span>IIT + NEET</span>
          </div>
          <div className={styles.academicsProgressRings}>
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={styles.container}>
          <motion.div
            className={styles.aboutHeroContent}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.h1 className={styles.title} variants={fadeUp}>
              LEARNING FOR <span>EVERY STAGE</span>
            </motion.h1>
            <motion.p className={styles.intro} variants={fadeUp}>
              Strong fundamentals in primary education and a career-oriented
              high school pathway.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section
        className={`${styles.academicsEducationSection} ${styles.primaryEducationSection}`}
      >
        <div className={styles.academicsBgGrid} />
        <div className={styles.academicFloatOrbOne} />
        <div className={styles.academicFloatOrbTwo} />
        <div className={styles.container}>
          <div className={styles.educationShowcase}>
            <div className={styles.educationCopy}>
              <span className={styles.sectionLabel}>PRIMARY EDUCATION</span>
              <h2>Strong Foundations For Young Learners</h2>
              <p>
                Our primary curriculum forms the first stage of formal
                schooling, where children are introduced to literacy, numeracy,
                environmental studies, communication, and social confidence.
              </p>
            </div>
            <div className={styles.educationImagePanel}>
              <Image
                src={missionImage}
                alt="Primary education at Sri Chaitanya"
                fill
                className={styles.aboutImage}
              />
              <div className={styles.educationImageBadge}>
                <strong>Literacy</strong>
                <span>Numeracy + Environmental Studies</span>
              </div>
            </div>
          </div>

          <div className={styles.academicInfoStack}>
            <article className={styles.academicInfoRow}>
              <div
                className={`${styles.academicIconBubble} ${styles.philosophyIcon}`}
              >
                <Brain size={34} />
              </div>
              <div className={styles.academicInfoContent}>
                <h3>PHILOSOPHY</h3>
                <p>
                  A refined personality is a result of proper grooming. At Sri
                  Chaitanya, we look to inculcate the best moral values and
                  social etiquette, resulting in children with impeccable
                  character.
                </p>
              </div>
            </article>

            <article className={styles.academicInfoRow}>
              <div
                className={`${styles.academicIconBubble} ${styles.curriculumIcon}`}
              >
                <BookOpen size={34} />
              </div>
              <div className={styles.academicInfoContent}>
                <h3>CURRICULUM</h3>
                <p>
                  A skills and activities based approach forms the backbone of
                  our teaching methodology. Emphasis is put on public speaking,
                  interpersonal and communication skills, and team work. Our
                  dedicated faculty members follow a child-centric approach,
                  providing kids ample opportunities to learn and also apply
                  what they have learnt. Heavy emphasis is given to holistic
                  growth, thus personality building forms an integral part of
                  their education design. With this, a strong foundation is laid
                  for students to go on and become global achievers in whichever
                  field they choose.
                </p>
              </div>
            </article>

            <article className={styles.academicInfoRow}>
              <div
                className={`${styles.academicIconBubble} ${styles.objectivesIcon}`}
              >
                <Target size={34} />
              </div>
              <div className={styles.academicInfoContent}>
                <h3>OBJECTIVES</h3>
                <ul>
                  {primaryObjectives.map((objective) => (
                    <li key={objective}>{objective}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className={`${styles.academicsEducationSection} ${styles.highSchoolEducationSection}`}
      >
        <div className={styles.sectionMesh} />
        <div className={styles.academicSparkField} />
        <div className={styles.academicFloatOrbThree} />
        <div className={styles.container}>
          <div className={styles.educationShowcase}>
            <div className={styles.educationCopy}>
              <span className={styles.sectionLabel}>HIGH SCHOOL EDUCATION</span>
              <h2>Career-Oriented Academic Preparation</h2>
              <p>
                Our high school curriculum helps students develop a professional
                outlook through focused academics, competitive exam orientation,
                and structured preparation for future pathways.
              </p>
            </div>
            <div className={styles.educationImagePanel}>
              <Image
                src={visionImage}
                alt="High school science learning"
                fill
                className={styles.aboutImage}
              />
              <div className={styles.educationImageBadge}>
                <strong>IIT + NEET</strong>
                <span>Foundation-focused learning</span>
              </div>
            </div>
          </div>

          <div className={styles.academicInfoStack}>
            <article className={styles.academicInfoRow}>
              <div
                className={`${styles.academicIconBubble} ${styles.philosophyIcon}`}
              >
                <Compass size={34} />
              </div>
              <div className={styles.academicInfoContent}>
                <h3>PHILOSOPHY</h3>
                <p>
                  Every child has innate capabilities that help him/her shine.
                  Our expert faculty provides the right guidance to bring out
                  these latent qualities, transforming the student into a
                  successful individual.Sri Chaitanya Syllabus is a unique one
                  with an orientation of enabling the students take up to the
                  task of getting selected for the Prestigious IIT&apos;s,
                  NIT&apos;S, AIIMS, JIPMER, AIPMT, DEEMED UNIVERSITIES and
                  other Medical and Engineering Institutes and other streams
                  with ease and comfort.
                </p>
              </div>
            </article>

            <article className={styles.academicInfoRow}>
              <div
                className={`${styles.academicIconBubble} ${styles.curriculumIcon}`}
              >
                <BookOpen size={34} />
              </div>
              <div className={styles.academicInfoContent}>
                <h3>CURRICULUM</h3>
                <p>
                  Sri Chaitanya devised a strong Curriculum, integrating the
                  components of Maths, Physics, Chemistry and Biology which are
                  needed for the various Entrance Exams under the name of TECHNO
                  CURRICULUM.
                </p>
                <p>
                  The Content Matter is divided into optimum doses so that the
                  students do not feel overburdened with the syllabus. At the
                  same time care is taken to see that the Components of the
                  Techno Curriculum are strictly according to their Normal
                  Course of Study related to the Class in which they are
                  studying at present.
                </p>
                <p>
                  This makes them study their present syllabus in depth with the
                  help of the Micro Level Teaching, providing them the chance of
                  improving their performance in the current Class in which they
                  are studying.
                </p>

                <div className={styles.programmeBlock}>
                  <h4>Techno Programme</h4>
                  <p>
                    <strong>Techno Programme :</strong> Techno Curriculum is an
                    integrated Syllabus which is a combination of State, CBSE
                    &amp; ICSE Boards.
                  </p>
                  <p>
                    The Main Objective is to give the students a Good Foundation
                    for entering the Prestigious IIT&apos;s, NIT&apos;S, AIIMS,
                    JIPMER, AIPMT, DEEMED UNIVERSITIES and other Medical and
                    Engineering Institutes.
                  </p>
                  <p>
                    In Techno, around 40% of IIT and NEET Foundation syllabus
                    will be covered.
                  </p>
                </div>

                <div className={styles.programmeBlock}>
                  <h4>C-Batch Programme</h4>
                  <p>
                    <strong>C-Batch Programme :</strong> The main objective of C
                    Batch programme is to ensure that these students are
                    competent enough to secure Below 500/1000 RANKS in IIT level
                    entrance tests.
                  </p>
                  <p>
                    In C Batch, 50-60% of IIT-JEE Entrance Exam syllabus will be
                    covered.
                  </p>
                </div>

                <div className={styles.programmeBlock}>
                  <h4>ICON Programme</h4>
                  <p>
                    <strong>ICON Programme:</strong> The main objective of ICON
                    programme is to ensure that these students are competent
                    enough to secure below 200 to 500 RANKS in IIT-JEE.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

function FacilitiesPage({ page }) {
  const facilities = [
    {
      id: "transportation",
      label: "TRANSPORTATION",
      title: "Safe, Comfortable Daily Travel",
      icon: Bus,
      image: "/images/school-img.png",
      badge: "40 Seats / Bus",
      content: [
        "We pay close attention to the travel safety of our students. With a fleet of buses with 40 seats each, we ensure every student gets comfortable seating during their journey. Our buses meet all the required government regulation standards and have well-trained drivers who take care of pick-ups and drops on the assigned routes. We also have bus attenders who look after the students and take care of seating arrangements.",
      ],
    },
    {
      id: "library",
      label: "LIBRARY",
      title: "Reading Spaces For Curious Minds",
      icon: BookOpen,
      image: whoWeAreImage,
      badge: "Books + Journals",
      content: [
        "Reading is to the mind, what exercise is to the body. Our libraries house an expansive collection of books that suit the reading levels of different age groups.",
        "The in-house library also subscribes to leading national dailies and journals. We also have an audio and video collection that can be used to augment classroom learning.",
      ],
    },
    {
      id: "sports",
      label: "SPORTS",
      title: "Balanced Growth Through Play",
      icon: Trophy,
      image: journeyImage,
      badge: "Annual Meets",
      content: [
        "All work and no play makes Jack a dull boy. At all our institutions, we encourage a healthy balance of work and play. Students are encouraged to experience the challenge and reward of sports through diverse programmes at the school level.",
        "Our sports department is managed by qualified and competent instructors who design a sports curriculum that improves mental strength, concentration, physical conditioning and coordination, strategic and tactical planning and of course, teamwork.",
        "We conduct an annual inter-branch sports meet, along with a variety of other activities like athletics, team games, and indoor games.",
      ],
    },
    {
      id: "labs",
      label: "LABS",
      title: "Learning By Doing",
      icon: FlaskConical,
      image: visionImage,
      badge: "Activity-Based",
      content: [
        "Our well-equipped labs are a testament to our belief in learning by doing. From practical experiments to other activities, these labs promote an activity-based approach to make learning more stimulating.",
      ],
    },
    {
      id: "hostel",
      label: "HOSTEL",
      title: "Disciplined Living And Learning",
      icon: Home,
      image: "/home2-hero.png",
      badge: "Comfort + Care",
      content: [
        "Our hostels are equipped with all the amenities necessary to offer students a comfortable and disciplined living and learning environment. From top-notch accommodation to experienced doctors, we prioritise every aspect that aids the kids in their holistic development journey.",
      ],
    },
    {
      id: "digital-labs",
      label: "DIGITAL LABS",
      title: "Technology-Driven Learning",
      icon: Sparkles,
      image: missionImage,
      badge: "Tablet Learning",
      content: [
        "To usher in a new era of world-class education, We adopted a technology-driven approach to studies. The schools have replaced textbooks with trendy tabs for students from class five to seven. This learning technique not only makes children adept in the use of technology but also reduce the load of study materials to be carried every day.",
      ],
    },
  ];

  const [activeFacility, setActiveFacility] = useState(facilities[0].id);
  const selectedFacility =
    facilities.find((facility) => facility.id === activeFacility) ||
    facilities[0];
  const SelectedIcon = selectedFacility.icon;

  return (
    <>
      <section className={styles.facilitiesHeroBanner}>
        <div className={styles.facilitiesHeroGlow} />
        <div className={styles.facilitiesHeroPattern} />
        <div className={styles.facilitiesHeroBlueprint} />
        <div className={styles.facilitiesOrbitOne} />
        <div className={styles.facilitiesOrbitTwo} />
        <div className={styles.facilitiesHexCluster} aria-hidden="true">
          <div className={styles.facilitiesHexCore}>
            <Sparkles size={28} />
            <span>Facilities</span>
          </div>
          {facilities.slice(0, 6).map((facility, index) => {
            const Icon = facility.icon;
            return (
              <span
                className={`${styles.facilitiesHexTile} ${styles[`facilitiesHexTile${index + 1}`]}`}
                style={{ "--hex-index": index }}
                key={facility.id}
              >
                <span className={styles.facilitiesHexTileFace}>
                  <Icon size={21} />
                </span>
              </span>
            );
          })}
          {/* <div className={styles.facilitiesHexLabel}>Comfort + Growth</div> */}
        </div>
        <div className={styles.container}>
          <div className={styles.facilitiesSimpleHeroContent}>
            <motion.div
              className={styles.facilitiesHeroCopy}
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.12 }}
            >
              <motion.h1 variants={fadeUp}>
                SPACES BUILT FOR <span>COMFORT</span> AND GROWTH
              </motion.h1>
              <motion.p variants={fadeUp}>
                Practical labs, sports spaces, library corners, transport,
                hostels, and digital classrooms designed to support productive
                student life.
              </motion.p>
              {/* <motion.div className={styles.facilitiesHeroChips} variants={fadeUp}>
                {facilities.slice(0, 4).map((facility) => {
                  const Icon = facility.icon;
                  const isActive = facility.id === activeFacility;
                  return (
                    <button
                      type="button"
                      onClick={() => setActiveFacility(facility.id)}
                      className={isActive ? styles.activeFacilitiesHeroChip : ""}
                      key={facility.id}
                    >
                      <Icon size={16} />
                      {facility.label}
                    </button>
                  );
                })}
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>
      <section className={styles.facilitiesTabsSection}>
        <div className={styles.facilitiesBgGrid} />
        <div className={styles.facilitiesSectionGlowOne} />
        <div className={styles.facilitiesSectionGlowTwo} />
        <div className={styles.facilitiesWaveRibbon} />
        <div className={styles.academicFloatOrbOne} />
        <div className={styles.academicFloatOrbTwo} />
        <div className={styles.container}>
          <div className={styles.facilityCleanLayout}>
            <div className={styles.facilityCleanIntro}>
              <span className={styles.sectionLabel}>Facilities</span>
              <h2>Facilities That Support Everyday Excellence</h2>
              <p>
                WE CONTINUALLY STRIVE TO PROVIDE THE BEST FACILITIES TO OUR
                STUDENTS. WITH OUR ROBUST OFFERINGS, WE COVER ALL ASPECTS THAT
                CAN HELP MAKE STUDENT&apos;S LIFE COMFORTABLE AND PRODUCTIVE.
              </p>
            </div>

            <div
              className={styles.facilityCleanTabs}
              role="tablist"
              aria-label="Facilities"
            >
              {facilities.map((facility) => {
                const Icon = facility.icon;
                const isActive = facility.id === activeFacility;
                return (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`${styles.facilityCleanTab} ${isActive ? styles.activeFacilityCleanTab : ""}`}
                    onClick={() => setActiveFacility(facility.id)}
                    key={facility.id}
                  >
                    <Icon size={20} />
                    <span>{facility.label}</span>
                  </button>
                );
              })}
            </div>

            <article
              className={styles.facilityCleanPanel}
              key={selectedFacility.id}
            >
              <div className={styles.facilityPanelAccent} />
              <div className={styles.facilityCleanImage}>
                <Image
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className={styles.aboutImage}
                  unoptimized={typeof selectedFacility.image === "string"}
                />
                {/* <div className={styles.facilityCleanBadge}>
                  <SelectedIcon size={18} />
                  <span>{selectedFacility.badge}</span>
                </div> */}
                {/* <div className={styles.facilityImageSparkOne} /> */}
                {/* <div className={styles.facilityImageSparkTwo} /> */}
              </div>

              <div className={styles.facilityCleanContent}>
                <div className={styles.facilityCleanIcon}>
                  <SelectedIcon size={30} />
                </div>
                <span>{selectedFacility.label}</span>
                <h2>{selectedFacility.title}</h2>
                {selectedFacility.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

function AdmissionsPage({ page }) {
  const formRef = useRef(null);
  const stepperRef = useRef(null);
  const stepButtonRefs = useRef([]);
  const [formValues, setFormValues] = useState({
    academic_year: "",
    board: "",
    state_id: "",
    city_id: "",
    branch_id: "",
    class_id: "",
    orientation: "",
    section: "",
    student_type: "",
    amount: "",
    admission_amount: "",
    admission_date: "",
    quota_id: "",
    adms_type_id: "",
    father_occupation: "",
    district_id: "",
    mandal_id: "",
  });
  const [dropdownOptions, setDropdownOptions] = useState({
    academicYears: [],
    states: [],
    cities: [],
    campuses: [],
    boards: [],
    classes: [],
    orientations: [],
    sections: [],
    studentTypes: [],
    quotas: [],
    admissionTypes: admissionSelectOptions.admissionType,
    occupations: [],
    districts: [],
    mandals: [],
  });
  const [loadingFields, setLoadingFields] = useState({});
  const [apiError, setApiError] = useState("");
  const [referredEmployeeId, setReferredEmployeeId] = useState("");
  const [referredMobile, setReferredMobile] = useState("");
  const [proMobileNumbers, setProMobileNumbers] = useState([]);
  const [proValidationMessage, setProValidationMessage] = useState("");
  const [admissionPayload, setAdmissionPayload] = useState(null);
  const [paymentGateway, setPaymentGateway] = useState("Razorpay");
  const [submissionStatus, setSubmissionStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmittingAdmission, setIsSubmittingAdmission] = useState(false);
  const [activeAdmissionStep, setActiveAdmissionStep] = useState(0);
  const referredMobileDigits = referredMobile.replace(/\D/g, "");
  const selectedAdmissionType = dropdownOptions.admissionTypes.find(
    (option) => option.value === formValues.adms_type_id,
  );
  const showProFields =
    formValues.adms_type_id === "pro" ||
    selectedAdmissionType?.label.toLowerCase().includes("pro");
  const mobileMatchesProEmployee =
    referredMobileDigits.length >= 10 &&
    proMobileNumbers.some((mobileNumber) => {
      const normalizedMobile = mobileNumber.replace(/\D/g, "");

      return normalizedMobile === referredMobileDigits;
    });
  const showOtpField = showProFields && mobileMatchesProEmployee;
  const selectedAcademicYearLabel = getSelectedOptionLabel(
    dropdownOptions.academicYears,
    formValues.academic_year,
  );
  const selectedQuotaLabel = getSelectedOptionLabel(
    dropdownOptions.quotas,
    formValues.quota_id,
  );
  const selectedAdmissionTypeLabel = getSelectedOptionLabel(
    dropdownOptions.admissionTypes,
    formValues.adms_type_id,
  );
  const applicationAmount = parseAmountValue(formValues.amount);
  const admissionConfirmationAmount = parseAmountValue(
    formValues.admission_amount,
  );
  const paymentAmountValue = applicationAmount + admissionConfirmationAmount;
  const paymentAmount = formatAmountValue(paymentAmountValue);
  const paymentAmountDisplay = formatIndianCurrency(paymentAmountValue);

  useEffect(() => {
    const stepper = stepperRef.current;
    const activeStep = stepButtonRefs.current[activeAdmissionStep];

    if (!stepper || !activeStep || stepper.scrollWidth <= stepper.clientWidth) {
      return;
    }

    const nextLeft =
      activeStep.offsetLeft - stepper.clientWidth / 2 + activeStep.clientWidth / 2;

    stepper.scrollTo({
      left: Math.max(nextLeft, 0),
      behavior: "smooth",
    });
  }, [activeAdmissionStep]);

  const updateOptions = (key, options) => {
    setDropdownOptions((current) => ({ ...current, [key]: options }));
  };

  const clearOptions = (keys) => {
    setDropdownOptions((current) => {
      const nextOptions = { ...current };

      keys.forEach((key) => {
        nextOptions[key] = [];
      });

      return nextOptions;
    });
  };

  const updateField = (name, value) => {
    setFormValues((current) => ({ ...current, [name]: value }));
  };

  const updateFields = (values) => {
    setFormValues((current) => ({ ...current, ...values }));
  };

  const loadOptions = async (key, endpoint, params = {}, type = "default") => {
    try {
      updateOptions(key, await fetchSchoolOptions(endpoint, params, type));
    } catch (error) {
      updateOptions(key, []);
      setApiError(error.message);
    }
  };

  const handleAcademicYearChange = (value) => {
    updateFields({
      academic_year: value,
      branch_id: "",
      board: "",
      class_id: "",
      orientation: "",
      section: "",
      student_type: "",
      amount: "",
      admission_amount: "",
    });
    clearOptions([
      "campuses",
      "boards",
      "classes",
      "orientations",
      "sections",
      "studentTypes",
    ]);
  };

  const handleStateChange = (value) => {
    updateFields({
      state_id: value,
      city_id: "",
      branch_id: "",
      board: "",
      class_id: "",
      orientation: "",
      section: "",
      student_type: "",
      amount: "",
      admission_amount: "",
      district_id: "",
      mandal_id: "",
    });
    clearOptions([
      "cities",
      "campuses",
      "boards",
      "classes",
      "orientations",
      "sections",
      "studentTypes",
      "districts",
      "mandals",
    ]);
  };

  const handleCityChange = (value) => {
    updateFields({
      city_id: value,
      branch_id: "",
      board: "",
      class_id: "",
      orientation: "",
      section: "",
      student_type: "",
      amount: "",
      admission_amount: "",
    });
    clearOptions([
      "campuses",
      "boards",
      "classes",
      "orientations",
      "sections",
      "studentTypes",
    ]);
  };

  const handleBranchChange = (value) => {
    updateFields({
      branch_id: value,
      board: "",
      class_id: "",
      orientation: "",
      section: "",
      student_type: "",
      amount: "",
      admission_amount: "",
    });
    clearOptions([
      "boards",
      "classes",
      "orientations",
      "sections",
      "studentTypes",
    ]);
  };

  const handleBoardChange = (value) => {
    updateFields({
      board: value,
      class_id: "",
      orientation: "",
      section: "",
      student_type: "",
      amount: "",
      admission_amount: "",
    });
    clearOptions(["classes", "orientations", "sections", "studentTypes"]);
  };

  const handleClassChange = (value) => {
    updateFields({
      class_id: value,
      orientation: "",
      section: "",
      student_type: "",
      amount: "",
      admission_amount: "",
    });
    clearOptions(["orientations", "sections", "studentTypes"]);
  };

  const handleOrientationChange = (value) => {
    updateFields({
      orientation: value,
      section: "",
      student_type: "",
      amount: "",
      admission_amount: "",
    });
    clearOptions(["sections", "studentTypes"]);
  };

  const handleStudentTypeChange = (value) => {
    updateFields({
      student_type: value,
      amount: "",
      admission_amount: "",
    });
  };

  const handleDistrictChange = (value) => {
    updateFields({
      district_id: value,
      mandal_id: "",
    });
    clearOptions(["mandals"]);
  };

  const validateProEmployee = async (payrollIdValue = referredEmployeeId) => {
    const payrollId = payrollIdValue.trim();

    setProMobileNumbers([]);
    setProValidationMessage("");

    if (!payrollId) {
      return;
    }

    try {
      const response = await fetchSchoolData("proEmployee", { payrollId });
      const proData = response?.data || {};
      const mobileNumbers = [proData.primaryMobileNo, proData.secondaryMobileNo]
        .filter(Boolean)
        .map((number) => String(number));

      if (response?.success && mobileNumbers.length) {
        setProMobileNumbers(mobileNumbers);
        setProValidationMessage(
          "PRO employee verified. Enter the registered mobile number.",
        );
      } else {
        setProValidationMessage(
          response?.message || "Could not verify PRO employee.",
        );
      }
    } catch (error) {
      setProValidationMessage(error.message);
    }
  };

  useEffect(() => {
    if (!showProFields) {
      return;
    }

    const payrollId = referredEmployeeId.trim();

    const timeoutId = setTimeout(() => {
      setProMobileNumbers([]);
      setProValidationMessage("");

      if (payrollId) {
        validateProEmployee(payrollId);
      }
    }, payrollId ? 600 : 0);

    return () => clearTimeout(timeoutId);
  }, [referredEmployeeId, showProFields]);

  useEffect(() => {
    let active = true;

    async function loadInitialOptions() {
      setLoadingFields((current) => ({
        ...current,
        academicYears: true,
        states: true,
        quotas: true,
        admissionTypes: true,
        occupations: true,
      }));

      try {
        const [academicYears, states, quotas, admissionTypes, occupations] =
          await Promise.all([
            fetchSchoolOptions("academicYears"),
            fetchSchoolOptions("states"),
            fetchSchoolOptions("quotas"),
            fetchSchoolOptions("admissionTypes"),
            fetchSchoolOptions("occupations"),
          ]);

        if (!active) {
          return;
        }

        setDropdownOptions((current) => ({
          ...current,
          academicYears,
          states,
          quotas,
          admissionTypes: admissionTypes.length
            ? admissionTypes
            : current.admissionTypes,
          occupations,
        }));
      } catch (error) {
        if (active) {
          setApiError(error.message);
        }
      } finally {
        if (active) {
          setLoadingFields((current) => ({
            ...current,
            academicYears: false,
            states: false,
            quotas: false,
            admissionTypes: false,
            occupations: false,
          }));
        }
      }
    }

    loadInitialOptions();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (formValues.state_id) {
      Promise.resolve().then(() => {
        loadOptions(
          "cities",
          "cities",
          { stateId: formValues.state_id },
          "city",
        );
        loadOptions("districts", "districts", { stateId: formValues.state_id });
      });
    }
  }, [formValues.state_id]);

  useEffect(() => {
    if (formValues.city_id && formValues.academic_year) {
      Promise.resolve().then(() => {
        loadOptions("campuses", "campuses", {
          cityId: formValues.city_id,
          academicYearId: formValues.academic_year,
        });
      });
    }
  }, [formValues.city_id, formValues.academic_year]);

  useEffect(() => {
    if (formValues.branch_id && formValues.academic_year) {
      Promise.resolve().then(() => {
        loadOptions("boards", "boards", {
          campusId: formValues.branch_id,
          academicYearId: formValues.academic_year,
        });
      });
    }
  }, [formValues.branch_id, formValues.academic_year]);

  useEffect(() => {
    if (formValues.branch_id && formValues.board && formValues.academic_year) {
      Promise.resolve().then(() => {
        loadOptions("classes", "classes", {
          campusId: formValues.branch_id,
          boardId: formValues.board,
          academicYearId: formValues.academic_year,
        });
      });
    }
  }, [formValues.board]);

  useEffect(() => {
    if (
      formValues.branch_id &&
      formValues.academic_year &&
      formValues.class_id
    ) {
      Promise.resolve().then(() => {
        loadOptions("orientations", "orientations", {
          campusId: formValues.branch_id,
          academicYearId: formValues.academic_year,
          classId: formValues.class_id,
        });
      });
    }
  }, [formValues.class_id]);

  useEffect(() => {
    if (formValues.orientation) {
      Promise.resolve().then(() => {
        if (formValues.class_id) {
          loadOptions("sections", "sections", {
            classId: formValues.class_id,
            orientationId: formValues.orientation,
          });
        }

        if (formValues.branch_id && formValues.academic_year) {
          loadOptions("studentTypes", "studentTypes", {
            campusId: formValues.branch_id,
            orientationId: formValues.orientation,
            academicYearId: formValues.academic_year,
          });
        }
      });
    }
  }, [formValues.orientation]);

  useEffect(() => {
    if (formValues.district_id) {
      Promise.resolve().then(() => {
        loadOptions("mandals", "mandals", {
          districtId: formValues.district_id,
        });
      });
    }
  }, [formValues.district_id]);

  useEffect(() => {
    if (
      formValues.academic_year &&
      formValues.branch_id &&
      formValues.class_id &&
      formValues.orientation &&
      formValues.student_type
    ) {
      fetchSchoolData("orientationFees", {
        academicYearId: formValues.academic_year,
        branchId: formValues.branch_id,
        classId: formValues.class_id,
        orientationId: formValues.orientation,
        studentType: formValues.student_type,
      })
        .then((feeData) => {
          updateFields({
            amount: feeData?.appAmount ?? "",
            admission_amount: feeData?.amount ?? "",
          });
        })
        .catch((error) => setApiError(error.message));
    }
  }, [formValues.student_type]);

  const validateAdmissionStep = (stepIndex = activeAdmissionStep) => {
    const currentSection = formRef.current?.querySelector(
      `[data-step-index="${stepIndex}"]`,
    );

    if (!currentSection) {
      return true;
    }

    const fields = Array.from(
      currentSection.querySelectorAll("input, select, textarea"),
    ).filter((field) => !field.disabled && field.type !== "hidden");

    const invalidField = fields.find((field) => !field.checkValidity());

    if (invalidField) {
      invalidField.reportValidity();
      return false;
    }

    return true;
  };

  const buildAdmissionPayload = () => {
    const formData = new FormData(formRef.current);
    const nextAdmissionPayload = Object.fromEntries(formData.entries());

    return {
      ...nextAdmissionPayload,
      ...formValues,
      dob: formatDateForAdmissionApi(nextAdmissionPayload.dob),
      admission_date: formatDateForAdmissionApi(formValues.admission_date),
      quota: selectedQuotaLabel,
      admission_type: selectedAdmissionTypeLabel,
      referred_mobile: referredMobile,
      referred_by: referredEmployeeId || nextAdmissionPayload.referred_by || "",
      fee_type: "Admission_Fee",
      payment_amount: paymentAmount,
      incentive_amount: nextAdmissionPayload.incentive_amount || 0,
      longitude: nextAdmissionPayload.longitude || 0,
      latitude: nextAdmissionPayload.latitude || 0,
      added_ip: nextAdmissionPayload.added_ip || "0.0.0.0",
      payment_status: nextAdmissionPayload.payment_status || "PENDING",
      online_transaction_no: nextAdmissionPayload.online_transaction_no || "",
      online_transaction_type:
        nextAdmissionPayload.online_transaction_type || "ONLINE",
      order_id: nextAdmissionPayload.order_id || "",
    };
  };

  const goToNextAdmissionStep = () => {
    if (!validateAdmissionStep()) {
      return;
    }

    if (activeAdmissionStep === admissionSteps.length - 2) {
      setAdmissionPayload(buildAdmissionPayload());
    }

    setSubmissionStatus({ type: "", message: "" });
    setActiveAdmissionStep((current) =>
      Math.min(current + 1, admissionSteps.length - 1),
    );
  };

  const goToPreviousAdmissionStep = () => {
    setSubmissionStatus({ type: "", message: "" });
    setActiveAdmissionStep((current) => Math.max(current - 1, 0));
  };

  const handleAdmissionFormSubmit = (event) => {
    event.preventDefault();
  };

  const handlePaymentSubmit = async (event) => {
    event?.preventDefault();

    const payload = admissionPayload || buildAdmissionPayload();

    if (!payload) {
      setSubmissionStatus({
        type: "error",
        message: "Please complete the admission form before selecting payment.",
      });
      return;
    }

    setIsSubmittingAdmission(true);
    setSubmissionStatus({ type: "", message: "" });

    try {
      const result = await postSchoolData("saveStudent", {
        ...payload,
        payment_gateway_name: paymentGateway,
        payment_status: payload.payment_status || "PENDING",
        online_transaction_type: payload.online_transaction_type || "ONLINE",
      });

      setSubmissionStatus({
        type: "success",
        message: result?.message || "Admission details submitted successfully.",
      });
    } catch (error) {
      setSubmissionStatus({
        type: "error",
        message: error.message,
      });
    } finally {
      setIsSubmittingAdmission(false);
    }
  };

  return (
    <>
      <Hero page={page} variant="Admission" />
      <section className={styles.admissionFlow}>
        <div className={styles.container}>
          <div className={styles.admissionFormOnly}>
            <div className={styles.enquiryPanel}>
              <form
                ref={formRef}
                className={styles.admissionForm}
                onSubmit={handleAdmissionFormSubmit}
              >
                <div
                  className={styles.stepper}
                  ref={stepperRef}
                  aria-label="Admission progress"
                >
                  {admissionSteps.map((step, index) => (
                    <button
                      ref={(element) => {
                        stepButtonRefs.current[index] = element;
                      }}
                      className={`${styles.stepperItem} ${
                        activeAdmissionStep === index
                          ? styles.stepperItemActive
                          : ""
                      } ${activeAdmissionStep > index ? styles.stepperItemComplete : ""}`}
                      type="button"
                      key={step.title}
                      onClick={() => {
                        if (index <= activeAdmissionStep) {
                          setActiveAdmissionStep(index);
                          return;
                        }

                        if (
                          index !== activeAdmissionStep + 1 ||
                          !validateAdmissionStep()
                        ) {
                          return;
                        }

                        if (index === admissionSteps.length - 1) {
                          setAdmissionPayload(buildAdmissionPayload());
                        }

                        setActiveAdmissionStep(index);
                        setSubmissionStatus({ type: "", message: "" });
                      }}
                    >
                      <span>{index + 1}</span>
                      <b>{step.title}</b>
                    </button>
                  ))}
                </div>

                <div className={styles.stepCardHeader}>
                  <div className={styles.stepCardIcon}>
                    <Image
                      src="/images/logo.webp"
                      alt="Sri Chaitanya School"
                      width={38}
                      height={38}
                    />
                  </div>
                  <div>
                    <h2>{admissionSteps[activeAdmissionStep].heading}</h2>
                    <p>{admissionSteps[activeAdmissionStep].description}</p>
                    {apiError ? (
                      <p className={styles.apiNotice}>{apiError}</p>
                    ) : null}
                  </div>
                  <span>
                    Step {activeAdmissionStep + 1} of {admissionSteps.length}
                  </span>
                </div>
                <input type="hidden" name="incentive_amount" value="0" />
                <input type="hidden" name="longitude" value="0" />
                <input type="hidden" name="latitude" value="0" />
                <input type="hidden" name="added_ip" value="0.0.0.0" />
                <input
                  type="hidden"
                  name="referred_by"
                  value={referredEmployeeId}
                />
                <input type="hidden" name="payment_status" value="PENDING" />
                <input type="hidden" name="online_transaction_no" value="" />
                <input
                  type="hidden"
                  name="online_transaction_type"
                  value="ONLINE"
                />
                <input type="hidden" name="order_id" value="" />

                <AdmissionFormSection
                  active={activeAdmissionStep === 0}
                  stepIndex={0}
                >
                  <AdmissionField
                    label="Academic Year"
                    name="academic_year"
                    required
                    placeholder={
                      loadingFields.academicYears
                        ? "Loading Academic Years..."
                        : "Select Academic Year*"
                    }
                    options={dropdownOptions.academicYears}
                    value={formValues.academic_year}
                    onChange={(event) =>
                      handleAcademicYearChange(event.target.value)
                    }
                    disabled={loadingFields.academicYears}
                  />
                  <AdmissionField
                    label="State"
                    name="state_id"
                    required
                    placeholder={
                      loadingFields.states
                        ? "Loading States..."
                        : "Select State*"
                    }
                    options={dropdownOptions.states}
                    value={formValues.state_id}
                    onChange={(event) => handleStateChange(event.target.value)}
                    disabled={loadingFields.states}
                  />
                  <AdmissionField
                    label="City"
                    name="city_id"
                    required
                    placeholder={
                      loadingFields.cities
                        ? "Loading Cities..."
                        : "Select City*"
                    }
                    options={dropdownOptions.cities}
                    value={formValues.city_id}
                    onChange={(event) => handleCityChange(event.target.value)}
                    disabled={!formValues.state_id || loadingFields.cities}
                  />
                  <AdmissionField
                    label="Branch"
                    name="branch_id"
                    required
                    placeholder={
                      loadingFields.campuses
                        ? "Loading Branches..."
                        : "Select Branch*"
                    }
                    options={dropdownOptions.campuses}
                    value={formValues.branch_id}
                    onChange={(event) => handleBranchChange(event.target.value)}
                    disabled={
                      !formValues.city_id ||
                      !formValues.academic_year ||
                      loadingFields.campuses
                    }
                  />
                  <AdmissionField
                    label="Board"
                    name="board"
                    required
                    placeholder={
                      loadingFields.boards
                        ? "Loading Boards..."
                        : "Please Select Board*"
                    }
                    options={dropdownOptions.boards}
                    value={formValues.board}
                    onChange={(event) => handleBoardChange(event.target.value)}
                    disabled={!formValues.branch_id || loadingFields.boards}
                  />
                  <AdmissionField
                    label="Class"
                    name="class_id"
                    required
                    placeholder={
                      loadingFields.classes
                        ? "Loading Classes..."
                        : "Select Class*"
                    }
                    options={dropdownOptions.classes}
                    value={formValues.class_id}
                    onChange={(event) => handleClassChange(event.target.value)}
                    disabled={!formValues.board || loadingFields.classes}
                  />
                  <AdmissionField
                    label="Orientation"
                    name="orientation"
                    required
                    placeholder={
                      loadingFields.orientations
                        ? "Loading Orientations..."
                        : "Select Orientation*"
                    }
                    options={dropdownOptions.orientations}
                    value={formValues.orientation}
                    onChange={(event) =>
                      handleOrientationChange(event.target.value)
                    }
                    disabled={
                      !formValues.class_id || loadingFields.orientations
                    }
                    helpText={admissionFieldHelp.orientation}
                  />
                  <AdmissionField
                    label="Section"
                    name="section"
                    required
                    placeholder={
                      loadingFields.sections
                        ? "Loading Sections..."
                        : "Select Section*"
                    }
                    options={dropdownOptions.sections}
                    value={formValues.section}
                    onChange={(event) =>
                      updateField("section", event.target.value)
                    }
                    disabled={!formValues.orientation || loadingFields.sections}
                    helpText={admissionFieldHelp.section}
                  />
                  <AdmissionField
                    label="Student Type"
                    name="student_type"
                    required
                    placeholder={
                      loadingFields.studentTypes
                        ? "Loading Student Types..."
                        : "Select Student Type*"
                    }
                    options={dropdownOptions.studentTypes}
                    value={formValues.student_type}
                    onChange={(event) =>
                      handleStudentTypeChange(event.target.value)
                    }
                    disabled={
                      !formValues.orientation || loadingFields.studentTypes
                    }
                    helpText={admissionFieldHelp.studentType}
                  />
                  <AdmissionField
                    label="Application Score ID"
                    name="application_score_id"
                    placeholder="Enter Application Score ID"
                    helpText={admissionFieldHelp.applicationScoreId}
                  />
                </AdmissionFormSection>

                <AdmissionFormSection
                  active={activeAdmissionStep === 1}
                  stepIndex={1}
                >
                  <AdmissionField
                    label="First Name"
                    name="first_name"
                    required
                    placeholder="Enter First Name"
                  />
                  <AdmissionField
                    label="Last Name"
                    name="last_name"
                    placeholder="Enter Last Name"
                  />
                  <AdmissionField
                    label="Date Of Birth"
                    name="dob"
                    type="date"
                    required
                  />
                  <AdmissionField
                    label="Gender"
                    name="gender"
                    required
                    variant="radio"
                    options={admissionSelectOptions.gender}
                  />
                  <AdmissionField
                    label="Admission Date"
                    name="admission_date"
                    type="date"
                    required
                    value={formValues.admission_date}
                    onChange={(event) =>
                      updateField("admission_date", event.target.value)
                    }
                    endAction={{
                      label: "Today",
                      onClick: () =>
                        updateField("admission_date", getTodayDateInputValue()),
                    }}
                  />
                  <AdmissionField
                    label="Application Amount"
                    name="amount"
                    type="number"
                    required
                    inputMode="decimal"
                    min="0"
                    step="0.01"
                    placeholder="Enter Application Amount"
                    value={formValues.amount}
                    onChange={(event) =>
                      updateField(
                        "amount",
                        normalizeAmountInput(event.target.value),
                      )
                    }
                  />
                  <AdmissionField
                    label="Admission Confirmation Amount"
                    name="admission_amount"
                    type="number"
                    required
                    inputMode="decimal"
                    min="0"
                    step="0.01"
                    placeholder="Enter Admission Confirmation Amount"
                    value={formValues.admission_amount}
                    onChange={(event) =>
                      updateField(
                        "admission_amount",
                        normalizeAmountInput(event.target.value),
                      )
                    }
                  />
                </AdmissionFormSection>

                <AdmissionFormSection
                  active={activeAdmissionStep === 2}
                  stepIndex={2}
                >
                  <AdmissionField
                    label="Father Name"
                    name="father_name"
                    required
                    placeholder="Enter Father Name"
                  />
                  <AdmissionField
                    label="Mother Name"
                    name="mother_name"
                    required
                    placeholder="Enter Mother Name"
                  />
                  <AdmissionField
                    label="Parent Mobile No."
                    name="phone_no"
                    type="tel"
                    required
                    placeholder="Enter Parent Mobile No."
                  />
                  <AdmissionField
                    label="Parent Email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter Parent Email"
                  />
                  <AdmissionField
                    label="Aadhaar No"
                    name="aadhaar_num"
                    required
                    placeholder="Enter Aadhaar No"
                  />
                  <AdmissionField
                    label="Father/Guardian Occupation"
                    name="father_occupation"
                    required
                    placeholder={
                      loadingFields.occupations
                        ? "Loading Occupations..."
                        : "Select Father/Guardian Occupation*"
                    }
                    options={dropdownOptions.occupations}
                    value={formValues.father_occupation}
                    onChange={(event) =>
                      updateField("father_occupation", event.target.value)
                    }
                    disabled={loadingFields.occupations}
                  />
                  <AdmissionField
                    label="Quota"
                    name="quota_id"
                    required
                    placeholder={
                      loadingFields.quotas
                        ? "Loading Quotas..."
                        : "Select Quota*"
                    }
                    options={dropdownOptions.quotas}
                    value={formValues.quota_id}
                    onChange={(event) =>
                      updateField("quota_id", event.target.value)
                    }
                    disabled={loadingFields.quotas}
                    helpText={admissionFieldHelp.quota}
                  />
                  <AdmissionField
                    label="Admission Type"
                    name="adms_type_id"
                    required
                    placeholder="Select Admission Type*"
                    options={dropdownOptions.admissionTypes}
                    value={formValues.adms_type_id}
                    onChange={(event) => {
                      updateField("adms_type_id", event.target.value);
                      setReferredEmployeeId("");
                      setReferredMobile("");
                      setProMobileNumbers([]);
                      setProValidationMessage("");
                    }}
                    disabled={loadingFields.admissionTypes}
                    helpText={admissionFieldHelp.admissionType}
                  />
                  {showProFields ? (
                    <>
                      <AdmissionField
                        label="Referred By (Employee ID)"
                        name="referred_employee_id"
                        required
                        placeholder="Referred By (Employee ID) - ex. HYDxxxxx"
                        value={referredEmployeeId}
                        onChange={(event) => {
                          setReferredEmployeeId(
                            event.target.value.toUpperCase(),
                          );
                          setReferredMobile("");
                          setProMobileNumbers([]);
                          setProValidationMessage("");
                        }}
                        verified={proMobileNumbers.length > 0}
                        helpText={admissionFieldHelp.referredEmployee}
                      />
                      <AdmissionField
                        label="Referred Mobile"
                        name="referred_mobile"
                        type="tel"
                        required
                        placeholder="Enter Referred Mobile"
                        inputMode="numeric"
                        pattern="[0-9]{10,12}"
                        maxLength={12}
                        value={referredMobile}
                        onChange={(event) =>
                          setReferredMobile(
                            event.target.value.replace(/\D/g, "").slice(0, 12),
                          )
                        }
                        disabled={!proMobileNumbers.length}
                      />
                      {proMobileNumbers.length &&
                      referredMobileDigits.length >= 10 &&
                      !mobileMatchesProEmployee ? (
                        <p className={styles.fieldNotice}>
                          Mobile number does not match the verified PRO employee
                          record.
                        </p>
                      ) : null}
                      {showOtpField ? (
                        <AdmissionField
                          label="OTP"
                          name="referred_mobile_otp"
                          required
                          placeholder="Enter OTP"
                        />
                      ) : null}
                    </>
                  ) : null}
                </AdmissionFormSection>

                <AdmissionFormSection
                  active={activeAdmissionStep === 3}
                  stepIndex={3}
                >
                  <AdmissionField
                    label="Door No"
                    name="door_no"
                    required
                    placeholder="Enter Door No"
                  />
                  <AdmissionField
                    label="Street"
                    name="street"
                    required
                    placeholder="Enter Street"
                  />
                  <AdmissionField
                    label="Area"
                    name="area"
                    required
                    placeholder="Enter Area"
                  />
                  <AdmissionField
                    label="Pin ID"
                    name="pin_id"
                    type="number"
                    required
                    placeholder="Enter Pin ID"
                  />
                  <AdmissionField
                    label="District"
                    name="district_id"
                    required
                    placeholder={
                      loadingFields.districts
                        ? "Loading Districts..."
                        : "Select District*"
                    }
                    options={dropdownOptions.districts}
                    value={formValues.district_id}
                    onChange={(event) =>
                      handleDistrictChange(event.target.value)
                    }
                    disabled={!formValues.state_id || loadingFields.districts}
                  />
                  <AdmissionField
                    label="Mandal"
                    name="mandal_id"
                    required
                    placeholder={
                      loadingFields.mandals
                        ? "Loading Mandals..."
                        : "Select Mandal*"
                    }
                    options={dropdownOptions.mandals}
                    value={formValues.mandal_id}
                    onChange={(event) =>
                      updateField("mandal_id", event.target.value)
                    }
                    disabled={!formValues.district_id || loadingFields.mandals}
                  />
                  <AdmissionField
                    label="Landmark"
                    name="landmark"
                    placeholder="Enter Landmark"
                  />
                  <AdmissionField
                    label="Address Type"
                    name="addrs_type"
                    required
                    placeholder="Select Address Type*"
                    options={[{ label: "Permanent", value: "PERM" }]}
                  />
                </AdmissionFormSection>

                <div
                  className={`${styles.paymentForm} ${
                    activeAdmissionStep === 4
                      ? styles.admissionFormSectionActive
                      : styles.admissionFormSectionHidden
                  }`}
                  data-step-index={4}
                >
                  <div className={styles.paymentSummary}>
                    {/* <div className={styles.paymentSummaryHeader}>
                      <div>
                        <span>Payment Summary</span>
                        <strong>Admission fee checkout</strong>
                      </div>
                      <b>Amount due: {paymentAmount}</b>
                    </div> */}

                    <div className={styles.paymentReviewLayout}>
                      <div className={styles.paymentDetailsList}>
                        <div className={styles.paymentRow}>
                          <span>
                            Academic Year <strong>*</strong>
                          </span>
                          <b>{selectedAcademicYearLabel}</b>
                        </div>
                        <div className={styles.paymentRow}>
                          <span>
                            Fee Type <strong>*</strong>
                          </span>
                          <b>Admission_Fee</b>
                        </div>
                        <div className={styles.paymentRow}>
                          <span>Application Amount</span>
                          <b>{formatIndianCurrency(formValues.amount)}</b>
                        </div>
                        <div className={styles.paymentRow}>
                          <span>Admission Confirmation Amount</span>
                          <b>
                            {formatIndianCurrency(formValues.admission_amount)}
                          </b>
                        </div>
                      </div>

                      <div className={styles.paymentCheckoutPanel}>
                        <div className={styles.paymentTotalRow}>
                          <span>
                            Amount <strong>*</strong>
                          </span>
                          <b>{paymentAmountDisplay}</b>
                        </div>
                        <div className={styles.gatewayPanel}>
                          <span>
                            Payment Gateway <strong>*</strong>
                          </span>
                          <label className={styles.gatewayOption}>
                            <input
                              type="radio"
                              name="payment_gateway"
                              value="Razorpay"
                              checked={paymentGateway === "Razorpay"}
                              onChange={(event) =>
                                setPaymentGateway(event.target.value)
                              }
                              required
                            />
                            <Image
                              src={razorpayImage}
                              alt="Razorpay"
                              className={styles.gatewayLogo}
                              width={112}
                              height={24}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {submissionStatus.message ? (
                    <p
                      className={`${styles.submissionNotice} ${
                        styles[submissionStatus.type] || ""
                      }`}
                    >
                      {submissionStatus.message}
                    </p>
                  ) : null}
                </div>

                <div className={styles.wizardActions}>
                  <button
                    className={styles.wizardBackButton}
                    type="button"
                    onClick={goToPreviousAdmissionStep}
                    disabled={
                      activeAdmissionStep === 0 || isSubmittingAdmission
                    }
                  >
                    Back
                  </button>
                  {activeAdmissionStep < admissionSteps.length - 1 ? (
                    <button
                      className={styles.wizardContinueButton}
                      type="button"
                      onClick={goToNextAdmissionStep}
                    >
                      Save &amp; Continue
                    </button>
                  ) : (
                    <button
                      className={styles.paymentSubmitButton}
                      type="button"
                      onClick={handlePaymentSubmit}
                      disabled={isSubmittingAdmission}
                    >
                      {isSubmittingAdmission ? "SUBMITTING..." : "SUBMIT"}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function GalleryPage({ page }) {
  const images = [
    page.heroImage,
    page.showcase.image,
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=900",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=900",
    "https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=900",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=900",
  ];

  return (
    <>
      <Hero page={page} variant="Gallery" />
      <section className={styles.galleryMosaic}>
        <div className={styles.container}>
          <div className={styles.mosaicHeader}>
            <span className={styles.sectionLabel}>Visual Campus Tour</span>
            <h2>Life inside the home2 campus story</h2>
          </div>
          <div className={styles.mosaicGrid}>
            {images.map((image, index) => (
              <div
                className={`${styles.mosaicTile} ${styles[`tile${index + 1}`]}`}
                key={image}
              >
                <Image
                  src={image}
                  alt={`Campus gallery ${index + 1}`}
                  fill
                  className={styles.heroImage}
                  unoptimized
                />
              </div>
            ))}
          </div>
          <div className={styles.galleryTags}>
            {page.featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <div className={styles.galleryTag} key={card.title}>
                  <Icon size={20} />
                  <span>{card.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPage({ page }) {
  return (
    <>
      <Hero page={page} variant="Contact" />
      <section className={styles.contactSurface}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactPanel}>
              <span className={styles.sectionLabel}>Reach Us</span>
              <h2>One page for calls, visits, and admission support</h2>
              <div className={styles.contactList}>
                <div>
                  <Phone size={20} />
                  <span>+91 40 2355 2555 / 56</span>
                </div>
                <div>
                  <Mail size={20} />
                  <span>info@srichaitanya.net</span>
                </div>
                <div>
                  <MapPin size={20} />
                  <span>
                    # 8-2-293/82/A, Road No. 36, Jubilee Hills, Hyderabad
                  </span>
                </div>
                <div>
                  <Clock size={20} />
                  <span>Campus visits by appointment</span>
                </div>
              </div>
            </div>
            <div className={styles.mapPanel}>
              <div className={styles.mapPulse}>
                <MapPin size={30} />
              </div>
              <strong>Sri Chaitanya School</strong>
              <span>Madhapur / Hyderabad admissions desk</span>
            </div>
          </div>
          <div className={styles.contactCards}>
            {page.featureCards.map((card) => (
              <FeatureCard card={card} key={card.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const pageViews = {
  about: AboutPage,
  academics: AcademicsPage,
  facilities: FacilitiesPage,
  admissions: AdmissionsPage,
  gallery: GalleryPage,
  contact: ContactPage,
};

export default function Home2InnerPage({ slug }) {
  const mainRef = useRef(null);
  const page = home2InnerPages[slug];
  const PageView = pageViews[slug] || AboutPage;

  useGSAP(
    () => {
      gsap.from(".home2-inner-reveal", {
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 72%",
        },
        opacity: 0,
        y: 38,
        duration: 0.75,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: mainRef },
  );

  return (
    <div className="home2-theme">
      <main ref={mainRef} className={styles.innerPage}>
        <PageView page={page} />
      </main>
    </div>
  );
}
