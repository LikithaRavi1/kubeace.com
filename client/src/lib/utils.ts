import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sortByDate = (array: []) => {
  const sortedArray = array.sort(
    (a: any, b: any) =>
      new Date(b.frontmatter.date && b.frontmatter.date).valueOf() -
      new Date(a.frontmatter.date && a.frontmatter.date).valueOf(),
  );
  return sortedArray;
};
