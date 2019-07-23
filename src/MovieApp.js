import React,{Component} from 'react';
import './MovieApp.css'
import NameFilter from './NameFilter';
import RatingFilter from './RatingFilter'
import MovieList from './MovieList';



const TheReef={ id:'1',title:'The Reef', year:'2011', image:'https://images-na.ssl-images-amazon.com/images/I/51x01nvJY2L._UR150,200_FMJPG_.jpg', rating:5}
const Sleepless={id:'2',title:'Sleepless',year:'2017',image:'https://images-na.ssl-images-amazon.com/images/I/A1PrAPhtFML._UR150,200_FMJPG_.jpg',rating:4}
const Jigsaw={id:'3',title:'Jigsaw', year:'2017',image:'https://images-na.ssl-images-amazon.com/images/I/81r9HcFliEL._UR150,200_FMJPG_.jpg',rating:4}
const StanHelsing={id:'4',title:'StanHelsing',year:'2009',image:'https://images-na.ssl-images-amazon.com/images/I/81veVZE4REL._UR150,200_FMJPG_.jpg',rating:4}
const Braven={id:'5',title:'Braven',year:'2018',image:'https://images-na.ssl-images-amazon.com/images/I/A1s4pyputLL._UR150,200_FMJPG_.jpg',rating:3}
const Jackass3={id:'6',title:'Jackass 3',year:'2010', image:'https://images-na.ssl-images-amazon.com/images/I/81mC5O5LzwL._UR150,200_FMJPG_.jpg',rating:3}


const moviesToDisplay=[TheReef, Sleepless,Jigsaw,StanHelsing,Braven,Jackass3]
class MovieApp extends Component {
    constructor(props) {
      super(props)
      this.state = {
        minRatingFilter: 3,
        movies: moviesToDisplay,
        titleFilter: ''
      }
    }
    
    addNewMovie(newMovie) {
      this.setState({
        movies: this.state.movies.concat(newMovie)
      })
    }
    
    getVisibleMovies() {
      return this.state.movies.filter(
        el =>
          el.rating >= this.state.minRatingFilter &&
          el.title.toLowerCase().includes(
            this.state.titleFilter.toLowerCase().trim()
          )
        )
    }
    render() {
      return (
        <div className="movie-app">
          <header className="movie-app-header">
            <NameFilter
              value={this.state.titleFilter}
              onChange={(newTitleFilter) => {
                this.setState({
                  titleFilter: newTitleFilter
                })
              }} />
            <RatingFilter
              count={this.state.minRatingFilter}
              onChange={(newRating) => {
                this.setState({
                  minRatingFilter: newRating
                })
              }} />
          </header>
          <main className="movie-app-main">
              <MovieList
                movies={
                  this.getVisibleMovies()
                }
                onAddMovie={(newMovie) => this.addNewMovie(newMovie)} />
          </main>
        </div>
      )
    }
  }
      export default MovieApp;






