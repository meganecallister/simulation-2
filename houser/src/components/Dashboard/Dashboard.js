import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houseList: [],
            houses: {}
        }
    }

    componentDidMount() {
        axios.get('/api/readHouseList')
            .then( resp => {
                this.setState({
                    houseList: resp.data
                })
            })
    }

    render() {
        let mappedHouseList = this.state.houseList.map( (e, i) => {
            return (
                <House key={i} houses = {e}/>
            )
        })
        return (
            <div>
                Dashboard
                <House/>
                <Link to='/wizard'><button>Add New Property</button></Link>
            </div>
        )
    }
}