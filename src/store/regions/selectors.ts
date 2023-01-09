import {AppState} from "../types"


export const selectRegions = (state: AppState): AppState["regions"] => state.regions
