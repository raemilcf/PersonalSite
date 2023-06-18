//functions to wrap data 

import { Project } from "@/types/Projects";
import { createClient, groq } from "next-sanity";
import cilentConfig from "./config/client-config";

export  async function getProjects  (): Promise<Project[]>  {

    return createClient(cilentConfig).fetch(
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
};
export  async function  getProject ( slug: string ) : Promise<Project>  {
    
    return createClient(cilentConfig).fetch(
        groq`*[_type == 'project' && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            'image': image.asset -> url,
            url,        
            content

        }`,
        {slug}
    )

};

