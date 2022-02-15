import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from '../../state'

const Header = props => (
  <header>
    <div id='header'>
      <h1>
        <Link to='/about'>Unddit</Link>
      </h1>
      <nav>
        <Link to='/about'>about & FAQ</Link>
      </nav>
    </div>
    <div id='status'>
      {props.global.state.statusText &&
        <p id='status-text'>{props.global.state.statusText}</p>}
      {props.global.state.statusImage &&
        <img id='status-image' src={props.global.state.statusImage} alt='status' />}
    </div>
  </header>
)

export default connect(Header)
