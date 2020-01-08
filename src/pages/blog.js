import React, { Component } from "react"
import Layout from "../components/layout"

import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import style from "./style/blog.module.scss"

class Blog extends Component  {
  
  render() {
  const { data } = this.props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  console.log(posts)

    return (
      <div>
        <Layout location={this.props.location} title={siteTitle}>
          <h2>Blog</h2>
          {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug} className={style.cardContainer}>
              <div>
                <div className={style.img}>

                </div>
              </div>
            </article>
          )
        })}
        </Layout>
      </div>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: {fileAbsolutePath: {regex: "/blog/"}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`