import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import headerStyle from "./style/layout.module.scss"


const Header = ({ pathname, rootPath, title }) => {
  return (
    <header>
      <div className={headerStyle.navContainer}>
      {pathname === rootPath ? (
        <h2
          style={{
            // ...scale(1.5),
            // marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link to={`/`} className={headerStyle.navHeader}>
            {title}
          </Link>
        </h2>
      ) : (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link className={headerStyle.navHeader} to={`/`}>
            {title}
          </Link>
        </h3>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
        className={headerStyle.nav}
      >
        <h2 className={headerStyle.h2Style}>
          <Link
            to="/projects"
            className={headerStyle.navItem}
            activeClassName={headerStyle.activeNavItem}
          >
            Projects
          </Link>
        </h2>
        <h2 className={headerStyle.h2Style}>
          {" "}
          <Link
            to="/vacancy"
            className={headerStyle.navItem}
            activeClassName={headerStyle.activeNavItem}
          >
            Vacancy
          </Link>
        </h2>
      </div>
      </div>
    </header>
  )
}

export default Header