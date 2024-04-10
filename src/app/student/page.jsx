import React from 'react'
import Welcome from '../ui/student/welcome/welcome.jsx'
import Card from '../ui/dashboard/card/card.jsx'
import styles from '../ui/student/student.module.css'
import Course from '../ui/student/courses/courses.jsx'
import Graph from '../ui/student/analytics/graph.jsx'
import Srightbar from '../ui/student/Srightbar/Srightbar.jsx'
import Chart from '../ui/dashboard/chart/chart.jsx'

const page = () => {
    return (
        <>
            <Welcome />
            <div className={styles.container}>

                <div className={styles.wrapper}>
                    <h2 className={styles.heading}>Finance</h2>
                    <div className={styles.card}>
                        <Card
                            key={data[0].id}
                            title={data[0].title}
                            value={data[0].value}
                            details={data[0].details}
                        />
                        <Card
                            key={data[1].id}
                            title={data[1].title}
                            value={data[1].value}
                            details={data[1].details}
                        />
                        <Card
                            key={data[2].id}
                            title={data[2].title}
                            value={data[2].value}
                            details={data[2].details}
                        />
                        <Card
                            key={data[3].id}
                            title={data[3].title}
                            value={data[3].value}
                            details={data[3].details}
                        />
                    </div>
                    <h2 className={styles.heading}>Courses</h2>
                    <div className={styles.courses}>
                        <Course
                            key={data1[0].id}
                            Course={data1[0].Course}
                            Code={data1[0].Code}
                            Credit={data1[0].Credit}
                            grade={data1[0].grade}
                        />
                        <Course
                            key={data1[1].id}
                            Course={data1[1].Course}
                            Code={data1[1].Code}
                            Credit={data1[1].Credit}
                            grade={data1[1].grade}
                        />
                        <Course
                            key={data1[2].id}
                            Course={data1[2].Course}
                            Code={data1[2].Code}
                            Credit={data1[2].Credit}
                            grade={data1[2].grade}
                        />
                        <Course
                            key={data1[3].id}
                            Course={data1[3].Course}
                            Code={data1[3].Code}
                            Credit={data1[3].Credit}
                            grade={data1[3].grade}
                        />
                        <Course
                            key={data1[4].id}
                            Course={data1[4].Course}
                            Code={data1[4].Code}
                            Credit={data1[4].Credit}
                            grade={data1[4].grade}
                        />
                        <Course
                            key={data1[5].id}
                            Course={data1[5].Course}
                            Code={data1[5].Code}
                            Credit={data1[5].Credit}
                            grade={data1[5].grade}
                        />
                    </div>
                    <div className={styles.analytics}>
                        <h2 className={styles.heading}>Analytics</h2>
                        <Graph />
                    </div>
                </div>
                <div className={styles.rightbar}>
                    <Srightbar />
                </div>
            </div>
        </>
    )
}

export default page

const data = [
    {
        id: 1,
        title: 'Semester Fee Paid',
        value: 125000,
        details: 'Jan 2024-April 2024',
    },
    {
        id: 2,
        title: 'Hostel Fee Paid',
        value: 12500,
        details: 'Jan 2024-April 2024',
    },
    {
        id: 3,
        title: 'Mess Fee Paid',
        value: 4000,
        details: 'For this month..',
    },
    {
        id: 4,
        title: 'Library Fine',
        value: 0,
        details: 'No dues',
    }
]


const data1 = [
    {
        id: 1,
        Course: 'Mathematics',
        Code: 'MA101',
        Credit: 6,
        grade: 'AA'
    },
    {
        id: 2,
        Course: 'Physics',
        Code: 'PH101',
        Credit: 6,
        grade: 'AB'
    },
    {
        id: 3,
        Course: 'Chemistry',
        Code: 'CH101',
        Credit: 6,
        grade: 'BB'
    },
    {
        id: 4,
        Course: 'Computer Science',
        Code: 'CS101',
        Credit: 6,
        grade: 'AA'
    },
    {
        id: 5,
        Course: 'DSA',
        Code: 'CS102',
        Credit: 6,
        grade: 'AB'
    },
    {
        id: 6,
        Course: 'Engineering Drawing',
        Code: 'ME101',
        Credit: 6,
        grade: 'BB'
    }
]