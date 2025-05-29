import fs from "fs";
import matter from "gray-matter";
import path from "path";

const contentPath = "public";

// Helper function to read file content
const readFile = (filePath: string) => {
  return fs.readFileSync(filePath, "utf-8");
};

// Helper function to parse frontmatter
const parseFrontmatter = (frontmatter: any) => {
  const frontmatterString = JSON.stringify(frontmatter);
  return JSON.parse(frontmatterString);
};

// get list page data, ex: _index.md
export const getListPage = (filePath: string) => {
  const pageDataPath = path.join(contentPath, filePath);

  if (!fs.existsSync(pageDataPath)) {
    return null;
  }

  const pageData = readFile(pageDataPath);
  const { content, data: frontmatter } = matter(pageData);

  return {
    frontmatter: parseFrontmatter(frontmatter),
    content,
  };
};

// get all single pages, ex: blog/post.md
export const getSinglePage = async (folder: string) => {
  const folderPath = `/${folder}/list.json`;
  const res = await fetch(folderPath);
  if (!res.ok) return null;
  const files = await res.json();

  const contents = await Promise.all(
    files.map(async (file:any) => {
      const response = await fetch(`/blogs/${file}`);
      const raw = await response.text();
      const { data: frontmatter, content } = matter(raw);
      return {
       frontmatter, content
      };
    })
  );

  const publishedPages = contents.filter(
    (page) => !page.frontmatter.draft && page,
  );

  return publishedPages;

  // const singlePages = filterSingleFiles.map((filename) => {
  //   const slug = filename.replace(".md", "");
  //   const filePath = path.join(folderPath, filename);
  //   const pageData = readFile(filePath);
  //   const { content, data: frontmatter } = matter(pageData);
  //   const url = frontmatter.url ? frontmatter.url.replace("/", "") : slug;

  //   return {
  //     frontmatter: parseFrontmatter(frontmatter),
  //     slug: url,
  //     content,
  //   };
  // });

  // const publishedPages = singlePages.filter(
  //   (page) => !page.frontmatter.draft && page,
  // );
  // const filterByDate = publishedPages.filter(
  //   (page) => new Date(page.frontmatter.date || new Date()) <= new Date(),
  // );

  // return filterByDate;
};

export const fetchMarkdownPost = async (slug: string) => {
  const res = await fetch(`/blogs/${slug}.md`);
  if (!res.ok) throw new Error('Markdown not found');
  const raw = await res.text();
  const { data: frontmatter, content } = matter(raw);
  return { frontmatter, content };
};