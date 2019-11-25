import React, { Component,Fragment } from 'react';
import Header from './components/Header';
import ListNews from './components/ListNews';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      noticias:[]
    }
  }
async componentDidMount(){
      this.requestNews();
}
requestNews = async (categoria="general")=>{
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=55f163918c0045539823628f71bdb106`;
    const response = await fetch(url);
    const noticias = await response.json();
    this.setState({
      noticias:noticias.articles
    });
    console.log("NOTICIAS",noticias)
}
  render() { 
    return ( 
      <Fragment>
            <Header title="News Aplication"/>
            <Form requestNews={this.requestNews}/>
            <ListNews noticias={this.state.noticias}/>
      </Fragment>
     );
  }
}
 
export default App;