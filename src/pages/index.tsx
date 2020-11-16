import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import "./site.css"
import Img from "gatsby-image"
import Button from "@material-ui/core/Button"

import { useNavigate } from "@reach/router"
const IndexPage = () => {
  const navigate = useNavigate()
  const data = useStaticQuery(graphql`
  {
    allContentfulBlogPost {
      nodes {
        slug
        title
        auther
        excert{
          excert
        }
        publishedDate
        featuredImage{
          fluid{
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
  `)
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  
  return (

    <Layout>
      <div className="home">
        {data.allContentfulBlogPost.nodes.map((node, index) => (
          <div className="home__blog" key={index}>
            <h1 className="home__blog__title"> {node.title}
            </h1>
            <p className="home__blog__author">
               <span> {node.auther}</span>
            </p>
            <br />
            {/* <a onClick={() => firebase.auth().signOut()}>Sign-out</a> */}

            <Img
              className="featured"
              fluid={node.featuredImage.fluid}
              alt={node.title}
              
              
            />

            <br />
            {node.featuredImage && (
             <div className="riche">
              {" "}
              {documentToReactComponents(node.excert.json, options)}
            </div> 
            )}
            <br />

            <Button
              color="primary"

              variant="contained" 
              onClick={() => navigate(`${node.slug}`)}
            >
              Read More
            </Button>

          </div>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
