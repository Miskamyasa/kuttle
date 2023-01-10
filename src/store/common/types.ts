export interface CommonReducerState {
  some: number
  // TODO: change to anything!
}

export interface ResetAction {
  type: "Reset"
}

export type CommonReducerActions = ResetAction
