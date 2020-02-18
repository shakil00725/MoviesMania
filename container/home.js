import React, { Component } from "react";
import Movies from "../components/MoviesList-S/movies";
import Slider from "../components/Slider/slider";
import Header from "../components/Header/header";
import Sidebar from "../components/Header/sideBar";
import Tabbar from "../components/Tab/tab";

class HomeContainer extends Component {
  state = {
    nowPlaying: [],
    popular: [],
    tabview: "1"
  };

  nowPlaying = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=8476835a6dd082a51de5dd127dbbcf5d&language=en-US&page=1`
    );
    let data = await response.json();
    return data["results"];
  };

  popular = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=8476835a6dd082a51de5dd127dbbcf5d&language=en-US&page=1`
    );
    let data = await response.json();
    return data["results"];
  };

  tabLayoutchange = event => {
    this.setState({ tabview: event.target.value });
  };

  AllMoviesList = () => {
    let promises = [this.nowPlaying(), this.popular()];
    Promise.all(promises).then(data => {
      this.setState({
        nowPlaying: data[0],
        popular: data[1]
      });
    });
  };

  componentDidMount() {
    this.AllMoviesList();
  }

  render() {
    const { nowPlaying, popular, tabview } = this.state;

    return (
      <div style={{ background: " #FDFEFE" }}>
        <Sidebar />
        <Header />
        <Slider />
        <Tabbar tabLayoutchange={this.tabLayoutchange} />
        {(tabview === "1" && (
          <div>
            <Movies data={nowPlaying} title="Now Playing Movies" />
          </div>
        )) ||
          (tabview === "2" && (
            <div>
              <Movies data={popular} title="Now Playing Series" />
            </div>
          )) ||
          (tabview === "3" && (
            <div>
              <Movies data={nowPlaying} title="Now Playing Series" />
            </div>
          )) ||
          (tabview === "4" && (
            <div>
              <Movies data={nowPlaying} title="Now Playing Series" />
            </div>
          ))}
      </div>
    );
  }
}

export default HomeContainer;
