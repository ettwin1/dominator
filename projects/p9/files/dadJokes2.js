//dadJokes2.js
class App extends React.Component {//Creating a java class called 'App' that inherits the objects in React.Component
  constructor() { //Run constructor as soon as class is run
    super(); //Run the constructor of React.Component

    this.state = {//Defining state variables
      searchTerm: "", //Stores search term
      jokes: [], //Stores jokes in an array
      isFetchingJoke: null //Boolean, whether it's loading jokes or not
    };

    this.onSearchChange = this.onSearchChange.bind(this); //When calling these functions, it calls within the 
    this.onSearchSubmit = this.onSearchSubmit.bind(this); //scope of the constructor
  }

  searchJokes(limit = 20) { //Creating a function with argument limit
    this.setState({ isFetchingJoke: true }); //setting state variable isFetchingJoke to true

    fetch( //Get something from icanhazdadjoke.com (it'll be a dad jokes)
      `https://icanhazdadjoke.com/search?term=${ //You can specify the search term through the url
        this.state.searchTerm
      }&limit=${limit}`, //Another property in the url, can specify amount of jokes to display
      {
        method: "GET", //Use a GET request to receive a joke
        headers: { //Receive the the joke in json format
          Accept: "application/json"
        }
      }
    )
      .then(response => response.json()) //After receiving jokes... 
      .then(json => {
        const jokes = json.results;  
        console.log("jokes", jokes);
        this.setState({
          jokes, //Set state variable jokes to store jokes
          isFetchingJoke: false //set state variable isFetchingJoke to equal false
        });
      });
  }

  onSearchChange(event) { //Each time this event function is called (when the text in the form changes)...
    this.setState({ searchTerm: event.target.value }); //Change the variable searchTerm to the text in the form
  }

  onSearchSubmit(event) { //When the form is submitted...
    event.preventDefault(); //Prevent default submit event that refreshes page when submiting a form
    this.searchJokes(); //Call the function searchJokes()
  }

  renderJokes() { //Function displays the list of jokes in an unordered list 
    return (
      <ul>
        {this.state.jokes.map(item => ( //.map() runs code for each item in an array
          <li key={item.id}>{item.joke}</li> //In React, you need to specify an id for each item in an array 
        ))}
      </ul>
    )
  }

  render() { //Render function that every React App needs
    return ( //Dsiplay the html
      <div>
        <form onSubmit={this.onSearchSubmit}>
          <input
            type="text"
            placeholder="Enter search term..."
            onChange={this.onSearchChange} //When text in the input tag changes, call onSearchChange()
          />
          <button>Search</button>
          <button
            onClick={() => this.searchJokes(1)} //Because we have a parameter, we need the parentheses, so
            disabled={this.state.isFetchingJoke} //we use this alternate way of calling the function
          >
            I'm Feeling Funny
          </button>
        </form>

        {this.state.isFetchingJoke //Short-hand if statement, if it's not loading then display jokes
          ? "searching for jokes..."
          : this.renderJokes()}

        <p>search term: {this.state.searchTerm}</p>
      </div>
    );
  }
}
const rootElement = document.getElementById("reactContainer2");
ReactDOM.render(<App />, rootElement); //Render the class 'App' within the div with the id 'reactContainer2'
