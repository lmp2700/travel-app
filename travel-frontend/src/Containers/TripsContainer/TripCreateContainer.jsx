import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTrip } from '../../store/actions/tripActions';
import { Redirect } from 'react-router-dom';

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
        this.props.history.push('/');
    }
    render() {
        const { auth } = this.props
        if (!auth.uid) return <Redirect to='/login' />
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="gray-text text-darken-3">Create a Trip</h5>
                    <div className="input-field">
                        <label htmlFor="title">Trip Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Trip Location</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="calendar">
                        <label htmlFor="content">Trip Start Date</label>
                        <input type="date" value="2019-01-01" min="none" max="none"></input>
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
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTrip: (trip) => dispatch(createTrip(trip))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTrip);
