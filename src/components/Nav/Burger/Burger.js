import React from 'react'
import classes from './Burger.css'

const Burger = props => {
  const cls = [classes.Burger, 'fa']

  if (props.isOpen) {
    cls.push('fa-times')
    cls.push(classes.open)
  } else {
    cls.push('fa-bars')
  }

  return <i className={cls.join(' ')} onClick={props.onToggle} />
}

export default Burger
