import React, { Component } from 'react'
import MenuItem from './MenuItem';

const API_URL=process.env.REACT_APP_API_URL;

export default class extends Component {
    state = {
        menuItems: []
    }
    getMenuItems = () => {
        fetch(`${API_URL}/laAutentica`)
            .then(response => response.json())
            .then(menuItems => this.setState({menuItems}, console.log))
    }
    // console.log not need but from console in browser, i can see what printed out

    componentDidMount(){
        this.getMenuItems();
    }
    render() {
        //console.log (this.state.menuItems)
        const displayItems = 
            this.state.menuItems
            .map(menuItem => <MenuItem MenuItem={menuItem}/>)
        return ( 
            <div>
                <h1>Menu Items</h1>
                {displayItems}
                </div>
        )
    }
}