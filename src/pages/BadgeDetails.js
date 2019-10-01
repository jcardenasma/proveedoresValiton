import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgeDetails.css';
import Badge from '../components/Badges';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function BadgeDetails(props) {
  const badge = props.badge;

  return (
    <div>
            <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              profesion={badge.profesion}
            />
          </div>
          <div className="col">
            <h2>Acciones</h2>
            <div>
              <div>
                  <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${badge.id}/edit`}
                >
                  Editar
                </Link>
              </div>

              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Eliminar
                </button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;