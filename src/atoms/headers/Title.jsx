import styles from './Title.less';
import React from 'react';
import ReactDOM from 'react-dom';


export default (props) => (
    <h1 className={ styles.title }>{ props.title }</h1>
);