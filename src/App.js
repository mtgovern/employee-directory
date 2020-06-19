import React from "react";
// import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
//import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import employees from "./employees.json";
import Container from "./components/Container";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from "react-bootstrap"; 

class App extends React.Component {
  //Setting this.state.employee to the employee json array
  state = {
    employees: [],
    userInput: "",
    results: []
  };

  searchName = value => {
    
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // // Set this.state.friends equal to the new friends array
    // this.setState({ friends });
    //console.log(value);
    this.findName(this.state.employees,0,value);
    // console.log(this.state.employees.indexOf(this.state.userInput) !==-1);
  };

  componentDidMount() {
    // API.getBaseBreedsList()
    this.setState({ employees: employees });
    this.setState({ results: employees});
    // .catch(err => console.log(err));
  }


  findName(names, index, letter) {
    var filteredNames = [];
    names.forEach(name => {
      var checkName = name.name; 
      var lowerName = checkName.toLowerCase();
      if (lowerName.startsWith(letter.toLowerCase(), 0)) {
        filteredNames.push(name);
        console.log(name);
      }
    });
    this.setState({ results: filteredNames });
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const name = event.target.name;
    const value = event.target.value;
    // Updating the input's state
    this.setState({
      [name]: value
    });
    //console.log(name);
    //console.log(value);
    this.searchName(value);
  };

  // filterEmployee = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const employees = this.state.employees.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ employees });
  // };

  // Map over this.state.employees and render a Employee component for each Employee object
  render() {
    return (
      <Wrapper>
        <Header>Employee Header</Header>
        <Container>
          <form className="search">
            <div className="form-group">
              <input
                value={this.state.userInput}
                name="userInput"
                type="text"
                className="form-control"
                placeholder="Search"
                id="employee"
                onChange={this.handleInputChange} 
                style={{width: "30%", margin: "0 auto", marginLeft: "auto", marginRight: "auto"}}
              />
            </div>
          </form>
          {/* <SearchBox>  */}
          {/* handleFormSubmit={this.handleFormSubmit} */}
          {/* handleInputChange={this.handleInputChange} */}
          {/* employees={this.state.employees} */}
          {/*    </SearchBox>  */}
​
          <SearchResults employees={this.state.results} />
        </Container>
      </Wrapper>
    );
  }
}



export default App;