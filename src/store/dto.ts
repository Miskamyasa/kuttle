export interface Blueprint {
  name: string
  version: number
  location?: null
}

export interface Cicd {
  status: "done" | "inflight" | "unknown" | "fail"
  method: string
  version: string
  branch: string
  path_to_manifest?: null
}

export interface Service {
  name: string
  version?: null
  cpu: number
  memory: number
  git_repo?: null
  cicd: Cicd
  public: boolean
}

export interface Resource {
  name: string
  type: "sql" | "nosql" | "cache" | "object"
  kind: string
  status: "healthy" | "degraded" | "outage" | "unknown"
}

export interface Variable {
  name: string
  value: string | number
}

export interface Secret {
  name: string
  valuefrom?: string | null
  valueFrom?: string | null
}

export interface Lifetime {
  created: number
  destroy: number
}

export interface Owners {
  id: number
  name: string
}

export interface Test {
  name?: null
  status?: null
}

export interface Costs {
  hourly?: null
  daily?: null
  monthly?: null
}

export interface Logs {
  dest?: null
  path?: null
}

export interface Link {
  url?: null
}

export interface Environment {
  name: string
  full_name: string
  blueprint: Blueprint
  services?: Array<Service> | null
  resources?: Array<Resource> | null
  lifetime: Lifetime
  owners: Owners
  tests?: Array<Test> | null
  costs: Costs
  logs: Logs
  links?: Array<Link> | null
  comment?: null
}

export interface Region {
  region: string
  short_region: string
  environments?: Array<Environment> | null
}

export interface Account {
  account_name: string
  regions?: Array<Region> | null
}
