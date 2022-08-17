import 'src/css/pagehero.scss';
import 'src/css/icon.scss';

import IconSearch from '@/icons/search';

// interface IBlogFrontmatter extends IFrontmatter {
//   tags: string[];
// }

type ITitle = {
  title?: string;
  subtitle?: string;
};

const subtitle = (text?: string) =>
  text ? (
    <div className="capitalize0 w-full text-2xl font-bold opacity-70">
      {text}
    </div>
  ) : null;

const PageHero = (props: ITitle) => (
  <section>
    <div className="pagehero flex justify-center">
      <div className="pagehero__overlay absolute  bg-secondarydark"></div>
      <div className="z-0 mx-4 flex w-full max-w-7xl flex-col">
        <div className="w-full">
          <div className="navbar my-5 flex w-full items-center justify-between">
            <div className="navbar-brand text-2xl font-bold">Zach Moore</div>
            <div className="navbar-nav">
              <IconSearch className="icon-sm" />
            </div>
          </div>
        </div>
        <div className="hero-footer break-word z-0 mb-12 flex grow items-center  ">
          <div>
            {subtitle(props.subtitle)}
            <div className="pagehero-title w-full text-4xl font-bold capitalize md:text-6xl lg:text-8xl">
              {props.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { PageHero };
