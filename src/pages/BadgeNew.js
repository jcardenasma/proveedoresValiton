import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/avatarval.jpg';
import './styles/BadgeNew.css';
import Badge from '../components/Badges';



class BadgeNew extends React.Component
{
    render(){
        return (
            <div>
              <Navbar/>
            <div className = "BadgeNew__hero">
                <img className = "img-fluid" src = {header} alt = "logo" width = "150"/>
            </div>
            
            <div className = "container">
                <div className = "row">
                    <div className = "col">
                    
                    <Badge firstname = "Valiton" lastname = "Corp & Logistics" twitter = "valitoncorp" facebook ="facebook/ValitonCorp"/> 
            </div>
                 </div>
                      </div>
            </div>
        )
    }

}
export default BadgeNew;