import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTrip } from '../../store/actions/tripActions';

class CreateTrip extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.id]: e.currentTarget.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.createTrip(this.state)
    }
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="gray-text text-darken-3">Create a Trip</h5>
                    <div className="input-field">
                        <label htmlFor="title">Trip Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Trip Details</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0>">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createTrip: (trip) => dispatch(createTrip(trip))
    }
}

export default connect(null, mapDispatchToProps)(CreateTrip);
