import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  size?: "hero" | "normal" | "small";
}

export function SectionContainer({ 
  children, 
  className, 
  id,
  size = "normal" 
}: SectionContainerProps) {
  const paddingClasses = {
    hero: "py-32",
    normal: "py-24",
    small: "py-20",
  };

  return (
    <section id={id} className={cn(paddingClasses[size], className)}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
        {children}
      </div>
    </section>
  );
}
