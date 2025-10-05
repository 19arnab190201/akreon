import { cn } from "@/lib/utils";

interface CalendarProps {
  selected?: Date;
  className?: string;
}

export default function Calendar({ selected, className }: CalendarProps) {
  return (
    <div
      className={cn(
        "border rounded-md p-4 bg-white dark:bg-gray-800",
        className
      )}>
      <div className='grid grid-cols-7 gap-1 text-center text-sm'>
        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
          <div
            key={i}
            className='p-2 font-medium text-gray-500 dark:text-gray-400'>
            {day}
          </div>
        ))}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors",
              selected && i === 10 && "bg-blue-500 text-white hover:bg-blue-600"
            )}>
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
