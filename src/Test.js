import  PropTypes from 'prop-types';
import React from 'react';

const fruitlist = [
  {
   id : 1,
   name : 'apple',
   image : 'https://image.shutterstock.com/image-photo/fresh-red-apple-isolated-on-260nw-254938384.jpg',
   rating : 5
  },
  {
    id : 2,
    name : 'orange',
    image : 'https://image.shutterstock.com/image-vector/abstract-orange-icon-vector-flat-260nw-1104205634.jpg',
    rating : 4.5
  },
  {
    id : 3,
    name : 'blueberry',
    image : 'https://image.shutterstock.com/image-photo/blueberries-isolated-260nw-722035450.jpg',
    rating : 4.5
  },
  {
    id : 4,
    name : 'watermelon',
    image : 'https://en.pimg.jp/050/595/319/1/50595319.jpg',
    rating : 5
  }
];

class snack extends React.Component{

  render(){
    return <h1>리엑트 입문하기</h1>
  }
}

function Fruit({name, pic , rating}){
  return (
    <div>
      과일은 : {name} 
      <img src = {pic}/>
      {rating}/5.0
    </div>
  );
}

Fruit.prototype = {
  name: PropTypes.string.isRequired,
  pic : PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
}


function App() {




  return (
    <div>리액트 입문하기

    <snack /> 

    {fruitlist.map(e => 
    <Fruit 
    name = {e.name} 
    pic = {e.image} 
    key = {e.id}
    rating = {e.rating}
    /> )}
    </div>
  );
}


export default App;