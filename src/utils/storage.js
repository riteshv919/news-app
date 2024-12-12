export const saveArticle = (article) => {
    const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
    savedArticles.push(article);
    localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
  };
  
  export const getSavedArticles = () => {
    return JSON.parse(localStorage.getItem('savedArticles')) || [];
  };
  