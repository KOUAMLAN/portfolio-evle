import React, {
  useState
} from "react";

import {
  ExternalLink,
  Github,
  CheckCircle2,
  Play
} from "lucide-react";

import {
  motion
} from "framer-motion";

import {
  PROJECTS
} from "../constants";

import {
  Project,
  hasLiveDemo
} from "../types";

import ProjectGains from "./ProjectGains";

import ProjectDemoModal from "./ProjectDemoModal";

import fallbackImage from "../assets/home-banner.png";



const Projects: React.FC = () => {


  const [
    activeProject,
    setActiveProject
  ] = useState<Project | null>(null);





  const openDemo = (project: Project) => {


    if(hasLiveDemo(project.demoLink)) {

      setActiveProject(project);

    }

    else {

      window.open(
        project.demoLink,
        "_blank",
        "noopener,noreferrer"
      );

    }

  };





  const closeDemo = () => {

    setActiveProject(null);

  };





  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement>
  ) => {

    e.currentTarget.src = fallbackImage;

  };





  return (

    <section
      id="projects"
      className="
        py-16
        sm:py-24
        bg-gray-50
        overflow-hidden
      "
    >


      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >



        <motion.div

          initial={{
            opacity:0,
            y:20
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          className="
            text-center
            mb-16
          "

        >


          <h2
            className="
              text-3xl
              font-bold
              text-secondary
              mb-4
            "
          >
            Mes Projets
          </h2>



          <div
            className="
              w-20
              h-1
              bg-primary
              mx-auto
              rounded-full
              mb-6
            "
          />



          <p
            className="
              text-gray-600
              max-w-2xl
              mx-auto
            "
          >
            Projets React, applications web et interfaces modernes
            conçus avec performance, accessibilité et expérience utilisateur.
          </p>


        </motion.div>





        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
          "
        >



        {
          PROJECTS.map(
            (project,index)=>(


            <motion.article

              key={project.id}

              initial={{
                opacity:0,
                y:30
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                delay:index * 0.1
              }}

              className="
                bg-white
                rounded-xl
                overflow-hidden
                shadow-lg
                border
                border-gray-100
                flex
                flex-col
              "

            >




              <button

                type="button"

                onClick={() => openDemo(project)}

                aria-label={
                  `Voir la démonstration ${project.title}`
                }

                className="
                  relative
                  aspect-video
                  overflow-hidden
                  bg-gray-200
                "

              >



                <img

                  src={project.image}

                  alt={
                    `Aperçu du projet ${project.title}`
                  }

                  width="800"

                  height="450"

                  loading="lazy"

                  decoding="async"

                  onError={handleImageError}

                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "

                />




                <div

                  className="
                    absolute
                    inset-0
                    bg-black/40
                    flex
                    items-center
                    justify-center
                  "

                >


                  <span

                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      bg-white
                      rounded-full
                      font-semibold
                      shadow-lg
                    "

                  >

                    <Play
                      size={18}
                      className="
                        text-primary
                        fill-primary
                      "
                    />


                    {
                      hasLiveDemo(project.demoLink)
                      ?
                      "Voir la démo"
                      :
                      "Voir le projet"
                    }


                  </span>


                </div>





                {
                  hasLiveDemo(project.demoLink)
                  &&

                  <span

                    className="
                      absolute
                      top-3
                      right-3
                      bg-green-600
                      text-white
                      text-xs
                      font-bold
                      px-3
                      py-1
                      rounded-full
                    "

                  >

                    Démo live

                  </span>

                }


              </button>






              <div

                className="
                  p-5
                  flex
                  flex-col
                  flex-1
                "

              >



                <h3

                  className="
                    text-xl
                    font-bold
                    text-secondary
                    mb-2
                  "

                >

                  {project.title}

                </h3>




                <p

                  className="
                    text-xs
                    text-gray-400
                    mb-3
                  "

                >

                  {project.context}

                </p>





                <div

                  className="
                    flex
                    flex-wrap
                    gap-2
                    mb-4
                  "

                >

                  {
                    project.tags.map(tag => (

                      <span

                        key={tag}

                        className="
                          bg-blue-50
                          text-blue-700
                          text-xs
                          font-semibold
                          px-3
                          py-1
                          rounded-full
                        "

                      >

                        {tag}

                      </span>

                    ))
                  }


                </div>





                <p

                  className="
                    text-gray-600
                    text-sm
                    leading-relaxed
                    mb-5
                  "

                >

                  {project.description}

                </p>






                {
                  project.gains &&

                  <div className="mb-5">

                    <ProjectGains
                      gains={project.gains}
                    />

                  </div>

                }







                <div

                  className="
                    bg-gray-50
                    rounded-lg
                    border
                    p-4
                    space-y-3
                    mb-5
                  "

                >



                  <div
                    className="
                      flex
                      gap-2
                      text-sm
                    "
                  >

                    <CheckCircle2
                      size={17}
                      className="text-green-600"
                    />


                    <p>

                      <strong>
                        Objectif :
                      </strong>

                      {" "}

                      {project.objectives}

                    </p>


                  </div>





                  <div

                    className="
                      flex
                      gap-2
                      text-sm
                    "

                  >

                    <CheckCircle2
                      size={17}
                      className="text-blue-600"
                    />


                    <p>

                      <strong>
                        Résultat :
                      </strong>

                      {" "}

                      {project.results}

                    </p>


                  </div>



                </div>






                <div

                  className="
                    mt-auto
                    pt-4
                    border-t
                    flex
                    flex-col
                    sm:flex-row
                    gap-3
                  "

                >



                  <a

                    href={project.repoLink}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      font-semibold
                      min-h-[44px]
                    "

                  >

                    <Github size={18}/>

                    Code


                  </a>






                  <button

                    type="button"

                    onClick={() => openDemo(project)}

                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      bg-primary
                      text-white
                      rounded-lg
                      px-4
                      min-h-[44px]
                      font-semibold
                    "

                  >

                    Voir projet

                    <ExternalLink size={16}/>


                  </button>



                </div>



              </div>





            </motion.article>


          ))
        }


        </div>



      </div>






      <ProjectDemoModal

        project={activeProject}

        onClose={closeDemo}

      />



    </section>

  );

};



export default Projects;