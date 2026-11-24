/**
 * EDUNEXUS EDUCATION MANAGEMENT PLATFORM
 * Centralized Landing Page Data & Content Configuration
 * 
 * Keep all landing-page text, feature sets, modules, FAQs, and navigation items
 * centralized here for effortless editing, updating, and maintenance.
 */

export interface HeroMetric {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

export interface FloatingCard {
  id: string;
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  badge?: string;
  badgeColor?: string;
}

export interface TrustIndicator {
  title: string;
  description: string;
  icon: string;
  highlight: string;
}

export interface SolutionPillar {
  id: string;
  badge: string;
  title: string;
  description: string;
  keyPoints: string[];
  mockupType: 'analytics' | 'workflow' | 'architecture';
  stats: { label: string; value: string }[];
}

export interface CampusModule {
  id: string;
  name: string;
  description: string;
  icon: string;
  badge?: string;
  features: string[];
}

export interface ModuleCategory {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  modules: CampusModule[];
}

export interface LifecycleStage {
  step: number;
  id: string;
  name: string;
  department: string;
  description: string;
  dataTransferred: string;
  icon: string;
}

export interface RoleExperience {
  id: 'admins' | 'faculty' | 'students' | 'management';
  role: string;
  tagline: string;
  summary: string;
  kpis: { label: string; value: string }[];
  keyCapabilities: string[];
  mockupTitle: string;
  mockupSubtitle: string;
  primaryAction: string;
}

export interface WhyFeature {
  id: string;
  title: string;
  traditional: string;
  edunexus: string;
  icon: string;
  impactBadge: string;
}

export interface ShowcaseTab {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  badge: string;
  description: string;
  previewData: {
    headers: string[];
    rows: (string | number)[][];
    summaryStats: { label: string; value: string }[];
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface FooterLink {
  label: string;
  href: string;
  action?: string;
  external?: boolean;
  isEmail?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

// ==========================================
// 1. HERO SECTION DATA
// ==========================================
export const HERO_DATA = {
  announcement: {
    badge: 'Enterprise EdTech Platform',
    text: 'Designed for Higher Education & Multi-Campus Institutions',
    link: '#solutions',
  },
  headline: 'One Connected Campus. Infinite Possibilities.',
  subheadline:
    'From admissions to graduation, Edunexus brings your entire institution together through intelligent automation, connected workflows, and actionable insights — giving educators more time to focus on what truly matters: student success.',
  primaryCta: {
    label: 'Explore the Platform',
    href: '#modules',
  },
  secondaryCta: {
    label: 'Book an Institutional Demo',
    action: 'openDemoModal',
  },
  metrics: [
    { label: 'Campus Operations', value: '100% Unified' },
    { label: 'Administrative Reduction', value: '75%' },
    { label: 'Role-Based Access', value: 'Zero-Trust' },
  ] as HeroMetric[],
  floatingCards: [
    {
      id: 'students',
      title: 'Total Active Students',
      value: '18,420',
      subtitle: '+12.4% enrollment growth',
      icon: 'Users',
      badge: 'Synchronized',
      badgeColor: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
    },
    {
      id: 'attendance',
      title: 'Attendance Overview',
      value: '94.8%',
      subtitle: 'Real-time campus average',
      icon: 'CheckCircle2',
      badge: 'Live Sensor',
      badgeColor: 'bg-blue-500/10 text-blue-700 border-blue-500/20',
    },
    {
      id: 'admissions',
      title: 'Admission Applications',
      value: '3,140',
      subtitle: '82% verified & processed',
      icon: 'FileText',
      badge: 'Fall 2026',
      badgeColor: 'bg-purple-500/10 text-purple-700 border-purple-500/20',
    },
    {
      id: 'performance',
      title: 'Academic Performance',
      value: '3.82 CGPA',
      subtitle: 'Institution benchmark index',
      icon: 'TrendingUp',
      badge: 'Top Decile',
      badgeColor: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
    },
    {
      id: 'fees',
      title: 'Fee Collection',
      value: '96.2%',
      subtitle: 'Direct digital reconciliation',
      icon: 'CreditCard',
      badge: 'Audited',
      badgeColor: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
    },
    {
      id: 'events',
      title: 'Upcoming Events',
      value: 'Convocation & Mid-Term',
      subtitle: 'Next event in 48 hours',
      icon: 'Calendar',
      badge: 'Automated',
      badgeColor: 'bg-indigo-500/10 text-indigo-700 border-indigo-500/20',
    },
  ] as FloatingCard[],
};

// ==========================================
// 2. TRUST & IMPACT STRIP
// ==========================================
export const TRUST_METRICS: TrustIndicator[] = [
  {
    title: 'Unified Campus Operations',
    description: 'Bridges admissions, academics, faculty scheduling, and alumni in one synchronized database.',
    icon: 'Building2',
    highlight: 'Single Source of Truth',
  },
  {
    title: 'Connected Academic Workflows',
    description: 'Zero data re-entry from curriculum creation through examination, evaluation, and transcripts.',
    icon: 'Layers',
    highlight: 'Seamless Progression',
  },
  {
    title: 'Real-Time Institutional Insights',
    description: 'Instant visibility for deans, department heads, and directors on enrollment, attendance, and finances.',
    icon: 'BarChart3',
    highlight: 'AI-Powered Reporting',
  },
  {
    title: 'Simplified Administration',
    description: 'Replaces scattered spreadsheets and paper trails with automated multi-tier approval workflows.',
    icon: 'ShieldCheck',
    highlight: 'Paperless Efficiency',
  },
];

// ==========================================
// 3. OUR SOLUTIONS PILLARS
// ==========================================
export const SOLUTIONS_HEADER = {
  badge: 'ENTERPRISE CAPABILITIES',
  heading: 'Built for the Future of Education. Designed for Every Institution.',
  description:
    'Edunexus is more than an education management platform. It is the digital foundation that connects academic operations, administrative workflows, faculty, students, and institutional leadership — all within one intelligent ecosystem.',
};

export const SOLUTIONS_DATA: SolutionPillar[] = [
  {
    id: 'intelligence',
    badge: 'Cognitive Analytics',
    title: 'AI-Powered Institutional Intelligence',
    description:
      'Turn institutional data into meaningful insights. Edunexus helps institutions understand performance, identify patterns, monitor operations, and make smarter decisions through centralized analytics, reporting, and intelligent dashboards.',
    keyPoints: [
      'Early warning detection for at-risk students before final examinations',
      'Automated cohort tracking and curriculum outcome achievement reports',
      'Instant predictive financial forecasting and fee recovery models',
      'Multi-variable accreditation metrics exportable for compliance bodies',
    ],
    mockupType: 'analytics',
    stats: [
      { label: 'Forecast Accuracy', value: '98.4%' },
      { label: 'Report Generation', value: 'Instant' },
    ],
  },
  {
    id: 'automation',
    badge: 'Connected Operations',
    title: 'End-to-End Campus Automation',
    description:
      'Simplify complex institutional processes through connected workflows. From student enquiries and admissions to academics, attendance, examinations, fees, and graduation, Edunexus helps reduce repetitive administrative work.',
    keyPoints: [
      'Digital application forms with automated document verification and merit lists',
      'Automated biometric & mobile attendance synchronization with parent alerts',
      'Dynamic conflict-free timetable generation for faculty and classrooms',
      'One-click transcript and degree certificate generation with cryptographic verification',
    ],
    mockupType: 'workflow',
    stats: [
      { label: 'Admin Work Reduction', value: '75%' },
      { label: 'Approval Turnaround', value: '3x Faster' },
    ],
  },
  {
    id: 'architecture',
    badge: 'Enterprise Foundation',
    title: 'Connected. Flexible. Institution-Ready.',
    description:
      'Designed to bring different departments and academic operations into one ecosystem. Give institutions a centralized platform that adapts to their operational needs, supports organized data management, and improves coordination across campus.',
    keyPoints: [
      'Multi-campus and multi-department hierarchical data governance',
      'Configurable credit frameworks (CBCS, OBE, semester, and annual patterns)',
      'Enterprise SSO, OAuth2, and granular role-based security clearance',
      'Open REST APIs for integrating existing biometric machines and payment gateways',
    ],
    mockupType: 'architecture',
    stats: [
      { label: 'System Uptime SLA', value: '99.99%' },
      { label: 'Data Latency', value: '<50ms' },
    ],
  },
];

// ==========================================
// 4. EVERYTHING YOUR INSTITUTION NEEDS (MODULES)
// ==========================================
export const MODULES_HEADER = {
  badge: 'COMPREHENSIVE ECOSYSTEM',
  heading: 'One Platform. Every Campus Operation.',
  subheading: 'A connected ecosystem of tools designed to simplify the way educational institutions operate.',
};

export const CAMPUS_MODULES_DATA: ModuleCategory[] = [
  {
    id: 'admissions',
    name: 'Admissions & Enrollment',
    tagline: 'From first enquiry to formal orientation',
    icon: 'UserPlus',
    modules: [
      {
        id: 'adm-applications',
        name: 'Applications Management',
        description: 'End-to-end online applicant portal with document verification and status tracking.',
        icon: 'FileText',
        badge: 'Self-Service',
        features: ['Custom dynamic application forms', 'Document upload & AI fraud check', 'Instant application status SMS/email'],
      },
      {
        id: 'adm-enquiry',
        name: 'Enquiry & Lead CRM',
        description: 'Capture, score, and track prospective student inquiries from all digital channels.',
        icon: 'MessageSquare',
        badge: 'Smart CRM',
        features: ['Automated inquiry assignment', 'Multi-channel lead capture', 'Follow-up reminder calendar'],
      },
      {
        id: 'adm-merit',
        name: 'Admissions & Merit Lists',
        description: 'Automated cutoff calculation, merit ranking, quota management, and provisional offers.',
        icon: 'CheckSquare',
        badge: 'Automated',
        features: ['Formula-based merit calculations', 'Seat allocation across reservation quotas', 'Digital offer letters'],
      },
      {
        id: 'adm-registration',
        name: 'Student Registration',
        description: 'Instant enrollment number generation, student ID card creation, and section assignment.',
        icon: 'BadgeCheck',
        badge: 'One-Click',
        features: ['Automated PRN / Roll Numbering', 'Digital student ID card generation', 'Batch & section distribution'],
      },
    ],
  },
  {
    id: 'academics',
    name: 'Academic Management',
    tagline: 'Curriculum delivery, faculty scheduling, and course progression',
    icon: 'GraduationCap',
    modules: [
      {
        id: 'acad-core',
        name: 'Academics & Department Hub',
        description: 'Unified management of departments, programs, specializations, and academic regulations.',
        icon: 'BookOpen',
        badge: 'Core Engine',
        features: ['Outcome-Based Education (OBE) mapping', 'Bloom taxonomy course outcomes', 'Degree audit rules'],
      },
      {
        id: 'acad-courses',
        name: 'Course Management',
        description: 'Syllabus builder, elective selection, credit distribution, and prerequisite checks.',
        icon: 'Library',
        badge: 'Flexible',
        features: ['CBCS elective selection engine', 'Syllabus versioning & approvals', 'Faculty workload balancing'],
      },
      {
        id: 'acad-curriculum',
        name: 'Curriculum & Lesson Planning',
        description: 'Structured weekly lesson plans, lecture notes, lab assignments, and resource libraries.',
        icon: 'CalendarRange',
        badge: 'Faculty Tool',
        features: ['Digital lecture logbooks', 'Integrated resource distribution', 'Curriculum progress monitors'],
      },
      {
        id: 'acad-timetable',
        name: 'Smart Timetable Scheduler',
        description: 'Intelligent conflict-free timetable generator optimizing classrooms, labs, and faculty hours.',
        icon: 'Calendar',
        badge: 'AI Optimization',
        features: ['Zero faculty overlap checks', 'Classroom capacity optimization', 'Substitute teacher reallocation'],
      },
      {
        id: 'acad-calendar',
        name: 'Academic Calendar',
        description: 'Centralized institutional timeline for teaching days, holidays, exams, and campus events.',
        icon: 'Clock',
        badge: 'Synchronized',
        features: ['Department-wide event sync', 'Instructional day counter', 'Automated reminders'],
      },
    ],
  },
  {
    id: 'student-ops',
    name: 'Student Operations',
    tagline: 'Daily student lifecycle management and communication',
    icon: 'Users',
    modules: [
      {
        id: 'st-lifecycle',
        name: 'Student Lifecycle Management',
        description: 'Comprehensive 360-degree master records from day one to alumni status.',
        icon: 'UserCheck',
        badge: '360° Profile',
        features: ['Complete academic historical timeline', 'Disciplinary & achievement logs', 'Emergency contact records'],
      },
      {
        id: 'st-attendance',
        name: 'Smart Attendance Tracking',
        description: 'Biometric, RFID, QR-code, and mobile faculty attendance with automated shortfall alerts.',
        icon: 'Fingerprint',
        badge: 'Multi-Mode',
        features: ['Biometric & QR scan integration', 'Medical leave adjustment workflows', 'Instant parent threshold alerts'],
      },
      {
        id: 'st-records',
        name: 'Student Records & Vault',
        description: 'Cryptographically secured digital repository for certificates, transcripts, and ID documents.',
        icon: 'FolderLock',
        badge: 'Tamper-Proof',
        features: ['Encrypted credential storage', 'One-click verification links', 'Exportable compliance archives'],
      },
      {
        id: 'st-portal',
        name: 'Student Self-Service Portal',
        description: 'Modern responsive web & mobile portal for grades, attendance, fees, and campus announcements.',
        icon: 'Smartphone',
        badge: 'Mobile First',
        features: ['Live attendance percentage widget', 'Fee invoice download & payment', 'Digital library access'],
      },
    ],
  },
  {
    id: 'assessment',
    name: 'Assessment & Performance',
    tagline: 'Examinations, evaluation, moderation, and gradebooks',
    icon: 'Award',
    modules: [
      {
        id: 'as-exams',
        name: 'Examinations Management',
        description: 'Exam scheduling, hall ticket generation, invigilation duty roster, and seating plans.',
        icon: 'ClipboardList',
        badge: 'Comprehensive',
        features: ['Seating arrangement generator', 'Digital hall tickets with QR verification', 'Invigilator assignment engine'],
      },
      {
        id: 'as-results',
        name: 'Results & Marks Evaluation',
        description: 'Internal assessment tabulation, external examiner marks entry, and double-blind grading.',
        icon: 'FileSpreadsheet',
        badge: 'Encrypted Entry',
        features: ['Continuous evaluation entry', 'Grace mark rules & moderation', 'Re-evaluation management'],
      },
      {
        id: 'as-grades',
        name: 'Grading & GPA Engine',
        description: 'Configurable absolute & relative grading scales, SGPA/CGPA formulas, and rank calculation.',
        icon: 'Percent',
        badge: 'Automated',
        features: ['UGC / AICTE grading conformity', 'Automated backlog tracking', 'Class rank determination'],
      },
      {
        id: 'as-tracking',
        name: 'Performance Analytics',
        description: 'Longitudinal student learning curve tracking with subject-wise strength and gap analysis.',
        icon: 'Activity',
        badge: 'Actionable',
        features: ['Outcome attainment matrix', 'Cohort comparison graphs', 'Individual progress reports'],
      },
    ],
  },
  {
    id: 'finance',
    name: 'Finance & Administration',
    tagline: 'Fee structures, online collections, accounting, and audits',
    icon: 'DollarSign',
    modules: [
      {
        id: 'fin-fees',
        name: 'Fees & Finance Setup',
        description: 'Flexible fee structures customized by program, semester, category, scholarship, or hostel.',
        icon: 'Receipt',
        badge: 'Dynamic Rules',
        features: ['Multi-installment payment plans', 'Scholarship deduction logic', 'Late fee penalty calculation'],
      },
      {
        id: 'fin-payments',
        name: 'Online Payment Gateway',
        description: 'Seamless integration with cards, UPI, net banking, and automatic bank reconciliation.',
        icon: 'CreditCard',
        badge: 'Instant Receipt',
        features: ['Multi-gateway support', 'Automated instant fee receipts', 'Zero-reconciliation ledger'],
      },
      {
        id: 'fin-reports',
        name: 'Financial Reports & Ledger',
        description: 'Real-time dues reports, collection summaries, defaulter lists, and accounting integration.',
        icon: 'PieChart',
        badge: 'Audited',
        features: ['Defaulter automated SMS alerts', 'Daily collection statement', 'Tally & ERP export format'],
      },
    ],
  },
  {
    id: 'services',
    name: 'Campus Services',
    tagline: 'Hostel, facilities, communications, and emergency alerts',
    icon: 'Building',
    modules: [
      {
        id: 'srv-hostel',
        name: 'Hostel & Housing Management',
        description: 'Room allocation, mess billing, warden night-pass permissions, and maintenance tickets.',
        icon: 'Home',
        badge: 'Facility Hub',
        features: ['Visual room grid & bed allocation', 'Digital gate pass approval', 'Mess billing integration'],
      },
      {
        id: 'srv-comms',
        name: 'Campus Communications',
        description: 'Targeted broadcast engine across email, SMS, mobile push, and department noticeboards.',
        icon: 'Megaphone',
        badge: 'Instant Reach',
        features: ['Audience segmentation (batch/branch)', 'Automated event alerts', 'Read receipt analytics'],
      },
      {
        id: 'srv-events',
        name: 'Events & Workshop Planner',
        description: 'Campus symposiums, guest lectures, extracurricular registration, and certificate distribution.',
        icon: 'Sparkles',
        badge: 'Interactive',
        features: ['Digital registration desk', 'Attendance barcode scan', 'Automated certificates of participation'],
      },
      {
        id: 'srv-notifications',
        name: 'Smart Notification Engine',
        description: 'Rules-based trigger system delivering proactive alerts for fees, attendance shortfalls, and dates.',
        icon: 'BellRing',
        badge: 'Proactive',
        features: ['Custom institutional triggers', 'Multi-channel delivery', 'Audit trail for critical notices'],
      },
    ],
  },
  {
    id: 'analytics',
    name: 'Analytics & Intelligence',
    tagline: 'Executive leadership dashboards and institutional intelligence',
    icon: 'TrendingUp',
    modules: [
      {
        id: 'an-dashboard',
        name: 'Executive Leadership Dashboard',
        description: 'High-level KPI cockpit for vice-chancellors, principals, directors, and trustees.',
        icon: 'LayoutDashboard',
        badge: 'Executive View',
        features: ['Consolidated campus health score', 'Real-time admissions vs target tracking', 'Resource utilization metrics'],
      },
      {
        id: 'an-reports',
        name: 'Institutional Compliance Reports',
        description: 'One-click generation of statutory data for NAAC, NIRF, NBA, and regional accreditation.',
        icon: 'FileCheck',
        badge: 'Accreditation',
        features: ['Pre-built NIRF / NAAC templates', 'Departmental research output metrics', 'Faculty-to-student ratio reports'],
      },
      {
        id: 'an-insights',
        name: 'Operational & Predictive Insights',
        description: 'Machine learning forecasts for student dropouts, elective demand, and facility capacity.',
        icon: 'BrainCircuit',
        badge: 'Predictive',
        features: ['Elective course demand forecasting', 'Library & lab peak load analysis', 'Student retention indicators'],
      },
    ],
  },
];

// ==========================================
// 5. HOW EDUNEXUS CONNECTS THE CAMPUS (LIFECYCLE)
// ==========================================
export const LIFECYCLE_HEADER = {
  badge: 'CONNECTED DATA FLOW',
  heading: 'How Edunexus Connects the Campus',
  subheading:
    'Information flows effortlessly across departments without requiring anyone to operate in disconnected silos. One student record powers the entire institutional lifecycle.',
};

export const LIFECYCLE_STEPS: LifecycleStage[] = [
  {
    step: 1,
    id: 'enquiry',
    name: 'Enquiry',
    department: 'Marketing & Outreach',
    description: 'Prospective students register interest through campus events, website forms, or educational fairs.',
    dataTransferred: 'Lead captured, auto-assigned to admissions counselor with initial program preference.',
    icon: 'HelpCircle',
  },
  {
    step: 2,
    id: 'application',
    name: 'Application',
    department: 'Admissions Office',
    description: 'Candidate submits entrance scores, personal records, and verified academic transcripts online.',
    dataTransferred: 'Digital dossier verified; eligibility criteria validated against program requirements.',
    icon: 'FileEdit',
  },
  {
    step: 3,
    id: 'admission',
    name: 'Admission',
    department: 'Academic Committee',
    description: 'Merit list ranking, seat allocation across categories, and formal provisional offer letters.',
    dataTransferred: 'Offer acceptance recorded, seat reservation locked in institutional database.',
    icon: 'CheckCircle',
  },
  {
    step: 4,
    id: 'registration',
    name: 'Registration',
    department: 'Registrar & Finance',
    description: 'First installment fee clearance, permanent registration number (PRN) allocation, and student ID issuance.',
    dataTransferred: 'Official student master record generated; portal credentials dispatched automatically.',
    icon: 'BadgeCheck',
  },
  {
    step: 5,
    id: 'academics',
    name: 'Academics',
    department: 'Faculty & Department',
    description: 'Course enrollment, section distribution, syllabus delivery, and digital lecture notes.',
    dataTransferred: 'Student enrolled in course groups; timetable and faculty assignments activated on student portal.',
    icon: 'BookOpen',
  },
  {
    step: 6,
    id: 'attendance',
    name: 'Attendance',
    department: 'Daily Operations',
    description: 'Biometric, RFID, or mobile attendance recorded with instant parental threshold monitoring.',
    dataTransferred: 'Daily attendance aggregated into cumulative eligibility for midterm and final exams.',
    icon: 'Clock',
  },
  {
    step: 7,
    id: 'examination',
    name: 'Examination',
    department: 'Controller of Exams',
    description: 'Exam scheduling, conflict-free hall tickets with QR security, and invigilation rosters.',
    dataTransferred: 'Exam clearance granted based on attendance & fee status; seating barcode printed.',
    icon: 'ClipboardCheck',
  },
  {
    step: 8,
    id: 'results',
    name: 'Results',
    department: 'Evaluation Division',
    description: 'Continuous internal assessment compilation, external examiner evaluation, and GPA calculations.',
    dataTransferred: 'Transcripts generated; credit points updated in institutional academic bank of credits.',
    icon: 'FileSpreadsheet',
  },
  {
    step: 9,
    id: 'graduation',
    name: 'Graduation',
    department: 'Alumni & Convocation',
    description: 'Clearance sign-offs, degree conferral, cryptographically verifiable certificates, and alumni onboarding.',
    dataTransferred: 'Tamper-proof digital credentials minted; student seamlessly transitioned to alumni directory.',
    icon: 'GraduationCap',
  },
];

// ==========================================
// 6. DESIGNED FOR EVERY ROLE
// ==========================================
export const ROLES_HEADER = {
  badge: 'PERSONA-OPTIMIZED EXPERIENCES',
  heading: 'Designed for Every Role Across Campus',
  subheading: 'Tailored workspaces for each stakeholder ensuring focused efficiency without operational friction.',
};

export const ROLE_EXPERIENCES: RoleExperience[] = [
  {
    id: 'admins',
    role: 'Administrators',
    tagline: 'Institution-Wide Control, Operations & Compliance',
    summary:
      'Empower administrative staff with unified control over student records, faculty rosters, fee structures, regulatory compliance, and multi-department approvals.',
    kpis: [
      { label: 'Paperwork Reduction', value: '80%' },
      { label: 'Cross-Department Sync', value: 'Instant' },
      { label: 'Compliance Audit Time', value: '-65%' },
    ],
    keyCapabilities: [
      'Comprehensive student master directory with granular history and audit logs',
      'Automated fee structure assignment, concession approval, and overdue notices',
      'Classroom and faculty scheduling with automated conflict resolution',
      'Role-based permissions with tamper-proof institutional access audit trails',
    ],
    mockupTitle: 'Administrator Control Command Center',
    mockupSubtitle: 'System-wide governance, admissions approvals, and departmental oversight',
    primaryAction: 'Explore Admin Console',
  },
  {
    id: 'faculty',
    role: 'Faculty',
    tagline: 'Academic Management, Attendance & Student Growth',
    summary:
      'Give professors and teachers intuitive tools to record attendance, manage syllabi, evaluate assignments, and monitor student academic progression without administrative burden.',
    kpis: [
      { label: 'Grading Time Saved', value: '4.5 hrs/wk' },
      { label: 'Attendance Speed', value: '<60 sec' },
      { label: 'Student Engagement', value: '+35%' },
    ],
    keyCapabilities: [
      'One-tap digital attendance via mobile with instant anomaly detection',
      'Interactive gradebook with automated rubric scoring and outcome mapping',
      'Lesson plan management with syllabus completion velocity indicators',
      'Direct student mentoring channel with private progress feedback notes',
    ],
    mockupTitle: 'Faculty Teaching & Assessment Portal',
    mockupSubtitle: 'Classroom roster, attendance logger, and continuous evaluation gradebook',
    primaryAction: 'View Faculty Workflows',
  },
  {
    id: 'students',
    role: 'Students',
    tagline: 'Schedules, Attendance, Results & Campus Life',
    summary:
      'Deliver a modern, self-service student experience on mobile and web where students check daily timetables, monitor attendance health, submit work, and access credentials.',
    kpis: [
      { label: 'Mobile App Rating', value: '4.9 / 5' },
      { label: 'Self-Service Usage', value: '92%' },
      { label: 'Fee Payment Success', value: '99.4%' },
    ],
    keyCapabilities: [
      'Personalized dynamic schedule showing daily lectures, lab rooms, and faculty',
      'Real-time attendance tracker with proactive shortfall warnings before exams',
      'Instant fee invoice review, multi-channel payment, and downloadable receipts',
      'Official verified marksheet download with tamper-evident cryptographic QR code',
    ],
    mockupTitle: 'Student Self-Service Hub',
    mockupSubtitle: 'Timetable, attendance status, upcoming assignments, and digital ID card',
    primaryAction: 'Inspect Student View',
  },
  {
    id: 'management',
    role: 'Management',
    tagline: 'Institutional Insights, Trends & Strategic Decision-Making',
    summary:
      'Provide vice-chancellors, principals, and governing boards with high-altitude intelligence on admissions velocity, financial liquidity, faculty performance, and accreditation readiness.',
    kpis: [
      { label: 'Decision Latency', value: 'Real-Time' },
      { label: 'Accreditation Ready', value: 'Always' },
      { label: 'Resource Utilization', value: '+28%' },
    ],
    keyCapabilities: [
      'Executive KPI dashboard aggregating multi-campus operational metrics in real-time',
      'Predictive enrollment demand modeling across programs and demographics',
      'Comprehensive financial dashboard tracking billing, collections, and budget variance',
      'Exportable NAAC/NIRF/NBA compliance reports ready for institutional submission',
    ],
    mockupTitle: 'Executive Leadership Cockpit',
    mockupSubtitle: 'Institutional KPI summary, strategic admissions forecasting, and fiscal health',
    primaryAction: 'Review Executive Analytics',
  },
];

// ==========================================
// 7. WHY EDUNEXUS?
// ==========================================
export const WHY_EDUNEXUS_HEADER = {
  badge: 'THE EDUNEXUS ADVANTAGE',
  heading: 'Less Administrative Complexity. More Meaningful Education.',
  subheading:
    'Traditional institutions struggle with fragmented software and disconnected spreadsheets. Edunexus transforms education management into a cohesive, intelligent experience.',
};

export const WHY_EDUNEXUS_FEATURES: WhyFeature[] = [
  {
    id: 'centralized',
    title: 'Centralized Information vs. Fragmented Systems',
    traditional: 'Admissions data in one tool, attendance in another, fees in spreadsheets, results in silos.',
    edunexus: 'A single unified database where every department accesses synchronized, real-time student master records.',
    icon: 'Database',
    impactBadge: 'Zero Duplication',
  },
  {
    id: 'connected-workflows',
    title: 'Connected Workflows vs. Repetitive Processes',
    traditional: 'Staff re-enter student details at admission, exam registration, hostel booking, and convocation.',
    edunexus: 'Data flows automatically across every stage without re-entry, saving hundreds of administrative staff hours.',
    icon: 'GitBranch',
    impactBadge: '75% Time Saved',
  },
  {
    id: 'visibility',
    title: 'Real-Time Visibility vs. Delayed Monthly Reports',
    traditional: 'Leadership waits weeks for compiled spreadsheets to understand attendance shortfalls or fee arrears.',
    edunexus: 'Live executive dashboards provide instant situational awareness across every department with drill-down metrics.',
    icon: 'Eye',
    impactBadge: 'Live Telemetry',
  },
  {
    id: 'organized-records',
    title: 'Organized Records vs. Scattered Paper Files',
    traditional: 'Lost physical documents, misplaced fee counterfoils, and untraceable academic credentials.',
    edunexus: 'Encrypted cloud document vault with instant cryptographic verification for transcripts and certificates.',
    icon: 'FolderLock',
    impactBadge: '100% Audit Ready',
  },
  {
    id: 'simplified-ops',
    title: 'Simplified Operations vs. Multi-Portal Confusion',
    traditional: 'Students and faculty juggle 5 different logins with forgotten passwords and clunky interfaces.',
    edunexus: 'One elegant, role-optimized portal accessible seamlessly across desktop, tablet, and mobile browsers.',
    icon: 'Smartphone',
    impactBadge: 'Single Sign-On',
  },
  {
    id: 'stakeholder-experience',
    title: 'Connected Experience vs. Communication Gaps',
    traditional: 'Parents uninformed about attendance, students missing deadlines, faculty disconnected from admin.',
    edunexus: 'Unified communication engine with multi-channel alerts (SMS, Email, Push) keeping everyone aligned.',
    icon: 'HeartHandshake',
    impactBadge: '360° Alignment',
  },
];

// ==========================================
// 8. PRODUCT SHOWCASE DATA
// ==========================================
export const SHOWCASE_HEADER = {
  badge: 'INTERACTIVE PRODUCT TOUR',
  heading: 'The Platform in Action',
  subheading: 'Experience the clean, intuitive interfaces designed for real educational environments.',
};

export const PRODUCT_SHOWCASE_TABS: ShowcaseTab[] = [
  {
    id: 'directory',
    name: 'Student Directory',
    subtitle: 'Comprehensive student profile, enrollment tracking, and active status',
    icon: 'Users',
    badge: 'Core Module',
    description: 'Instant search, category filters, academic standing, and contact details in one synchronized directory.',
    previewData: {
      headers: ['Roll / PRN', 'Student Name', 'Program', 'Semester', 'Attendance', 'Status'],
      rows: [
        ['NX-2026-081', 'Aarav Patel', 'B.Tech Computer Science', 'Sem IV', '96.4%', 'Active'],
        ['NX-2026-114', 'Diya Sengupta', 'M.Tech Data Engineering', 'Sem II', '92.8%', 'Active'],
        ['NX-2026-205', 'Rohan Sharma', 'B.Sc Cyber Security', 'Sem VI', '88.5%', 'Active'],
        ['NX-2026-319', 'Ananya Iyer', 'BBA Management', 'Sem II', '98.2%', 'Active'],
        ['NX-2026-442', 'Kabir Verma', 'B.Tech AI & Robotics', 'Sem IV', '74.2%', 'Warning'],
      ],
      summaryStats: [
        { label: 'Total Enrolled', value: '18,420' },
        { label: 'Active Roster', value: '99.2%' },
        { label: 'Pending Review', value: '14' },
      ],
    },
  },
  {
    id: 'attendance',
    name: 'Attendance Tracking',
    subtitle: 'Live session-wise and monthly attendance telemetry across departments',
    icon: 'CheckCircle2',
    badge: 'Sensor Ready',
    description: 'Real-time biometric and faculty digital registers with automated threshold checks and parent alerts.',
    previewData: {
      headers: ['Course Code', 'Subject Name', 'Faculty In-Charge', 'Present / Total', 'Daily %', 'Alert Status'],
      rows: [
        ['CS-401', 'Distributed Systems', 'Dr. Ramesh Kumar', '58 / 62', '93.5%', 'Normal'],
        ['AI-302', 'Machine Learning Labs', 'Prof. Priya Nair', '44 / 45', '97.7%', 'Normal'],
        ['CY-501', 'Network Defense & SOC', 'Er. Kunal Sharma', '51 / 55', '92.7%', 'Normal'],
        ['BA-204', 'Corporate Governance', 'Dr. Sunita Rao', '38 / 50', '76.0%', 'Shortfall Warning'],
      ],
      summaryStats: [
        { label: 'Today Attendance', value: '94.8%' },
        { label: 'Batches Logged', value: '142 / 144' },
        { label: 'Parent Notices Sent', value: '18' },
      ],
    },
  },
  {
    id: 'admissions',
    name: 'Admissions Pipeline',
    subtitle: 'Real-time prospective applicant intake and verification pipeline',
    icon: 'FileText',
    badge: 'Fall 2026',
    description: 'Track applicant conversion from enquiry to document verification and seat allocation.',
    previewData: {
      headers: ['Application ID', 'Candidate Name', 'Target Program', 'Entrance Score', 'Docs Verified', 'Stage'],
      rows: [
        ['ADM-26-9041', 'Tanvi Mehta', 'B.Tech CS & AI', '98.4 %ile', 'Verified', 'Seat Offered'],
        ['ADM-26-9042', 'Aditya Joshi', 'B.Tech Cybersecurity', '94.2 %ile', 'Verified', 'Merit Listed'],
        ['ADM-26-9043', 'Sanya Kapoor', 'MBA Business Analytics', '91.0 %ile', 'Under Review', 'Interview Scheduled'],
        ['ADM-26-9044', 'Vikram Singh', 'B.Sc Data Science', '87.5 %ile', 'Pending Docs', 'Action Required'],
      ],
      summaryStats: [
        { label: 'Applications Received', value: '3,140' },
        { label: 'Offers Released', value: '1,280' },
        { label: 'Seats Confirmed', value: '890' },
      ],
    },
  },
  {
    id: 'fees',
    name: 'Fee Management',
    subtitle: 'Transparent fee collections, automated invoicing, and digital receipts',
    icon: 'CreditCard',
    badge: 'Reconciled',
    description: 'Dynamic installment schedules, scholarship discounts, and real-time bank reconciliation.',
    previewData: {
      headers: ['Invoice #', 'Student Name', 'Fee Component', 'Amount Due', 'Status', 'Payment Mode'],
      rows: [
        ['INV-26-1044', 'Aarav Patel', 'Semester IV Tuition', '₹ 65,000', 'Paid', 'UPI Instant'],
        ['INV-26-1045', 'Diya Sengupta', 'Hostel & Mess Term II', '₹ 42,000', 'Paid', 'Net Banking'],
        ['INV-26-1046', 'Rohan Sharma', 'Exam & Laboratory Fee', '₹ 12,500', 'Paid', 'Credit Card'],
        ['INV-26-1047', 'Kabir Verma', 'Semester IV Tuition', '₹ 65,000', 'Overdue', 'Reminder Dispatched'],
      ],
      summaryStats: [
        { label: 'Total Reconciled', value: '96.2%' },
        { label: 'Auto-Receipts Issued', value: '12,410' },
        { label: 'Outstanding Balance', value: '3.8%' },
      ],
    },
  },
  {
    id: 'timetable',
    name: 'Smart Timetable',
    subtitle: 'Conflict-free classroom allocation and faculty scheduling matrix',
    icon: 'Calendar',
    badge: 'Optimized',
    description: 'AI-assisted schedule builder ensuring zero faculty overlap and maximum room utilization.',
    previewData: {
      headers: ['Time Slot', 'Hall / Lab', 'Course / Subject', 'Faculty', 'Capacity', 'Status'],
      rows: [
        ['09:00 - 10:30', 'Lecture Hall A-101', 'Advanced Algorithms (CS-401)', 'Dr. R. Kumar', '60 / 65', 'Occupied'],
        ['10:45 - 12:15', 'Lab Block C-204', 'Cloud Infrastructure Lab', 'Er. K. Sharma', '40 / 40', 'Occupied'],
        ['01:15 - 02:45', 'Auditorium West', 'Guest Keynote: Agentic AI', 'Industry Speaker', '180 / 200', 'Scheduled'],
        ['03:00 - 04:30', 'Seminar Hall B', 'Faculty Department Meeting', 'Dean & Faculty', '25 / 30', 'Scheduled'],
      ],
      summaryStats: [
        { label: 'Classroom Utilization', value: '91.4%' },
        { label: 'Faculty Collisions', value: '0 (Guaranteed)' },
        { label: 'Weekly Slots', value: '420' },
      ],
    },
  },
];

// ==========================================
// 9. FAQ SECTION DATA
// ==========================================
export const FAQ_HEADER = {
  badge: 'FREQUENTLY ASKED QUESTIONS',
  heading: 'Everything You Need to Know About Edunexus',
  subheading: 'Clear, direct answers about platform capabilities, integration, and deployment.',
};

export const EDUNEXUS_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Overview',
    question: 'What is Edunexus?',
    answer:
      'Edunexus is an enterprise-grade Education Management System (ERP and LMS) designed to unify campus administration, academic scheduling, student lifecycles, examinations, fee collection, and institutional intelligence within one integrated, secure cloud platform.',
  },
  {
    id: 'faq-2',
    category: 'Audience',
    question: 'Who can use Edunexus?',
    answer:
      'Edunexus is architected for higher education institutions, universities, autonomous colleges, polytechnics, and multi-campus school networks. It provides role-optimized interfaces for campus administrators, faculty members, students, parents, and executive leadership.',
  },
  {
    id: 'faq-3',
    category: 'Architecture',
    question: 'Does Edunexus support multiple departments?',
    answer:
      'Yes. Edunexus features native multi-department, multi-faculty, and multi-campus hierarchy. Departments maintain autonomous course management, attendance rosters, and grading scales while institutional leadership maintains centralized governance, consolidated analytics, and synchronized student records.',
  },
  {
    id: 'faq-4',
    category: 'Scope',
    question: 'Which institutional processes can be managed?',
    answer:
      'Edunexus manages the complete institutional spectrum: student enquiry and CRM, online admissions and merit lists, curriculum planning and smart timetables, biometric and mobile attendance, examination scheduling, grading and CGPA generation, fee structures and online payments, hostel management, campus notices, and statutory accreditation reporting (e.g. NAAC, NIRF).',
  },
  {
    id: 'faq-5',
    category: 'Portals',
    question: 'Can students and faculty access their own dashboards?',
    answer:
      'Yes. Both students and faculty receive dedicated self-service portals. Faculty can manage daily attendance, lesson plans, assignments, and gradebooks. Students can monitor their timetable, attendance percentage, fee dues, exam admit cards, and digital transcripts from any web browser or mobile device.',
  },
  {
    id: 'faq-6',
    category: 'Accessibility',
    question: 'Is Edunexus accessible on mobile devices?',
    answer:
      'Yes. Edunexus is built with a responsive, mobile-first design architecture. All portals — including student schedules, faculty attendance marking, and administrator emergency broadcasts — adapt seamlessly across smartphones, tablets, laptops, and wide-screen classroom displays.',
  },
  {
    id: 'faq-7',
    category: 'Impact',
    question: 'How does Edunexus simplify campus management?',
    answer:
      'Edunexus replaces disconnected spreadsheets, redundant paper forms, and fragmented software tools with a single source of truth. By automating repetitive administrative handoffs — such as admission-to-enrollment, attendance-to-exam eligibility, and grading-to-transcripts — it cuts operational overhead by up to 75% and eliminates human data entry errors.',
  },
];

// ==========================================
// 10. FINAL CONVERSION SECTION DATA
// ==========================================
export const FINAL_CTA_DATA = {
  headline: 'Your Institution Deserves a Smarter Way Forward.',
  supportingCopy:
    'Bring your academic, administrative, and campus operations together with Edunexus. Discover a more connected approach to managing education.',
  primaryCta: {
    label: 'Explore Edunexus',
    href: '#modules',
  },
  secondaryCta: {
    label: 'Get in Touch',
    action: 'openDemoModal',
  },
  badges: ['Cloud Native', 'Accreditation Ready', 'Role-Based Security', 'Zero Data Silos'],
};

// ==========================================
// 11. FOOTER CONFIGURATION DATA
// ==========================================
export const FOOTER_CONFIG = {
  brand: {
    name: 'EDUNEXUS',
    tagline: 'Connecting education. Simplifying operations. Empowering growth.',
    description:
      'Edunexus brings institutional operations, academic processes, and campus experiences together through a connected digital platform designed for modern education.',
  },
  columns: [
    {
      title: 'Platform',
      links: [
        { label: 'Overview', href: '#overview' },
        { label: 'Solutions', href: '#solutions' },
        { label: 'Modules', href: '#modules' },
        { label: 'Features', href: '#why-edunexus' },
      ],
    },
    {
      title: 'Institution',
      links: [
        { label: 'Academic Management', href: '#modules' },
        { label: 'Student Management', href: '#roles' },
        { label: 'Administration', href: '#roles' },
        { label: 'Analytics & Intelligence', href: '#solutions' },
      ],
    },
    {
      title: 'Explore',
      links: [
        { label: 'About Edunexus', href: '#solutions' },
        { label: 'Contact', href: '/contact' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Request a Demo', href: '#demo', action: 'openDemoModal' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'admissions@edunexus.io', href: 'mailto:admissions@edunexus.io', isEmail: true },
        { label: 'support@edunexus.io', href: 'mailto:support@edunexus.io', isEmail: true },
        { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
        { label: 'GitHub Repository', href: 'https://github.com/Kunnalcodes/Edunexus', external: true },
      ],
    },
  ] as FooterColumn[],
  copyright: `© ${new Date().getFullYear()} Edunexus Educational Systems. All rights reserved.`,
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Settings', href: '/cookie-settings' },
  ],
};
