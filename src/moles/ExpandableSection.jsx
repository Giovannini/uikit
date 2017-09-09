import styles from './ExpandableSection.less'
import React from 'react';
import ReactDOM from 'react-dom';

import Icon from '../atoms/icons/Icon.jsx';
import SubTitle from '../atoms/headers/SubTitle.jsx';


export default class ExpandableSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }
  toggleOpen() {
    console.log("toto", this.state);
    this.setState((p) => ({ open: !p.open }))
  }
  render() {
    return (
      <div>
        <div onClick={ this.toggleOpen } className={ styles.button }>
          <SubTitle title={ this.props.name }/>
          { this.state.open
            ? <Icon name="chevron-down" />
            : <Icon name="chevron-up" />
          }
        </div>
        { this.state.open ? this.props.children : null }
      </div>
    );
  }
}