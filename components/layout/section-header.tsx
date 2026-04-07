import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-8 sm:mb-10 md:mb-12 space-y-3 sm:space-y-4",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left",
        className
      )}
    >
      {label && (
        <p className="text-xs sm:text-sm font-medium text-primary tracking-wide uppercase">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
