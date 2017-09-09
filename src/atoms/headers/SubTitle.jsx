import styles from './SubTitle.less';
import React from 'react';
import ReactDOM from 'react-dom';


export default (props) => (
    <h2 className={ styles.subtitle }>{ props.title }</h2>
);