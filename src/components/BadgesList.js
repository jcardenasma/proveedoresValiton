import React from 'react';
import './styles/BadgesList.css';


class BadgesList extends React.Component {
    render () {
        return (
                  
                        <ul className = 'list-unstyled'>

                         {this.props.badges.map((badges) => {
                             return (
                                
                                 <li key = {badges.id} className = 'Badge__section-name-list'>
                                    <img className = 'Badge__avatar-list' src = {badges.avatarUrl} alt = "Logo list" />
                                     <div>
                                         <ul className = 'list-unstyled'>
                                           <li>{badges.firstName} {badges.lastName}</li>  
                                           <li> {badges.jobTitle}</li>                                             
                                           <li>{badges.twitter}</li>
                                      </ul>
                                      </div>
                                 </li>
                                 
                                
                             )
                         })} 
                          </ul>  
                       
        )
    }
}

export default BadgesList;