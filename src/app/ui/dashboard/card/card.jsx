'use client'
import React from 'react'
import styles from './card.module.css'
import {useSpring, animated} from 'react-spring';



const card = (props, {item}) => {
  function Number({n}){
    const {number} = useSpring({
      from: {number: 0},
      number: n,
      delay : 200,
      config: {mass : 1, tension : 20, friction : 10},
    })
    return <animated.span>{number.to(n => n.toFixed(0))}</animated.span>
  }
  return (
    <div className={styles.container}>
      {props.icon}
      <div key={props.id} className={styles.texts}>
        <span className={styles.title}>{props.title}</span>
        <span className={styles.value}>
          <Number n={props.value} />
          {item}
        </span>
        <span className={styles.details}>
          <span>{props.details}</span>
        </span>
      </div>
    </div>
  )
};


export default card
