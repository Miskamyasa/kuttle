import React, {ReactElement, useEffect} from "react"

import BlueprintList from "../../components/blueprints/BlueprintList"
import Page from "../../components/page/Page"
import {fetchBlueprints} from "../../store/blueprints/actions"
import {selectBlueprints} from "../../store/blueprints/selectors"
import {useAppDispatch, useAppSelector} from "../../store/createStore"


export default function Blueprints(): ReactElement {
  const dispatch = useAppDispatch()
  const {loading} = useAppSelector(selectBlueprints)

  useEffect(() => {
    dispatch(fetchBlueprints())
  }, [dispatch])

  return (
    <Page loading={loading}>
      <BlueprintList />
    </Page>
  )
}
