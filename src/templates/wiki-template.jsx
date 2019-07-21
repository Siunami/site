import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import { graphql } from 'gatsby'

class WikiTemplate extends React.Component {
    render() {

        return (
            <Layout>
                <div>
                <Helmet title="aasdfsf" />
                <Sidebar {...this.props}/>
                </div>
            </Layout>
        )
    }
}

export default WikiTemplate

export const pageQuery = graphql`
query WikiQuery {
    site {
      siteMetadata {
        author {
          email
          github
          name
          twitter
          rss
        }
        url
        title
        subtitle
        siteUrl
        copyright
        disqusShortname
      }
    }
  }`