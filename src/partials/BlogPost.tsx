import 'src/css/blogpost.scss';

import type { IFrontmatter } from 'astro-boilerplate-components';
// import { PostContent, PostHeader, Section } from 'astro-boilerplate-components';
import type { ReactNode } from 'react';

// import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <div className="blogpost flex justify-center">
    <div className="my-10 max-w-7xl p-2">{props.children}</div>
  </div>

  // <Section>
  //   <PostHeader content={props.frontmatter} author={AppConfig.author} />

  //   <PostContent content={props.frontmatter}>{props.children}</PostContent>
  // </Section>
);

export { BlogPost };
