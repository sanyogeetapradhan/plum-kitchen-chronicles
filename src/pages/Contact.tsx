import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-[#1f1f1f] to-[#111111] text-white min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-yellow-400 drop-shadow-lg">
          Get in Touch with Us!
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          Have a question, feedback, or simply want to say hello? We're here to help! Drop us a message and one of our team members will get back to you as soon as possible.
        </p>
        
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 text-left">
          <div className="bg-[#1d1d1d] rounded-2xl p-6 shadow-xl border border-gray-800">
            <Mail className="text-yellow-400 w-8 h-8 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-400">For inquiries, feedback, or support, email us at:</p>
            <p className="text-yellow-300">support@plumkitchen.com</p>
          </div>

          <div className="bg-[#1d1d1d] rounded-2xl p-6 shadow-xl border border-gray-800">
            <Phone className="text-yellow-400 w-8 h-8 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-400">Have a quick question? Give us a call at:</p>
            <p className="text-yellow-300">+1 (800) 123-4567</p>
          </div>

          <div className="bg-[#1d1d1d] rounded-2xl p-6 shadow-xl border border-gray-800">
            <MapPin className="text-yellow-400 w-8 h-8 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-400">If you're nearby, feel free to visit us at:</p>
            <p className="text-yellow-300">123 Plum Kitchen Ave, Foodie City</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#1d1d1d] rounded-2xl p-8 shadow-xl border border-gray-800">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Send Us a Message</h2>
          
          <form action="#" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 bg-[#333333] rounded-xl text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 bg-[#333333] rounded-xl text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm text-gray-300 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full p-3 bg-[#333333] rounded-xl text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-yellow-400 text-[#111111] text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Social Media */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Follow us on social media for updates and more:</p>
          <div className="flex justify-center space-x-6">
            <a href="https://twitter.com/plumkitchen" className="text-yellow-400 hover:text-yellow-500">Twitter</a>
            <a href="https://instagram.com/plumkitchen" className="text-yellow-400 hover:text-yellow-500">Instagram</a>
            <a href="https://facebook.com/plumkitchen" className="text-yellow-400 hover:text-yellow-500">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
