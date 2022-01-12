import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import NewsBox from './Components/NewsBox'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



export default class App extends Component {
  pageSize = 9
  apiKey = "672c36b6256c47aa99ba611f26587e38"
  state = {
    progress : 0,
  }

  setProgress = (progress) => {
    this.setState({
      progress : progress
    })
  }

  render() {
    return (
      <>
        <Router>
          <Navbar/>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          />
          <Routes>
            <Route exact path="/" element={<NewsBox setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route exact path="/business" element={<NewsBox setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business" /> }></Route>
            <Route exact path="/entertainment" element={<NewsBox setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
            <Route exact path="health" element={<NewsBox setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health" />}></Route>
            <Route exact path="science" element={<NewsBox setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science" />}></Route>
            <Route exact path="sports" element={<NewsBox setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports" />}></Route>
            <Route exact path="technology" element={<NewsBox setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology" />}></Route>            
          </Routes>          
        </Router>
      </>
    )
  }
}
