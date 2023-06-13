import { client } from "./sanity-client";
import { allProjectsQuery } from "../queries";

const loadProjects = async () => await client.fetch(allProjectsQuery);

export default loadProjects;
