import React, { Component } from 'react';

export default class GraceHopperQuoteComponent extends Component {
	render() {
		return (
			<div className="comment">
				{this.props.commentText}
			</div>
		);
	}
}

