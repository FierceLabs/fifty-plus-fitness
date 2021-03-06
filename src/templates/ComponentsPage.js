import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import './ComponentPage.css'
// import Accordion from '../components/Accordion'
// import BackgroundVideo from '../components/BackgroundVideo'
// import Gallery from '../components/Gallery'
// import Popup from '../components/Popup'

// Export Template for use in CMS preview
export const ComponentsPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1
}) => (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
      backgroundPosition="40% 50%"
    />
    <section className="section">
      <div className="container about">
        <Content source={section1} />
      </div>
    </section>
  </main>
)

const ComponentsPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ComponentsPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ComponentsPage

export const pageQuery = graphql`
  query ComponentsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        section1
        section2
        video
        videoPoster
        videoTitle
      }
    }
  }
`
