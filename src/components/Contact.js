import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSuccess(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 4000);
    }, 1000);
  };

  return (
    <section>
      <div id="contact">
        <div className="reveal">
          <div className="section-label">
            <span className="section-label-line"></span>
            <span>Contact</span>
          </div>
          <h2 className="section-title">Let's build<br />something<br /><em>amazing</em></h2>
        </div>

        <div className="contact-grid">
          <div className="contact-left reveal">
            <p>Whether you want to collaborate on a project, discuss learning opportunities, or just connect with a fellow developer — my inbox is always open. I try to respond within 24 hours.</p>
            <p style={{marginTop:'12px'}}>Currently seeking <strong style={{color:'var(--neon-cyan)'}}>internship opportunities</strong> and <strong style={{color:'var(--neon-cyan)'}}>collaborative projects</strong>.</p>

            <div className="contact-socials">
              <a href="mailto:shrabantisaha455@gmail.com" className="contact-social-link">
                <svg viewBox="0 0 16 16" fill="none"><rect x="1" y="3" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.2"/><path d="M1 4l7 5 7-5" stroke="currentColor" strokeWidth="1.2"/></svg>
                shrabantisaha455@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/shrabanti-saha-2650a1310" target="_blank" rel="noopener" className="contact-social-link">
                <svg viewBox="0 0 16 16" fill="none"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" fill="currentColor"/></svg>
                linkedin.com/in/shrabanti-saha-2650a1310
              </a>
              <a href="https://github.com/SHRABANTI044" target="_blank" rel="noopener" className="contact-social-link">
                <svg viewBox="0 0 16 16" fill="none"><path d="M8 1C4.13 1 1 4.13 1 8c0 3.09 2 5.72 4.77 6.65.35.06.48-.15.48-.34v-1.17c-1.94.42-2.35-.94-2.35-.94-.32-.81-.78-1.03-.78-1.03-.64-.44.05-.43.05-.43.7.05 1.07.72 1.07.72.63 1.08 1.65.77 2.05.59.06-.46.25-.77.45-.95-1.56-.18-3.2-.78-3.2-3.47 0-.77.27-1.4.72-1.89-.07-.18-.31-.9.07-1.87 0 0 .59-.19 1.93.72a6.71 6.71 0 0 1 3.5 0c1.34-.91 1.93-.72 1.93-.72.38.97.14 1.69.07 1.87.45.49.72 1.12.72 1.89 0 2.7-1.64 3.29-3.2 3.46.25.22.47.65.47 1.31v1.94c0 .19.13.4.48.34A7.01 7.01 0 0 0 15 8C15 4.13 11.87 1 8 1Z" fill="currentColor"/></svg>
                github.com/SHRABANTI044
              </a>
            </div>
          </div>

          <div className="contact-right reveal">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="form-control" 
                  placeholder="Jane Smith" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  className="form-control" 
                  placeholder="jane@company.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  className="form-control" 
                  placeholder="Project Inquiry / Collaboration / ..." 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  className="form-control" 
                  placeholder="Tell me about your project, timeline, or just say hi..." 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
{success && (
                <div className="form-success">
                  ✓ Message sent! I'll get back to you within 24 hours.
                </div>
              )}
              <button type="submit" className="btn-primary form-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send Message'}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
              </button>
              <p className="form-note">No spam, ever. Your email stays private.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
