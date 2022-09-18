import type { MarkdownInstance } from 'astro-boilerplate-components';

import type { PostFrontmatter } from '@/types/PostFrontmatter';

const sortByDate = (posts: MarkdownInstance<PostFrontmatter>[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};

export default sortByDate;
