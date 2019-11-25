import React from 'react';
import PropTypes from "prop-types";
const News = ({noticia}) => {
    // console.log("noticia en noticia=>",noticia)
    const {
      author,
      content,
      description,
      publishedAt,
      title,
      urlToImage,
      url,
      source
    } = noticia;
    
    const image=(urlToImage)? 
        <a href={url} target="_black">
        <img src={urlToImage} alt={title}/>
    </a>
    :null;
    return (
      <div>
        <h3>{title}</h3>
        <label>{author}</label>
        <p>{content}</p>
        <p>{description}</p>
        <p>{publishedAt}</p>
        {image}
        <span>source</span>
      </div>
    );
}
News.propTypes={
    noticia:PropTypes.object.isRequired
}
export default News;
