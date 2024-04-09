import React from 'react'
import styles from "./sidebar.module.css"
import MenuLink from "./menuLink/menuLink"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHouse, faList, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  {
    title : "Pages",
    list : [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon : <FontAwesomeIcon icon={faHouse} className="fas fa-house" style={{ color: "grey" }}
        />
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon : <FontAwesomeIcon icon={faUser} className="fas fa-user" style={{ color: "grey" }}
        />
      },
      {
        title: "Details",
        path: "/dashboard/Details",
        icon : <FontAwesomeIcon icon={faList} className="fas fa-list" style={{ color: "grey" }}
        />
      }
    ]
  },

  {
    title : "Pages",
    list : [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon : <FontAwesomeIcon icon={faHouse} className="fas fa-house" style={{ color: "grey" }} />
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon : <FontAwesomeIcon icon={faHouse} className="fas fa-house" style={{ color: "grey" }} />
      },
      {
        title: "Details",
        path: "/dashboard/Details",
        icon : <FontAwesomeIcon icon={faHouse} className="fas fa-house" style={{ color: "grey" }} />
      }
    ]
  },

  {
    title : "Pages",
    list : [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon : <FontAwesomeIcon icon={faHouse} className="fas fa-house" style={{ color: "grey" }} />
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon : <FontAwesomeIcon icon={faHouse} className="fas fa-house" style={{ color: "grey" }} />
      },
      {
        title: "Details",
        path: "/dashboard/Details",
        icon : <FontAwesomeIcon icon={faHouse} className="fas fa-house" style={{ color: "grey" }} />
      }
    ]
  }
]

const sidebar = () => {
  return (
    <div className = {styles.container}>
      <div className = {styles.user}>
        <img src = "https://e7.pngegg.com/pngimages/419/473/png-clipart-computer-icons-user-profile-login-user-heroes-sphere-thumbnail.png" alt = "user" width = {50} height = {50} />
        <div className={styles.userDetail}>
          <span className={styles.userName}>Ashutosh Pandey</span>
          <span className={styles.userRole}>Admin</span>
        </div>
      </div>
      <ul>
        {menuItems.map((cat) => (
          <li key = {cat.title}>
          <span className={styles.cat}>{cat.title}</span>
          {cat.list.map((item) => (
            <MenuLink item = {item} key= {item.title} />
          ))}
          </li>
        ))}
      </ul>
      <div className={styles.logout}>
      <FontAwesomeIcon icon={faRightFromBracket} className="fas fa-right-from-bracket" style={{ color: "grey" }} />
      <button className={styles.logout}>Log out</button>
      </div> 
    </div>
  )
}

export default sidebar
