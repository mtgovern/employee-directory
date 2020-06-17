import React from 'react';
// import {BrowserRouter as Router, Route } from "react-router-dom";
// import About from './pages/About';
// import Discover from './pages/Discover';
// import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
// import employees from "./employees.json";
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import employees from "./employees.json";
import SearchBox from './components/SearchBox';


class App extends React.Component {
  //Setting this.state.employee to the employee json array
  state ={
    employees
  };

  //Map over this.stateemployees and render a Employee component for each Employee object
  render() {
    return (
      <Wrapper>
        <Header>Employee Header</Header>
        <SearchBox/>
      </Wrapper>
    );
  }
  }

export default App;
