import React from 'react'
import styles from '../../../ui/dashboard/details/addDetail/addDetail.module.css'

//add a new student details

const AddDetailsPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder='Roll Number' name='roll' required />
                <select name="course" id="course" required>
                    <option value="general">Choose Course </option>
                    <option value="MTECH">MTECH </option>
                    <option value="BTECH">BTECH </option>
                </select>
                <select name="sem" id="sem" required>
                    <option value="general">Choose Semester </option>
                    <option value="Sem1">SEM 1</option>
                    <option value="Sem2">SEM 2</option>
                    <option value="Sem3">SEM 3</option>
                    <option value="Sem5">SEM 4</option>
                    <option value="Sem6">SEM 5</option>
                    <option value="Sem4">SEM 6</option>
                    <option value="Sem7">SEM 7</option>
                    <option value="Sem8">SEM 8</option>
                </select>
                <select name="year" id="year" required>
                    <option value="general">Choose Year of Passing </option>
                    <option value="MTECH">2024 </option>
                    <option value="BTECH">2025 </option>
                    <option value="BTECH">2026 </option>
                    <option value="BTECH">2027 </option>
                </select>
                <input type="date" placeholder='Date Of Birth' name='D.O.B' required />
                <input type="text" placeholder="Father's Name" name='fname' required />
                <input type="text" placeholder="Mother's Name" name='mname' required />
                <textarea name="address" id="address" rows="16" placeholder='Enter Complete Address...' required></textarea>
                <button type='submit'>Add Student Details</button>
            </form>
        </div>
    )
}

export default AddDetailsPage
