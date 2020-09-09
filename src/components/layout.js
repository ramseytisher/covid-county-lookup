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
import "./layout.css"

const { Header, Content, Footer } = Layout
const { Title, Text } = Typography

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
      <Header
        style={{
          background: `#5378b5`,
        padding: `0.9rem 1.2rem`,
        }}
      >
        <Title level={3} style={{ color: "white", margin: 0 }}>
          {data.site.siteMetadata.title}
        </Title>
      </Header>
      <Content
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        {children}
      </Content>
      <Footer style={{ margin: "0 auto", padding: 20 }}>
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
    </Layout>
  )
}
