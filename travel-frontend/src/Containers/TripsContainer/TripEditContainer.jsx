import React, { Component } from 'react'
// import { editTrip } from '../../store/actions/tripActions'

class editTrips extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            trips: ''
        }
    }
    // deleteTrip = async () => {
    //     const deletedTrip = await fetch('/trips/' + id, {
    //         method: 'DELETE'
    //     })
    //     const deletedTripParsed = await deletedTrip.json;
    //     console.log(deletedTripParsed, ' deleted trip')
    //     this.setState({ trips: this.state.trips.filter((trips => trips._id !== id)) })
    // }
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.id]: e.currentTarget.value
        })
    }
    handleEditSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.editTrip(this.state)
        this.props.history.push('/trips');
    }
    // handleDeleteTrip = (e) => {
    //     e.preventDefault();
    //     this.props.deleteTrip(this.state)
    //     this.props.history.splice('/trips')
    // }
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="gray-text text-darken-3">Edit Your Trip</h5>
                    <div className="input-field">
                        <label htmlFor="title">Trip Title</label>
                        <input type="text" id="title" onChange={this.handleEditChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="location">Trip Location</label>
                        <textarea id="location" className="materialize-textarea" onChange={this.handleEditChange}></textarea>
                    </div>
                    <div className="calendar">
                        <label htmlFor="start_date">Trip Start Date</label>
                        <input type="text" className="materialize-textarea" onChange={this.handleEditChange} min="none" max="none"></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Trip Details</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleEditChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0>">Submit Edit</button> &nsbp;
                        <button className="waves-effect waves-light btn" onSubmit={this.handleDeleteTrip}>Delete Trip</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default editTrips;