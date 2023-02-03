export interface Account {
  accountName: string
  accountShortName: string
  regions: Region[]
}


export interface Region {
  region: string
  regionCode: string
  regionName: string
  environments: Environment[]
}

export   interface Environment {
  name: string
  fullName: string
  blueprint: Blueprint
  services?: Service[] | null
  lifetime: Lifetime
  owner: Owner
  comment: string
}

export  interface Blueprint {
  name: string
  version: string
  location: string
}

export interface Service {
  name: string
  cpu: string
  memory: string
  ports: Port[]
  replicas: number
  expose: Expose
  image: string
  command: string[]
  args: string[]
  status: string
  hourlyPrice: number
}

export interface Port {
  name: string
  port: number
}

export interface Expose {
  type: string
  hostname: string
}

export interface Lifetime {
  createdAt: string
  destroyAfter: string
}

export interface Owner {
  id: string
  fullName: string
}
