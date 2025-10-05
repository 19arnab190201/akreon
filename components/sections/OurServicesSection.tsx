"use client";

import { cn } from "@/lib/utils";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Palette,
  Cloud,
  Target,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

function ServiceCard({
  title,
  description,
  icon,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[10px] p-6 transition-all duration-500",
        "transform-gpu backdrop-blur-[5px]",
        className
      )}
      style={{
        border: "1px solid rgba(112, 69, 54, 0.7)",
        background:
          "linear-gradient(180deg, rgb(28, 28, 28) 15%, rgb(62, 32, 19) 131%)",
        opacity: 1,
      }}>
      {/* Content */}
      <div className='relative z-10 flex flex-col h-full justify-start'>
        {/* Icon */}
        <div
          className='mb-4 w-10 h-10 rounded-lg flex items-center justify-center'
          style={{ backgroundColor: "rgb(204, 61, 0)" }}>
          <div style={{ color: "white" }}>{icon}</div>
        </div>

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

export default function OurServicesSection() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      icon: <Globe size={20} />,
    },
    {
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile apps that deliver seamless experiences across iOS and Android devices.",
      icon: <Smartphone size={20} />,
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Complete online store setups with payment integration, inventory management, and customer analytics.",
      icon: <ShoppingCart size={20} />,
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design solutions that combine aesthetics with functionality to create engaging digital experiences.",
      icon: <Palette size={20} />,
    },
    {
      title: "Cloud & DevOps",
      description:
        "Scalable cloud infrastructure and deployment pipelines that ensure your applications run smoothly and securely.",
      icon: <Cloud size={20} />,
    },
    {
      title: "Digital Strategy",
      description:
        "Comprehensive digital transformation strategies that align technology with your business goals and objectives.",
      icon: <Target size={20} />,
    },
  ];

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
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
