export type Scholar = {
  name: string
  id: string
}

export const scholarUrl = (id: string) =>
  `https://scholar.google.com/citations?user=${id}&hl=en`

export const PROFILE = {
  name: "Muhammad Mahdi Mirzayi",
  role: "Computer Science Student",
  affiliation: "Shahed University of Tehran",
  email: "mahdimirzayi120@gmail.com",
  phone: "(+98) 903-104-3002",
  phoneHref: "+989031043002",
  location: "Khorasan Street, Khorasan Sq., Tehran, Iran",
  social: "M_r_M12",
  cv: "cv/MahdiMirzayi-CV.pdf",
  photo: "myphoto.png",
  lastUpdated: "October 2026",
}

export const SUMMARY =
  "Computer Science graduate of Shahed University (2018–2023) with a strong foundation in algorithms, artificial intelligence, and cybersecurity. Ranked in the top 10% of students, with 20/20 in Artificial Intelligence, 19.5/20 in Algorithms, and national mathematics olympiad qualification in high school. Completed advanced network security and penetration testing training (Security+, Network+, and six SANS courses), placing first in Security+ and second in Network+ at Cando Institute. Experienced in C#, C++, and Python, with MikroTik networking, hardware familiarity, and several software projects delivered to clients. Motivated to pursue research in these areas under academic supervision."

export const NAV_LINKS = [
  { id: "summary", label: "Summary" },
  { id: "education", label: "Education" },
  { id: "coursework", label: "Coursework" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "recommenders", label: "Recommenders" },
]

export const STATS = [
  { value: 10, decimals: 0, prefix: "Top ", suffix: "%", label: "Shahed University of Tehran · 2023" },
  { value: 18.23, decimals: 2, prefix: "", suffix: "", label: "Diploma GPA" },
  { value: 20, decimals: 0, prefix: "", suffix: " / 20", label: "Artificial Intelligence · Dr. Hoorfar" },
  { value: 8, decimals: 0, prefix: "", suffix: "", label: "Professional certificates" },
]

export const PERSONAL = [
  { label: "Date of birth", value: "2000-02-07" },
  { label: "Marital status", value: "Married" },
  { label: "Military service", value: "Educational Exemption" },
]

export const EDUCATION = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Shahed University of Tehran",
    place: "Tehran, Iran",
    years: "2018 — 2023",
    note: null as string | null,
  },
  {
    degree: "Diploma in Mathematics and Physics",
    institution: "Allameh Hali High School of Brilliant Talents 2",
    place: "Tehran, Iran",
    years: "2014 — 2018",
    note: "GPA 18.23",
  },
]

export const COURSES: {
  course: string
  professor: string
  scholarId: string
  score: string
}[] = [
  { course: "Artificial Intelligence", professor: "Dr. Hoorfar", scholarId: "BeV-i0AAAAAJ", score: "20" },
  { course: "Skilled English Language", professor: "Dr. Hoorfar", scholarId: "BeV-i0AAAAAJ", score: "20" },
  { course: "Algorithms", professor: "Dr. Dolati", scholarId: "Vct3ixgAAAAJ", score: "19.5" },
  { course: "Basics of Mathematical Sciences", professor: "Dr. Jafari Rad", scholarId: "6T5RFd0AAAAJ", score: "17.75" },
  { course: "Basics of Matrices and Linear Algebra", professor: "Dr. Jafari Rad", scholarId: "6T5RFd0AAAAJ", score: "17.75" },
]

export const INTERESTS = ["Algorithms", "Artificial Intelligence", "Network / Cyber Security"]

export const SKILLS = [
  { name: "C#", value: 80 },
  { name: "Cybersecurity", value: 80 },
  { name: "Windows Forms", value: 80 },
  { name: "C++", value: 60 },
  { name: "Python", value: 60 },
  { name: "MikroTik", value: 60 },
  { name: "Databases", value: 60 },
  { name: "WPF", value: 60 },
]

export const ADDITIONAL_SKILLS = {
  familiarity: "Microsoft ASP.NET",
  items: [
    "Math olympiad qualifier (2nd year of high school)",
    "Hardware familiarity",
    "Introductory MikroTik networking",
  ],
}

export const CERTIFICATES = [
  { name: "Network+", provider: "Cando Institute", year: "2018" },
  { name: "Security+", provider: "Cando Institute", year: "2019" },
  { name: "SANS Security 560 (Network Security)", provider: "Arjang Institute", year: "2019" },
  { name: "SANS Security 573 (Python Scripting)", provider: "Arjang Institute", year: "2019" },
  { name: "SANS Security 542 (Web Security)", provider: "Arjang Institute", year: "2019" },
  { name: "SANS Security 575", provider: "Arjang Institute", year: "2019" },
  { name: "SANS Security 580 (Metasploit Kung Fu)", provider: "Arjang Institute", year: "2019" },
  { name: "SANS Security 617 (Wireless Security)", provider: "Arjang Institute", year: "2019" },
]

export const EXPERIENCE = [
  {
    role: "Programming Intern",
    company: "Arman Rayan Sharif Co., Tehran, Iran",
    years: "2021",
    details: ["Wrote clean and efficient code using C#"],
  },
]

export const PROJECTS = [
  { title: "Digital Library", meta: "For Dr. Shahriar Bijani · 2018", body: null as string | null },
  { title: "Cloud Storage", meta: "2021", body: null as string | null },
  { title: "Home Agency Software & Database", meta: "2022", body: null as string | null },
  { title: "Freelance C# Projects", meta: "Private clients", body: "Several freelance C# programming projects for private clients" },
]

export const HONORS = [
  { rank: "Top 10%", text: "Top 10% of students, Shahed University of Tehran", year: "2023" },
  { rank: "Qualifier", text: "Qualifier, Math Olympiad", year: "2015" },
  { rank: "1st Place", text: "1st Place, Security+ Course, Cando Institute", year: null as string | null },
  { rank: "2nd Place", text: "2nd Place, Network+ Course, Cando Institute", year: null as string | null },
]

export const LANGUAGES = [
  { skill: "Writing", level: "C1", step: 5 },
  { skill: "Speaking", level: "B2", step: 4 },
  { skill: "Reading", level: "B1", step: 3 },
  { skill: "Listening", level: "B1", step: 3 },
]

export const RECOMMENDERS = [
  { name: "Dr. Haj Seyyed Javadi", scholarId: "E0pspwIAAAAJ" },
  { name: "Dr. Ardeshir Dolati", scholarId: "Vct3ixgAAAAJ" },
]

export const SECTIONS = {
  summary: { index: "01", eyebrow: "Profile", title: "Professional Summary" },
  education: { index: "02", eyebrow: "Academic Background", title: "Education" },
  coursework: { index: "03", eyebrow: "Selected Results", title: "Key Course Scores" },
  research: { index: "04", eyebrow: "Areas of Focus", title: "Research Interests" },
  skills: { index: "05", eyebrow: "Capabilities", title: "Technical Skills" },
  certificates: { index: "06", eyebrow: "Professional Training", title: "Certificates" },
  experience: { index: "07", eyebrow: "Industry", title: "Work Experience" },
  projects: { index: "08", eyebrow: "Selected Work", title: "Projects" },
  honors: { index: "09", eyebrow: "Recognition", title: "Honors & Awards" },
  languages: { index: "10", eyebrow: "English Proficiency", title: "Language Proficiency" },
  recommenders: { index: "11", eyebrow: "Faculty Endorsement", title: "Recommenders" },
} as const
