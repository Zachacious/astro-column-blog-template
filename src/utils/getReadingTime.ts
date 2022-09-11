const getReadingTime = (content: string) => {
  if (!content) return 0;
  const wordsPerMinute = 200;
  const noOfWords = content.split(/\s/g).length;
  return Math.ceil(noOfWords / wordsPerMinute);
};

export default getReadingTime;
