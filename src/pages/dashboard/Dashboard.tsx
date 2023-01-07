import {ReactElement, useEffect} from "react"

import Header from "../../components/account/Header"
import Wrapper from "../../components/account/Wrapper"
import Page from "../../components/page/Page"
import {useAppDispatch, useAppSelector} from "../../store/createStore"
import {fetchDashboard} from "../../store/dashboard/actions"


export default function Dashboard(): ReactElement {
  const dispatch = useAppDispatch()
  const {loading, store, ids} = useAppSelector(state => state.dashboard)

  useEffect(() => {
    dispatch(fetchDashboard())
  }, [dispatch])

  return (
    <Page loading={loading}>
      {ids.length > 0 ? ids.map(id => ((
        <Wrapper key={id}>
          <Header accountName={store[id].account_name} />
          <div className={"mt-10"}>
            {id}
          </div>
        </Wrapper>
      ))) : null /* TODO: Empty page banner */}
    </Page>
  )
}
