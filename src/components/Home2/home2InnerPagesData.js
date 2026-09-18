import {
  Award,
  BookOpen,
  Bus,
  CalendarCheck,
  Camera,
  CheckCircle2,
  ClipboardList,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Library,
  Lightbulb,
  Mail,
  MapPin,
  Medal,
  Microscope,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

export const home2Routes = [
  { label: "Home", href: "/home2/admissions" },
  { label: "About Us", href: "/home2/admissions" },
  { label: "Academics", href: "/home2/admissions" },
  { label: "Facilities", href: "/home2/admissions" },
  { label: "Admissions", href: "/home2/admissions" },
  { label: "Gallery", href: "/home2/admissions" },
  { label: "Contact Us", href: "/home2/admissions" },
];

export const home2InnerPages = {
  about: {
    eyebrow: "About Sri Chaitanya",
    title: "A legacy built for future-ready learners",
    highlight: "future-ready",
    intro:
      "Our home2 experience carries the same bold learning energy inside every page: academic ambition, warm mentorship, and a campus culture that helps students grow with confidence.",
    heroImage:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "25+", label: "Years of Excellence" },
      { value: "15K+", label: "Students Guided" },
      { value: "100%", label: "Results Driven" },
    ],
    featureCards: [
      {
        icon: Award,
        title: "Proven Academic Culture",
        text: "Structured learning systems help students build discipline, clarity, and competitive confidence.",
        tone: "blue",
      },
      {
        icon: HeartHandshake,
        title: "Care Around Every Child",
        text: "Teachers, mentors, and coordinators work together so each learner feels seen and supported.",
        tone: "coral",
      },
      {
        icon: Rocket,
        title: "Future-Ready Outlook",
        text: "Digital classrooms, innovation labs, and exposure programs prepare students for changing careers.",
        tone: "violet",
      },
    ],
    timelineTitle: "Our Learning Promise",
    timeline: [
      "Build strong fundamentals through focused classroom practice.",
      "Create space for leadership, creativity, sports, and communication.",
      "Guide every student with measurable progress and mentor feedback.",
      "Celebrate achievement while keeping curiosity alive.",
    ],
    showcase: {
      title: "Rooted in values, designed for ambition",
      text: "The campus experience blends discipline with discovery, helping students aim high without losing balance.",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200",
    },
  },
  academics: {
    eyebrow: "Academic Excellence",
    title: "Curriculum that turns effort into achievement",
    highlight: "achievement",
    intro:
      "From foundational concepts to competitive readiness, academics are designed as a clear journey with smart classes, rigorous practice, and regular progress reviews.",
    heroImage:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "CBSE", label: "Structured Curriculum" },
      { value: "IIT", label: "Foundation Support" },
      { value: "NEET", label: "Concept Readiness" },
    ],
    featureCards: [
      {
        icon: BookOpen,
        title: "Concept-First Lessons",
        text: "Every subject is planned around clarity, recall, application, and confident expression.",
        tone: "blue",
      },
      {
        icon: Lightbulb,
        title: "Smart Classrooms",
        text: "Digital teaching tools make complex ideas visual, interactive, and easier to revise.",
        tone: "yellow",
      },
      {
        icon: Medal,
        title: "Competitive Edge",
        text: "Olympiad and foundation programs help motivated students stretch into advanced problem solving.",
        tone: "violet",
      },
    ],
    timelineTitle: "Learning Path",
    timeline: [
      "Pre-primary learners explore language, numeracy, rhythm, and social skills.",
      "Primary grades build reading, reasoning, science awareness, and communication.",
      "Middle school strengthens analysis, lab thinking, and independent study habits.",
      "High school focuses on board performance, entrance readiness, and career direction.",
    ],
    showcase: {
      title: "Excellence through innovation",
      text: "Lessons, assessments, and student support are aligned so achievement feels planned, not accidental.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
    },
  },
  facilities: {
    eyebrow: "World Class Facilities",
    title: "Spaces that support every kind of growth",
    highlight: "growth",
    intro:
      "The facilities page follows the home2 bento feel: practical labs, sports spaces, library corners, transport, safety, and digital classrooms presented as a premium campus system.",
    heroImage:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "Labs", label: "Hands-on Learning" },
      { value: "Sports", label: "Active Development" },
      { value: "Safe", label: "Secure Campus" },
    ],
    featureCards: [
      {
        icon: Microscope,
        title: "Advanced Laboratories",
        text: "Science and computer labs give students a safe, guided space to test ideas hands-on.",
        tone: "teal",
      },
      {
        icon: Trophy,
        title: "Sports Arena",
        text: "Structured sports facilities encourage teamwork, stamina, focus, and healthy competition.",
        tone: "coral",
      },
      {
        icon: Library,
        title: "Digital Library",
        text: "Reading zones and digital resources help students research, revise, and explore beyond textbooks.",
        tone: "violet",
      },
      {
        icon: Bus,
        title: "Safe Transport",
        text: "Transport support is planned around punctual movement, monitored routes, and student safety.",
        tone: "yellow",
      },
    ],
    timelineTitle: "Campus Advantage",
    timeline: [
      "Purpose-built classrooms support focused, distraction-free learning.",
      "Labs and libraries deepen inquiry beyond the regular lesson.",
      "Sports and activity spaces support confidence outside academics.",
      "Safety, transport, and supervision keep daily routines dependable.",
    ],
    showcase: {
      title: "A campus planned for everyday excellence",
      text: "Facilities work best when they feel natural to use every day, from morning assembly to evening dispersal.",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1200",
    },
  },
  admissions: {
    eyebrow: "Admissions 2024 - 2025",
    title: "A simple path to join the next generation",
    highlight: "join",
    intro:
      "The admissions experience is clear, welcoming, and action-oriented, matching the home2 CTA style with quick steps, important checkpoints, and parent-friendly guidance.",
    heroImage:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "01", label: "Campus Enquiry" },
      { value: "02", label: "Counselling" },
      { value: "03", label: "Admission" },
    ],
    featureCards: [
      {
        icon: ClipboardList,
        title: "Enquiry & Guidance",
        text: "Parents can understand the curriculum, campus facilities, fee structure, and grade fit.",
        tone: "blue",
      },
      {
        icon: CalendarCheck,
        title: "Interaction Slot",
        text: "Student interaction helps the academic team recommend the right learning support.",
        tone: "teal",
      },
      {
        icon: CheckCircle2,
        title: "Confirmation",
        text: "Admission confirmation is completed after document review and seat availability.",
        tone: "yellow",
      },
    ],
    timelineTitle: "Admission Steps",
    timeline: [
      "Submit an enquiry for the preferred grade and campus.",
      "Meet the counsellor to understand curriculum, facilities, and timings.",
      "Complete student interaction or assessment where required.",
      "Finish documentation and receive onboarding details.",
    ],
    showcase: {
      title: "Start with a conversation",
      text: "Admissions should feel informed and calm, so families can choose with confidence.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200",
    },
  },
  gallery: {
    eyebrow: "Campus Gallery",
    title: "Moments from a vibrant school life",
    highlight: "vibrant",
    intro:
      "Gallery pages need to feel visual first. This home2 version uses bold image tiles, soft reveal motion, and colorful category cards that mirror the homepage grid.",
    heroImage:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "Events", label: "Celebrations" },
      { value: "Labs", label: "Discovery" },
      { value: "Sports", label: "Energy" },
    ],
    featureCards: [
      {
        icon: Camera,
        title: "Campus Life",
        text: "Assemblies, activities, projects, and student leadership moments captured across the year.",
        tone: "coral",
      },
      {
        icon: FlaskConical,
        title: "Lab & Innovation",
        text: "Hands-on experiments, smart classroom learning, and project-based discovery.",
        tone: "teal",
      },
      {
        icon: Trophy,
        title: "Sports & Events",
        text: "Competition, collaboration, fitness, celebrations, and performances that shape confidence.",
        tone: "violet",
      },
    ],
    timelineTitle: "Gallery Highlights",
    timeline: [
      "Academic activities and classroom experiences.",
      "Sports, fitness, and inter-house competitions.",
      "Cultural celebrations and student performances.",
      "Campus views, labs, library, and learning spaces.",
    ],
    showcase: {
      title: "A campus you can feel before you visit",
      text: "The image-led layout gives parents a quick view of the school atmosphere and student energy.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
    },
  },
  contact: {
    eyebrow: "Contact Us",
    title: "Talk to the team and plan your campus visit",
    highlight: "visit",
    intro:
      "The contact page keeps the premium home2 mood while making the important actions easy to scan: call, visit, email, and send an admission enquiry.",
    heroImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { value: "Call", label: "+91 40 2355 2555" },
      { value: "Visit", label: "Jubilee Hills" },
      { value: "Email", label: "info@srichaitanya.net" },
    ],
    featureCards: [
      {
        icon: Phone,
        title: "Call Admissions",
        text: "+91 40 2355 2555 / 56",
        tone: "blue",
      },
      {
        icon: MapPin,
        title: "Campus Address",
        text: "# 8-2-293/82/A, Road No. 36, Jubilee Hills, Hyderabad, Telangana",
        tone: "coral",
      },
      {
        icon: Mail,
        title: "Email Support",
        text: "info@srichaitanya.net",
        tone: "teal",
      },
      {
        icon: ShieldCheck,
        title: "Visit Guidance",
        text: "Book a campus walk-through and meet the counselling team for grade-specific details.",
        tone: "violet",
      },
    ],
    timelineTitle: "How We Help",
    timeline: [
      "Answer programme, grade, and campus-related questions.",
      "Share admission availability and interaction details.",
      "Guide parents through documents and visit planning.",
      "Connect families with the right academic coordinator.",
    ],
    showcase: {
      title: "Every enquiry gets a clear next step",
      text: "The contact flow is built around fast response, parent clarity, and a smooth visit experience.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200",
    },
  },
};

export const defaultInnerPage = {
  eyebrow: "Home2",
  title: "Page coming soon",
  highlight: "soon",
  intro: "This home2 inner page is being prepared.",
  heroImage:
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200",
  stats: [],
  featureCards: [],
  timelineTitle: "Highlights",
  timeline: [],
  showcase: {
    title: "Sri Chaitanya School",
    text: "A premium learning experience for the next generation.",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200",
  },
};
