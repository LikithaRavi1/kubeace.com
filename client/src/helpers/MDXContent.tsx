// import React from "react";
// import { MDXProvider } from "@mdx-js/react";
// import { useMDXComponents } from "@mdx-js/react";
// import remarkGfm from "remark-gfm";

// // Optionally, define custom components for markdown elements
// const components = {
//   // h1: (props) => <h1 className="my-h1" {...props} />,
//   // ...add more if needed
// };

// export default function MDXContent({ content }: { content: string }) {
//   const MDXComponent = useMDXComponents(content, { remarkPlugins: [remarkGfm] });
//   return (
//     <MDXProvider components={components}>
//       <MDXComponent />
//     </MDXProvider>
//   );
// }

import shortcodes from "@/shortcodes/all";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

const MDXContent = ({ content }: { content: any }) => {
  interface IMdxOptions {
    remarkPlugins?: any[];
    rehypePlugins?: any[];
  }
  const mdxOptions: IMdxOptions = {
    remarkPlugins: [remarkGfm],
  };
  return (
    <>
      {/* @ts-ignore */}
      <MDXRemote
        source={`# Hello World
      This is from Server Components!
      `}
        components={shortcodes}
        options={{ mdxOptions }}
      />
    </>
  );
};

export default MDXContent;
