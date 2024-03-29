import React from 'react';
import { Link } from 'react-router-dom';
import './styles/BadgesList.css';
import Gravatar from './Gravatar';

class BadgesListItem extends React.Component {
    render() {
      return (
        <div className="BadgesListItem">
          <Gravatar
            className="BadgesListItem__avatar"
            email={this.props.badge.email}
          />
  
          <div>
            <strong>
              {this.props.badge.firstName} {this.props.badge.lastName}
            </strong>
            <br />@{this.props.badge.twitter}
            <br />{this.props.badge.jobTitle}
            <br />{this.props.badge.email}
            <br />{this.props.badge.profesion}
          </div>
        </div>
      );
    }
  }

  function useSearchBadges (badges) {
    const [query, setQuery] = React.useState ('');
    const [filteredBadges, setfilteredBadges] = React.useState(badges);

    React.useMemo (() => {
      const result = badges.filter(badge => {
       return `${badge.firstName} ${badge.lastName} ${badge.email}`
       .toLowerCase()
       .includes(query.toLowerCase());
      });
      setfilteredBadges (result);
    }, [badges, query]);
   return {setQuery, filteredBadges}
  }

  function BadgesList (props) {
     const badges = props.badges;
     const {query, setQuery, filteredBadges} = useSearchBadges(badges)
    
    

      if (filteredBadges.length === 0) {
        return (
          <div>
            <div className = "form-group">
            <label>Buscar Usuarios</label>
            <input type = "text" className = "form-control"
             value = {query}
             onChange = {(e) => {
               setQuery(e.target.value)
             }}
             />
          </div>
            <h3>No Encontramos resultados</h3>
             <Link className="btn btn-primary" to="/badges/new">
              Create new badge
            </Link>
          </div>
        );
      }
  
      return (
        <div className="BadgesList">
          <div className = "form-group">
            <label>Buscar Usuarios</label>
            <input type = "text" className = "form-control"
             value = {query}
             onChange = {(e) => {
               setQuery(e.target.value)
             }}
             />
          </div>
          <ul className="list-unstyled">
            {filteredBadges.map(badge => {
              return (
                <li key={badge.id}>
                  <Link
                    className="text-reset text-decoration-none"
                    to={`/badges/${badge.id}`}
                  >
                    <BadgesListItem badge={badge} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }

export default BadgesList;