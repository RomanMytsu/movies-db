import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link className="App-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="App-link" to="/movies">
              Movies
            </Link>
          </li>
          <li>
            <Link className="App-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </header>
      <main className="App-main">
        <Outlet />
      </main>
    </div>
  );
}

export default App;