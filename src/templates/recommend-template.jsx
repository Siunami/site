import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import WikiTemplateDetails from '../components/WikiTemplateDetails'

class WikiTemplate extends React.Component {
    render() {
        console.log(this.props)
        return (
            <Layout>
                <div>
                <Helmet title="aasdfsf" />
                <WikiTemplateDetails {...this.props} />
                </div>
            </Layout>
        )
    }
}

export default WikiTemplate



export const pageQuery = graphql`
query RecommendTemplateQuery($slug: String) {
  site {
    siteMetadata {
      title
      subtitle
      copyright
      menu {
        label
        path
      }
      author {
        name
        email
        twitter
        github
        rss
      }
    }
  }
  markdownRemark(fields: { slug: { eq: $slug } }) {
    id
    html
    fields {
      tagSlugs
      slug
    }
    frontmatter {
      title
      tags
      date
      description
    }
  }
  }`