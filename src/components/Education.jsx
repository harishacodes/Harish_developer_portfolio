const CERTS = [
  { org:'GUVI', name:'Build Your Own Ticketing App in a Week' },
  { org:'Learnz Development Hub', name:'First Step into Frontend Development with AI' },
  { org:'Cognitive Class.ai', name:'Python for Data Science', },
  { org:'Accenture', name:'Data Analytics and Visualization Job Simulation',},
  { org:'In Progress', name:'Pursuing Node.js / React advanced certification', muted:true },
]

export default function Education() {
  return (
    <section id="edu-cert">
      <div className="section-header">
        <span className="section-num">06</span>
        <h2 className="section-title">Education</h2>
        <div className="section-line"></div>
      </div>
      <div className="edu-cert-grid">
        <div>
          <div className="edu-card">
            <div className="edu-tag">// Degree</div>
            <div className="edu-degree">Bachelor of Computer Applications (BCA)</div>
            <div className="edu-college">Shanmuga Industries Arts &amp; Science College</div>
            <div className="edu-meta">📍 India · Jun 2023 – May 2026</div>
            <div className="edu-meta" style={{ color:'var(--amber)', marginTop:'4px' }}>🎓 Final Year</div>
            <div className="edu-cgpa">8.0</div>
            <div className="edu-cgpa-label">CGPA / 10.0</div>
          </div>
          <div className="edu-card">
            <div className="edu-tag">// Online Profiles</div>
            <div style={{ display:'flex', flexDirection:'column', gap:'13px', marginTop:'4px' }}>
              {[
                { href:'https://github.com/harishacodes', label:'⌥  github.com/Harishcodes' },
                { href:'https://www.linkedin.com/in/harish-a-496753305/', label:'in  linkedin.com/in/HARISH_A' },
                { href:'#', label:'🌐  Harishtech (Portfolio)' },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                  style={{ textDecoration:'none', color:'var(--white)', fontSize:'12.5px', transition:'color .2s' }}
                  onMouseOver={e => e.currentTarget.style.color='var(--cyan)'}
                  onMouseOut={e => e.currentTarget.style.color='var(--white)'}
                >{l.label}</a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div style={{ fontSize:'9.5px', letterSpacing:'.28em', textTransform:'uppercase', color:'var(--pink)', marginBottom:'20px' }}>// Certifications</div>
          <div className="cert-list">
            {CERTS.map(c => (
              <div key={c.name} className="cert-card" style={c.muted ? { borderStyle:'dashed', opacity:.55 } : {}}>
                <div className="cert-org" style={c.muted ? { color:'var(--gray)' } : {}}>{c.org}</div>
                <div className="cert-name" style={c.muted ? { color:'var(--gray)' } : {}}>{c.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
