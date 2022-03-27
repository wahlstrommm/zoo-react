import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetAnimals from './components/GetAnimals';
import pearLogo from './assets/zooLogo.svg';
import GithubLogo from './assets/GithubLogo.svg'; 
function App() {
  return (
    <div className="App">
      <div className='main'>
          <div className="App-container">
                  <div className='linkContainer'>
                    <a href="https://github.com/wahlstrommm"><img src={GithubLogo} alt="Github" className='githubLogo'/></a>
                  </div>
                <div className='logoContainer'>
              <img src={pearLogo} alt="Logo for zoo" className='imgLogo' />
          </div>
            <GetAnimals/>
        </div>
      </div>
    </div>
  );
}

export default App;
