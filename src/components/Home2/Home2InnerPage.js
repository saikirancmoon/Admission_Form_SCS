"use client";

import React, { useRef, useState } from "react";
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
  Clock,
  Compass,
  FlaskConical,
  GraduationCap,
  Home,
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
          <motion.span className={styles.eyebrow} variants={fadeUp}>
            <Sparkles size={16} />
            {page.eyebrow}
          </motion.span>
          <motion.h1 className={styles.title} variants={fadeUp}>
            <HighlightTitle page={page} />
          </motion.h1>
          <motion.p className={styles.intro} variants={fadeUp}>
            {page.intro}
          </motion.p>
          <motion.div className={styles.heroActions} variants={fadeUp}>
            <Link href="/home2/admissions" className={styles.primaryBtn}>
              Enquire Now <ArrowRight size={18} />
            </Link>
            <Link href="/home2/admissions" className={styles.secondaryBtn}>
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
  options,
  value,
  onChange,
  inputMode,
  pattern,
  min,
  maxLength,
  variant,
  digitsOnly = false,
}) {
  const labelText = visualRequired ? `${label}*` : label;
  const controlledProps =
    value !== undefined ? { value } : { defaultValue: defaultValue ?? "" };
  const inputValueProps = value !== undefined ? { value } : { defaultValue };

  return (
    <label className={styles.admissionFormField}>
      <span>{labelText}</span>
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
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
          onChange={onChange}
          onInput={
            digitsOnly
              ? (event) => {
                  event.currentTarget.value = event.currentTarget.value.replace(
                    /\D/g,
                    "",
                  );
                }
              : undefined
          }
          inputMode={inputMode}
          pattern={pattern}
          min={min}
          maxLength={maxLength}
          {...inputValueProps}
        />
      )}
    </label>
  );
}

function AdmissionFormSection({ title, children }) {
  return (
    <fieldset className={styles.admissionFormSection}>
      {title ? <legend>{title}</legend> : null}
      <div className={styles.admissionFormGrid}>{children}</div>
    </fieldset>
  );
}

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
            <motion.span className={styles.eyebrow} variants={fadeUp}>
              <Sparkles size={16} />
              About Sri Chaitanya
            </motion.span>
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
            <motion.span className={styles.eyebrow} variants={fadeUp}>
              <GraduationCap size={16} />
              Academics
            </motion.span>
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
              <motion.span className={styles.eyebrow} variants={fadeUp}>
                <Sparkles size={16} />
                World Class Facilities
              </motion.span>
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
  const [admissionType, setAdmissionType] = useState("");
  const [referredMobile, setReferredMobile] = useState("");
  const referredMobileDigits = referredMobile.replace(/\D/g, "");
  const showProFields = admissionType === "pro";
  const showOtpField = showProFields && referredMobileDigits.length === 10;

  return (
    <section className={styles.admissionFlow}>
      <div className={styles.container}>
        <div className={styles.admissionFormOnly}>
          <div className={styles.enquiryPanel}>
            <form className={styles.admissionForm}>
              <div className={styles.admissionFormHeader}>
                <h2>ONLINE ADMISSION FORM</h2>
                <p>Please fill in all the required fields (marked with *)</p>
              </div>

              <AdmissionFormSection>
                <AdmissionField
                  label="Academic Year"
                  name="academic_year"
                  required
                  placeholder="Select Academic Year*"
                  options={admissionSelectOptions.academicYear}
                />
                <AdmissionField
                  label="Board"
                  name="board"
                  required
                  placeholder="Please Select Board*"
                  options={admissionSelectOptions.board}
                />
                <AdmissionField
                  label="State"
                  name="state_id"
                  required
                  placeholder="Select State*"
                  options={admissionSelectOptions.state}
                />
                <AdmissionField
                  label="City"
                  name="city_id"
                  required
                  placeholder="Select City*"
                  options={admissionSelectOptions.city}
                />
                <AdmissionField
                  label="Branch"
                  name="branch_id"
                  required
                  placeholder="Select Branch*"
                  options={admissionSelectOptions.branch}
                />
                <AdmissionField
                  label="Class"
                  name="class_id"
                  required
                  placeholder="Select Class*"
                  options={admissionSelectOptions.class}
                />
                <AdmissionField
                  label="Orientation"
                  name="orientation"
                  required
                  placeholder="Select Orientation*"
                  options={admissionSelectOptions.orientation}
                />
                <AdmissionField
                  label="Section"
                  name="section"
                  required
                  placeholder="Select Section*"
                  options={admissionSelectOptions.section}
                />
                <AdmissionField
                  label="Student Type"
                  name="student_type"
                  required
                  placeholder="Select Student Type*"
                  options={admissionSelectOptions.studentType}
                />
                <AdmissionField
                  label="Application Score ID"
                  name="application_score_id"
                  placeholder="Enter Application Score ID"
                />
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
                  required
                  placeholder="Enter Date Of Birth"
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
                  required
                  placeholder="Enter Admission Date"
                />
              </AdmissionFormSection>

              <AdmissionFormSection title="FEE DETAILS">
                <AdmissionField
                  label="Application Amount"
                  name="amount"
                  visualRequired
                  inputMode="numeric"
                  pattern="[0-9]*"
                  min="0"
                  digitsOnly
                  placeholder="Enter Application Amount"
                />
                <AdmissionField
                  label="Admission Confirmation Amount"
                  name="admission_amount"
                  visualRequired
                  inputMode="numeric"
                  pattern="[0-9]*"
                  min="0"
                  digitsOnly
                  placeholder="Enter Admission Confirmation Amount"
                />
                <AdmissionField
                  label="Incentive Amount"
                  name="incentive_amount"
                  visualRequired
                  inputMode="numeric"
                  pattern="[0-9]*"
                  min="0"
                  digitsOnly
                  placeholder="Enter Incentive Amount"
                />
              </AdmissionFormSection>

              <AdmissionFormSection title="PERSONAL DETAILS">
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
                  label="Quota"
                  name="quota_id"
                  required
                  placeholder="Select Quota*"
                  options={admissionSelectOptions.quota}
                />
                <AdmissionField
                  label="Admission Type"
                  name="adms_type_id"
                  required
                  placeholder="Select Admission Type*"
                  options={admissionSelectOptions.admissionType}
                  value={admissionType}
                  onChange={(event) => {
                    setAdmissionType(event.target.value);
                    setReferredMobile("");
                  }}
                />
                {showProFields ? (
                  <>
                    <AdmissionField
                      label="Referred Mobile"
                      name="referred_mobile"
                      type="tel"
                      required
                      placeholder="Enter Referred Mobile"
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      value={referredMobile}
                      onChange={(event) =>
                        setReferredMobile(
                          event.target.value.replace(/\D/g, "").slice(0, 10),
                        )
                      }
                    />
                    <AdmissionField
                      label="Referred By (Employee ID)"
                      name="referred_employee_id"
                      required
                      placeholder="Referred By (Employee ID) - ex. HYDxxxxx"
                    />
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
                <AdmissionField
                  label="Father/Guardian Occupation"
                  name="father_occupation"
                  required
                  placeholder="Enter Father/Guardian Occupation"
                />
              </AdmissionFormSection>

              <AdmissionFormSection title="ADDRESS DETAILS">
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
                  placeholder="Select District*"
                  options={admissionSelectOptions.district}
                />
                <AdmissionField
                  label="Mandal"
                  name="mandal_id"
                  required
                  placeholder="Select Mandal*"
                  options={admissionSelectOptions.mandal}
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

              <button className={styles.admissionSubmitButton} type="submit">
                SUBMIT &amp; PAY
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
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
