import React, { Component } from 'react';
import Body from '../components/Body';
import Header from '../components/Header';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
  constructor(){
    super()
    this.state = {
      text: 'Hello',
      tinggi: '20',
      siswa: ['yadi', 'doni', 'dian'],
      videos: [],
      search: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getVideos = () => {
    axios.get('https://boiling-oasis-76454.herokuapp.com/youtube/')
      .then(res => {
        this.setState({videos: res.data})
      }).catch(err => {
        console.log(err)
      })
  }

  searchVideos = (query) => {
    axios.get(`https://boiling-oasis-76454.herokuapp.com/youtube/search/${query}`)
      .then(res => {
        this.setState({videos: res.data})
      }).catch(err => {
        console.log(err)
      })
  }

  componentDidMount(){
    this.getVideos();
  }

  render() {
    return (
      <div className="App">
        <Header text1="Clone Youtube - React JS" />
        <form>          
          <label>Cari</label>
          <input
            type="text"
            value={this.state.search}
            name="search"
            onChange={this.handleChange}
          />
          <button onClick={this.searchVideos(this.state.search)}>
            Cari
          </button>
          <hr></hr>
          <h6>Pencarian : {this.state.search}</h6>
          {
            this.state.videos
              .filter(videos => videos.type === 'video')
              .map((videos, index) => {
              return (
                <div key={index}>
                  <img src={videos.thumbnails.default.url} />
                  <Link to={`detail/${videos.id}`}>
                    <h2>{videos.title}</h2>
                  </Link>
                </div>
              )
            })
          }
        </form>
      </div>
    );
  }
}

export default Home;
