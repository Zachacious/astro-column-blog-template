import authorData from '@/data/authors.json';

const getAuthorData = (author: string) => {
  return authorData.find((data) => data.name === author);
};

export default getAuthorData;
