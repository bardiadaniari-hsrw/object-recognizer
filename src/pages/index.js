import React from "react";
import {Link} from "gatsby";
import Layout from "../components/layout";


const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1>Welcome to the Object Identifier</h1>
        <Link to="/about" >Learn more...</Link>
      </div>
    </Layout>
  )
}

export default IndexPage
