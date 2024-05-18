import React from 'react';

const NewsCard = ({ article }) => {
  const { author, description, publishedAt, source, title, url, urlToImage } = article;
  const dummyImage = 'https://via.placeholder.com/150'; // Replace with your dummy image URL

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={urlToImage || dummyImage} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4 flex flex-col items-start space-y-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{source.name}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{author}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{new Date(publishedAt).toLocaleDateString()}</span>
      </div>
      <div className="px-6 py-4">
        <a href={url} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
