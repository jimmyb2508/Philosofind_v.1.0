import React from "react";

import '../../styles/AllQuotesButton.css';

class AllQuotesButton extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			opened: false,
		};
		this.toggleBox = this.toggleBox.bind(this);
	}
  
	toggleBox() {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
	}
  
	render() {
		var { title, children } = this.props;
		const { opened } = this.state;

		if (opened){
			title ='Hide All Quotes';
		}else{
			title ='Show All Quotes';
		}

		return (
			<div className="box">
				<button className="boxTitle" onClick={this.toggleBox}>
					{title}
				</button>
				{opened && (					
					<div class="boxContent">
						{children}
					</div>
				)}
			</div>
		);
	}
}

export default AllQuotesButton;
