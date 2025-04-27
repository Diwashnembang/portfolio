import { NavBar } from "./NavBar";
import { Github, Linkedin, Mail } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('loading');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_JS_API_KEY
      );

      setStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <>
      <div className="font-secondary mx-3.5 md:mx-20">
        <NavBar className={"font-primary"}></NavBar>
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Social Links Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-800 mb-8">Let's Connect</h2>
            <ul className="flex justify-center gap-6 items-center">
              <li>
                <a href="mailto:diwashnembang2@gmail.com"
                   className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300">
                  <Mail className="w-[22px] h-[22px] md:w-7 md:h-7" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Diwashnembang" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300">
                  <Github className="w-6 h-6 md:w-8 md:h-8" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/diwash-nembang-a06767229/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300">
                  <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="max-w-xl mx-auto">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="from_email" className="block text-base font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="from_email"
                  className="w-full px-4 py-2 text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors duration-300"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <div className="space-y-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full md:w-auto px-6 py-3 text-base font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="text-green-600 font-medium">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 font-medium">Failed to send message. Please try again.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}