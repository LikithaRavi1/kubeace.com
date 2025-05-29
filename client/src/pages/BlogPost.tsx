import React, { useEffect, useState } from 'react';
import { useRoute } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { SEO } from '@/components/seo';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { type BlogPost } from '@shared/schema';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import ImageFallback from '@/helpers/ImageFallback';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import * as marked from 'marked';
import DOMPurify from 'dompurify';
import { fetchMarkdownPost } from '@/lib/contentParser';


const BlogPostPage: React.FC = () => {
  const [, params] = useRoute('/blog/:slug');
  const slug = params?.slug || '';

  const [mdPost, setMdPost] = useState<any>(null);
  const [mdError, setMdError] = useState<string | null>(null);
  const [mdLoading, setMdLoading] = useState<boolean>(true);
  const [processedContent, setProcessedContent] = useState<string>('');

  // Try to fetch markdown post first
  useEffect(() => {
    let ignore = false;
    setMdLoading(true);
    setMdError(null);
    setMdPost(null);
    if (!slug) return;
    fetchMarkdownPost(slug)
      .then(({ frontmatter, content }) => {
        // Filter out drafts and future-dated posts
        if (frontmatter.draft || (frontmatter.date && new Date(frontmatter.date) > new Date())) {
          setMdError('Not published');
        } else if(!frontmatter?.title){
          setMdError('notfound');
          setMdLoading(false);
        }
        else {
          setMdPost({ ...frontmatter, content });
        }
        setMdLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setMdError('notfound');
        setMdLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, [slug]);

  // Fallback to legacy API if markdown not found
  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: [`/api/blog-posts/${slug}`],
    enabled: !!slug && mdError === 'notfound',
  });

  // Process the blog content when it loads
  useEffect(() => {
    if (post?.content) {
      try {
        let processedHtml = '';
        if (typeof post.content === 'string') {
          // If the content is already HTML (starts with a tag)
          if (post.content.trim().startsWith('<')) {
            processedHtml = post.content;
          } else {
            // Otherwise, treat as markdown
            processedHtml = String(marked.parse(post.content));
          }
        }
        
        // Sanitize the HTML before setting it
        setProcessedContent(DOMPurify.sanitize(processedHtml));
      } catch (err) {
        console.error('Error processing blog content:', err);
        // Fallback to raw content in case of error
        setProcessedContent(String(post.content));
      }
    }
  }, [post?.content]);

  // Loading state
  if (mdLoading || (mdError === 'notfound' && isLoading)) {
    return (
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <Skeleton className="h-8 w-3/4 mb-4" />
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center">
              <Skeleton className="w-4 h-4 mr-1" />
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="flex items-center">
              <Skeleton className="w-4 h-4 mr-1" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
          <Skeleton className="w-full h-80 rounded-lg mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-2/3" />
          </div>
          <div className="space-y-4 mt-6">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />
          </div>
        </article>
      </div>
    );
  }

  // Markdown error (not published or not found)
  if (mdError && mdError !== 'notfound') {
    return (
      <div className="min-h-[60vh] w-full flex items-center justify-center">
        <div className="text-center max-w-xl px-4">
          <h2 className="text-2xl font-semibold mb-4">Blog Post Not Found</h2>
          <p className="text-gray-600 mb-6">
            The blog post you're looking for couldn't be found or is temporarily unavailable.
          </p>
          <Link href="/blog">
            <Button variant="default" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Render markdown post if found
  if (mdPost) {
    return (
      <>
        <SEO
          title={mdPost.title}
          description={mdPost.description}
          canonicalPath={`/blog/${slug}`}
          type="article"
          image={mdPost.image}
        />
        <div className="container mx-auto px-4 py-12">
          <article className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{mdPost.title}</h1>
            <div className="flex flex-wrap items-center text-gray-500 text-sm mb-8 gap-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {mdPost.date ? format(new Date(mdPost.date), 'MMMM d, yyyy') : ''}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {mdPost.author}
              </div>
            </div>
            <ImageFallback
              src={mdPost.image}
              alt={mdPost.title}
              className="w-full rounded-lg mb-8 object-cover h-80"
              optimized={true}
            />
            <div className="content mb-10 prose">
              <ReactMarkdown remarkPlugins={[remarkGfm]} >{mdPost.content}</ReactMarkdown>
            </div>
            <div className="flex items-center gap-2 mt-8 pt-6 border-t border-gray-200">
              <Tag className="w-5 h-5 text-gray-500" />
              {(mdPost.tags || []).map((tag: string, index: number) => (
                <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link href="/blog">
                <Button variant="ghost" className="text-primary-600 hover:text-primary-700 p-0 flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </>
    );
  }

  // Fallback: legacy API post
  if (error || !post) {
    return (
      <div className="min-h-[60vh] w-full flex items-center justify-center">
        <div className="text-center max-w-xl px-4">
          <h2 className="text-2xl font-semibold mb-4">Blog Post Not Found</h2>
          <p className="text-gray-600 mb-6">
            The blog post you're looking for couldn't be found or is temporarily unavailable.
          </p>
          <Link href="/blog">
            <Button variant="default" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        canonicalPath={`/blog/${post.slug}`}
        type="article"
        image={post.image}
      />
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center text-gray-500 text-sm mb-8 gap-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {post.author}
            </div>
          </div>
          <ImageFallback
            src={post.image}
            alt={post.title}
            className="w-full rounded-lg mb-8 object-cover h-80"
            optimized={true}
          />
          <div 
            className="prose prose-lg max-w-none mb-8" 
            dangerouslySetInnerHTML={{ __html: processedContent }} 
          />
          <div className="flex items-center gap-2 mt-8 pt-6 border-t border-gray-200">
            <Tag className="w-5 h-5 text-gray-500" />
            {post.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/blog">
              <Button variant="ghost" className="text-primary-600 hover:text-primary-700 p-0 flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPostPage;
