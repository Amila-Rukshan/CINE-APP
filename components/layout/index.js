import React, { Component } from 'react'
import NavBar from '../homePage/navbar'

export default class Layout extends Component {
    render() {
        const { children } = this.props
        return (
            <React.Fragment>
                <NavBar />
                {children}
            </React.Fragment>
        )
    }
}
