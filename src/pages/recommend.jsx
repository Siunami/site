import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar' 

class WikiTemplate extends React.Component {
    

    render() {
        const recommends = this.props.data.allMarkdownRemark.nodes
        console.log(this.props)
        return (
            <Layout>
                <div>
                <Helmet title="aasdfsf" />
                <Sidebar {...this.props}/>
                <div className="content">
                  <div className="content__inner">
                    <div className="page">
                      <h1 className="page__title">Recommend</h1>
                      <p>Things I recommend to friends</p>
                      <div className="page__body">
                        <div className="tags">
                          <ul className="tags__list">
                            {recommends.map(tag => (
                              <li key={tag.frontmatter.title} className="tags__list-item">
                                <Link
                                  to={tag.frontmatter.path}
                                  className="tags__list-item-link"
                                >
                                  {tag.frontmatter.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Layout>
        )
    }
}

export default WikiTemplate

export const pageQuery = graphql`
  query RecommendQuery {
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
    allMarkdownRemark(limit: 2000, filter: {frontmatter: {layout: {eq: "recommend"}, draft: {ne: true}}}) {
      nodes {
        frontmatter {
          title
          path
          description
        }
      }
    }
  }`