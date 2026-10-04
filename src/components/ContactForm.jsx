import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meaejenq';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="cform" onSubmit={handleSubmit}>
      <div className="cform__row">
        <div className="cform__field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required placeholder="Your name" />
        </div>
        <div className="cform__field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" />
        </div>
      </div>

      <div className="cform__field">
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" required placeholder="What's this about?" />
      </div>

      <div className="cform__field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          placeholder="Tell me about your project or opportunity..."
        />
      </div>

      <button
        type="submit"
        className="btn btn--primary btn--lg cform__submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="cform__msg cform__msg--ok">✓ Thanks! Your message is on its way.</p>
      )}
      {status === 'error' && (
        <p className="cform__msg cform__msg--err">
          ✕ Something went wrong. Please email me directly instead.
        </p>
      )}
    </form>
  );
}