import React from 'react'
import image from '../../assets/OIP.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
export default function Header(props) {
  
  return (
    <>
        <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
        <img src={image} alt='food'/>
        </div>
    </>
  )
}
