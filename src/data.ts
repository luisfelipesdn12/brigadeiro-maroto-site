// @ts-expect-error ts(2307)
import dataAsYAML from "../data.yaml";
import Data from "./models/Data";

const data: Data = dataAsYAML;

export default data;
