/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Layout, Button, Typography, Space } from "antd"
import { InfoCircleOutlined } from "@ant-design/icons"
import Header from "./header"
import "./layout.css"

const { Content, Footer } = Layout;
const { Text } = Typography

export default ({ children }) => {
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
    <Layout>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Content>{children}</Content>
        <Footer style={{ float: 'right', padding: 20}}>
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
        </Footer>
      </div>
    </Layout>
  )
}
