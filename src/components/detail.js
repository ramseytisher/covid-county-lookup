import React from "react"

import { Statistic, Card, Row, Col, Tag } from "antd"

import CustomCard from "./custom-card"

function getDescription(color) {
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
        <CustomCard color={detail.Test_Positivity_Classification}>
          <Statistic
            title="Classification"
            value={detail.Test_Positivity_Classification}
            suffix={getDescription(detail.Test_Positivity_Classification)}
          />
        </CustomCard>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic title="FEMA Region" value={detail.FEMA_region} />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic title="FIPS Code" value={detail.FIPS_code} />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="% Positive Prior 7 Days"
            value={detail.Percent_Positive_in_prior_7_days}
            precision={2}
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic title="Population" value={detail.Population} />
        </Card>
      </Col>
    </Row>
  </Card>
)

export default Detail
