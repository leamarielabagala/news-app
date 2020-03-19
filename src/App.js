import React from 'react';
import axios from 'axios';
import { Message } from 'semantic-ui-react';
import FiltersBar from './components/FiltersBar';
import Articles from './components/Articles';
import { TOP_HEADLINES } from './constants/newsTypes';
import './App.css';

const NEWS_API_KEY = '08169d0e18f1445e8c7e3689154f6d26';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yourName: 'Lea Marie',
      articles: [],
      newsType: TOP_HEADLINES.value,
    };
  }

  onCountryChange = (e, data) => {
    this.setState({ country: data.value });
    e.preventDefault();
  }

  onNewsTypeChange = (e, data) => {
    this.setState({ newsType: data.value });
    e.preventDefault();
  }

  onQueryChange = (e) => {
    this.setState({ query: e.target.value });
    e.preventDefault();
  }

  fetchArticles = async () => {
    const { newsType, country, query } = this.state;
    const params = { apiKey: NEWS_API_KEY, q: query, country: newsType === TOP_HEADLINES.value ? country : undefined };
    try {
      const { data } = await axios.get(`http://newsapi.org/v2/${newsType}`, { params });
      this.setState({ articles: data && data.articles });
    } catch (error) {
      this.setState({ articles: [] })
    }
  }
  
  render() {
    const { yourName, articles } = this.state;
    return (
      <div className="App">
        <div className="App-title"><h1>{ yourName } News App</h1></div>
        <FiltersBar
          onCountryChange={this.onCountryChange}
          onNewsTypeChange={this.onNewsTypeChange}
          onQueryChange={this.onQueryChange}
          onSearchClick={this.fetchArticles}
        />
        <Message header="Search Results!" content={`Found ${articles.length} articles`} />
        <Articles articles={articles} />
      </div>
    );
  }
}

export default App;
