import {ReactElement, useEffect} from "react"

import Header from "../../components/account/Header"
import Wrapper from "../../components/account/Wrapper"
import Page from "../../components/page/Page"
import Region from "../../components/region/Region"
import {fetchAccounts} from "../../store/accounts/actions"
import {selectAccounts} from "../../store/accounts/selectors"
import {useAppDispatch, useAppSelector} from "../../store/createStore"


export default function Dashboard(): ReactElement {
  const dispatch = useAppDispatch()
  const {loading, store, ids} = useAppSelector(selectAccounts)

  useEffect(() => {
    dispatch(fetchAccounts())
  }, [dispatch])

  return (
    <Page loading={loading}>
      {ids.length > 0 ? ids.map(id => ((
        <Wrapper key={id}>
          <Header accountName={store[id].account_name} />
          {store[id].regions?.map(regionId => (
            <div
              key={regionId}
              className={"mt-10"}>
              <Region id={regionId} />
            </div>
          ))}
        </Wrapper>
      ))) : null /* TODO: Empty page banner */}
    </Page>
  )
}
