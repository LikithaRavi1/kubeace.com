import React from 'react';
import { Link } from 'wouter';
import { FaRegFolder, FaRegUserCircle, FaRegCalendarAlt } from 'react-icons/fa';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import DOMPurify from 'dompurify';
import ImageFallback from '@/helpers/ImageFallback';

// Define BlogPost interface to match schema
interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string; // Change type from Date to string
  author: string;
  content: string;
  slug: string;
  tags: string[];
}

interface BlogCardProps {
  post: BlogPost;
  content: string,
}

// Helper function to extract plain text from HTML content
const extractPlainText = (html: string, maxLength: number = 150): string => {
  // Create a temporary div to parse HTML content
  const temp = document.createElement('div');
  temp.innerHTML = DOMPurify.sanitize(html);
  const text = temp.textContent || temp.innerText || '';
  
  // Return a truncated version for the summary
  return text.length > maxLength 
    ? `${text.substring(0, maxLength)}...` 
    : text;``
};

// Helper to format date
const formatDate = (dateString: string): string => {
  return format(new Date(dateString), 'MMMM d, yyyy');
};

const BlogCard: React.FC<BlogCardProps> = ({ content, post }) => {
  const summary = extractPlainText(content || post.content || '', 180);
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full">
      {post.image && (
        <div className="relative h-48 overflow-hidden">
          <ImageFallback
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            src={post.image}
            alt={post.title}
            optimized={true}
          />
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 min-h-[3.5rem] hover:text-primary-600 transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        
        <ul className="flex flex-wrap items-center text-sm text-gray-500 mb-4 space-x-4">
          <li className="flex items-center">
            <FaRegUserCircle className="mr-1" />
            <span>{post.author}</span>
          </li>
          
          {post.date && (
            <li className="flex items-center">
              <FaRegCalendarAlt className="mr-1" />
              <span>{formatDate(post.date)}</span>
            </li>
          )}
          
          {post.tags && post.tags.length > 0 && (
            <li className="flex items-center">
              <FaRegFolder className="mr-1" />
              {post.tags.slice(0, 2).map((tag: string, index: number) => (
                <span key={tag}>
                  {tag}
                  {index !== Math.min(post.tags.length - 1, 1) && ', '}
                </span>
              ))}
              {post.tags.length > 2 && '...'}
            </li>
          )}
        </ul>
        
        <p className="text-gray-600 mb-6 flex-grow">{summary}</p>
        
        <Button 
          variant="outline" 
          className="self-start mt-auto text-primary-600 border-primary-600 hover:bg-primary-50"
          asChild
        >
          <Link href={`/blog/${post.slug}`}>Read More</Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;