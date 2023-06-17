import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from './sanity/schemas'

  const config = defineConfig({
    projectId:"rzjws4dp",
    dataset: "production",
    title:"My personal website",
    apiVersion: "2023-06-17",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas}

});

export default config;
