export type CommonReducerState = {
  // ..
  some: number,
}

export type ResetAction = {
  type: "Reset",
}

export type CommonReducerActions =
  | ResetAction
