"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, GitBranch, Link as LinkIcon, MapPin, Download, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
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
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="space-y-4">
                <p className="text-sm font-medium text-primary tracking-wide uppercase">
                  Get in Touch
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Let's Work Together
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Looking for a dedicated full-stack developer? I'm available for full-time opportunities, 
                  freelance projects, and technical collaborations.
                </p>
                <p className="text-sm text-muted-foreground/80 italic">
                  💬 I typically respond within 24 hours
                </p>
              </div>

              {/* Availability Badge */}
              <Badge
                variant="outline"
                className="bg-green-500/10 text-green-500 border-green-500/20 px-4 py-2"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                Open to Opportunities
              </Badge>

              {/* Contact Details */}
              <div className="space-y-4">
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
                        className="flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-card/30 hover:bg-card/50 hover:border-primary/50 transition-all duration-300 group"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          <p className="font-medium">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-card/30">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          <p className="font-medium">{item.value}</p>
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
                className="w-full sm:w-auto"
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
              <div className="relative p-8 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <span className="mr-2">✓</span>
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Success Message */}
                  {isSubmitted && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-green-500 text-center"
                    >
                      Thanks for reaching out! I'll get back to you soon.
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
    </section>
  );
}
