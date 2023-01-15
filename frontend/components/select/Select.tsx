import {ChangeEvent, ReactElement, useMemo, useState} from "react"

import ChevronDown from "../icons/ChevronDown"


interface Option {
  id: string
  name: string
}

interface Props {
  options: Array<Option>
  onChange(value: string): void
  label?: string
  defaultValue?: string
  disabled?: boolean
}

export default function Select({options, onChange, label, defaultValue, disabled = false}: Props): ReactElement {
  const [currentValue, setCurrentValue] = useState<string | undefined>(defaultValue)

  const uniqueId = `select-${Math.trunc(Math.random() * 10000)}`

  const selectWrapperClassName = useMemo(() => {
    let className = "relative w-[260px] h-10 bg-white"
    if (disabled) {
      className += " opacity-50"
    }
    return className
  }, [disabled])

  const selectClassName = useMemo(() => {
    let className = "relative appearance-none outline-none text-sm text-blueDark w-full h-full"
      + " border border-gray3 py-1.5 pr-10 pl-3 bg-transparent z-10"
    if (!disabled) {
      className += " focus:border-green hover:border-gray1"
    }
    return className
  }, [disabled])

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setCurrentValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <div>
      {label ? <label
        className={"text-xs text-gray1 mb-0.5"}
        htmlFor={uniqueId}>
        {label}
      </label> : null}
      <div className={selectWrapperClassName}>
        <select
          className={selectClassName}
          id={uniqueId}
          disabled={disabled}
          value={currentValue}
          onChange={handleChange}>
          {options.map((option) => (
            <option
              key={option.id}
              value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        <div className={"absolute top-[calc(50%-10px)] right-2 flex justify-center items-center w-5 h-5"}>
          <ChevronDown width={10} />
        </div>
      </div>
    </div>
  )
}
