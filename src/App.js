import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <div className="nav-container">
            <div className='menu-closed'>
              <h4>Start Bootstrap</h4>
              <label for="toggle" class="label">MENU &#9776;</label>
            </div>

            <div className="menu-open">
              <input type="checkbox" id="toggle"/>
              <div className="nav-links">
                <a href="#">SERVICES</a>
                <a href="#">PORTFOLIO</a>
                <a href="#">ABOUT</a>
                <a href="#">TEAM</a>
                <a href="#">CONTACT</a>
              </div>
            </div>
          </div>
        </nav>

        <div class="welcome-box">
          <div className="welcome-text">
            <h3>Welcome To Our Studio!</h3>
          </div>

          <div className="big-text">
            <h1>IT'S NICE TO MEET YOU</h1>
          </div>

          <button>
            TELL ME MORE
          </button>
            
        </div>
    </header>
    </div>
  );
}

export default App;
