import profileImg from '../assets/harish.png'
import portfolioImg from '../assets/portfolio.png'
import chatbotImg from '../assets/Ai-chatbot.png'
import expenseImg from '../assets/Hotel-bill.png'

const PROJECTS = [
  {
    cls: 'p1',
    thumb: portfolioImg, 
    tags: ['HTML','CSS','Tailwind','JS'],
    name: 'Personal Portfolio Website',
    desc: 'Designed and developed a fully responsive personal portfolio with smooth scrolling, contact form, and mobile-first design.',
    live: '#',
    code: 'https://github.com/harishacodes/Portfolio',
  },
  {
    cls: 'p2',
    thumb: chatbotImg, 
    tags: ['Python','Flask','Gemini AI','Tailwind','React Js'],
    name: 'AI Chatbot — Gemini Powered',
    desc: 'Full-stack AI chatbot with HTML/Tailwind frontend and Flask backend using Gemini API for real-time conversations.',
    live: '#',
    code: 'https://github.com/Harishcodes',
  },
  {
    cls: 'p3',
    thumb: expenseImg, 
    tags: ['Javascript','Tailwind Css','React js'],
    name: 'Personal Expense Tracker',
    desc: 'Expense tracker with user authentication, CRUD operations, and React-based data visualization.',
    live: 'https://streetlightbillapp.netlify.app/',
    code: 'https://github.com/harishacodes/Hotel-Bill',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-num">04</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-line"></div>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p, index) => (
          <div key={index} className={`project-card ${p.cls}`}>

            <div className="p-thumb">
              <img src={p.thumb} alt={p.name} />
              
              <div className="p-tags">
                {p.tags.map((t, i) => (
                  <span key={i} className="ptag">{t}</span>
                ))}
              </div>
            </div>

            <div className="p-body">
              <div className="p-name">{p.name}</div>
              <p className="p-desc">{p.desc}</p>

              <div className="p-links">
                <a href={p.live} className="pl pl-live">Live Site</a>
                <a href={p.code} target="_blank" rel="noreferrer" className="pl pl-code">GitHub</a>
              </div>
            </div>

          </div>
        ))}
      </div>

      <div className="coming-soon-box">
        <div>
          <div style={{
            fontSize:'10px',
            letterSpacing:'.25em',
            textTransform:'uppercase',
            color:'var(--amber)',
            marginBottom:'7px'
          }}>
            // In Progress
          </div>

          <div style={{
            fontFamily:'Bebas Neue, sans-serif',
            fontSize:'26px',
            letterSpacing:'.04em'
          }}>
            More Projects Coming Soon
          </div>

          <div style={{
            fontSize:'12px',
            color:'var(--gray)',
            marginTop:'5px'
          }}>
            Building MERN stack & React projects. Follow GitHub for updates.
          </div>
        </div>

        <a
          href="https://github.com/harishacodes"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline"
          style={{ whiteSpace:'nowrap' }}
        >
          GitHub ↗
        </a>
      </div>
    </section>
  )
}