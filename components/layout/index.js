import React, { Component } from 'react'
import NavBar from '../homePage/navbar'

export default class Layout extends Component {
    render() {
        const { children } = this.props
        return (
            <React.Fragment>
                <NavBar />
                {children}
                <div
                    style={{
                        width: '100%',
                        height: '50px',
                        float: 'left',
                        marginTop: '50px',
                    }}
                ></div>
                <footer
                    style={{
                        width: '100%',
                        height: '50px',
                        float: 'left',
                        backgroundColor: '#182131cc',
                        backdropFilter: 'blur(20px)',
                        marginTop: '50px',
                        color: '#FFF',
                        textAlign: 'center',
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                    }}
                >
                    <div style={{ marginTop: '15px' }}>
                        <span
                            style={{
                                color: 'rgb(223, 163, 0)',
                                fontWeight: '600',
                            }}
                        >
                            Warning!
                        </span>{' '}
                        Connect to a VPN before downloading!
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
