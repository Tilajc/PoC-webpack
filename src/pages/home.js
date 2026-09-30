import "../styles/main.css";
import logo from "../assets/logo.svg";
import { render } from "../shared/utils";

render(`
  <h1>Home</h1>
  <img src="${logo}" alt="logo" />
  <p>Este es el bundle <b>home.js</b>.</p>
`);
