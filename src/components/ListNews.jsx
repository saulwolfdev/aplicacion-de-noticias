import React, { Component } from 'react';
import News from './News';
import PropTypes from "prop-types";
class ListNews extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render(){
        // console.log("props",this.props)
        const {noticias}=this.props
        return (
        <div>
            {noticias.map(noticia=>(<News key={noticia.url} noticia={noticia}/>))}
        </div> );
    }
}

ListNews.propTypes={
    noticias:PropTypes.array.isRequired
}
export default ListNews;