import React from 'react';
import PropTypes from 'prop-types';
import ColoredButton from 'coloredbutton';
import TextField from 'textfield';
import LookupField from 'lookupfield';
import FontAwesome from 'react-fontawesome';
import {TagList} from 'react_tags';

class ArrayInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      displayText : ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLookupEnter = this.handleLookupEnter.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  //index of item in array
  //newValue value of item in array
  //selectedIndex if LookupField, index of selected item in popup menu
  handleChange (newValue,selectedIndex) {
    const self = this;
    return new Promise(function (res,rej) {
      if (newValue !== null) {
        self.setState({displayText : newValue},res);
      }else{
        self.setState({displayText : self.props.dataSource[selectedIndex]},res);
      }
    });
  }
  handleBlur () {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }
  handleLookupEnter (newValue,selectedIndex) {
    const self = this;
    this.handleChange(newValue,selectedIndex).then(function () {
      self.addItem();
    });
  }
  addItem () {
    if (this.state.displayText != '') {
      this.props.onChange(-1,this.state.displayText);
      this.setState({displayText : ''});
    }
  }
  removeItem (item) {
    let index = this.props.value.indexOf(item);
    this.props.onChange(-2,index);
  }
  render () {
    var self = this;
    var isMobile = !window.matchMedia('(min-width : 500px)').matches;
    var styles = {
      main : {
        'position' : 'relative',
        'margin' : '10px 0px'
      },
      inputs : {
        display : 'inline-block',
        width : 'calc(100% - 79px)',
        verticalAlign : 'bottom',
        margin : '0px'
      },
      lookupTextField : {
        margin : '0px'
      },
      pseudo : {
        borderRadius : '2px 0px 0px 2px'
      },
      addBtn : {
        lineHeight : '31.5px',
        padding : '7px 24px',
        display : 'inline-block',
        verticalAlign : 'bottom',
        borderRadius : '0px 2px 2px 0px'
      }
    };
    styles.delBtn = Object.assign({},styles.delBtn,this.props.delStyle);

    return (<div style={styles.main}>
      {self.props.lookup?
        <LookupField label={self.props.label}
          inputStyle={self.props.inputStyle}
          style={styles.inputs}
          textFieldStyle={styles.lookupTextField}
          pseudoStyle={styles.pseudo}
          topLabel={self.props.topLabel}
          fullWidth={self.props.fullWidth}
          onBlur={self.handleBlur}
          value={self.state.displayText}
          onEnter={self.handleLookupEnter}
          onSelect={self.handleChange}
          onSearch={self.props.onSearch.bind(self)}
          dataSource={self.props.dataSource} />
        :<TextField label={self.props.label}
          inputStyle={self.props.inputStyle}
          style={styles.inputs}
          pseudoStyle={styles.pseudo}
          topLabel={self.props.topLabel}
          fullWidth={self.props.fullWidth}
          onBlur={self.handleBlur}
          value={self.state.displayText}
          onEnter={self.addItem}
          onChange={self.handleChange} />}
      <ColoredButton label='Add'
        primary
        style={styles.addBtn}
        onTouchTap={self.addItem} />
      {this.props.template?this.props.value.map(this.props.template)
      :<TagList items={self.props.value}
        bgColor='rgba(255,255,255,1)'
        onRemove={self.props.noDelete?
          null:self.removeItem} />}
    </div>);
  }
};

ArrayInput.propTypes = {
  fullWidth : PropTypes.bool,
  noDelete : PropTypes.bool,
  label : PropTypes.string,
  topLabel : PropTypes.string,
  onChange : PropTypes.func,
  onBlur : PropTypes.func,
  value : PropTypes.array,
  lookup : PropTypes.bool,
  //template arguments:
  //item : generic item object of which it is an array
  //itemIndex : index of item in array
  //callback to call when value changes (takes newValue)
  //template returns jsx dom tree
  template : PropTypes.func,
  onSearch : PropTypes.func,
  dataSource : PropTypes.array,
  delStyle : PropTypes.object,
};
export default ArrayInput;
