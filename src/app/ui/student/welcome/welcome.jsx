import React from 'react'
import styles from './welcome.module.css'

var currentDate = new Date();

// Format the date
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var formattedDate = currentDate.toLocaleDateString('en-US', options);

const Welcome = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.intro}>
                <div className={styles.date}>{formattedDate}</div>
                <div className={styles.welcome}>
                    <h1 className={styles.fondamentoregular}>Welcome back {props.name}</h1>
                    <p>Always Stay Updated in your student portal!</p>
                </div>
            </div>
            <div className={styles.image}>
                <img src="/student.png" alt="student" width={400} height={400} />
            </div>
        </div>
    )
}

export default Welcome
