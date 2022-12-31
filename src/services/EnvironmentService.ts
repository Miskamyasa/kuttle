export type Region = string;
export type ShortRegion = string;

export type Costs = {
  hourly: number,
  daily: number,
  weekly: number,
  monthly: number,
  annually: number,
};

export type Deployment = {
  method: string,
  version?: string,
  branch?: string,
  pathToManifest: string,
};

export type Service = {
  name: string,
  version: string,
  cpu: number,
  memory: number,
  gitRepo: string,
  costs: Costs,
  deployment: Deployment,
  public: boolean,
};

export type Ressource = {
  name: string,
};

export type Secret = {
  name: string,
  valueFrom: string,
};

export type Variable = {
  name: string,
  value: string,
};

export type Lifetime = {
  created: Date,
  destroy: Date,
};

export type Logs = {
  destination: string,
  url: string,
};

export type Links = {
  url: string,
};
export type Environment = {
  name: string,
  fullName: string,
  region: Region,
  shortRegion: ShortRegion,
  services: Service[],
  ressources: Ressource[],
  pipelines: Service[],
  variables: Variable[],
  secrets: Secret[],
  lifetime: Lifetime,
  costs: Costs,
  logs: Logs,
  links: Links,
  comment: string,
};

export const MOCKED_SERVICES: Service[] = [
  {
    name: "backend",
    version: "v0.0.12",
    cpu: 0.25,
    memory: 0.5,
    gitRepo: "",
    costs: {
      hourly: 0.016,
      daily: 0.4,
      weekly: 3.125,
      monthly: 12.5,
      annually: 150,
    },
    deployment: {
      method: "latest",
      version: "v0.0.12",
      branch: "dev",
      pathToManifest: "https://s3.kuttle.io/dev/backend",
    },
    public: false,
  },
];

export const MOCKED_RESSOURCES: Ressource[] = [
  {
    name: "rds",
  },
  {
    name: "redis",
  },
];

const MOCKED_SECRETS: Secret[] = [
  {
    name: "DB_USER",
    valueFrom: "hashicorp",
  },
  {
    name: "DB_PASSWORD",
    valueFrom: "hashicorp",
  },
];

const MOCKED_VARIABLES: Variable[] = [
  {
    name: "PORT",
    value: "19922",
  },
  {
    name: "SENTRY_DSN",
    value: "12111221112122212112",
  },
];

export const MOCKED_ENVIRONMENTS: Environment[] = [
  {
    name: "dev1",
    fullName: "dev-euw2-dev1",
    region: "eu-west-2",
    shortRegion: "euw2",
    services: MOCKED_SERVICES,
    ressources: MOCKED_RESSOURCES,
    pipelines: MOCKED_SERVICES,
    secrets: MOCKED_SECRETS,
    variables: MOCKED_VARIABLES,
    lifetime: {
      created: new Date(1667313845 * 1000),
      destroy: new Date(1668091445 * 1000),
    },
    costs: {
      hourly: 0.016,
      daily: 0.4,
      weekly: 3.125,
      monthly: 12.5,
      annually: 150,
    },
    logs: {
      destination: "Elastic Search",
      url: "https://elastic.kuttle.io/dev1",
    },
    links: {
      url: "https://dev1.kuttle.io",
    },
    comment: "",
  },
];
export class EnvironmentService {
  public static async fetchEnvironments() {}
}
