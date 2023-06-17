
import  getProjects  from "@/sanity/sanity-utils"

export default async function Home() {

  const projects= await getProjects();


  return (
   <div className="max-w-5x1 mx-auto py-20">
     <h1 className="text-7xl font-extrabold">
      Hello I&apos;m {""}
      <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
        Raemil
      </span>
      !
    </h1>
    <p className="mt3 text-x1 text-gray-600">Chek out my projects</p>
    <h2>My projects</h2>

      {
        projects.map( (project ) => (
          <div key={project._id} className="border border-gray-500 rounded-lg">
            <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </div>

        ))
      }
   </div>

    
     

    
  )
}
