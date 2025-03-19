import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600">
            Have questions about our platform or courses? We're here to help you
            on your learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-900">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="w-full" />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help?"
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900 mb-1">
                      Our Location
                    </h4>
                    <p className="text-slate-600">
                      123 Innovation Drive
                      <br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900 mb-1">
                      Email Us
                    </h4>
                    <p className="text-slate-600">info@i4skills.com</p>
                    <p className="text-slate-600">support@i4skills.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900 mb-1">
                      Call Us
                    </h4>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                    <p className="text-slate-600">Mon-Fri, 9am-6pm PST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-600 p-8 rounded-lg text-white mt-8">
              <h4 className="text-xl font-bold mb-4">Office Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
