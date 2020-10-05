import React from "react"

import { Statistic, Card, Row, Col, Tag } from "antd"

import CustomCard from "./custom-card"

function getDescription(color) {
  console.log("color", color)
  if (color.toUpperCase() === "GREEN") {
    return <Tag>Test staff 1 time per month</Tag>
  } else if (color.toUpperCase() === "YELLOW") {
    return <Tag>Test staff 1 time per week</Tag>
  } else if (color.toUpperCase() === "RED") {
    return <Tag>Test staff 2 time per week</Tag>
  } else {
    return null
  }
}

const Detail = ({ detail }) => (
  <Card style={{ background: "#ebebeb", margin: 10 }}>
    <Row gutter={[8, 8]}>
      <Col span={24}>
        <CustomCard color={detail.Test_Positivity_Classification___14_days}>
          <Statistic
            title="Classification"
            value={detail.Test_Positivity_Classification___14_days}
            suffix={getDescription(
              detail.Test_Positivity_Classification___14_days
            )}
          />
        </CustomCard>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic title="FEMA Region" value={detail.FEMA_Region} />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic title="FIPS Code" value={detail.FIPS} />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="% Positive Prior 14 Days"
            value={detail.Percent_Positivity_in_prior_14_days}
            precision={2}
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic title="Population" value={detail.Population} />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="Tests Prior 14 Days"
            value={detail.Tests_in_prior_14_days}
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="14 Day Test Rate"
            value={detail._14_day_test_rate}
          />
        </Card>
      </Col>
      <Col span={24}>
        <Card>
          <Statistic
            title="NCHS Urban/Rural Classification"
            value={detail.NCHS_Urban_Rural_Classification}
          />
        </Card>
      </Col>
    </Row>
  </Card>
)

export default Detail
