import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }

    handleName(value) {
        this.setState({
            name: value
        })
    }

    handleAddress(value) {
        this.setState({
            address: value
        })
    }

    handleCity(value) {
        this.setState({
            city: value
        })
    }

    handleState(value) {
        this.setState({
            state: value
        })
    }

    handleZipCode(value) {
        this.setState({
            zipcode: value
        })
    }

    render() {
        return (
            <div>
                Wizard 
                <Link to='/'><button>Cancel</button></Link>
                <input
                    placeholder = 'Name'
                    type = 'text'
                    onChange = { e => this.handleName( e.target.value )}
                    value = { this.state.name }/>
                <input
                    placeholder = 'Address'
                    type = 'text'
                    onChange = { e => this.handleAddress( e.target.value )}
                    value = { this.state.address }/>
                <input
                    placeholder = 'City'
                    type = 'text'
                    onChange = { e => this.handleCity( e.target.value )}
                    value = { this.state.city }/>
                <input
                    placeholder = 'State'
                    type = 'text'
                    onChange = { e => this.handleState( e.target.value )}
                    value = { this.state.state }/>
                <input
                    placeholder = 'Zip Code'
                    type = 'text'
                    onChange = { e => this.handleZipCode( e.target.value )}
                    value = { this.state.zipcode }/>
            </div>
        )
    }
}