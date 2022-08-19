import 'src/css/bloghero.scss';
import 'src/css/icon.scss';

import type { IFrontmatter } from 'astro-boilerplate-components';
import type { ReactNode } from 'react';

import IconSearch from '@/icons/search';

interface IBlogFrontmatter extends IFrontmatter {
  tags: string[];
}

type IBlogPostProps = {
  frontmatter: IBlogFrontmatter;
  children: ReactNode;
};

// create style with background image from frontmatter
const style = (props: IBlogPostProps) => ({
  background: `url(${props.frontmatter.imgSrc}) no-repeat center center fixed`,
  backgroundSize: 'cover',
});

const formatDate = (date: string) => {
  const d = new Date(date);
  return `${d.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })}`;
};

const BlogHero = (props: IBlogPostProps) => (
  <section className=" md:h-screen">
    <div
      className="bloghero flex justify-center md:h-full"
      style={style(props)}
    >
      <div className="bloghero__overlay absolute  bg-tertiary"></div>
      <div className="z-0 mx-4 flex w-full max-w-7xl flex-col">
        <div className="w-full">
          <div className="navbar my-5 flex w-full items-center justify-between">
            <div className="navbar-brand text-2xl font-bold">Zach Moore</div>
            <div className="navbar-nav">
              <IconSearch className="icon-sm" />
            </div>
          </div>
        </div>
        {/* <div className="hero-content z-0 grow"></div> */}
        <div className="hero-footer break-word z-0 mb-12 flex grow items-center  ">
          {/* <small className="mx-2 mt-2 flex items-center opacity-70">
            <IconDate className="icon-xs mr-1" />
            <div>{formatDate(props.frontmatter.pubDate)}</div>
          </small> */}
        </div>
        <div className="">
          <div>
            <div className="w-full p-4 py-10 text-4xl font-bold capitalize md:text-5xl lg:text-6xl">
              {props.frontmatter.title}
            </div>
            {/* <div className="mt-6 flex w-full opacity-70">
              {props?.frontmatter?.tags?.map((tag, index) => (
                <small
                  key={index}
                  className="tag m-2 rounded-md border p-1 px-2 capitalize"
                >
                  {tag}
                </small>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { BlogHero };
