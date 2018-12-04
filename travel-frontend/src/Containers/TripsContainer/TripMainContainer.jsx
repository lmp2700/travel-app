import React from 'react';
import moment from 'moment';

const TripMain = ({ trip }) => {
    return (
        <div className="card z-depth-0">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{trip.title}</span>
                <p>Posted by {trip.authorFirstName} {trip.authorLastName}</p>
                <p>Location: </p>
                <p>Dates: </p>
                <p className="grey-text">{moment(trip.createdAt.toDate()).format("dddd, MMMM Do YYYY")}</p>
                <p>Trip Details :</p>
            </div>
        </div>
    )
}

export default TripMain;