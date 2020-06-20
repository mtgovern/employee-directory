import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
// import ButtonGroup from "./components/ButtonGroup";
import SearchResults from "./components/SearchResults";
import employees from "./employees.json";
import Container from "./components/Container";

class App extends React.Component {
  //Setting this.state.employee to the employee json array
  state = {
    employees: [],
    userInput: "",
    results: []
  };

  //   dynamicSortMultiple() {
  //     /*
  //      * save the arguments object as it will be overwritten
  //      * note that arguments object is an array-like object
  //      * consisting of the names of the properties to sort by
  //      */
  //     var props = arguments;
  //     return function (obj1, obj2) {
  //         var i = 0, result = 0, numberOfProperties = props.length;
  //         /* try getting a different result from 0 (equal)
  //          * as long as we have extra properties to compare
  //          */
  //         while(result === 0 && i < numberOfProperties) {
  //             result = dynamicSort(props[i])(obj1, obj2);
  //             i++;
  //         }
  //         return result;
  //     }
  // }

  searchName = value => {
    this.findName(this.state.employees, value);
  };

  componentDidMount() {
    // API.getBaseBreedsList()
    this.setState({ employees: employees });
    this.setState({ results: employees });
    // .catch(err => console.log(err));
  }

  findName(names, letter) {
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

  sortByName = () => {
    let sortedEmployees = this.state.employees;
    sortedEmployees.sort();
    
    var sortOrder = "DESC";
    var items = this.state.employees;

    // sort by name
    items.sort(sortOrder === 'ASC' ? this.ascCompareFnc : this.descCompareFnc);
    console.log(items);
    
    this.setState({
      employees: sortedEmployees
    })
  }

  ascCompareFnc(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
}

descCompareFnc(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return 1;
  }
  if (nameA > nameB) {
    return -1;
  }
  // names must be equal
  return 0;
}

handleInputChange = event => {
  // Getting the value and name of the input which triggered the change
  const name = event.target.name;
  const value = event.target.value;
  // Updating the input's state
  this.setState({
    [name]: value
  });
  this.searchName(value);
};

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
              style={{ width: "30%", margin: "0 auto", marginLeft: "auto", marginRight: "auto" }}
            />
          </div>
        </form>
        <div>
          <div className="row">
            <div className="col"><button className="card-btn" style={{ visibility: "hidden" }}>Image</button></div>
            <div className="col"><button className="card-btn" onClick={this.sortByName}>Name</button></div>
            <div className="col"><button className="card-btn" onClick={this.handleFormSubmit}>Phone</button></div>
            <div className="col"><button className="card-btn" onClick={this.handleFormSubmit}>Email</button></div>
            <div className="col"><button className="card-btn" onClick={this.handleFormSubmit}>DOB</button></div>
          </div>
        </div>
        {/* <ButtonGroup /> */}
        <SearchResults employees={this.state.results} />
      </Container>
    </Wrapper>
  );
}
}

export default App;