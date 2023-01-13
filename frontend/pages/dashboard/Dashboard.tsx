import {ReactElement, useEffect} from "react"

import Accounts from "../../components/accounts/Accounts"
import Page from "../../components/page/Page"
import {fetchAccounts} from "../../store/accounts/actions"
import {selectAccounts} from "../../store/accounts/selectors"
import {useAppDispatch, useAppSelector} from "../../store/createStore"


export default function Dashboard(): ReactElement {
  const dispatch = useAppDispatch()
  const {loading} = useAppSelector(selectAccounts)

  useEffect(() => {
    dispatch(fetchAccounts())
  }, [dispatch])

  return (
    <Page loading={loading}>
      <Accounts />
    </Page>
  )
}
