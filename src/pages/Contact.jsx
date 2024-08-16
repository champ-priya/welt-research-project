import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-200 text-gray-800 py-16 px-6">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center text-green-800 mb-10">
          Contact Us
        </h1>
        <p className="text-xl text-center mb-12 leading-relaxed">
          Have any questions or need assistance? Reach out to us and we'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Contact Information */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-green-700 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-lg">+1 234 567 890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-green-700 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-lg">contact@weltresearch.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-green-700 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-lg">123 Research Drive, Innovation City, USA</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-lg font-semibold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="h-64 md:h-96 w-full bg-green-300 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="map"
            className="w-full h-full"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609907293!2d72.74109984737842!3d19.08219783948848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c8e6e0e3f%3A0x8399cfdd8f5b1f7b!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1620200000132!5m2!1sen!2sus"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;