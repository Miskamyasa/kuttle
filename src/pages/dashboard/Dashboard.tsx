import React, {ReactElement} from "react"

import Header from "../../components/account/Header"
import AccountWrapper from "../../components/account/Wrapper"
import Page from "../../components/page/Page"


export default function Dashboard(): ReactElement {
  return (
    <Page>
      <AccountWrapper>
        <Header accountName={"Dashaboard"} />

      </AccountWrapper>
    </Page>
  )
}
