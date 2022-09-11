// import { FooterCopyright, Section } from 'astro-boilerplate-components';

const year = new Date().getFullYear();

const Footer = () => (
  <div className="my-8 flex w-full justify-center opacity-50">
    Copyright © {year} Zach Moore - All Rights Reserved
  </div>
);

export { Footer };
