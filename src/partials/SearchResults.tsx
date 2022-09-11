import type {
  IFrontmatter,
  MarkdownInstance,
} from 'astro-boilerplate-components';
import { useEffect, useState } from 'react';

import BlogCard from './BlogCard';

interface IFrontmatterTags extends IFrontmatter {
  tags: string[];
}

const filterPosts = (
  posts: MarkdownInstance<IFrontmatterTags>[],
  query: string
) => {
  if (!query) return [];
  if (!posts) return [];
  return posts.filter((post) => {
    return (
      post.frontmatter.title.toLowerCase().includes(query.toLowerCase()) ||
      post.frontmatter.description.toLowerCase().includes(query.toLowerCase())
    );
  });
};

const SearchResults = (props: {
  results: MarkdownInstance<IFrontmatterTags>[];
}) => {
  const { results } = props;

  const [finalResults, setFinalResults] = useState(
    [] as MarkdownInstance<IFrontmatterTags>[]
  );

  let query = '';

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    query = params.s as string;

    setFinalResults(filterPosts(results, query));
  }, []);

  return (
    <div className=" flex w-full flex-wrap justify-center">
      {finalResults.length
        ? finalResults.map((result: MarkdownInstance<IFrontmatterTags>) => (
            <BlogCard key={result.file} post={result} />
          ))
        : 'No Results'}
    </div>
  );
};

export default SearchResults;
