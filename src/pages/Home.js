import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';
import platziconfLogoImage from '../images/avatarval.jpg';

class Home extends React.Component {
    render() {
        return (
          <div className="Home">
            <div className="container">
              <div className="row">
                <div className="Home__col col-12 col-md-5">
                  <img
                    src={platziconfLogoImage}
                    alt="Platzi Conf Logo"
                    className="logoval"
                  />
    
                  <h1>OFFERING THE BEST OPTIONS OF LOGISTICS </h1>
                  <Link className="btn btn-primary" to="/badges">
                    Start
                  </Link>
                </div>
    
                
              </div>
            </div>
          </div>
        );
      }
}

export default Home;