export interface CommonReducerState {
  some: number
}

export interface ResetAction {
  type: "Reset"
}

export type CommonReducerActions = ResetAction
