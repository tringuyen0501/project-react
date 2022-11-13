import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request Example" }),
    };
    // fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
    // fetch("https://jsonplaceholder.typicode.com/users")
      fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading ... </div>;
    } else {
      return (
        <div className="App">
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                Name: {item.name} | Email: {item.userId}
              </li>
            ))}
            {/* {items.map((item) => (
              <li key={item.users}>
                Name: {item.name} | User Id: {item.userId}
              </li>
            ))} */}
          </ul>
        </div>
      );
    }
  }
}

export default App;
