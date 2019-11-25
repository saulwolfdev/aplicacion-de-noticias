import React, { Component } from "react";
import PropTypes from "prop-types";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        categoria:""
    };
  }
   
  componentDidMount(){
      this.setState({
          categoria:"general"
      })
  }
  
  changeCategorie=(e)=>{
      e.preventDefault()
      this.setState({
          categoria:e.target.value
      },()=>{
           this.props.requestNews(this.state.categoria);
      });
     
  }
  render() {
    return (
      <form >
        <select onChange={this.changeCategorie}>
          <option value="general">general</option>
          <option value="business">business</option>
          <option value="entertainment">entertainment</option>
          <option value="health">health</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="technology">technology</option>
        </select>
      </form>
    );
  }
}
Form.propTypes={
    requestNews:PropTypes.func.isRequired
}
export default Form;
