import styles from './ThirdTitle.less';
import React from 'react';
import ReactDOM from 'react-dom';


export default (props) => (
    <h3 className={ styles.thirdTitle }>{ props.title }</h3>
);