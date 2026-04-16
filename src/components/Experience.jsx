const EXP = [
  {
    date:'May 2025 — Jun 2025',
    role:'Python Full Stack Developer Intern',
    company:'Kaashiv InfoTech · Chennai, India',
    desc:'Completed a 1-month intensive internship covering frontend, backend, and database integration. Built a personal expense tracker using Flask, HTML, CSS, JavaScript, and MySQL with user auth, full CRUD entry, and Chart.js dashboard. Gained hands-on experience with Git, REST API design, and deployment.',
    techs:['Python','Flask','MySQL','HTML/CSS','JavaScript','Chart.js','Git','REST APIs'],
    dot:'var(--cyan)', glow:'var(--cyan)',
  },
{
  date: 'Jul 2025 — Aug 2025',
  role: 'Python Developer Intern',
  company: 'Upskill Campus × UniConverge Technologies Pvt. Ltd. · Remote',
  desc: 'Completed a 6-week intensive Python internship where I developed strong programming and problem-solving skills through hands-on practice and mini projects. Applied Python concepts to build practical solutions, improved debugging and code optimization skills, and followed clean coding practices. Gained real-world exposure to software development workflows in a remote environment.',
  techs: ['Python','Problem Solving','Debugging','Code Optimization','Mini Projects'],
  dot: 'var(--cyan)',
  glow: 'var(--cyan)',
},
 {
  date: 'Jun 2023 — Present',
  role: 'Aspiring Full Stack Developer',
  company: 'Shanmuga Industries Arts & Science College · India',
  desc: 'Balancing academics with hands-on development, I focus on building impactful web applications. Created an AI chatbot powered by Gemini, a responsive personal portfolio, and a Flask-based expense tracker with analytics. Passionate about crafting scalable solutions using React and Node.js while maintaining a consistent 8.0 CGPA.',
  techs: ['React.js','Tailwind CSS','Node.js','Python','Flask','Gemini AI','Figma'],
  dot: 'var(--amber)',
  glow: 'var(--amber)',
},
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-header">
        <span className="section-num">05</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-line"></div>
      </div>
      <div className="timeline">
        {EXP.map((e, i) => (
          <div key={i} className="t-item">
            <div className="t-dot2" style={{ background:e.dot, boxShadow:`0 0 16px ${e.glow}` }}></div>
            <div className="t-date">{e.date}</div>
            <div className="t-role">{e.role}</div>
            <div className="t-company">{e.company}</div>
            <p className="t-desc">{e.desc}</p>
            <div className="t-techs">{e.techs.map(t => <span key={t} className="tt">{t}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
