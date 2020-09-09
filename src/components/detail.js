import React from "react"

import { Statistic, Card, Row, Col } from "antd"

const Detail = ({ detail }) => (
  <Card style={{ background: "#ebebeb", margin: 10 }}>
    <Row gutter={[8, 8]}>
      <Col span={24}>
        <Card>
          <Statistic
            title="Classification"
            value={detail.Test_Positivity_Classification}
          />
        </Card>
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
