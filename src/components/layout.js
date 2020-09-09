/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Button, Typography, Space } from "antd"
import { InfoCircleOutlined } from "@ant-design/icons"

import Header from "./header"
import "./layout.css"

const { Text } = Typography

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{ float: 'right', padding: 20}}>
          <Space>
            <Text>Information Sourced from CMS COVID-19 Nursing Home Data</Text>
            <Button
              href="https://data.cms.gov/stories/s/COVID-19-Nursing-Home-Data/bkwz-xpvg"
              target="_blank"
              shape="circle"
              type="primary"
              icon={<InfoCircleOutlined />}
            />
          </Space>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
