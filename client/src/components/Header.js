import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a className="left brand-logo"> Passenger </a>
                <ul className="left">
                    <li>link1</li>
                    <li>link2</li>
                    <li>link3</li>
                </ul>
            </div>
        </nav>
    )
  }
}
