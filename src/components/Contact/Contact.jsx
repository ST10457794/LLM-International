import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will contact you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 mining-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-serif text-4xl font-bold mb-4"
          >
            Contact <span className="text-gold">Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-charcoal-light max-w-2xl mx-auto"
          >
            Ready to explore how LLM International can help you achieve your resource management goals? Get in touch with our expert team.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gold mx-auto mt-4"
          ></motion.div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-charcoal font-medium mb-2">Full Name</label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-charcoal font-medium mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="inquiry-type" className="block text-charcoal font-medium mb-2">Inquiry Type</label>
                <select
                  id="inquiry-type"
                  {...register("inquiryType", { required: "Inquiry type is required" })}
                  className={`w-full px-4 py-3 border ${errors.inquiryType ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent`}
                  defaultValue=""
                >
                  <option value="" disabled>Select an option</option>
                  <option value="commodity-trading">Commodity Trading</option>
                  <option value="investment">Investment Opportunities</option>
                  <option value="brokerage">Brokerage Services</option>
                  <option value="joint-venture">Joint Venture Proposal</option>
                  <option value="other">Other</option>
                </select>
                {errors.inquiryType && <p className="text-red-500 text-sm mt-1">{errors.inquiryType.message}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-charcoal font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  {...register("message", { required: "Message is required" })}
                  className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent`}
                  placeholder="Please describe how we can assist you..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("consent", { required: "You must consent to continue" })}
                    className={`w-5 h-5 text-gold ${errors.consent ? 'border-red-500' : ''} focus:ring-gold`}
                  />
                  <span className="ml-2 text-sm text-charcoal-light">
                    I consent to LLM International processing my data in accordance with the Privacy Policy
                  </span>
                </label>
                {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent.message}</p>}
              </div>
              
              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-white font-medium py-3 px-6 rounded-md transition duration-300"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="font-serif text-2xl font-bold mb-6">Our Headquarters</h3>
              
              <div className="mb-8">
                <div className="h-64 bg-gray-200 rounded-lg mb-4 relative overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="400" height="300" fill="#e5e5e5"/>
                    <rect x="50" y="50" width="300" height="200" fill="#d5d5d5"/>
                    <path d="M50,150 L150,100 L250,150 L350,120 L350,250 L50,250 Z" fill="#c5c5c5"/>
                    <rect x="150" y="150" width="100" height="100" fill="#b5b5b5"/>
                    <rect x="175" y="175" width="50" height="50" fill="#a5a5a5"/>
                    <circle cx="200" cy="80" r="20" fill="#C5A028" opacity="0.8"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="bg-white bg-opacity-90 py-2 px-4 rounded text-charcoal font-medium">
                      Interactive Map (Sample)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gold bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal">Johannesburg Office</h4>
                    <p className="text-sm text-charcoal-light">123 Resource Avenue, Sandton, Johannesburg, 2196</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gold bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal">Contact Numbers</h4>
                    <p className="text-sm text-charcoal-light">+27 11 123 4567 (Office)</p>
                    <p className="text-sm text-charcoal-light">+27 82 123 4567 (Mobile)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gold bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal">Email Address</h4>
                    <p className="text-sm text-charcoal-light">info@llminternational.co.za</p>
                    <p className="text-sm text-charcoal-light">support@llminternational.co.za</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gold bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal">Business Hours</h4>
                    <p className="text-sm text-charcoal-light">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-sm text-charcoal-light">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-sm text-charcoal-light">Sunday: Closed</p>
                  </div>
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