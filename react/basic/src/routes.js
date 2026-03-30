import { routingdata } from "./Data/RoutingData";

export const routes = routingdata.map((item) => ({
  path: item.path,
  element: item.element,
}));
