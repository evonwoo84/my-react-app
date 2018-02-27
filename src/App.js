import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import LoginPage from './LoginPage';
import Board from './Board';
import BurgerMenu from 'react-burger-menu';
import classNames from 'classnames';
import './index.css';
import './normalize.css';
import './fonts/font-awesome-4.2.0/css/font-awesome.min.css';

class MenuWrap extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

    if (sideChanged) {
      this.setState({hidden : true});

      setTimeout(() => {
        this.show();
      }, this.props.wait);
    }
  }

  show() {
    this.setState({hidden : false});
  }

  render() {
    let style;

    if (this.state.hidden) {
      style = {display: 'none'};
    }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    );
  }
}

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      currentMenu: 'slide',
      side: 'left'
    };
  }

  changeMenu(menu) {
    this.setState({currentMenu: menu});
  }

  changeSide(side) {
    this.setState({side});
  }

  getItems() {
    let items;

    items = [
      <a key="0" href=""><i className="fa fa-fw fa-envelope-o" /><span>My Trips</span></a>,
      <a key="1" href=""><i className="fa fa-fw fa-star-o" /><span>Gamification</span></a>,
      <a key="2" href=""><i className="fa fa-fw fa-bell-o" /><span>Notification</span></a>,
      <a key="3" href=""><i className="fa fa-fw fa-comment-o" /><span>Near By</span></a>,
      <a key="4" href=""><i className="fa fa-fw fa-bar-chart-o" /><span>Dashboard</span></a>,
      <a key="5" href=""><i className="fa fa-fw fa-newspaper-o" /><span>Profile</span></a>
    ];

    return items;
  }
  getMenu() {
    const Menu = BurgerMenu[this.state.currentMenu];
    const items = this.getItems();
    let jsx;

    if (this.state.side === 'right') {
      jsx = (
        <MenuWrap wait={20} side={this.state.side}>
          <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right>
            {items}
          </Menu>
        </MenuWrap>
      );
    } else {
      jsx = (
        <MenuWrap wait={20}>
          <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
            {items}
          </Menu>
        </MenuWrap>
      );
    }

    return jsx;
  }

  render() {
    return (
      <div className="App" id="outer-container" style={{height: '100%'}}>
      {this.getMenu()}
      <main id="page-wrap">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to TREX</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <LoginPage title = "TREX Application" phname = "Enter Your Email" phpassword = "Enter Your Password"></LoginPage>
        <Board status = "Next Player: Y" />
        
        </main>
      </div>
    );
  }
}

const menus = {
  slide: {buttonText: 'Slide', items: 1}
};

export default App;
ReactDOM.render(<App menus={menus} />, document.getElementById('root'));

//export default App;