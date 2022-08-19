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
  <div className="blogpost flex justify-center md:justify-start">
    <div className="my-5 w-full max-w-7xl px-10 py-2 lg:max-w-2xl lg:self-start">
      {props.children}
    </div>
  </div>

  // <Section>
  //   <PostHeader content={props.frontmatter} author={AppConfig.author} />

  //   <PostContent content={props.frontmatter}>{props.children}</PostContent>
  // </Section>
);

export { BlogPost };
