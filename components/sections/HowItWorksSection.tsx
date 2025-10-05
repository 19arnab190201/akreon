"use client";

import { cn } from "@/lib/utils";
// Icons removed - using background graphics instead

interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
  span?: string;
  image?: string;
  index: number;
}

function ServiceCard({
  index,
  title,
  description,
  className,
  span,
  image,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl p-6 transition-all duration-500",
        "bg-[#1C1C1C] border border-white/10",
        "border-accent-orange/20",
        "transform-gpu backdrop-blur-sm",
        span
      )}>
      {/* Background glow effect */}
      <div className='absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl' />

      {/* Background graphic */}
      {image && (
        <div className='absolute bottom-0 left-0 flex items-end justify-end w-full'>
          <img
            src={image}
            alt=''
            className={
              index === 1
                ? "w-5/6 mx-auto -mb-20"
                : index === 3
                ? "w-[60%] mx-auto mb-5"
                : "w-full"
            }
          />
        </div>
      )}

      {/* Content */}
      <div className='relative z-10 flex flex-col h-full justify-start'>
        {/* Text Content */}
        <div className='flex-1'>
          <h3 className='text-[20px] leading-[24px] font-medium text-white mb-3 group-hover:text-white transition-colors duration-300'>
            {title}
          </h3>
          <p className='text-[16px] leading-[21px] font-normal text-white group-hover:text-white transition-colors duration-300'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className='py-20 px-4 relative'>
      <div
        className='absolute inset-0'
        style={{
          zIndex: -1,
          backgroundImage:
            "url(https://framerusercontent.com/images/cMSxpaeXFJBvmYAzlldwCL2f25E.png)",
          backgroundRepeat: "repeat",
          backgroundPosition: "left top",
          backgroundSize: "65px auto",
        }}
      />
      <div className='max-w-6xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-[42px] leading-[46px] font-semibold text-white mb-6'>
            Intelligent Development Solutions
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          className='grid gap-4'
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(5, 1fr)",
            height: "680px",
          }}>
          {/* Card 1 - Scalable Web Growth */}
          <ServiceCard
            index={0}
            title='Scalable Web Growth'
            description='Websites built for performance and seamless business growth.'
            span='col-span-2 row-span-3'
            image='/images/fe1.svg'
          />

          {/* Card 2 - Cross-Platform Ecosystem */}
          <ServiceCard
            index={1}
            title='Cross-Platform Ecosystem'
            description='Seamlessly connect your web, mobile, and e-commerce experiences into a unified ecosystem that drives engagement across every device.'
            span='col-span-1 row-span-3'
            image='https://framerusercontent.com/images/u66ASMNVAMgceid2DlnzZuqYrO0.png?scale-down-to=1024'
          />

          {/* Card 3 - Accelerate Development, Maximize Impact */}
          <ServiceCard
            index={2}
            title='Accelerate Development, Maximize Impact'
            description='From prototypes to production — we deliver blazing-fast, custom-built solutions that bring your ideas to life without compromise.'
            span='col-span-2 row-span-2'
            image='/assets/lightning-card.png'
          />

          {/* Card 4 - Real-Time Optimization & Support */}
          <ServiceCard
            index={3}
            title='Real-Time Optimization & Support'
            description='Continuous performance tracking and updates keep your digital products future-ready, secure, and perfectly tuned for user experience.'
            span='col-span-1 row-span-2'
            image='https://framerusercontent.com/images/xcfDk8vbAh4pS19CCv1T1skqA7o.png?scale-down-to=1024'
          />
        </div>
      </div>
    </section>
  );
}
