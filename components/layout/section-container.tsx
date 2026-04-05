import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({ children, className, id }: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-24 md:py-24", className)}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
        {children}
      </div>
    </section>
  );
}
