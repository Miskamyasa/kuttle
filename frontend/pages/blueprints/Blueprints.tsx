import React, {ReactElement} from "react"

import Page from "../../components/page/Page"


export default function Blueprints(): ReactElement {
  return (
    <Page loading={false}>
      <h1 className={"text-2xl font-bold"}>Blueprints</h1>
    </Page>
  )
}
