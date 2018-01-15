import React, { Component } from 'react';
import Media from './media.js'
import './playlist.css'

class Playlist extends Component {
	render() {
		const playlist = this.props.data.categories[0].playlist
		let media = playlist.map((item) => {
			return <Media key={item.id} data={item} type={item.type}/>
		}) 
		return (
			<div className="media-list">{media}</div>
		)
	}
}

export default Playlist;