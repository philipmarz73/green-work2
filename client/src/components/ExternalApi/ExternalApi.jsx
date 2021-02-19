import React from "react";
import axios from "axios";

export default class ExternalApi extends React.Component {
  state = {
    results: []
  }
     componentDidMount() {
       axios.get(`https://trefle.io/api/v1/kingdoms/{id}?token=LJaYJar9CFy3kjCF6AccAg0UxCkhUS4IYk03GD8OIn0`)
       .then(res => {
         console.log(res);
         this.setState({results: res.data});         
       });
      }
      render() {
        return (
          <ul>
            {this.state.results.map(result => <li>{result.data.id}</li>)}
          </ul>

        )
      }
}

 