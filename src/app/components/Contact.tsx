import React from "react";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Let's work together</h2>
          <p className="text-gray-600 text-lg">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1E40FF] text-white py-4 rounded-lg font-medium hover:bg-[#1a35d0] transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-[#1E40FF] to-[#3B82F6] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-2">Email</h4>
                <p className="text-white/80">prince@example.com</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Location</h4>
                <p className="text-white/80">London, United Kingdom</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Availability</h4>
                <p className="text-white/80">Available for freelance & full-time positions</p>
              </div>
              <div className="pt-6">
                <h4 className="text-lg font-medium mb-4">Follow me</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-white/80 hover:text-white transition-colors">Twitter</a>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">LinkedIn</a>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 