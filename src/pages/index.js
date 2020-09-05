import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Select } from "antd"
import Layout from "../components/layout"
import Detail from "../components/detail"

const { Option } = Select

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
  const [options, setOptions] = useState([])
  const [search, setSearch] = useState("")
  const [detail, setDetail] = useState(null)

  function handleChange(value) {
    console.log(`selected ${value}`)
  }

  useEffect(() => {
    const selected = data.allCountyTestRatesCsv.nodes.filter(({ County }) => {
      return County === value
    })
    console.log("Selected", selected)
    setDetail(selected[0])
  }, [value])

  return (
    <Layout>
      <Select
        showSearch
        size="large"
        style={{ width: '80vw' }}
        placeholder="Select a county"
        onChange={value => setValue(value)}
      >
        {data.allCountyTestRatesCsv.nodes.map(({ County }) => (
          <Option value={County}>{County}</Option>
        ))}
      </Select>
      {detail ? (
        <Detail detail={detail} />
      ) : (
        <p>Select a county to begin</p>
      )}
    </Layout>
  )
}

export default IndexPage
