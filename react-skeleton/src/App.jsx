import React, { useState, useEffect } from 'react';

function App() {
  const [articles, setArticles] = useState([]);

  const fetchNews = async () => {
    try {
      const res = await fetch('/news-stub.json');
      const data = await res.json();
      setArticles(data.articles || []);
    } catch (err) {
      console.error('Failed to load stub data', err);
    }
  };

  React.useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="app">
      <h1>Stubbed Sustainability News</h1>
      <ul>
        {articles.map((a, i) => (
          <li key={i}>
            <a href={a.url} target="_blank" rel="noopener noreferrer">
              {a.title}
            </a>
            <div className="meta">
              {a.source.name} • {new Date(a.publishedAt).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
