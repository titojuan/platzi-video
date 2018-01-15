import React, { Component } from 'react';
import PropTypes from"prop-types";
import './media.css'

class Media extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: props.data
    }
    this._handleClick = this._handleClick.bind(this)
  }

  _handleClick = (event) => {
    let data = this.state.data
    data.author = 'Jose'
    this.setState({ data: data })
  }
  render() {
    let { data } = this.state
    return (
      <div className="media-item" onClick={this._handleClick}>
        <img src={data.cover} alt={data.alt} />
        <h3>{data.title}</h3>
        <h5>{data.author}</h5>
      </div>
    )
  }
}

Media.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['video','audio']),
}

export default Media;