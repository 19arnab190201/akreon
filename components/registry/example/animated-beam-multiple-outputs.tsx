import { cn } from "@/lib/utils";

interface AnimatedBeamMultipleOutputsProps {
  className?: string;
}

export default function AnimatedBeamMultipleOutputs({
  className,
}: AnimatedBeamMultipleOutputsProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className='flex items-center justify-center space-x-4'>
        {/* Central node */}
        <div className='h-8 w-8 rounded-full bg-accent-orange flex items-center justify-center'>
          <div className='h-2 w-2 rounded-full bg-white' />
        </div>

        {/* Connected nodes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-6 w-6 rounded-full bg-accent-light animate-pulse",
              "transform transition-all duration-500"
            )}
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: "1.5s",
            }}
          />
        ))}
      </div>

      {/* Connection lines */}
      <div className='absolute inset-0 flex items-center justify-center'>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute h-0.5 bg-gradient-to-r from-accent-orange to-accent-light animate-pulse",
              "transform transition-all duration-500"
            )}
            style={{
              width: `${60 + Math.random() * 40}px`,
              transform: `rotate(${i * 60}deg)`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: "2s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
