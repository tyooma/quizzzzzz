import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './Layout.css'
import Burger from '../../components/Nav/Burger/Burger'
import Drawer from '../../components/Nav/Drawer/Drawer'

class Layout extends Component {
  state = {
    menu: false
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  menuCloseHandler = () => {
    this.setState({
      menu: false
    })
  }

  render() {
    return (
      <div className={classes.Layout}>
        <Drawer
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
          isAuthenticated={this.props.isAuthenticated}
        />

        <Burger onToggle={this.toggleMenuHandler} isOpen={this.state.menu} />

        <main>{this.props.children}</main>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.token
  }
}

export default connect(mapStateToProps)(Layout)
