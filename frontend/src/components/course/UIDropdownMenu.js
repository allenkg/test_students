import React from 'react';
import PropTypes from 'prop-types';

export class UIDropdownMenuItem extends React.Component {
  static propTypes = {
    link: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
  };

  onClick = (e) => {
    e.preventDefault();
    if (this.props.disabled) return false;
    if (!!this.props.onClick) this.props.onClick();
    this.props.hideDropdown(); //it's kinda private
  };

  render() {
    let itemContent;
    if (this.props.link) {
      itemContent = this.props.children;
    } else {
      itemContent = (<a onClick={this.onClick}>{this.props.children}</a>);
    }
    let disabledProps;
    if (this.props.disabled)
      disabledProps = {className: 'disabled', style: {opacity: 0.6}};
    return (
      <li {...disabledProps}>{itemContent}</li>
    );
  };
}

export class UIDropdownMenu extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    caretClassName: PropTypes.string,
    btnClassName: PropTypes.string,
    styleForLink: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.onOutsideClick = this.onOutsideClick.bind(this);
  }

  toggleDropdown = (e) => {
    e.preventDefault();
    this.setState({open: !this.state.open});
  };

  hideDropdown = () => {
    this.setState({open: false});
  };

  componentDidMount() {
    document.addEventListener('click', this.onOutsideClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onOutsideClick, true);
  }

  onOutsideClick = (e) => {
    if (!this.menu.contains(e.target) && !this.button.contains(e.target)) this.hideDropdown();
  };

  renderMenuContent = () => {
    if (this.props.children) {
      let extraProps = {hideDropdown: this.hideDropdown};
      if (this.props.children.length)
        return this.props.children.map((item, index) => {
          extraProps.key = 'menu-item-' + index;
          return React.cloneElement(item, extraProps);
        });
      return React.cloneElement(this.props.children, extraProps);
    }
  };

  render() {
    let dropdownClassName = `dropdown${this.state.open ? " open" : ""}`;
    return (
      <div className={dropdownClassName} style={{position: 'static'}}>
        <a style={this.props.styleForLink}
           className={`dropdown-toggle ${this.props.btnClassName}`}
           onClick={this.toggleDropdown}
           ref={node => this.button = node}>
          {this.props.title} <span className={this.props.caretClassName}/>
        </a>
        <ul className="dropdown-menu animated fadeInDown m-t-xs pointer" ref={node => this.menu = node}>
          {this.renderMenuContent()}
        </ul>
      </div>
    )
  }

}