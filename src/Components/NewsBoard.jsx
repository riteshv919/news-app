import React, { useContext, useEffect, useState } from 'react';
import { NewsContext } from '../context/NewsContext';
import Newitem from './Newitem';
import { fetchNewsByCategory, searchNews } from '../utils/api';

const NewsBoard = () => {
  const { category, searchQuery } = useContext(NewsContext);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      let data;
      if (searchQuery) {
        data = await searchNews(searchQuery);
      } else {
        data = await fetchNewsByCategory(category);
      }
      setArticles(data);
      setLoading(false);
    };

    getNews();
  }, [category, searchQuery]);

  if (loading) return <h3>Loading...</h3>;

  return (
    <div>
      <h2 className='text-center'>Latest <span className="badge text-bg-danger">News</span></h2>
      {articles.map((news, idx) => (
        <Newitem key={idx} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
    </div>
  );
};

export default NewsBoard;
