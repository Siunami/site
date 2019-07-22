import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import { graphql } from 'gatsby'

class WikiTemplate extends React.Component {
    render() {
        console.log(this.props)
        return (
            <Layout>
                <div>
                <Helmet title="aasdfsf" />
                <Sidebar {...this.props}/>
                <p>asfasf</p>
                </div>
            </Layout>
        )
    }
}

export default WikiTemplate

export const pageQuery = graphql`
  query q {
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
  }`