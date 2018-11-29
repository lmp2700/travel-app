import React, { Component } from 'react'
import Notifications from './Notifications'
import TripsList from '../TripsContainer/TripListContainer'
import { connect } from 'react-redux';


class Dashboard extends Component {
    render() {
        // console.log(this.props)
        // const { trips } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col sm12 m6">
                        <TripsList trips={this.props.trips} />
                    </div>
                    <div className="col sm12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        trips: state.trip.trips
    }
}

export default connect(mapStateToProps)(Dashboard);