import React, { Component } from "react";
import Details from "../components/MovieDetails/details";
import Header from "../components/Header/header";
import Sidebar from "../components/Header/sideBar";

class DetailsContainer extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    details: [],
    reviews: [],
    videos: [],
    similarVideos: []
  };

  singlePage = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${this.props.pid}?api_key=8476835a6dd082a51de5dd127dbbcf5d&language=en-US`
    );
    let data = await response.json();
    return data;
  };

  getVideos = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${this.props.pid}/videos?api_key=8476835a6dd082a51de5dd127dbbcf5d&language=en-US`
    );
    let data = await response.json();
    return data["results"];
  };

  getReviews = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${this.props.pid}/reviews?api_key=8476835a6dd082a51de5dd127dbbcf5d&language=en-US&page=1`
    );
    let data = await response.json();
    return data["results"];
  };

  getSimillerMovies = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${this.props.pid}/similar?api_key=8476835a6dd082a51de5dd127dbbcf5d&language=en-US&page=1`
    );
    let data = await response.json();
    return data["results"];
  };

  AllDetails = () => {
    let promises = [
      this.singlePage(),
      this.getReviews(),
      this.getVideos(),
      this.getSimillerMovies()
    ];
    Promise.all(promises).then(data => {
      this.setState({
        details: data[0],
        reviews: data[1],
        videos: data[2],
        similarVideos: data[3]
      });
    });
  };

  componentDidMount() {
    this.AllDetails();
  }

  render() {
    const opts = {
      height: "150",
      width: "250"
    };
    const { pid } = this.props;
    return (
      <div>
        <Header />
        <Details
          details={this.state.details}
          reviews={this.state.reviews}
          opts={opts}
          videos={this.state.videos}
          similarVideos={this.state.similarVideos}
        />
      </div>
    );
  }
}

export default DetailsContainer;
