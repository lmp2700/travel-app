import React, { Component } from 'react'
import TripMain from './TripMainContainer'


const TripsList = () => {
    return (
        <div className="trips-list section">
            <TripMain />
            <TripMain />
            <TripMain />
        </div>
    )
}

export default TripsList;