import 'src/css/blogpost.scss';
import '@fontsource/flamenco';

// import '@fontsource/pirata-one';
import type {
  IFrontmatter,
  MarkdownInstance,
} from 'astro-boilerplate-components';
import { BlogCard } from 'astro-boilerplate-components';
// import { PostContent, PostHeader, Section } from 'astro-boilerplate-components';
import type { ReactNode } from 'react';

import IconClock from '@/icons/clock';

import BlogCard from './BlogCard.astro';

// import { AppConfig } from '@/utils/AppConfig';
interface IBlogFrontmatter extends IFrontmatter {
  tags: string[];
}

type IBlogPostProps = {
  frontmatter: IBlogFrontmatter;
  children: ReactNode;
  posts: MarkdownInstance<IFrontmatter>[];
};

const formatDate = (date: string) => {
  const d = new Date(date);
  return `${d.toLocaleDateString('en-US', {
    // weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}`;
};

const getReadingTime = (content: string) => {
  const wordsPerMinute = 200;
  const noOfWords = content.split(/\s/g).length;
  return Math.ceil(noOfWords / wordsPerMinute);
};

const getUpNext = (props: IBlogPostProps) => {
  const allPosts = props.posts;

  const filteredPosts = allPosts.filter(
    (post: { frontmatter: { title: any } }) =>
      post.frontmatter.title !== props.frontmatter.title
  );

  const taggedPosts = filteredPosts.filter(
    (post: { frontmatter: { tags: any } }) => {
      return post.frontmatter.tags.some((tag: any) =>
        props.frontmatter.tags.includes(tag)
      );
    }
  );

  return taggedPosts[0];
};

const BlogPost = (props: IBlogPostProps) => (
  <div className="p-8">
    <small className="my-5 flex w-full justify-between px-4 text-sm">
      <div className="opacity-70">{formatDate(props.frontmatter.pubDate)}</div>
      <div className="flex items-center">
        <IconClock className="icon-xs mr-2" />
        {getReadingTime(props.children?.props.value)} minute read
      </div>
      <div className="">test</div>
    </small>
    <div className="blogpost flex justify-center  md:justify-start">
      <div className=" w-full max-w-7xl p-4 lg:max-w-2xl lg:self-start">
        {props.children}
      </div>
      <div className="p-4">
        <div className="">
          <div className="font-bold">Up Next</div>
          <BlogCard {...getUpNext(props)} />
        </div>
      </div>
    </div>
  </div>

  // <Section>
  //   <PostHeader content={props.frontmatter} author={AppConfig.author} />

  //   <PostContent content={props.frontmatter}>{props.children}</PostContent>
  // </Section>
);

export { BlogPost };
