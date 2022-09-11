const formatDate = (date: string) => {
  const d = new Date(date);
  return `${d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}`;
};

export default formatDate;
