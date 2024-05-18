import React from 'react'
import NewsCard from './NewsCard';
import UseFetchNews from './UseFetchNews';
import { HashLoader } from 'react-spinners';

const Health = (props) => {
  const { articles, loading, error } = UseFetchNews(props.category);

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <HashLoader color="#3662d6" />
    </div>
  );
  if (error) return <p>Error fetching news: {error.message}</p>;
  return (
    <>
    <div className='flex text-center justify-center text-white font-bold'> {props.category.toUpperCase()} NEWS</div>
    <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  </div>
    </>
  )
}

export default Health
