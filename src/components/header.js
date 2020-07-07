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
        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="https://github.com/" target="_blank">Github</Link>
      </li>
    </nav>
  </header>
  )
}


export default Header;
