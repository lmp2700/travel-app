import React from 'react'

const TripDetails = (props) => {
    const id = props.match.params.id;

    return (
        <div className="container section trip-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Trip Title - {id}</span>
                    <p>Lorem ipsum blar blah blah</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Author</div>
                    <div>Date</div>
                </div>
            </div>
        </div>
    )
}

export default TripDetails;