import {Account, Region} from "../dto"

import {RegionId} from "./types"


export function getRegionId(accountName: Account["account_name"], regionShort: Region["short_region"]): RegionId {
  return `${accountName.substring(0, 3).toLowerCase()}-${regionShort}`
}
