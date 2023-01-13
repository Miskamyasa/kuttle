export interface CommonReducerState {
  ready: boolean
}

export interface ResetAction {
  type: "Reset"
}

export type CommonReducerActions = ResetAction
