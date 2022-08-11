import 'src/css/hero.scss';
import 'src/css/icon.scss';

import IconSearch from '@/icons/search';

const Hero = () => (
  <section>
    <div className="hero flex justify-center">
      <div className="mx-4 flex h-full w-full max-w-7xl flex-col">
        <div className="w-full">
          <div className="navbar my-5 flex w-full items-center justify-between">
            <div className="navbar-brand text-2xl font-bold">Zach Moore</div>
            <div className="navbar-nav">
              <IconSearch className="icon-sm" />
            </div>
          </div>
        </div>
        <div className="hero-content grow"></div>
        <div className="hero-footer break-word mb-12 text-4xl font-bold md:text-6xl lg:text-8xl">
          <div>Technologist</div>
        </div>
      </div>
    </div>
  </section>
);

export { Hero };
