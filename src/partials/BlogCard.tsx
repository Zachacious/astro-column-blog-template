import '../css/blogcard.scss';

import type {
  IFrontmatter,
  MarkdownInstance,
} from 'astro-boilerplate-components';

import formatDate from '@/utils/FormatDate';

interface IFrontmatterTags extends IFrontmatter {
  tags: string[];
}

const BlogCard = (props: { post: MarkdownInstance<IFrontmatterTags> }) => {
  const { post } = props;
  const style = post.frontmatter?.imgSrc
    ? {
        background: `url(${post.frontmatter.imgSrc}) no-repeat center center`,
        backgroundSize: 'cover',
      }
    : {};

  const onClick = () => {
    window.location.href = props.post.url as string;
  };

  return (
    <div
      className="blog-card relative mr-8 mb-8 flex cursor-pointer flex-col rounded-md bg-secondarydark bg-cover bg-center p-2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]"
      style={style}
      onClick={onClick}
    >
      <div className="blog-card__overlay absolute bg-textdark dark:bg-primarydark"></div>
      <div className="blog-card__header z-0 mb-1 flex  flex-wrap items-center rounded-t-md px-3">
        <h2 className="text-exo mb-0 w-full text-2xl font-bold">
          {post.frontmatter.title}
        </h2>
        <div className="w-full text-sm opacity-70">
          <small>{formatDate(post.frontmatter.pubDate)}</small>
        </div>
      </div>
      <div className="z-0 grow overflow-hidden p-3 text-lg">
        <div className="blog-card__desc h-full">
          {post.frontmatter.description}
        </div>
      </div>
      <div className="z-0 flex w-full justify-start p-2">
        <span>
          {post?.frontmatter?.tags?.map((tag) => (
            <a
              key={tag}
              href={`/tag/${tag}/1`}
              className="z-0 m-1 text-sm capitalize opacity-80"
            >
              #{tag}
            </a>
          ))}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
