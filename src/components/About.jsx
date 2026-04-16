import profileImg from '../assets/harish.png'
export default function About() {
  return (
    <section id="about">
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">About Me</h2>
        <div className="section-line"></div>
      </div>
      <div className="about-grid">

        {/* Left: Photo + Terminal */}
        <div className="about-left">
          <div style={{ display:'flex', justifyContent:'center' }}>
            <div className="profile-photo-ring">
              <div className="profile-photo-inner">
                <img src={profileImg} alt="Harish" style={{width: '150%',height: '125%',borderRadius: '50%',}} />
                <svg viewBox="0 0 180 160" width="120%" height="100%" xmlns="">
                  <defs>
                    <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#001828" />
                      <stop offset="100%" stopColor="#002a40" />
                    </linearGradient>
                    <linearGradient id="body1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00f0ff" stopOpacity=".9" />
                      <stop offset="100%" stopColor="#ff2d78" stopOpacity=".9" />
                    </linearGradient>
                  </defs>
                  <circle cx="80" cy="80" r="80" fill="url(#bg1)" />
                  <ellipse cx="80" cy="130" rx="44" ry="30" fill="url(#body1)" opacity=".85" />
                  <rect x="72" y="90" width="16" height="18" rx="6" fill="#ffcba4" />
                  <circle cx="80" cy="76" r="28" fill="#ffcba4" />
                  <ellipse cx="80" cy="52" rx="28" ry="14" fill="#1a0a00" />
                  <ellipse cx="80" cy="50" rx="24" ry="10" fill="#2a1000" />
                  <circle cx="71" cy="75" r="3.5" fill="#1a0a00" />
                  <circle cx="89" cy="75" r="3.5" fill="#1a0a00" />
                  <circle cx="72.2" cy="73.8" r="1.2" fill="#fff" />
                  <circle cx="90.2" cy="73.8" r="1.2" fill="#fff" />
                  <path d="M66 69 Q71 66 76 69" stroke="#1a0a00" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M84 69 Q89 66 94 69" stroke="#1a0a00" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M72 84 Q80 91 88 84" stroke="#c0785a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <text x="14" y="42" fontFamily="monospace" fontSize="13" fill="rgba(0,240,255,.35)">&lt;/&gt;</text>
                  <text x="118" y="130" fontFamily="monospace" fontSize="11" fill="rgba(255,45,120,.3)">{'{}'}</text>
                </svg>
              </div>
              <div className="profile-status"></div>
            </div>
          </div>

          <div className="about-terminal">
            <div className="t-bar">
              <div className="t-dot"></div><div className="t-dot"></div><div className="t-dot"></div>
              <span className="t-title">harish_profile.json</span>
            </div>
            <div className="t-body">
              <span className="tc">// Resume Data</span><br />
              {'{'}<br />
              &nbsp;&nbsp;<span className="tk">"name"</span>: <span className="ts">"Harish A"</span>,<br />
              &nbsp;&nbsp;<span className="tk">"email"</span>: <span className="ts">"harishcodes07@gmail.com"</span>,<br />
              &nbsp;&nbsp;<span className="tk">"phone"</span>: <span className="ts">"+91-6380240413"</span>,<br />
              &nbsp;&nbsp;<span className="tk">"location"</span>: <span className="ts">"Tiruvannamalai"</span>,<br />
              &nbsp;&nbsp;<span className="tk">"degree"</span>: <span className="ts">"BCA (2023–2026)"</span>,<br />
              &nbsp;&nbsp;<span className="tk">"cgpa"</span>: <span className="tv">8.0</span>,<br />
              &nbsp;&nbsp;<span className="tk">"github"</span>: <span className="ts">"Harishcodes"</span>,<br />
              &nbsp;&nbsp;<span className="tk">"available"</span>: <span className="tv">true</span><br />
              {'}'}<br />
              <span style={{ color:'var(--cyan)' }}>█</span>
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="about-text">
          <h3>From student to<br /><em>builder</em> — one<br />line at a time.</h3>
          <p>I specialize in React.js &amp; Tailwind CSS on the frontend. On the backend I've worked with Python (Flask), Node.js, REST APIs, and MySQL — with real hands-on experience from my internship at Kaashiv InfoTech, Chennai.</p>
          <p>I'm a self-motivated learner who loves turning ideas into working products, actively looking for my first full-time or freelance opportunity.</p>
          <div className="about-stats">
            <div className="stat-card"><div className="stat-num">3+</div><div className="stat-label">Projects Built</div></div>
            <div className="stat-card"><div className="stat-num">8.0</div><div className="stat-label">CGPA</div></div>
            <div className="stat-card"><div className="stat-num">1</div><div className="stat-label">Internship Done</div></div>
            <div className="stat-card"><div className="stat-num">2</div><div className="stat-label">Certifications</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
