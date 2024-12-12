import React, { useEffect, useState } from 'react';
import { getSavedArticles } from '../utils/storage';
import Newitem from '../components/Newitem';

const SavedNews = () => {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const articles = getSavedArticles();
    setSavedArticles(articles);
  }, []);

  return (
    <div>
      <h2 className='text-center'>Saved <span className="badge text-bg-warning">Articles</span></h2>
      {savedArticles.length === 0 ? (
        <p>No saved articles yet.</p>
      ) : (
        savedArticles.map((news, idx) => (
          <Newitem key={idx} title={news.title} description={news.description} src={news.src} url={news.url} />
        ))
      )}
    </div>
  );
};

export default SavedNews;
