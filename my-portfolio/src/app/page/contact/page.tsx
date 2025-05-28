"use client";

import { motion } from "framer-motion";
import BasicLayout from "@/components/BasicLayout";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

import {
  contactInfo,
  formFields,
} from "@/app/portfolio-content/contact-content";

emailjs.init("M5qXOrar-RdGHXDzY");

export default function Contact() {
  interface ContactForm {
    name: string;
    email: string;
    message: string;
  }

  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setContactForm((prevContactFormData) => ({
      ...prevContactFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: contactForm.name,
      email: contactForm.email,
      message: contactForm.message,
    };

    emailjs.send("service_ic0bzb5", "template_9h4ofh3", templateParams).then(
      (response) => {
        setIsSubmitting(false);

        toast.success("Message sent Successfully", {
          icon: <FiCheckCircle className="text-emerald-500" />,
        });
        setContactForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (err) => {
        setIsSubmitting(false);
        toast.error("Failed to send message. Please try again.", {
          icon: <FiXCircle className="text-red-500" />,
        });
      }
    );
  };

  return (
    <BasicLayout>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 pt-18">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or want to work together? Get in touch!
          </p>
        </motion.div>

        {/* Content Wrapper */}
        <div className="bg-gray-50 rounded-2xl shadow-sm p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-gray-800">
                Send us a message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {formFields.map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.id}
                        value={contactForm[field.id as keyof ContactForm] || ""}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 placeholder-gray-500"
                        placeholder={field.placeholder}
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        value={contactForm[field.id as keyof ContactForm] || ""}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 placeholder-gray-500"
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:shadow-lg transition-all hover:scale-105"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>

            {/* Right - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-semibold text-gray-800">
                Contact Information
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-full text-emerald-600">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="pt-4">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.538343045158!2d-122.4199066846824!3d37.77492997975938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}
