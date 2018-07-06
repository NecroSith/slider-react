import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
          <div className="wrapper">
            <HelloWorld/>
            <SayFullName name="Yan" surname="Pustynnyy" link="http://study.up-skills.ru/pl/22098354" />
            <SayFullName name="Ivan" surname="Dulnev" link="http://study.up-skills.ru/pl/22098354" />
          </div>
    );
  }
}

function HelloWorld() {
  let phrase = "React";
  return (
      <div>
      <h1>Hello, {phrase}! </h1>
      </div>
    )
}

function SayFullName(props) {
  return (
    <div>
      <h1>Hi there! My name is {props.name} and surname is {props.surname} </h1>
      <a href={props.link}>Link to my profile </a>
    </div>
    )
}


export default App;
