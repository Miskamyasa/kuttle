import {ReactElement, useState} from "react"

import Select from "../../select/Select"


export default function DeployMethod(): ReactElement {
  const [deployMethod, setDeployMethod] = useState<string | null>(null)
  const [branch, setBranch] = useState<string | null>(null)

  // eslint-disable-next-line no-console
  console.log({deployMethod, branch})

  return (
    <div className={"flex flex-row"}>
      <div className={"mr-20"}>
        <Select
          label={"How we deploy"}
          onChange={setDeployMethod}
          options={[{name: "Auto from branch", id: "1"}, {name: "Some different option", id: "2"}]} />
      </div>
      <Select
        label={"Select a branch name"}
        onChange={setBranch}
        options={[{name: "release/dev1", id: "1"}, {name: "release/prod", id: "2"}]} />
    </div>
  )
}
