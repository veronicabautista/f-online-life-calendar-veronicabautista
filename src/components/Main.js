import React, { Component } from 'react';

class Main extends Component {
	render() {
	
		return (
			<div>	
			<header className="plus__button">
				<span> + </span>
			</header>
			<ul className="smileys__container">
				{this.props.faces.map((face, i) => {
					 let smileys = face === ':)' ? 'happy__smile' : 'sad__smile'
					 return (
					<li key={i} className={smileys}>
					{face}
					</li>
				);
				})}
					
			</ul>
			</div>
		);
	}
}

export default Main;