import React from 'react';
import logo from './logo.svg';
import './App.css';

class Weypoint {
  searchText : string;
  description : string;

  constructor(searchText: string, description: string) {
    this.searchText = searchText;
    this.description = description;
  }
}

const data: Weypoint[] = [ 
  {
    description: "We start at here!",
    searchText: "Cape Town"
  },
  {
    description: "We then go here",
    searchText: "Hout bay"
  },
];

function App() {

  let [weypoints, setWeypoints] = React.useState<Weypoint[]>(data) 
  //let items = ;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Itinerary Builder</h1>
      </header>
      <div>
      {
        weypoints
          .map( (w,i) => <>
            <h1>{w.searchText}</h1>
            <br/>
            <span>{w.description}</span>
            <br/>
            </>)
      }
      </div>
    </div>
  );
}

export default App;
