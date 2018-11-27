import React, { Component } from 'react'
import Notifications from './Notifications'
import TripsList from '../TripsContainer/TripListContainer'


class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col sm12 m6">
                        <TripsList />
                    </div>
                    <div className="col sm12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;