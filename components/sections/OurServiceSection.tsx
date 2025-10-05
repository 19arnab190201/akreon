"use client";

import { cn } from "@/lib/utils";
import {
  TrendingUp,
  BarChart3,
  Target,
  Zap,
  Shield,
  Brain,
  PieChart,
  DollarSign,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
  span?: string;
}

function ServiceCard({
  title,
  description,
  icon: Icon,
  className,
  span,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl p-6 transition-all duration-500",
        "bg-gradient-to-br from-white/5 to-black/40 border border-white/10",
        "hover:border-accent-orange/30 hover:-translate-y-2",
        "transform-gpu backdrop-blur-sm",
        span
      )}>
      {/* Background glow effect */}
      <div className='absolute inset-0 bg-gradient-to-br from-accent-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl' />

      {/* Content */}
      <div className='relative z-10 flex flex-col h-full'>
        {/* Icon */}
        <div className='mb-4'>
          <Icon className='h-8 w-8 text-accent-orange group-hover:text-accent-light transition-colors duration-300' />
        </div>

        {/* Text Content */}
        <div className='flex-1'>
          <h3 className='text-lg font-bold text-white mb-2 group-hover:text-accent-light transition-colors duration-300'>
            {title}
          </h3>
          <p className='text-white/70 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OurServiceSection() {
  const services = [
    {
      title: "Precision-Driven Portfolio Growth",
      description:
        "Every move guided by data and insights for smarter portfolio growth.",
      icon: TrendingUp,
      span: "col-span-2 row-span-3",
    },
    {
      title: "Diversified Assets",
      description: "Tailor your portfolio to achieve optimal performance.",
      icon: BarChart3,
      span: "col-span-1 row-span-2",
    },
    {
      title: "Your Portfolio, Optimized in Real-Time",
      description:
        "Adjusted instantly with market changes to enhance investment efficiency.",
      icon: Target,
      span: "col-span-2 row-span-2",
    },
    {
      title: "Maximize Returns, Minimize Effort",
      description:
        "A fully automated investment system that saves you time and worry.",
      icon: Zap,
      span: "col-span-1 row-span-3",
    },
  ];

  return (
    <section className='py-20 px-4 site-bg'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Our <span className='gradient-text'>Services</span>
          </h2>
          <p className='text-xl text-white/70 max-w-3xl mx-auto leading-relaxed'>
            Discover the comprehensive suite of investment services designed to
            maximize your portfolio potential
          </p>
        </div>

        {/* Bento Grid */}
        <div
          className='grid gap-4'
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(5, 1fr)",
            height: "600px",
          }}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              span={service.span}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
