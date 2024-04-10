import React from 'react'
import styles from '../../../ui/dashboard/users/singleuser/singleuser.module.css'

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <img src="/photo.jpg" alt="user" fill className={styles.userImage} />
                </div>
                Varun Prajapati
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Student Name</label>
                    <input type="text" placeholder="Varun Prajapati" />
                    <label>Email</label>
                    <input type="email" placeholder="varun@gmail.com" />
                    <label>Branch</label>
                    <input type="text" placeholder="Computer Science" />
                    <label>Semester</label>
                    <input type="text" placeholder="6" />
                    <label>Batch</label>
                    <input type="text" placeholder="2023" />
                    <label>Roll Number</label>
                    <input type="text" placeholder="CS-101" />
                    <label>CPI</label>
                    <input type="text" placeholder="9.1" />
                    <label>SPI</label>
                    <input type="text" placeholder="9.1" />
                    <label>DOB</label>
                    <input type="text" placeholder="01/01/2000" />
                    <label>Father's Name</label>
                    <input type="text" placeholder="Mr. Prajapati" />
                    <label>Mother's Name</label>
                    <input type="text" placeholder="Mrs. Prajapati" />
                    <label>Address</label>
                    <input type="text" placeholder="123, ABC Street, XYZ City" />
                    <button className={styles.button}>Save</button>
                </form>
            </div>           
        </div>
    )
}

export default SingleUserPage
