import styles from "../icons.less";
import React from 'react';
import ReactDOM from 'react-dom';


export default (props) => (
  <span className={ styles.fa + " " + styles[props.name] }/>
);