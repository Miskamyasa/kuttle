import {Account, Region} from "../dto"

import {RegionID} from "./types"


export function getRegionId(accountName: Account["account_name"], regionShort: Region["short_region"]): RegionID {
  return `${accountName.substring(0, 3).toLowerCase()}-${regionShort}`
}
