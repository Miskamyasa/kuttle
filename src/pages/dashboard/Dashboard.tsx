import {ReactElement, useEffect} from "react"

import AccountHeader from "../../components/account/AccountHeader"
import AccountWrapper from "../../components/account/AccountWrapper"
import RegionTable from "../../components/account/RegionTable"
import Page from "../../components/page/Page"
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
        <AccountWrapper key={id}>
          <AccountHeader accountName={store[id].account_name} />
          {store[id].regions?.map(regionId => (
            <div
              key={regionId}
              className={"mt-10"}>
              <RegionTable id={regionId} />
            </div>
          ))}
        </AccountWrapper>
      ))) : null /* TODO: Empty page banner */}
    </Page>
  )
}
