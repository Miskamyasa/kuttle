import {Fragment, ReactElement} from "react"

import {selectAccounts} from "../../store/accounts/selectors"
import {useAppSelector} from "../../store/createStore"
import Regions from "../regions/Regions"

import Header from "./Header"
import Wrapper from "./Wrapper"


export default function Accounts(): ReactElement {
  const {ids} = useAppSelector(selectAccounts)

  return (
    <Fragment>
      {ids.map((id) => (
        <Wrapper key={id}>
          <Header accountId={id} />
          <Regions accountId={id} />
        </Wrapper>
      ))}
    </Fragment>
  )
}
