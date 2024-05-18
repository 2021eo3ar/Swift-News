import { useState, useEffect } from 'react';
import axios from 'axios';

const UseFetchNews = (category) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = process.env.NEWS_APP_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`
        );
        setArticles(response.data.articles);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category,apiKey]);

  return { articles, loading, error };
};

export default UseFetchNews;
