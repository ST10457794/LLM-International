import React, { useState } from 'react';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 mining-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4">Contact <span className="text-gold">Us</span></h2>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            Ready to explore how LLM International can help you achieve your resource management goals? Get in touch with our expert team.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <ContactForm />
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
                     Midrand South Africa
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
                    <h4 className="font-medium text-charcoal">Address</h4>
                    <p className="text-charcoal-light">56 Combretum street<br />Midrand Johannesburg, South Africa</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gold bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal">Phone</h4>
                    <p className="text-charcoal-light">+27 79 041 4482</p>
                    <p className="text-charcoal-light">+27 60 894 7352</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gold bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-charcoal">Email</h4>
                    <p className="text-charcoal-light">info@llminternational.com</p>
                    <p className="text-charcoal-light">support@llminternational.com</p>
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