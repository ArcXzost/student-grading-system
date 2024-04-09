import React from 'react'
import styles from '../../ui/dashboard/users/users.module.css';
import Search from '../../ui/search/search';
import Link from 'next/link';
import Pagination from '../../ui/dashboard/pagination/pagination';

const DetailsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for Batch Details..." />
        <Link href="/dashboard/Details/add">
          <button className={styles.addButton}>Add</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Semester</th>
            <th>Branch</th>
            <th>Roll Number</th>
            <th>SPI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <img src="/user.png" alt="user" width={40} height={40} className={styles.userImage} />
                John Doe
              </div>
            </td>
            <td>6</td>
            <td>Computer Science</td>
            <td>CS-101</td>
            <td>9.1</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={styles.button + ' ' + styles.edit}>View</button>
                </Link>
                <button className={styles.button + ' ' + styles.delete}>Delete</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <img src="/user.png" alt="user" width={40} height={40} className={styles.userImage} />
                Jane Doe
              </div>
            </td>
            <td>6</td>
            <td>ECE</td>
            <td>CS-102</td>
            <td>8.9</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={styles.button + ' ' + styles.edit}>View</button>
                </Link>
                <button className={styles.button + ' ' + styles.delete}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div >
  )
}

export default DetailsPage

