import React from 'react';
import './card.component.css';

class Card extends React.Component { 
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() { 
		return (
			<div className="card" style={{ backgroundColor: this.props.color, display: this.props.display}}>
				<span>{this.props.text}</span>
			</div>
		);
	}
}


export default Card;