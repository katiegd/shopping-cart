import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="home-wrapper">
        <div className="home-content">
          <p className="welcome-message">Welcome to Jaquette.</p>

          <Link to="shop">
            <button className="shop-now-btn">Shop Now</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
