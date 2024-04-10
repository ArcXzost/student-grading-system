'use client';
import React, { useState, useEffect } from 'react';
import styles from './courses.module.css'

const Course = (props) => 
{

    // const GradeLine = ({ initialGrade }) => {
    //     const [grade, setGrade] = useState(initialGrade);

    //     useEffect(() => {
    //         // Function to apply the CSS class and width based on the grade
    //         const applyGradeStyle = (grade) => {
    //             const gradeLine = document.getElementById("gradeLine");

    //             // Remove existing grade classes
    //             gradeLine.classList.remove(styles.gradeAA, styles.gradeAB, styles.gradeBB);

    //             // Apply the appropriate grade class based on the grade value
    //             switch (grade) {
    //                 case "AA":
    //                     gradeLine.classList.add(styles.gradeAA);
    //                     gradeLine.style.width = "100%"; // Adjust the width based on grade
    //                     break;
    //                 case "AB":
    //                     gradeLine.classList.add(styles.gradeAB);
    //                     gradeLine.style.width = "75%"; // Adjust the width based on grade
    //                     break;
    //                 case "BB":
    //                     gradeLine.classList.add(styles.gradeBB);
    //                     gradeLine.style.width = "50%"; // Adjust the width based on grade
    //                     break;
    //                 // Add more cases as needed for other grade combinations
    //                 default:
    //                     // Handle default case or add more specific cases if necessary
    //                     break;
    //             }
    //         };

    //         // Call the function to apply the CSS class and width based on the grade value
    //         applyGradeStyle(grade);
    //     }, [grade]);

        return (
            <div className={styles.container}>
                <div key={props.id} className={styles.courses}>
                    <h3>{props.Course}</h3>
                    <p>{props.Code}</p>
                    <p>{props.Credit}</p>
                    {/* <div id="gradeLine" className={styles.line}></div>; */}
                    <p>{props.grade}</p>
                </div>
            </div>
        )
    }
export default Course

