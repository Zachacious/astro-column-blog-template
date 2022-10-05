type PostFrontmatter = {
  layout: string;
  title: string;
  description: string;
  pubDate: string;
  imgSrc?: string;
  imgAlt?: string;
  tags: string[];
  author?: string;
  featured?: boolean;
  pinned?: boolean;
  draft?: boolean;
};

export type { PostFrontmatter };
