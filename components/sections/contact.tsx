"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, GitBranch, Link as LinkIcon, MapPin, Download, Send, Loader2, CheckCircle, XCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Message sent successfully! I\'ll get back to you soon.',
        });
        setFormData({ name: "", email: "", message: "" });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: '' });
        }, 5000);
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aashisacharya60@gmail.com",
      href: "mailto:aashisacharya60@gmail.com",
    },
    {
      icon: GitBranch,
      label: "GitHub",
      value: "github.com/aashis06",
      href: "https://github.com/aashis06",
    },
    {
      icon: LinkIcon,
      label: "LinkedIn",
      value: "ashis-acharya-1499a12a2",
      href: "https://linkedin.com/in/ashis-acharya-1499a12a2",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bhaktapur, Nepal",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Header */}
              <div className="space-y-3 sm:space-y-4">
                <p className="text-xs sm:text-sm font-medium text-primary tracking-wide uppercase">
                  Get in Touch
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                  Let's Work Together
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  Looking for a dedicated full-stack developer? I'm available for full-time opportunities, 
                  freelance projects, and technical collaborations.
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground/80 italic">
                  💬 I typically respond within 24 hours
                </p>
              </div>

              {/* Availability Badge */}
              <Badge
                variant="outline"
                className="bg-green-500/10 text-green-500 border-green-500/20 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                Open to Opportunities
              </Badge>

              {/* Contact Details */}
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-border/60 bg-card/30 hover:bg-card/50 hover:border-primary/50 transition-all duration-300 group min-h-[60px]"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-[10px] sm:text-xs text-muted-foreground">{item.label}</p>
                          <p className="text-sm sm:text-base font-medium">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-border/60 bg-card/30 min-h-[60px]">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-[10px] sm:text-xs text-muted-foreground">{item.label}</p>
                          <p className="text-sm sm:text-base font-medium">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Resume Download */}
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto min-h-[44px]"
                asChild
              >
                <a href="/Ashis_Acharya_CV_final.pdf" download="Ashis-Acharya-CV-final.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl blur-2xl opacity-50" />

              {/* Form Card */}
              <div className="relative p-5 sm:p-6 md:p-8 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-xl">
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      suppressHydrationWarning
                      className="peer w-full px-4 py-3 rounded-xl border border-border/60 bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 -top-2.5 px-2 bg-card text-sm font-medium text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary transition-all duration-300"
                    >
                      Your Name
                    </label>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      suppressHydrationWarning
                      className="peer w-full px-4 py-3 rounded-xl border border-border/60 bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 -top-2.5 px-2 bg-card text-sm font-medium text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary transition-all duration-300"
                    >
                      Your Email
                    </label>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder=" "
                      suppressHydrationWarning
                      className="peer w-full px-4 py-3 rounded-xl border border-border/60 bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none transition-all duration-300"
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 -top-2.5 px-2 bg-card text-sm font-medium text-muted-foreground peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary transition-all duration-300"
                    >
                      Your Message
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full cursor-pointer min-h-[44px]"
                    disabled={isSubmitting}
                    suppressHydrationWarning
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus.type === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm">{submitStatus.message}</p>
                    </motion.div>
                  )}

                  {submitStatus.type === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500"
                    >
                      <XCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm">{submitStatus.message}</p>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
    </section>
  );
}
