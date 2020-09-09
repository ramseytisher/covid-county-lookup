import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Select, Typography } from "antd"
import Layout from "../components/layout"
import Detail from "../components/detail"

const { Option } = Select
const { Text } = Typography

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetCountyData {
      allCountyTestRatesCsv {
        nodes {
          County
          FEMA_region
          FIPS_code
          Percent_Positive_in_prior_7_days
          Population
          State
          Test_Positivity_Classification
        }
      }
    }
  `)

  const [value, setValue] = useState(null)
  const [detail, setDetail] = useState(null)

  useEffect(() => {
    const selected = data.allCountyTestRatesCsv.nodes.filter(({ County }) => {
      return County === value
    })
    setDetail(selected[0])
  }, [value, data])

  return (
    <Layout>
      <Text type="secondary" style={{ margin: 10 }}>
        Data from: August 27 - September 02
      </Text>
      <Select
        showSearch
        allowClear
        size="large"
        value={value}
        style={{ width: "100%", margin: `0 auto` }}
        placeholder="Select a county"
        onChange={value => setValue(value)}
      >
        {data.allCountyTestRatesCsv.nodes.map(({ County }) => (
          <Option value={County}>{County}</Option>
        ))}
      </Select>

      {detail && <Detail detail={detail} />}
    </Layout>
  )
}

export default IndexPage
