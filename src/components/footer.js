import React from "react"
import { Link } from "gatsby"

// import { rhythm, scale } from "../utils/typography"
import style from "./style/footer.module.scss"

const Footer = () => {
  return (
    <footer className={style.footerBorder}>
      <div className={style.footerContainer}>
      <div className={style.row1}>
        <h3>Business without limits with HeadWorks</h3>
      </div>
      <div className={style.row2}>
        <div>
          <h3>Career</h3>
          <div>
            <a href="mailto:hr@headworks.com.ua">hr@headworks.com.ua</a>
            {` `}
            <a href="tel:+380971805903">+380971805903</a>
          </div>
        </div>
        <div>
          <h3>Project inquiries</h3>
          <div>
            <a href="mailto:info@headworks.com.ua">info@headworks.com.ua</a>
            {` `}
            <a href="tel:+380677874330">+380677874330</a>
          </div>
        </div>
        <div>
          <h3>Let's do the magic?</h3>
          <button type="button">CONTACT US</button>
        </div>
      </div>
      <div className={style.row3}>
        <div className={style.socialIcons}>cool svg icons</div>
        <div className={style.links}>
          <a
            href="https://jobs.dou.ua/companies/headworks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOU
          </a>
          <Link to="/career"> Career</Link>
          <Link to="/blog"> Blog</Link>
        </div>
        <div>
          ©{" "}
          <span content="2014" itemprop="startDate">
            2014
          </span>
          -2020{" "}
          <span
            itemprop="legalName"
            itemscope=""
            itemtype="http://schema.org/Organization"
          >
            HeadWorks
          </span>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
