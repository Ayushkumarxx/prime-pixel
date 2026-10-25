import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple class names or conditional classes with Tailwind CSS conflict resolution.
 * Example: cn("p-4 text-white", isActive && "bg-blue-600", className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
