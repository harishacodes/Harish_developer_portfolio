import { useState } from 'react'
import emailjs from '@emailjs/browser'


const SERVICE_ID  = 'service_f97kb4r'
const TEMPLATE_ID = 'template_vd5o91s'
const PUBLIC_KEY  = 'ZNL_BI0y1TVRh0-Xn'

const LINKS = [
  { href:'mailto:harishcodes07@gmail.com', icon:'✉',  label:'harishcodes07@gmail.com' },
  { href:'tel:+916380240413',              icon:'📱', label:'+91-6380240413' },
  { href:'https://www.linkedin.com/in/harish-a-496753305/', icon:'in', label:'linkedin.com/in/HARISH_A', blank:true },
  { href:'https://github.com/harishacodes',   icon:'⌥', label:'github.com/Harishcodes',   blank:true },
]

export default function Contact() {
  const [form, setForm]     = useState({ from_name:'', from_email:'', subject:'', message:'' })
  const [sending, setSending] = useState(false)
  const [toast, setToast]   = useState({ show:false, type:'', msg:'' })

  const showToast = (type, msg) => {
    setToast({ show:true, type, msg })
    setTimeout(() => setToast({ show:false, type:'', msg:'' }), 4000)
  }

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

const onSend = async () => {
  if (!form.from_name || !form.from_email || !form.message) {
    return showToast('error','⚠ Fill all required fields!');
  }

  setSending(true);

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.from_name,
        from_email: form.from_email,
        subject: form.subject || 'Portfolio Contact',
        message: form.message,
      },
      PUBLIC_KEY
    );

    showToast('success','✅ Message sent!');
    setForm({ from_name:'', from_email:'', subject:'', message:'' });

  } catch (error) {
    console.log(error);
    showToast('error','❌ Failed to send');
  }

  setSending(false);
};

  return (
    <section id="contact">
      {/* Toast */}
      <div className={`toast${toast.show ? ` show ${toast.type}` : ''}`}>{toast.msg}</div>

      <div className="section-header">
        <span className="section-num">07</span>
        <h2 className="section-title">Contact</h2>
        <div className="section-line"></div>
      </div>
      <div className="contact-grid">
        {/* Left */}
        <div className="contact-info">
          <h3>Let's Build<br />Something<br /><span>Great.</span></h3>
          <p>Passionate about building scalable and user-focused web applications. Open to internships, full-time roles, and exciting collaborations — feel free to reach out. Messages go directly to my inbox 📬</p>
          <div className="contact-links">
            {LINKS.map(l => (
              <a key={l.label} href={l.href} target={l.blank ? '_blank' : '_self'} rel="noreferrer" className="c-link">
                <span className="c-icon">{l.icon}</span>{l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-form-wrap">
          <div>
            <div className="form-title">Send a Message</div>
            <div className="form-subtitle">// Delivered to harishcodes07@gmail.com</div>
          </div>
          <div className="f-row">
            <div className="f-group">
              <label className="f-label">Your Name</label>
              <input name="from_name" value={form.from_name} onChange={onChange} className="f-input" placeholder="Your Name" />
            </div>
            <div className="f-group">
              <label className="f-label">Your Email</label>
              <input name="from_email" value={form.from_email} onChange={onChange} className="f-input" placeholder="you@example.com" />
            </div>
          </div>
          <div className="f-group">
            <label className="f-label">Subject</label>
            <input name="subject" value={form.subject} onChange={onChange} className="f-input" placeholder="Job Offer / Project / Collaboration" />
          </div>
          <div className="f-group">
            <label className="f-label">Message</label>
            <textarea name="message" value={form.message} onChange={onChange} className="f-textarea" placeholder="Hi Harish, I'd like to..." />
          </div>
          <button className="btn-send" onClick={onSend} disabled={sending}>
            <span>{sending ? 'Sending...' : 'Send Message'}</span>
            <span>✈</span>
          </button>
        </div>
      </div>
    </section>
  )
}



