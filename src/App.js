import React from 'react';
import axios from 'axios';
import Movie from "./Movies";
import "./App.css";

class App extends React.Component{

  state = {
    isLoading : true,
    movies : []
  };

  getMovie = async () => {
    const { data : {data : {movies} }} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //console.log(movies);

    this.setState({movies : movies , isLoading : false })
  }

    componentDidMount(){
      this.getMovie();
  }  

  render(){

    const { isLoading , movies } = this.state;

    return(
    <section className="container"> 
        {isLoading ? 
        <div className="Loader">
          <span className="Loader__text">Loading...</span>
        </div> 
         : 
        <div className="mocies">
          {movies.map( e => (
              <Movie
              key = {e.id}
              id={e.id}
              year={e.year}
              title={e.title}
              summary={e.summary}
              poster={e.medium_cover_image}
              genres={e.genres} 
              />
            ))}
        </div>
        }
    </section> 
    );
  }
}


export default App;