import  PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';

class App extends React.Component{


  constructor(props){
    super(props);
    console.log("hello")
  }

  componentDidMount(){
    console.log("component rendered")
  }

  componentDidUpdate(){
    console.log("component update")
  }

  state = {
    count : 0
  };

  add = () => {
    this.setState( currnet  => ({ count : this.state.count + 1 }))
  };
  minus = () => {
    this.setState( currnet  => ({ count : this.state.count - 1  }))
  };

  render(){
    console.log('render')
    return(
    <div> 
        <button onClick = {this.add}> 증가 </button> 
        <button onClick = {this.minus}> 감소 </button> 
        <h1>리엑트 입문하기 {this.state.count} 일차 </h1>
    </div> 

    );
  }
}


export default App;