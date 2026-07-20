import React, {
  useEffect,
  useRef,
  useState
} from "react";

import {
  X,
  ExternalLink,
  Github,
  MonitorPlay
} from "lucide-react";

import {
  motion,
  AnimatePresence
} from "framer-motion";

import {
  Project,
  hasLiveDemo
} from "../types";

import ProjectGains from "./ProjectGains";

import { useMediaQuery } from "../hooks/useMediaQuery";


interface ProjectDemoModalProps {
  project: Project | null;
  onClose: () => void;
}


type MobileTab = "demo" | "info";



const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({
  project,
  onClose
}) => {


  const closeButtonRef =
    useRef<HTMLButtonElement>(null);



  const isMobile =
    useMediaQuery("(max-width:768px)");



  const isSmallMobile =
    useMediaQuery("(max-width:475px)");



  const [mobileTab,setMobileTab] =
    useState<MobileTab>("info");



  const [iframeError,setIframeError] =
    useState(false);



  // CORRECTION ICI
  const canEmbed =
    Boolean(
      project?.embedDemo &&
      project.demoLink
    );



  useEffect(()=>{


    if(!project) return;



    setIframeError(false);



    setMobileTab(
      isSmallMobile
      ? "info"
      : "demo"
    );



    const previousOverflow =
      document.body.style.overflow;



    document.body.style.overflow =
      "hidden";



    const escapeHandler =
      (event:KeyboardEvent)=>{

        if(event.key==="Escape"){
          onClose();
        }

      };



    window.addEventListener(
      "keydown",
      escapeHandler
    );



    closeButtonRef.current?.focus();



    return ()=>{

      document.body.style.overflow =
        previousOverflow;


      window.removeEventListener(
        "keydown",
        escapeHandler
      );

    };


  },[
    project,
    onClose,
    isSmallMobile
  ]);





  if(!project)
    return null;





  const showDemo =
    canEmbed &&
    !iframeError &&
    (
      !isMobile ||
      mobileTab==="demo"
    );



  const showInfo =
    !isMobile ||
    isSmallMobile ||
    mobileTab==="info";





  return (

    <AnimatePresence>



      <motion.div

        className="
          fixed
          inset-0
          bg-black/60
          backdrop-blur-sm
          z-[100]
        "


        initial={{
          opacity:0
        }}


        animate={{
          opacity:1
        }}


        exit={{
          opacity:0
        }}


        onClick={onClose}

      />





      <motion.div


        role="dialog"

        aria-modal="true"


        className="
          fixed
          inset-2
          sm:inset-4
          md:inset-8
          z-[101]
          bg-white
          rounded-xl
          shadow-2xl
          overflow-hidden
          flex
          flex-col
          max-w-7xl
          mx-auto
        "



        initial={{
          opacity:0,
          scale:0.95
        }}


        animate={{
          opacity:1,
          scale:1
        }}


        exit={{
          opacity:0
        }}

      >





        <header

          className="
            flex
            items-center
            justify-between
            gap-3
            px-3
            sm:px-5
            py-3
            border-b
            bg-gray-50
          "

        >


          <h2

            className="
              text-sm
              sm:text-lg
              font-bold
              truncate
            "

          >

            {project.title}

          </h2>




          <button

            ref={closeButtonRef}

            onClick={onClose}

            className="
              p-2
              rounded-lg
              hover:bg-gray-200
            "

          >

            <X size={22}/>

          </button>


        </header>






        {
          isMobile &&
          canEmbed &&
          !isSmallMobile && (


          <div className="
            flex
            border-b
          ">


            <button

              onClick={()=>
                setMobileTab("demo")
              }

              className="
                flex-1
                py-3
                text-sm
                font-semibold
              "

            >

              Démo

            </button>




            <button

              onClick={()=>
                setMobileTab("info")
              }

              className="
                flex-1
                py-3
                text-sm
                font-semibold
              "

            >

              Informations

            </button>


          </div>


        )}





        <div

          className="
            flex-1
            overflow-auto
          "

        >





        {
          showDemo && (


          <div

            className="
              w-full
              h-full
            "

          >


            <iframe

              src={project.demoLink}

              title={project.title}

              loading="lazy"

              className="
                w-full
                h-full
                min-h-[500px]
                border-0
              "


              onError={()=>
                setIframeError(true)
              }


              allow="
                fullscreen;
                autoplay
              "

            />


          </div>


          )

        }







        {
          hasLiveDemo(project.demoLink)
          &&
          (!canEmbed || iframeError)
          && (


          <div

            className="
              min-h-[60vh]
              flex
              flex-col
              justify-center
              items-center
              text-center
              gap-5
              p-6
            "

          >


            <MonitorPlay size={45}/>



            <p className="text-gray-600">

              La démonstration ne peut pas être
              affichée directement ici.

            </p>




            <a

              href={project.demoLink}

              target="_blank"

              rel="noopener noreferrer"

              className="
                bg-primary
                text-white
                px-5
                py-3
                rounded-lg
                flex
                items-center
                gap-2
              "

            >

              Ouvrir la démo

              <ExternalLink size={16}/>


            </a>


          </div>


          )

        }






        {
          showInfo && (


          <section

            className="
              p-4
              sm:p-6
              space-y-4
            "

          >


            <p className="
              text-gray-700
              leading-relaxed
            ">

              {project.description}

            </p>





            {
              project.gains && (

              <ProjectGains
                gains={project.gains}
              />

              )

            }






            <p className="text-gray-700">

              <strong>
                Résultat :
              </strong>

              {" "}

              {project.results}


            </p>






            <a

              href={project.repoLink}

              target="_blank"

              rel="noopener noreferrer"

              className="
                flex
                justify-center
                items-center
                gap-2
                border
                rounded-lg
                p-3
              "

            >

              <Github size={18}/>

              Code source


            </a>


          </section>


          )

        }



        </div>



      </motion.div>



    </AnimatePresence>

  );

};


export default ProjectDemoModal;