import { describe, it, expect } from 'vitest';
import { cn } from './utils'; // Assuming cn is exported from utils.ts

describe('cn utility', () => {
  it('should merge class names correctly', () => {
    expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white');
  });

  it('should handle conditional classes', () => {
    const isActive = true;
    expect(cn('base', isActive && 'active')).toBe('base active');
    const isNotActive = false;
    expect(cn('base', isNotActive && 'active')).toBe('base');
  });

  it('should override conflicting Tailwind classes', () => {
    expect(cn('p-4', 'p-2')).toBe('p-2'); // tailwind-merge behavior
    expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
  });
});
