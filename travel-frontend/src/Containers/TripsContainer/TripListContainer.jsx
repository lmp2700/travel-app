import React, { Component } from 'react'
import TripMain from './TripMainContainer'


const TripsList = ({ trips }) => {
    return (
        <div className="trips-list section">
            {trips && trips.map(trip => {
                return (
                    <TripMain trip={trip} key={trip.id} />
                )
            })}
        </div>
    )
}

export default TripsList;