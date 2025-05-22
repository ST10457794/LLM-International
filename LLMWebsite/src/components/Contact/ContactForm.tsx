import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: '',
    consent: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      consent: e.target.checked
    });
    
    if (errors.consent) {
      setErrors({
        ...errors,
        consent: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    if (!formData.consent) {
      newErrors.consent = 'You must consent to the privacy policy';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          inquiryType: '',
          message: '',
          consent: false
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
      {submitSuccess && (
        <div className="mb-6 p-3 bg-green-100 border border-green-200 text-green-700 rounded">
          Thank you for your inquiry! We'll get back to you shortly.
        </div>
      )}
      
      <div className="mb-6">
        <label htmlFor="name" className="block text-charcoal font-medium mb-2">Full Name</label>
        <input 
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent`}
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-charcoal font-medium mb-2">Email Address</label>
        <input 
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent`}
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
      </div>
      
      <div className="mb-6">
        <label htmlFor="inquiryType" className="block text-charcoal font-medium mb-2">Inquiry Type</label>
        <select 
          id="inquiryType"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          className={`w-full px-4 py-3 border ${errors.inquiryType ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent`}
        >
          <option value="" disabled>Select an option</option>
          <option value="commodity-trading">Commodity Trading</option>
          <option value="investment">Investment Opportunities</option>
          <option value="brokerage">Brokerage Services</option>
          <option value="joint-venture">Joint Venture Proposal</option>
          <option value="other">Other</option>
        </select>
        {errors.inquiryType && <p className="mt-1 text-red-500 text-sm">{errors.inquiryType}</p>}
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-charcoal font-medium mb-2">Your Message</label>
        <textarea 
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent`}
          placeholder="Please describe how we can assist you..."
        />
        {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
      </div>
      
      <div className="mb-6">
        <label className="flex items-center">
          <input 
            type="checkbox"
            checked={formData.consent}
            onChange={handleCheckboxChange}
            className={`w-5 h-5 text-gold focus:ring-gold ${errors.consent ? 'border-red-500' : ''}`}
          />
          <span className="ml-2 text-sm text-charcoal-light">I consent to LLM International processing my data in accordance with the Privacy Policy</span>
        </label>
        {errors.consent && <p className="mt-1 text-red-500 text-sm">{errors.consent}</p>}
      </div>
      
      <button 
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-gold hover:bg-gold-dark text-white font-medium py-3 px-6 rounded-md transition duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
      </button>
    </form>
  );
};

export default ContactForm;