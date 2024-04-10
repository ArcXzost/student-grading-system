import React from 'react'
import styles from "../../../ui/student/result/result.module.css"
import Search from "../../../ui/search/search"
import Link from "next/link"

const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <select className={styles.select}>
                    <option value="Semester">Semester</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
            </div>
            <div className={styles.result}>
                <div className={styles.infoContainer}>
                    <div className={styles.imgContainer}>
                        <img src="/photo.jpg" alt="user" fill className={styles.userImage} />
                    </div>
                    Varun Prajapati
                </div>
                <div className={styles.resultContainer}>
                    <span>Student Name</span>
                    <p>Varun Prajapati</p>
                    <span>Roll Number</span>
                    <p>2101046</p>
                    <span>Branch</span>
                    <p>Computer Science</p>
                    <span>Computer Science (CS101)</span>
                    <p>AA</p>
                    <span>Mathematics (MA101)</span>
                    <p>AB</p>
                    <span>Physics (PH101)</span>
                    <p>BB</p>
                    <span>Chemistry (CH101)</span>
                    <p>BC</p>
                    <span>English (EN101)</span>
                    <p>AA</p>
                    <span>Environmental Studies (ES101)</span>
                    <p>AA</p>
                </div>
            </div>
        </div>
    )
}

export default page
