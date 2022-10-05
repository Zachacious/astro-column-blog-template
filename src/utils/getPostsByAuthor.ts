import type { MarkdownInstance } from 'astro';

import type { PostFrontmatter } from '@/types/PostFrontmatter';

const getPostsByAuthor = (
  author: string,
  posts: MarkdownInstance<PostFrontmatter>[]
) => {
  return posts.filter(
    (post) =>
      post.frontmatter?.author?.trim().toLowerCase() ===
        author.trim().toLowerCase() && !post.frontmatter?.draft
  );
};

export default getPostsByAuthor;
