"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Skip detection during programmatic scrolling
      if (isScrolling) return;

      // Clear any existing timeout
      clearTimeout(scrollTimeout);

      // Debounce the section detection
      scrollTimeout = setTimeout(() => {
        const scrollPosition = window.scrollY + 150;
        
        // Get all main sections
        const homeEl = document.getElementById("home");
        const aboutEl = document.getElementById("about");
        const skillsEl = document.getElementById("skills");
        const projectsEl = document.getElementById("projects");
        const experienceEl = document.getElementById("experience");
        const contactEl = document.getElementById("contact");

        let currentSection = "home";

        // Helper function to check if scroll is within a section
        const isInSection = (element: HTMLElement | null) => {
          if (!element) return false;
          const rect = element.getBoundingClientRect();
          const offsetTop = window.scrollY + rect.top;
          const offsetBottom = offsetTop + element.offsetHeight;
          return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
        };

        // Check sections in order, with proper grouping
        if (contactEl && isInSection(contactEl)) {
          currentSection = "contact";
        } else if (experienceEl) {
          // Experience section includes Developer Timeline
          const expRect = experienceEl.getBoundingClientRect();
          const expTop = window.scrollY + expRect.top;
          
          // Check if we're in experience or any section after it until contact
          if (contactEl) {
            const contactRect = contactEl.getBoundingClientRect();
            const contactTop = window.scrollY + contactRect.top;
            if (scrollPosition >= expTop && scrollPosition < contactTop) {
              currentSection = "experience";
            }
          } else if (scrollPosition >= expTop) {
            currentSection = "experience";
          }
        }
        
        if (currentSection === "home" && projectsEl && isInSection(projectsEl)) {
          currentSection = "projects";
        }
        
        if (currentSection === "home" && skillsEl && isInSection(skillsEl)) {
          currentSection = "skills";
        }
        
        if (currentSection === "home" && aboutEl) {
          // About section includes Why Work With Me
          const aboutRect = aboutEl.getBoundingClientRect();
          const aboutTop = window.scrollY + aboutRect.top;
          
          // Check if we're in about or any section after it until skills
          if (skillsEl) {
            const skillsRect = skillsEl.getBoundingClientRect();
            const skillsTop = window.scrollY + skillsRect.top;
            if (scrollPosition >= aboutTop && scrollPosition < skillsTop) {
              currentSection = "about";
            }
          } else if (scrollPosition >= aboutTop) {
            currentSection = "about";
          }
        }
        
        if (currentSection === "home" && homeEl && isInSection(homeEl)) {
          currentSection = "home";
        }

        setActiveSection(currentSection);
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isScrolling]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.querySelector(href);
    
    if (element) {
      // Set the active section immediately
      setActiveSection(targetId);
      
      // Disable scroll detection during animation
      setIsScrolling(true);
      
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      
      // Re-enable scroll detection after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleClick(e, "#home")}
            className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Aashis
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                <span
                  className={cn(
                    "relative z-10",
                    activeSection === link.href.substring(1)
                      ? "text-primary"
                      : "text-foreground/80"
                  )}
                >
                  {link.name}
                </span>
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary/10 rounded-md"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            
            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-2 cursor-pointer"
                suppressHydrationWarning
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" suppressHydrationWarning>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="text-xl font-bold mb-4">Menu</div>
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      activeSection === link.href.substring(1)
                        ? "text-primary"
                        : "text-foreground/80"
                    )}
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                {/* Mobile Theme Toggle */}
                {mounted && (
                  <Button
                    variant="outline"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="w-full justify-start cursor-pointer"
                    suppressHydrationWarning
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="h-4 w-4 mr-2" />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="h-4 w-4 mr-2" />
                        Dark Mode
                      </>
                    )}
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
