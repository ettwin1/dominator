//dadJokes.js
class App extends React.Component { //Creating a java class called 'App' that inherits the objects in React.Component
    constructor() { //Run constructor as soon as class is run
        super(); //Run the constructor of React.Component

        this.state = { //Defining a state variable joke to equal null
            joke: null //*note we can't use a regular variable because changing a regular variable wouldn't
        }              //re-render this code

        this.onTellJoke = this.onTellJoke.bind(this); //When calling onTellJoke(), it calls within the scope of
    }                                                 //this constructor

  onTellJoke() { //Creating a function
      fetch("https://icanhazdadjoke.com/", { //Get something from icanhazdadjoke.com (it'll be a dad joke)
          method: 'GET', //Use a GET request to receive a joke
          headers: { //Receive the the joke in json format
              Accept: "application/json"
          }
      })
        .then(response => response.json()) //After receiving joke, set state variable joke to equal the joke
        .then(json => {
            this.setState({ joke: json.joke });
        });
  } 

  render() { //When this code renders
      console.log("---- RENDER ----"); //Displays "---- RENDER ----" in console log

      return( //Insert this html *note in regular js, you can't return html, but with jsx, you can
          <div>
              <button onClick={this.onTellJoke}>Tell me a joke</button>
              <p>{this.state.joke}</p>
          </div>
      );//*note {} allows you to insert javascript code within html, as long as you have jsx
  }

}



const rootElement = document.getElementById("reactContainer");
ReactDOM.render(<App />, rootElement); //Render the class 'App' within the div with the id 'reactContainer'



/*
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      jokes: [],
      isFetchingJoke: null
    };

    this.onTellJoke = this.onTellJoke.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() { //When web page is first opened...
    this.searchJokes(); //runs searchJokes() without a search term (default result is first 20 dad jokes)
  }

  searchJokes() {
    this.setState({ isFetchingJoke: true });

    fetch("https://icanhazdadjoke.com/search", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        const jokes = json.results;
        this.setState({
          jokes,
          isFetchingJoke: false
        });
        console.log('jokes', jokes);
      });
  }

  onTellJoke() {
    this.searchJokes();
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value});
  }

  render() {
    return (
      <div>
        <form>
          <input 
            type="text" 
            placeholder="Enter search term..." 
            onChange={this.onSearchChange}
          />
          <button>Search</button>
          <button 
            onClick={this.onTellJoke} 
            disabled={this.state.isFetchingJoke}
          >
            Tell me a joke
          </button>
        </form>

        
        <p>{this.state.jokes.toString()}</p>
        <p>search term: {this.state.searchTerm}</p>
      </div>
    );
  }
}





 onSearchSubmit(event) {
    event.preventDefault(); //prevents default submit event that refreshes page when submiting a form
    this.searchJokes();
  }
  
  fetch(`https://icanhazdadjoke.com/search?term=${this.state.searchTerm}`, { //when you want to insert javascript in a string, you must use `` instead of '' and use ${insert code here} 
    
searchJokes(limit = 20) {  //default value = 20

  <div className="App"> //property names are different in jsx





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
    );
  }

  render() { //Render function that every React App needs
    return ( //Dsiplay the html
      <div> //*Note* can't return more than one html tag, that's way everthing is wrapped in a single <div>
        <form onSubmit={this.onSearchSubmit}> //The Form tag, when submitted, call onSearchSubmit()
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

        <p>search term: {this.state.searchTerm}</p> //Mainly for debugging: displays text in the input box
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement); //Render the class 'App' within the div with the id 'reactContainer'

*/