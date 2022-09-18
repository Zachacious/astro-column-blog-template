import type { MarkdownInstance } from 'astro';

import type { PostFrontmatter } from '@/types/PostFrontmatter';

const getReadNextPosts = (
  count: number,
  currentPost: PostFrontmatter,
  posts: MarkdownInstance<PostFrontmatter>[]
) => {
  const filteredPosts = posts.filter(
    (post) => post.frontmatter.title !== currentPost.title
  );

  const taggedPosts = filteredPosts.filter((post) => {
    return post.frontmatter.tags.some((tag: any) =>
      currentPost.tags.includes(tag)
    );
  });

  if (!taggedPosts.length) {
    const idxs = [];
    for (let i = 0; i <= count; ++i) {
      idxs.push(Math.floor(Math.random() * filteredPosts.length));
    }
    return [...new Set(idxs.map((idx) => filteredPosts[idx]))];
  }

  const idxs = [];
  for (let i = 0; i <= count; ++i) {
    idxs.push(Math.floor(Math.random() * taggedPosts.length));
  }
  return [...new Set(idxs.map((idx) => taggedPosts[idx]))];
};

export default getReadNextPosts;
