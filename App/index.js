"use strict";

const headerApp = document.querySelector("#header_app");
const mainApp = document.querySelector("#main_app");
const footerApp = document.querySelector("#footer_app");

class Header extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<h1 id="header-block">Header Test</h1>
			</div>
		);
	}
};

class Main extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<h1 id="main-block">Main Test</h1>
			</div>
		);
	}
};

class Footer extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<h1 id="footer-block">Footer Test</h1>
			</div>
		);
	}
};

ReactDOM.render(<Header />, headerApp);
ReactDOM.render(<Main />, mainApp);
ReactDOM.render(<Footer />, footerApp);