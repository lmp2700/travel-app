import React from 'react';
import TripMain from './TripMainContainer';
import { Link } from 'react-router-dom';


const TripsList = ({ trips }) => {
    return (
        <div className="trips-list section">
            {trips && trips.map(trip => {
                return (
                    <Link to={'/trip/' + trip.id} key={trip.id}>
                        <TripMain trip={trip} />
                    </Link>
                )
            })}
        </div>
    )
}

export default TripsList;