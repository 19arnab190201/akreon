import { cn } from "@/lib/utils";

interface AnimatedListDemoProps {
  className?: string;
}

export default function AnimatedListDemo({ className }: AnimatedListDemoProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className='space-y-2 p-4'>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-4 rounded bg-gradient-to-r from-accent-orange/20 to-accent-orange/40",
              "animate-pulse"
            )}
            style={{
              animationDelay: `${i * 0.1}s`,
              animationDuration: "2s",
              width: `${Math.random() * 40 + 60}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
