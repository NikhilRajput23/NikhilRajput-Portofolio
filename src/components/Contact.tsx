
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'nikhilrajput3006@gmail.com',
      link: 'mailto:nikhilrajput3006@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91-7249687023',
      link: 'tel:+917249687023'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'nikhil-rajput-870876288',
      link: 'https://linkedin.com/in/nikhil-rajput-870876288'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'NikhilRajput23',
      link: 'https://github.com/NikhilRajput23'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-16">
            Get In <span className="text-orange-500">Touch</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let's work together
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  I'm always interested in hearing about new opportunities, 
                  challenging projects, and innovative ideas. Whether you have 
                  a project in mind or just want to chat about technology, 
                  feel free to reach out!
                </p>
              </div>

              {/* Contact Links */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-300 group animate-fade-in border border-slate-700 hover:border-orange-500/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-orange-500 group-hover:text-white transition-colors">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">{contact.label}</div>
                      <div className="text-white font-medium">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 transition-colors resize-vertical"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
