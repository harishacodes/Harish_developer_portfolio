import { useEffect, useRef, useState } from 'react'

const WORDS = ['React.js Developer.','Python Developer.','UI/UX Enthusiast.','Full Stack Builder.','Open to Opportunities.']

export default function Hero() {
  const canvasRef = useRef(null)
  const [typed, setTyped] = useState('')

  // Typewriter effect
  useEffect(() => {
    let wi = 0, ci = 0, del = false, timer
    const type = () => {
      const w = WORDS[wi]
      if (!del) { ci++; setTyped(w.slice(0, ci)); if (ci === w.length) { del = true; timer = setTimeout(type, 1800); return } }
      else { ci--; setTyped(w.slice(0, ci)); if (ci === 0) { del = false; wi = (wi + 1) % WORDS.length } }
      timer = setTimeout(type, del ? 55 : 90)
    }
    timer = setTimeout(type, 600)
    return () => clearTimeout(timer)
  }, [])

  // Particle canvas
  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    let W, H, pts = [], raf
    const resize = () => { W = c.width = window.innerWidth; H = c.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    for (let i = 0; i < 110; i++) pts.push({ x: Math.random() * 3000, y: Math.random() * 1200, vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22, r: Math.random() * 1.4 + .3, a: Math.random() })
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,240,255,${p.a * .5})`; ctx.fill()
      })
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx*dx+dy*dy)
        if (d < 115) { ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.strokeStyle = `rgba(0,240,255,${.1*(1-d/115)})`; ctx.lineWidth = .5; ctx.stroke() }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section id="hero">
      <canvas ref={canvasRef} style={{ position:'absolute', inset:0, zIndex:0, opacity:.40, pointerEvents:'none' }} />

      <div className="code-float" style={{ top:'20%', right:'7%' }}>
        const harish = new Developer();<br/>harish.cgpa = 8.0;<br/>harish.stack = ['React','Python','Node'];<br/>harish.ship();
      </div>
      <div className="code-float cf2" style={{ bottom:'27%', right:'14%' }}>
        @app.route('/hire')<br/>def hire_harish():<br/>&nbsp;&nbsp;return {'{'}'available': True{'}'}
      </div>
      <div className="code-float cf3" style={{ top:'36%', right:'42%', fontSize:'11px', opacity:.30 }}>
        &lt;Harish skills={'{'}['React','Flask']{'}'}  /&gt;
      </div>

      <span className="hero-badge">🎓 Aspiring Full Stack Developer · Turning Ideas Into Code</span>
      <h1 className="hero-name">HARISH <span>A</span></h1>
      <p className="hero-sub">
        Full Stack Developer &nbsp;/&nbsp;
        <span className="typewriter">{typed}</span>
        <span className="cursor-blink">|</span>
      </p>
      <p className="hero-detail">
        📍 <span>Tiruvannamalai, India</span> &nbsp;·&nbsp;
        ✉ <span>harishcodes07@gmail.com</span> &nbsp;·&nbsp;
        📱 <span>+91-6380240413</span>
      </p>
      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">View Projects</a>
        <a href="#contact" className="btn btn-outline">Hire Me</a>
        <a href="https://github.com/harishacodes" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/harish-a-496753305/" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn ↗</a>
      </div>
      <br></br> <br></br>
      <div className="hero-scroll">
        <span>Scroll Down</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}
