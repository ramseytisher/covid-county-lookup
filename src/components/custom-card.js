import React from "react"

import { Card } from "antd"

export default ({ color, children }) => {
  if (color.toUpperCase() === "GREEN") {
    return <Card style={{ borderBottom: "5px solid #77BC1F" }}>{children}</Card>
  } else if (color.toUpperCase() === "YELLOW") {
    return <Card style={{ borderBottom: "8px solid #F7A800" }}>{children}</Card>
  } else if (color.toUpperCase() === "RED") {
    return <Card style={{ borderBottom: "10px solid red" }}>{children}</Card>
  } else {
    return <Card>{children}</Card>
  }
}
