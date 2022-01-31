import React from "react";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <header className="App-header">
        <div className="App">
          <div>Welcome to all the new views</div>
        </div>
      </header>

      <nav>
        <Link to="/Posts">See all Posts</Link>
        <Link to="/JokeCounter">Joke Counter</Link>
        <Link to="/Hooks">See some Hooks</Link>
      </nav>

    </>
  );
}

export default App;
