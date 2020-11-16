import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { graphql } from "gatsby"
import React from "react"
import "./blog.css"
import Img from "gatsby-image"
import Layout from "../components/layout"
export const query = graphql`
query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
    auther
    excert{
      excert
    }
    body{
    body
    }
      publishedDate(formatString: "Do MMMM, YYYY")
      featuredImage {
        fluid(maxWidth: 750) {
          src
        }
      }
     
    }
  }
  
`
const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              margin: "1rem 0rem",
            }}
            className="blog__container__content__container"
          >
            <img className="blog__container__content__img" alt={alt} src={url} />
          </div>
        )
      },
    },
  }

  const Blog = ({ data }) => {

    return (
        <Layout>
            <div className="blog">
            <div className="blog__container">
            <h1 className="blog__container__title">
            {data.contentfulBlogPost.title}
          </h1>
            </div>
            </div>
        </Layout>
    )
  }

  export default Blog