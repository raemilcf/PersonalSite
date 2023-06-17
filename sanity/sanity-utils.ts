//functions to wrap data 

import { Project } from "@/types/Projects";
import { createClient, groq } from "next-sanity";

const getProjects = async (): Promise<Project[]> => {

    const client = createClient({
        projectId:"rzjws4dp",
        dataset: "production",
        apiVersion: "2023-06-17",
    });

    return client.fetch(
        groq`*[_type == 'project']{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            'image': image.asset -> url,
            url,
            content

        }`
    )
}

export default getProjects;