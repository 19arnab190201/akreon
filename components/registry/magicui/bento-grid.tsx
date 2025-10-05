import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

interface BentoCardProps {
  name: string;
  className: string;
  background: React.ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: BentoCardProps) {
  return (
    <div
      key={name}
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl min-h-[400px]",
        // Custom dark theme with orange accents
        "bg-gradient-to-b from-white/5 to-black/60 border border-white/10",
        "hover:border-accent-orange/30 transition-all duration-500",
        "transform-gpu hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-orange/10",
        className
      )}>
      {/* Background glow effect */}
      <div className='absolute inset-0 bg-gradient-to-br from-accent-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl' />

      <div className='pointer-events-none z-10 flex transform-gpu flex-col gap-3 p-8 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'>
        <Icon className='h-16 w-16 origin-left transform-gpu text-accent-orange transition-all duration-300 ease-in-out group-hover:scale-110' />
        <h3 className='text-2xl lg:text-3xl font-bold text-white group-hover:text-accent-light transition-colors duration-300'>
          {name}
        </h3>
        <p className='text-white/70 text-lg leading-relaxed font-light group-hover:text-white/80 transition-colors duration-300'>
          {description}
        </p>
      </div>

      <div className='pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
        <Link
          href={href}
          className='group/btn relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:-translate-y-1'
          style={{
            backgroundColor: "rgba(138, 138, 138, 0.3)",
            border: "1px solid rgba(255, 255, 255, 0.38)",
            borderRadius: "50px",
            backdropFilter: "blur(5px)",
            boxShadow: "inset 0px 0px 6px 3px rgba(138, 138, 138, 0.3)",
            color: "#ffffff",
          }}>
          <span>{cta}</span>
          <ArrowUpRightIcon className='w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300' />
        </Link>
      </div>
      {background}
    </div>
  );
}

export function BentoGrid({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 lg:gap-8 p-4"
      )}>
      {children}
    </div>
  );
}
