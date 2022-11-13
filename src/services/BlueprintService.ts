import { Costs, Environment, MOCKED_ENVIRONMENTS } from "./EnvironmentService";
import { asyncSleep } from "./utils";

export type Blueprint = {
  id: string;
  name: string;
  description?: string;
  versions: string[];
  costs: Costs;
  environment: Environment;
};

const MOCKED_BLUEPRINTS: Blueprint[] = [
  {
    id: "1",
    name: "Dev",
    description:
      "Example of a card’s description. Stick to one or two sentences.",
    versions: ["v1.0.0"],
    costs: {
      hourly: 0.016,
      daily: 0.4,
      weekly: 3.125,
      monthly: 12.5,
      annually: 150,
    },
    environment: MOCKED_ENVIRONMENTS[0],
  },
];

export class BlueprintService {
  public static async fetchBlueprints(): Promise<Blueprint[]> {
    await asyncSleep(1000);
    return MOCKED_BLUEPRINTS;
  }
}
