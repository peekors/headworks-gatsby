import React from "react"
import Header from "./header"
import Footer from "./footer"
// import { rhythm } from "../utils/typography"
import style from "./style/layout.module.scss"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div className={style.appContainer}>
        <div className={style.layoutContainer}>
          <Header
            pathname={location.pathname}
            rootPath={rootPath}
            title={title}
          />
          <main>{children}</main>

          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
