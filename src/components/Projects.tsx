import React, { useState } from "react";

import {
  ExternalLink,
  Github,
  TrendingUp,
  CheckCircle2,
  Play
} from "lucide-react";

import { PROJECTS } from "../constants";
import { Project, hasLiveDemo } from "../types";

import { motion } from "framer-motion";

import ProjectGains from "./ProjectGains";
import ProjectDemoModal from "./ProjectDemoModal";


const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop";



const Projects: React.FC = () => {


  const [activeProject, setActiveProject] =
    useState<Project | null>(null);



  const openDemo = (project: Project) => {

    if (hasLiveDemo(project.demoLink)) {

      setActiveProject(project);

    } else {

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

    e.currentTarget.src = FALLBACK_IMAGE;

  };



  return (

    <section

      id="projects"

      className="
        py-16
        sm:py-24
        bg-gray-50
        overflow-x-hidden
        touch-manipulation
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
            once:true,
            amount:0.2
          }}

          className="
            text-center
            mb-16
          "

        >



          <h2

            className="
              text-3xl
              font-heading
              font-bold
              mb-4
              text-secondary
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
              mt-4
              text-gray-600
              max-w-2xl
              mx-auto
            "

          >

            Projets réalisés durant ma formation et mes missions freelance.
            Cliquez sur une carte pour consulter la démonstration.

          </p>


        </motion.div>





        <div

          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
            w-full
          "

        >



          {PROJECTS.map((project,index)=>(



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
                once:true,
                amount:0.2
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
                hover:shadow-2xl
                transition-all
                duration-300
                flex
                flex-col
                h-full
                group
                min-w-0
              "

            >




              <button

                type="button"

                onClick={() => openDemo(project)}

                className="
                  relative
                  w-full
                  aspect-video
                  overflow-hidden
                  bg-gray-200
                  cursor-pointer
                  touch-manipulation
                "

                aria-label={
                  `Voir la démonstration de ${project.title}`
                }

              >



                <img

                  src={project.image}

                  alt={
                    `Aperçu ${project.title}`
                  }

                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "

                  loading="lazy"

                  onError={handleImageError}

                />




                <div

                  className="
                    absolute
                    inset-0
                    bg-black/40
                    flex
                    items-center
                    justify-center
                    transition-colors
                  "

                >



                  <span

                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-4
                      py-2.5
                      bg-white
                      text-secondary
                      rounded-full
                      font-semibold
                      text-sm
                      shadow-lg
                    "

                  >


                    <Play
                      size={18}
                      className="text-primary fill-primary"
                    />


                    {hasLiveDemo(project.demoLink)
                      ? "Voir la démo"
                      : "Voir le projet"
                    }


                  </span>



                </div>





                {hasLiveDemo(project.demoLink) && (

                  <span

                    className="
                      absolute
                      top-3
                      right-3
                      px-2.5
                      py-1
                      bg-green-500
                      text-white
                      text-xs
                      font-bold
                      rounded-full
                    "

                  >

                    Démo live

                  </span>

                )}



              </button>

                            <div

                className="
                  p-4
                  sm:p-6
                  flex-1
                  flex
                  flex-col
                  min-w-0
                "

              >



                <button

                  type="button"

                  onClick={() => openDemo(project)}

                  className="
                    text-left
                    touch-manipulation
                  "

                >


                  <h3

                    className="
                      text-xl
                      font-bold
                      mb-1
                      text-secondary
                      group-hover:text-primary
                      transition-colors
                    "

                  >

                    {project.title}

                  </h3>


                </button>





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

                  {project.tags.map((tag)=>(

                    <span

                      key={tag}

                      className="
                        px-2.5
                        py-0.5
                        bg-blue-50
                        text-blue-700
                        text-xs
                        font-semibold
                        rounded-full
                      "

                    >

                      {tag}

                    </span>

                  ))}


                </div>





                <p

                  className="
                    text-gray-600
                    mb-4
                    flex-grow
                    text-sm
                    leading-relaxed
                  "

                >

                  {project.description}

                </p>





                {project.gains && (

                  <div

                    className="
                      mb-4
                      hidden
                      md:block
                    "

                  >

                    <ProjectGains gains={project.gains}/>

                  </div>

                )}






                <div

                  className="
                    mb-4
                    p-4
                    bg-gray-50
                    rounded-lg
                    border
                    border-gray-100
                    space-y-3
                  "

                >



                  <div className="flex gap-2 items-start">


                    <CheckCircle2

                      size={16}

                      className="
                        text-green-600
                        mt-1
                      "

                    />


                    <p>

                      <span className="font-bold text-secondary">

                        Objectif :

                      </span>{" "}

                      {project.objectives}

                    </p>


                  </div>





                  <div className="flex gap-2 items-start">


                    <CheckCircle2

                      size={16}

                      className="
                        text-primary
                        mt-1
                      "

                    />


                    <p>

                      <span className="font-bold text-secondary">

                        Résultat :

                      </span>{" "}

                      {project.results}

                    </p>


                  </div>




                </div>







                <div

                  className="
                    flex
                    flex-col
                    sm:flex-row
                    gap-3
                    mt-auto
                    pt-4
                    border-t
                    border-gray-100
                  "

                >




                  <a

                    href={project.repoLink}

                    target="_blank"

                    rel="noopener noreferrer"


                    className="
                      inline-flex
                      items-center
                      justify-center
                      min-h-[44px]
                      px-3
                      text-gray-600
                      font-semibold
                    "

                  >


                    <Github

                      size={18}

                      className="mr-2"

                    />

                    Code


                  </a>






                  <button


                    type="button"


                    onClick={() => openDemo(project)}


                    className="

                      inline-flex

                      items-center

                      justify-center

                      min-h-[44px]

                      px-4

                      py-2

                      bg-primary

                      text-white

                      rounded-lg

                      font-semibold

                      hover:bg-blue-700

                      transition-colors

                      w-full

                      sm:w-auto

                      sm:ml-auto

                      touch-manipulation

                    "


                  >


                    {hasLiveDemo(project.demoLink)

                      ? "Démo interactive"

                      : "Voir le projet"

                    }



                    <ExternalLink

                      size={16}

                      className="ml-2"

                    />


                  </button>



                </div>




              </div>



            </motion.article>



          ))}



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