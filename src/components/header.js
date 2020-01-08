import React from "react"
import { Link } from "gatsby"

// import { rhythm, scale } from "../utils/typography"
import headerStyle from "./style/header.module.scss"

const Header = ({ pathname, rootPath, title }) => {
  return (
    <header className={headerStyle.headerContainer}>
      <div className={headerStyle.headerWrapper}>
        {/* {pathname === rootPath ? (
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
      ) : ( */}
          <h3 className={headerStyle.title}>
          <Link className={headerStyle.navHeader} to={`/`}>
            {title}
            {/* <div className={headerStyle.logo}></div> */}
          </Link>
          </h3>
        <nav>
          <ul className={headerStyle.navContainer}>
            <li>
              <Link
                to="/projects"
                className={headerStyle.navItem}
                activeClassName={headerStyle.activeNavItem}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={headerStyle.navItem}
                activeClassName={headerStyle.activeNavItem}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={headerStyle.navItem}
                activeClassName={headerStyle.activeNavItem}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className={headerStyle.navItem}
                activeClassName={headerStyle.activeNavItem}
              >
                Career
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
