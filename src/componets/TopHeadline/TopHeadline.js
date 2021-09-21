import axios from 'axios';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    // useEffect(() => {
    //     fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-19&sortBy=publishedAt&apiKey=505b7cfd1d504d17b2a9134d40d83770')
    //     .then(res => res.json())
    //     .then(data => setArticles(data.articles))
    // }, []);
    useEffect(() => {
        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-08-19&sortBy=publishedAt&apiKey=505b7cfd1d504d17b2a9134d40d83770';
        axios(url) // axios import kore nite hobe
        .then(data => setArticles(data.data.articles))
    }, [])
    return (
        <div>
            {/* <h1>Top headLine: {articles.length}</h1> */}
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;