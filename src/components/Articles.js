import React from 'react';
import { Item } from 'semantic-ui-react'

function Articles(props) {

  const renderArticle = (article) => (
    <Item>
      { article.urlToImage && <Item.Image size="small" src={article.urlToImage} /> }
      <Item.Content>
        <Item.Header as="a" target="_blank" style={{ color: 'dodgerblue' }} href={article.url} content={article.title} />
        <Item.Description content={article.description} />
      </Item.Content>
    </Item>
  );

  return (
    <Item.Group divided unstackable>
      { props.articles.map(a => renderArticle(a)) }
    </Item.Group>
  );
}

export default Articles;