import React from 'react'

const TripMain = ({ trip }) => {
    return (
        <div className="card z-depth-0">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{trip.title}</span>
                <p>Posted by Username</p>
                <p className="grey-text">Trip Dates</p>
            </div>
        </div>
    )
}

export default TripMain;