import React from "react";
import axios from "axios";

export default class ExternalApi extends React.Component {
  state = {
    results: [],
  };
     componentDidMount() {
       axios.get(`https://www.growstuff.org/api/v1/gardens`)
       .then(res => {
         console.log(res);
         this.setState({results: res.data});         
       });
      }
      render() {
        return (
          <p>
          {this.state.results.map(result => <li>{result.data.name}</li>)} 
          </p>
        )
      }
}

 