import '../css/blogcard.scss';

import type {
  IFrontmatter,
  MarkdownInstance,
} from 'astro-boilerplate-components';

const MiniBlogCard = (props: { post: MarkdownInstance<IFrontmatter> }) => {
  // const style = props.post.frontmatter?.imgSrc
  //   ? `background: url(${props.post.frontmatter.imgSrc}) center center / cover no-repeat;`
  //   : '';

  const style = props.post.frontmatter?.imgSrc
    ? {
        background: `url(${props.post.frontmatter.imgSrc}) no-repeat center center fixed`,
        backgroundSize: 'cover',
      }
    : {};

  return (
    <div
      className="relative my-4 flex cursor-pointer flex-col rounded-md bg-secondarydark bg-cover bg-center p-2 px-4 drop-shadow-lg "
      style={style}
      onClick={`window.location.href='${props.post.url}'`}
    >
      <div className="blog-card__overlay absolute bg-primarydark"></div>
      <div className=" z-0 rounded-t-md px-3">
        <h2 className="miniblogcard-title ">{props.post.frontmatter.title}</h2>
      </div>
    </div>
  );
};

export default MiniBlogCard;
