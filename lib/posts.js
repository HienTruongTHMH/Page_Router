import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Chứa giá trị của các đừng dẫn đến file.
const postsDirectory = path.join(process.cwd(), 'posts');

// Hàm lấy data
export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');
 
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
 
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
 
    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
// Hàm lấy ID của từng trang - page.
export function getAllPostsIds(){
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileNames) => {
        return {
            params: {
                id: fileNames.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Tách metadata bằng gray-matter
  const matterResult = matter(fileContents);

  // Dùng remark để chuyển Markdown (matterResult.content) → HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Trả về object bao gồm id, metadata + contentHtml
  return {
    id,
    contentHtml,                // HTML đã tạo từ Markdown
    ...matterResult.data,       // title, date, hoặc các field khác trong front-matter
  };
}