export interface Blueprint {
  name: string
  version: number
  location?: null
}

export interface Cicd {
  status: string
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
  type: string
  kind: string
  status: string
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

export interface Region {
  name: string
  full_name: string
  region: string
  short_region: string
  blueprint: Blueprint
  services?: (Service)[] | null
  resources?: (Resource)[] | null
  variables?: (Variable)[] | null
  secrets?: (Secret)[] | null
  lifetime: Lifetime
  owners: Owners
  tests?: (Test)[] | null
  costs: Costs
  logs: Logs
  links?: (Link)[] | null
  comment?: null
}

export interface Account {
  account_name: string
  regions?: (Region)[] | null
}
