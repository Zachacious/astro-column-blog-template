import autoAnimate from '@formkit/auto-animate';
import type { MarkdownInstance } from 'astro-boilerplate-components';
import { useEffect, useRef, useState } from 'react';

import IconSearch from '@/icons/search';
import type { PostFrontmatter } from '@/types/PostFrontmatter';

import BlogCard from './BlogCard';
import { Footer } from './Footer';
// interface IFrontmatterTags extends IFrontmatter {
//   tags: string[];
// }

const filterPosts = (
  posts: MarkdownInstance<PostFrontmatter>[],
  query: string
) => {
  if (!query) {
    window.dispatchEvent(
      new CustomEvent('search-results-updated', {
        detail: { numResults: posts.length },
      })
    );
    return posts;
  }

  if (!posts) {
    window.dispatchEvent(
      new CustomEvent('search-results-updated', {
        detail: { numResults: 0 },
      })
    );
    return [];
  }

  const res = posts.filter((post) => {
    return (
      post.frontmatter.title.toLowerCase().includes(query.toLowerCase()) ||
      post.frontmatter.description.toLowerCase().includes(query.toLowerCase())
    );
  });

  window.dispatchEvent(
    new CustomEvent('search-results-updated', {
      detail: { numResults: res.length },
    })
  );

  return res;
};

const SearchResults = (props: {
  results: MarkdownInstance<PostFrontmatter>[];
}) => {
  const { results } = props;
  let query = '';
  const resultsArea = useRef(null);

  const [finalResults, setFinalResults] = useState(
    [] as MarkdownInstance<PostFrontmatter>[]
  );

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    query = event.target.value;
    setFinalResults(filterPosts(results, query));
  };

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    query = params.s as string;
    setInputValue(query);
    setFinalResults(filterPosts(results, query));
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    resultsArea.current && autoAnimate(resultsArea.current);
  }, [resultsArea]);

  return (
    <div className=" flex w-full flex-wrap justify-center ">
      {/* <form action={`/search?s=${inputValue}`} method="post" className=""> */}
      <form
        action={`/search?s=${inputValue}`}
        method="post"
        className="mb-10 flex w-full items-center  rounded-md  bg-textdark p-2 px-4 text-xl font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)] dark:bg-primarydark lg:w-1/2"
      >
        <input
          id="searchInput"
          className="w-full bg-transparent  text-primarydark placeholder:text-primarydark focus:outline-none dark:border-textdark dark:text-textdark dark:placeholder:text-textdark dark:focus:border-textdark "
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search"
        />
        <IconSearch className="icon-md " />
      </form>
      {/* </form> */}
      <div
        className="my-8 flex w-full flex-wrap justify-center overflow-hidden"
        ref={resultsArea}
      >
        {finalResults.length
          ? finalResults.map((result: MarkdownInstance<PostFrontmatter>) => (
              <BlogCard key={result.file} post={result} />
            ))
          : 'No Results'}
      </div>

      <Footer />
    </div>
  );
};

export default SearchResults;
