import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import SnowfallEmoji from './SnowfallEmoji';


function App() {
return (
<>
<SnowfallEmoji />
<Header />
<br />
<br />
<Content />
<br />
<br />
<Footer />
</>
);
}
export default App;