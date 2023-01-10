import {Fragment, ReactElement} from "react"

import {selectAccounts} from "../../store/accounts/selectors"
import {useAppSelector} from "../../store/createStore"

import Header from "./Header"
import Regions from "./Regions"
import Wrapper from "./Wrapper"


export default function Accounts(): ReactElement {
  const {ids} = useAppSelector(selectAccounts)

  return (
    <Fragment>
      {ids.length > 0 ? ids.map(id => ((
        <Wrapper key={id}>
          <Header accountId={id} />
          <Regions accountId={id} />
        </Wrapper>
      ))) : null /* TODO: Empty page banner */}
    </Fragment>
  )
}
