import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
  <header className={headerStyles.header}>
    <h1>
  <Link className={headerStyles.title} to="/">{data.site.siteMetadata.title}</Link>
    </h1>
    <nav className={headerStyles.navList}>
      <li>
        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
      </li>
      <li>
        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
      </li>
      <li>
        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/tutorials">Tutorials</Link>
      </li>
      <li>
        <a className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} href="https://github.com/" rel="noreferrer" target="_blank">Github</a>
      </li>
    </nav>
  </header>
  )
}


export default Header;
