export const fetchNewsByCategory = async (category) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`);
    const data = await response.json();
    return data.articles;
  };
  
  export const searchNews = async (query) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`);
    const data = await response.json();
    return data.articles;
  };
  