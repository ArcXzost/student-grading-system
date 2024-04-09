'use client';
import React, { useState } from 'react';
import styles from './actions.module.css';

const actions = () => {

    const [formData, setFormData] = useState({
        batchName: '',
        course: ''
    });

    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(formData);

        // Turn our formData state into data we can use with a form submission
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        })

        // Send the data to the server
        fetch('/users', {
            method: 'POST',
            body: data,
            headers: {
                'accept': 'application/json',
            },
        }).then((response) => response.json())

            .then((data) => {
                console.log('Success:', data);
                setFormData({
                    batchName: '',
                    course: ''
                });
            })
        }
        return (
            <div className={styles.container}>
                <h2 className={styles.title}>Actions</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Parameter1</th>
                            <th>Parameter2</th>
                            <th>Parameter3</th>
                            <th>Upload</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <form method="POST" action="/users" onSubmit={submitForm}> */}
                            <tr>
                                <td>
                                    <div className={styles.user}>
                                        <img src="/add.png" alt="user" width={100} height={100} className={styles.userImage} />
                                        <span className={styles.status + ' ' + styles.done}>Add</span>
                                    </div>
                                </td>
                                <td>
                                    <input name="batchName" type="text" placeholder='Enter Batch Name' className={styles.input} onChange={handleInput} value={formData.batchName} />
                                </td>
                                <td>
                                    <input name="course" type="text" placeholder='Enter Course Name' className={styles.input} onChange={handleInput} value={formData.course} />
                                </td>
                                <td>
                                    1st semester
                                </td>
                                <td>
                                    <button type="submit" className={styles.button} >Add Batch</button>
                                </td>
                            </tr>
                        {/* </form> */}
                        <tr>
                            <td>
                                <div className={styles.user}>
                                    <img src="/add.png" alt="user" width={100} height={100} className={styles.userImage} />
                                    <span className={styles.status + ' ' + styles.done}>Add</span>
                                </div>
                            </td>
                            <td>
                                <input type="text" placeholder='Enter Batch Name' className={styles.input} />
                            </td>
                            <td>
                                <input type="text" placeholder='Enter Course Name' className={styles.input} />
                            </td>
                            <td>
                                <input type="text" placeholder='Enter Semester' className={styles.input} />
                            </td>
                            <td>
                                <button className={styles.button}>Enter Grades</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={styles.user}>
                                    <img src="/upd.jpg" alt="user" width={100} height={100} className={styles.userImage} />
                                    <span className={styles.status + ' ' + styles.pending}>Update</span>
                                </div>
                            </td>
                            <td>
                                <input type="text" placeholder='Enter Roll Number' className={styles.input} />
                            </td>
                            <td>
                                <input type="text" placeholder='Correct Name' className={styles.input} />
                            </td>
                            <td>
                                <input type="text" placeholder='Correct Branch' className={styles.input} />
                            </td>
                            <td>
                                <button className={styles.button}>Update Details</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={styles.user}>
                                    <img src="/upd.jpg" alt="user" width={100} height={100} className={styles.userImage} />
                                    <span className={styles.status + ' ' + styles.pending}>Update</span>
                                </div>
                            </td>
                            <td>
                                <input type="text" placeholder='Enter Roll Number' className={styles.input} />
                            </td>
                            <td>
                                <input type="text" placeholder="Father's Name" className={styles.input} />
                            </td>
                            <td>
                                <input type="text" placeholder="Mother's Name" className={styles.input} />
                            </td>
                            <td>
                                <button className={styles.button}>Update Details</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={styles.user}>
                                    <img src="/upd.jpg" alt="user" width={100} height={100} className={styles.userImage} />
                                    <span className={styles.status + ' ' + styles.pending}>Update</span>
                                </div>
                            </td>
                            <td>
                                <input type="text" placeholder='Enter Roll Number' className={styles.input} />
                            </td>
                            <td>
                                <input type="date" placeholder='Correct D.O.B' className={styles.input} />
                            </td>
                            <td>
                                <input type="Address" placeholder='Correct Address' className={styles.input} />
                            </td>
                            <td>
                                <button className={styles.button}>Update Details</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    export default actions
