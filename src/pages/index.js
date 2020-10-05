import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { ArrowUpOutlined } from "@ant-design/icons"

import { Select, Typography, Empty, Button } from "antd"
import Layout from "../components/layout"
import Detail from "../components/detail"
import SEO from "../components/seo"

const { Option } = Select
const { Text } = Typography

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetCountyData {
      allCountyTestRates105Csv {
        nodes {
          County
          FEMA_Region
          FIPS
          NCHS_Urban_Rural_Classification
          Percent_Positivity_in_prior_14_days
          Population
          State
          Test_Positivity_Classification___14_days
          Tests_in_prior_14_days
          _14_day_test_rate
        }
      }
      allMarkdownRemark {
        nodes {
          html
          frontmatter {
            date
          }
        }
      }
    }
  `)

  const [value, setValue] = useState(null)
  const [detail, setDetail] = useState(null)
  const [info, setInfo] = useState(false)

  useEffect(() => {
    const selected = data.allCountyTestRates105Csv.nodes.filter(
      ({ County }) => {
        return County === value
      }
    )
    setDetail(selected[0])
  }, [value, data])

  return (
    <Layout>
      <SEO />
      <Text type="secondary" style={{ margin: 10 }}>
        Based on data provided by CMS on{" "}
        {data.allMarkdownRemark.nodes.map(({ frontmatter }) => (
          <>{frontmatter.date}</>
        ))}
      </Text>
      <Select
        showSearch
        allowClear
        size="large"
        value={value}
        style={{ width: `100%`, margin: `10px auto` }}
        placeholder="Select a county"
        onChange={value => setValue(value)}
      >
        {data.allCountyTestRates105Csv.nodes.map(({ County }) => (
          <Option value={County} key={County}>
            {County}
          </Option>
        ))}
      </Select>

      {detail ? (
        <Detail detail={detail} />
      ) : (
        <Empty
          image={<ArrowUpOutlined style={{ fontSize: "4rem", padding: 20 }} />}
          style={{ padding: 30 }}
          description="No county selected"
        />
      )}
      <div style={{ width: `80%`, margin: `0 auto` }}>
        <Button
          onClick={() => setInfo(!info)}
          style={{ width: `100%`, margin: `0 auto` }}
        >
          {info ? "Hide Additional Info" : "Show Additional Info"}
        </Button>
        {info && (
          <div style={{ padding: `20px` }}>
            {data.allMarkdownRemark.nodes.map(({ html }) => (
              <div dangerouslySetInnerHTML={{ __html: html }} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
