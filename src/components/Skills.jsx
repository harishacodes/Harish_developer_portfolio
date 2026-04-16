import { useState, useEffect, useRef } from 'react'

const CIRC = 2 * Math.PI * 42

const TABS = [
  {
    key: 'frontend', label: '⚡ Frontend',
    skills: [
      { icon:'🌐', name:'HTML & CSS',    sub:'Core Web',      pct:92, cls:'rc-cyan'   },
      { icon:'⚡', name:'JavaScript',    sub:'ES6+',          pct:80, cls:'rc-pink'   },
      { icon:'⚛',  name:'React.js',      sub:'Component UI',  pct:85, cls:'rc-cyan'   },
      { icon:'🎨', name:'Tailwind CSS',  sub:'Utility-First', pct:88, cls:'rc-amber'  },
      { icon:'🅱',  name:'Bootstrap',     sub:'CSS Framework', pct:76, cls:'rc-purple' },
      { icon:'📱', name:'Responsive',    sub:'Mobile-First',  pct:70, cls:'rc-green'  },
    ]
  },
  {
    key: 'backend', label: '⚙ Backend',
    skills: [
      { icon:'🐍', name:'Python',        sub:'Flask/Scripts', pct:76, cls:'rc-amber'  },
      { icon:'🟢', name:'Node.js',       sub:'Server Side',   pct:68, cls:'rc-green'  },
      { icon:'🔗', name:'REST API',      sub:'API Design',    pct:74, cls:'rc-cyan'   },
      { icon:'🗄',  name:'MySQL',         sub:'Relational DB', pct:68, cls:'rc-pink'   },
      { icon:'🤖', name:'Gemini AI API', sub:'AI Integration',pct:72, cls:'rc-purple' },
      { icon:'🍃', name:'MongoDB',       sub:'NoSQL·Learning',pct:65, cls:'rc-amber'  },
    ]
  },
  {
    key: 'tools', label: '🛠 Tools & Design',
    skills: [
      { icon:'🐙', name:'Git & GitHub', sub:'Version Control',pct:82, cls:'rc-pink'   },
      { icon:'🎨', name:'Figma',        sub:'UI Design',       pct:76, cls:'rc-purple' },
      { icon:'🖼',  name:'Photoshop',   sub:'Image Editing',   pct:65, cls:'rc-cyan'   },
      { icon:'💼', name:'MS Office',   sub:'Productivity',    pct:80, cls:'rc-green'  },
      { icon:'🔍', name:'Debugging',   sub:'Dev Tools',       pct:78, cls:'rc-amber'  },
    ]
  }
]

const PILLS = ['HTML','CSS','JavaScript','React.js','Tailwind CSS','Bootstrap','Python','Flask','Node.js','MySQL','REST API','Gemini AI API','Git','GitHub','Figma','Photoshop']

function RingCard({ icon, name, sub, pct, cls, animate }) {
  const offset = animate ? CIRC - (pct / 100) * CIRC : CIRC
  return (
    <div className={`ring-card ${cls}`}>
      <div className="ring-wrap">
        <svg className="ring-svg" viewBox="0 0 96 96">
          <circle className="ring-track" cx="48" cy="48" r="42" />
          <circle
            className="ring-fill" cx="48" cy="48" r="42"
            style={{
              strokeDasharray: CIRC,
              strokeDashoffset: offset,
              transition: animate ? 'stroke-dashoffset 1.4s cubic-bezier(.25,.46,.45,.94)' : 'none'
            }}
          />
        </svg>
        <div className="ring-label">
          <div className="ring-icon">{icon}</div>
          <div className="ring-pct">{pct}%</div>
        </div>
      </div>
      <div className="ring-name">{name}</div>
      <div className="ring-sub">{sub}</div>
    </div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend')
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimate(true) }, { threshold: 0 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const switchTab = (key) => {
    setAnimate(false)
    setActiveTab(key)
    setTimeout(() => setAnimate(true), 60)
  }

  const current = TABS.find(t => t.key === activeTab)

  return (
    <section id="skills" ref={ref}>
      <div className="section-header">
        <span className="section-num">03</span>
        <h2 className="section-title">Skills</h2>
        <div className="section-line"></div>
      </div>

      <div className="skill-tabs">
        {TABS.map(t => (
          <button key={t.key} className={`skill-tab${activeTab === t.key ? ' active' : ''}`} onClick={() => switchTab(t.key)}>
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      <div className="ring-grid">
        {current.skills.map(s => <RingCard key={s.name} {...s} animate={animate} />)}
      </div>

      <div className="tech-cloud">
        {PILLS.map(p => <div key={p} className="tc-pill"><span>{p}</span></div>)}
      </div>
    </section>
  )
}
