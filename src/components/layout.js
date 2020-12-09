/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Layout, Button, Typography, Space, Alert } from "antd"
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
      <Alert
        message="Due to low utilization of this website, it will be discontinued on 12/31/2020"
        description="If find this service valuable, please email ramsey.tisher@cerner.com"
        type="warning"
        showIcon
      />
      <Header
        style={{
          background: `#f0f2f5`,
          padding: `0.9rem 1.2rem`,
          margin: "0 auto",
        }}
      >
        <Title level={3} style={{ fontFamily: "Open Sans" }}>
          {data.site.siteMetadata.title}
        </Title>
      </Header>
      <Content
        style={{
          margin: "0 auto",
          padding: 20,
          maxWidth: 960,
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
