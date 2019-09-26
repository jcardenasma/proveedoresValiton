import React from 'react';
import { Link } from 'react-router-dom';
import './styles/BadgesList.css';



class BadgesList extends React.Component {
    render () {
        return (
                  
                        <ul className = 'list-unstyled'>

                         {this.props.badges.map((badges) => {
                             return (
                                
                                 <li key = {badges.id} className = 'Badge__section-name-list'>
                                     <Link className = "text-reset text-decoration-none" to = {`/badges/${badges.id}/edit`}>
                                     <img className = 'Badge__avatar-list' src = {badges.avatarUrl} alt = "Logo list" />
                                     <div>
                                         <ul className = 'list-unstyled'>
                                           <li>{badges.firstName} {badges.lastName}</li>  
                                           <li> {badges.jobTitle}</li> 
                                           <li> {badges.profesion}</li>                                             
                                           <li>{badges.twitter}</li>
                                           <li>{badges.email}</li>
                                      </ul>
                                      </div>

                                     </Link>
                                    
                                 </li>
                                 
                                
                             )
                         })} 
                          </ul>  
                       
        )
    }
}

export default BadgesList;