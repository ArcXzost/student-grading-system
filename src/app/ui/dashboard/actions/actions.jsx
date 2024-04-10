'use client';
import React, { useState } from 'react';
import styles from './actions.module.css';

const actions = () => {

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Actions</h2>
            <div className={styles.actions}>
                <div className={styles.addBatch}>
                    <form action="">
                        <div className={styles.user}>
                            <img src="/add.png" alt="user" width={100} height={100} className={styles.userImage} />
                            <span className={styles.status + ' ' + styles.done}>Add New Batch</span>
                        </div>

                        <div>
                            <input name="batchName" type="text" placeholder='Enter Batch Name' className={styles.input} />

                            <input name="course" type="text" placeholder='Enter Course Name' className={styles.input} />

                            <p className={styles.p}>1st semester</p>

                            <input name="File" type="file" accept=".xlsx .csv" placeholder='Upload the file' className={styles.input + ' ' + styles.file} id="actualbtn" />
                            {/* <label for="actualbtn" className={styles.label}>Choose File</label> */}
                            <div>
                                <button type="submit" className={styles.button} >Add new Batch</button>
                            </div>
                        </div>
                    </form>
                    <div className={styles.output}>Successfull! A new batch has been added and new tables have been created for the next semester.</div>
                </div>
                <div className={styles.addGrades}>
                    <form action="">
                        <div className={styles.user}>
                            <img src="/add.png" alt="user" width={100} height={100} className={styles.userImage} />
                            <span className={styles.status + ' ' + styles.done}>Upload the marksheet of students</span>
                        </div>

                        <div>
                            <input type="text" placeholder='Enter Batch Name' className={styles.input} />

                            <input type="text" placeholder='Enter Course Name' className={styles.input} />

                            <input type="text" placeholder='Enter Semester' className={styles.input} />

                            <input name="File" type="file" accept=".xlsx .csv" placeholder='Upload the file' className={styles.input + ' ' + styles.file} id='actualbtn' />
                            {/* <label for="actualbtn" className={styles.label}>Choose File</label> */}
                            <div>
                                <button className={styles.button}>Enter Grades</button>
                            </div>
                        </div>
                    </form>
                    <div className={styles.output}> Successfull!</div>
                </div>
                <div className={styles.updateDetails}>
                    <form action="">
                        <div className={styles.user}>
                            <img src="/upd.jpg" alt="user" width={100} height={100} className={styles.userImage} />
                            <span className={styles.status + ' ' + styles.pending}>Update Institute Details of student</span>
                        </div>

                        <div>
                            <input type="text" placeholder='Enter Roll Number' className={styles.input} />

                            <input type="text" placeholder='Correct Name' className={styles.input} />

                            <input type="text" placeholder='Correct Branch' className={styles.input} />

                            <div>
                                <button className={styles.button}>Update Details</button>
                            </div>
                        </div>
                    </form>
                    <div className={styles.output}> Successfull!</div>
                </div>
                <div className={styles.updateDetails}>
                    <form action="">
                        <div className={styles.user}>
                            <img src="/upd.jpg" alt="user" width={100} height={100} className={styles.userImage} />
                            <span className={styles.status + ' ' + styles.pending}>Update Personal Details of student</span>
                        </div>

                        <div>
                            <input type="text" placeholder='Enter Roll Number' className={styles.input} />

                            <input type="text" placeholder="Father's Name" className={styles.input} />

                            <input type="text" placeholder="Mother's Name" className={styles.input} />
                            <input type="date" placeholder='Correct D.O.B' className={styles.input} />

                            <input type="Address" placeholder='Correct Address' className={styles.input} />
                            <div>
                                <button className={styles.button}>Update Details</button>
                            </div>
                        </div>
                    </form>
                    <div className={styles.output}> Successfull!</div>
                </div>

            </div>
        </div>
    )
}

export default actions
