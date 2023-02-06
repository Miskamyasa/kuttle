export interface Variable {
  name: string
  value: string
}

export interface SecretVariable {
  name: string
  value: string
}

export interface Resource {
  name: string
  type: "sql" | "nosql" | "cache" | "object"
  kind: "s3" | "rds" | "redis"
  externalID: string
  status: "healthy" | "unhealthy"
  hourlyPrice?: number
}

export interface BlueprintRef {
  name: string
  version: string
  location: string
}

export interface ServicePort {
  name: string
  port: number
}

export interface ServiceExpose {
  type: string
  // Applicable only for ingress type.
  hostname: string
}

export interface ServiceImageBuild {
  dockerfile?: string
  context?: string
  tags?: string
  status?: "pending" | "building" | "failed" | "success"
}

export interface Lifetime {
  createdAt: Date
  destroyAfter: Date
}

export interface Owner {
  id: string
  fullName: string
}

export interface Service {
  name: string
  cpu: string
  memory: string
  gitRepo?: string
  ports?: ServicePort[]
  replicas?: number
  expose?: ServiceExpose
  variables?: Variable[]
  secretVariables?: SecretVariable[]
  // Static image. Cannot be used with ImageBuild field
  image?: string
  // Image built from Dockerfile. Cannot be used with Image field
  imageBuild?: ServiceImageBuild
  command?: string[]
  args?: string[]
  status: "healthy" | "unhealthy" | "progressing"
  hourlyPrice: number
}

export interface Log {
  storageType: string
  url: string
}

export interface Environment {
  name: string
  fullName: string
  blueprint: BlueprintRef
  services?: Service[]
  resources?: Resource[]
  hourlyPrice?: number
  currency?: string
  lifetime: Lifetime
  variables?: Variable[]
  secrets?: SecretVariable[]
  owner?: Owner
  logs?: string[]
  links?: string[]
  comment?: string
}

export interface Region {
  region: string
  regionCode: string
  regionName: string
  environments: Environment[]
}

export interface Account {
  accountName: string
  accountShortName: string
  regions: Region[]
}
