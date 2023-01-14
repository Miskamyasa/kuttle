import React, {ReactElement} from "react"

import BlueprintList from "../../components/blueprints/BlueprintList"
import Page from "../../components/page/Page"


export default function Blueprints(): ReactElement {
  return (
    <Page loading={false}>
      <BlueprintList />
    </Page>
  )
}
