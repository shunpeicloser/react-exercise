"use strict";

const headerApp = document.querySelector("#header_app");
const mainApp = document.querySelector("#main_app");
const footerApp = document.querySelector("#footer_app");

ReactDOM.render(<Header />, headerApp);
ReactDOM.render(<Main />, mainApp);
ReactDOM.render(<Footer />, footerApp);