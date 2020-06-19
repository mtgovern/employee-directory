import React from "react";
// import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import employees from "./employees.json.js";
import Container from "./components/Container";

class App extends React.Component {
  //Setting this.state.employee to the employee json array
  state = {
    employees: []
  };
  componentDidMount() {
    // API.getBaseBreedsList()
      this.setState({ employees: employees });
      // .catch(err => console.log(err));
  }

  // handleInputChange = event => {
  //   this.setState({ search: event.target.value });
  // };

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
        <SearchBox>
            {/* handleFormSubmit={this.handleFormSubmit} */}
            {/* handleInputChange={this.handleInputChange} */}
            {/* employees={this.state.employees} */}
        </SearchBox> 
        
        <SearchResults employees={this.state.employees} />     
        </Container>
    </Wrapper>
    );
  }
}

export default App;



