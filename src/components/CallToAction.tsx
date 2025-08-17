'use client'
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// Note: ScrollTrigger must be registered in your app's entry file

const CallToAction: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Animate the container
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Stagger animate form elements
      gsap.fromTo(".form-element",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    // (e.g., send data to an API endpoint).
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    setFormData({ fullName: '', email: '', message: '' });
  };

  return (
    <div id='contact' className="w-full  py-20 px-4">
      <div
        ref={containerRef}
        className="max-w-4xl mx-auto  backdrop-blur-lg border border-gray-700 rounded-2xl p-8 md:p-12"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold dark : text-white text-white form-element">Get In Touch</h2>
          <p className="text-gray-400 mt-3 form-element">
            Have a project in mind or just want to say hello? Drop me a line.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-element">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full bg-gray-800/60 border border-gray-600 rounded-lg px-4 py-3 dark : text-white text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
              />
            </div>
            <div className="form-element">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800/60 border border-gray-600 rounded-lg px-4 py-3 dark : text-white text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
              />
            </div>
          </div>

          <div className="form-element">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-gray-800/60 border border-gray-600 rounded-lg px-4 py-3 dark : text-white text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
            ></textarea>
          </div>

          <div className="text-center form-element">
            <button
              type="submit"
              className="bg-cyan-500 dark : text-white text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CallToAction;