import React from "react";
import {Link, graphql, useStaticQuery} from "gatsby";
import footerStyles from "./footer.module.scss";

const Footer = () => {
    const data = useStaticQuery(graphql`
    query{
        site{
          siteMetadata {
          author
          university
            }
          }
      }
    `);

    return (
        <footer className={footerStyles.parent}>
            <li>
                <Link className={footerStyles.navItem} to="/contact">Contact us</Link>
            </li>
            <li>
                <a className={footerStyles.navItem} href="https://www.hochschule-rhein-waal.de/en" rel="noreferrer" target="_blank">{data.site.siteMetadata.university}</a>
            </li>
            <li>
                <p>Created by {data.site.siteMetadata.author}</p>
            </li>
        </footer>
    )
}

export default Footer;