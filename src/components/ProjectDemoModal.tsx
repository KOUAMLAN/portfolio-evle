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


  const isNarrow =
    useMediaQuery("(max-width:480px)");


  const [mobileTab,setMobileTab] =
    useState<MobileTab>("info");


  const [iframeError,setIframeError] =
    useState(false);



  const canEmbed =
    !!project &&
    hasLiveDemo(project.demoLink) &&
    project.embedDemo === true;



  const useIframe =
    canEmbed &&
    !iframeError &&
    (
      !isMobile ||
      mobileTab === "demo"
    );



  const showAside =
    !isMobile ||
    isNarrow ||
    mobileTab === "info" ||
    !canEmbed;



  useEffect(()=>{

    if(!project) return;


    setIframeError(false);


    setMobileTab(
      isNarrow
      ? "info"
      : "demo"
    );


    const oldOverflow =
      document.body.style.overflow;


    document.body.style.overflow =
      "hidden";


    const keyHandler =
    (event:KeyboardEvent)=>{

      if(event.key==="Escape"){
        onClose();
      }

    };


    window.addEventListener(
      "keydown",
      keyHandler
    );


    closeButtonRef.current?.focus();



    return ()=>{

      document.body.style.overflow =
        oldOverflow;


      window.removeEventListener(
        "keydown",
        keyHandler
      );

    };


  },[
    project,
    onClose,
    isNarrow
  ]);




  if(!project) return null;



  return (

    <AnimatePresence>


      <motion.div

        className="
        fixed
        inset-0
        z-[100]
        bg-black/60
        backdrop-blur-sm
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
        inset-0
        md:inset-6
        lg:inset-10
        z-[101]

        flex
        flex-col

        bg-white

        md:rounded-2xl

        shadow-2xl

        overflow-hidden
        "


        initial={{
          opacity:0,
          scale:isMobile ? 1 : .95
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
        justify-between
        items-center
        px-4
        py-3
        border-b
        bg-gray-50
        "
        >


          <h2
          className="
          font-bold
          text-lg
          "
          >

            {project.title}

          </h2>



          <button

          ref={closeButtonRef}

          onClick={onClose}

          className="
          p-2
          rounded
          hover:bg-gray-200
          "

          >

            <X/>

          </button>


        </header>





        {isMobile && canEmbed && !isNarrow && (

        <div
        className="
        flex
        border-b
        "
        >

          <button

          onClick={() =>
            setMobileTab("demo")
          }

          className="
          flex-1
          py-3
          "
          >

            Démo

          </button>


          <button

          onClick={() =>
            setMobileTab("info")
          }

          className="
          flex-1
          py-3
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



        {useIframe && (

        <iframe

        src={project.demoLink}

        title={project.title}

        className="
        w-full
        h-full
        min-h-[70vh]
        border-0
        "

        loading="eager"


        onError={()=>setIframeError(true)}

        allow="
        fullscreen;
        autoplay
        "

        />

        )}





        {hasLiveDemo(project.demoLink)
        &&
        (!canEmbed || iframeError)
        &&

        (

        <div
        className="
        flex
        flex-col
        items-center
        justify-center
        gap-5
        p-8
        min-h-[60vh]
        "
        >

          <MonitorPlay size={45}/>


          <p
          className="text-center"
          >

          Cette démonstration ne peut pas
          être intégrée directement.

          </p>


          <a

          href={project.demoLink}

          target="_blank"

          rel="noopener noreferrer"

          className="
          bg-primary
          text-white
          px-6
          py-3
          rounded-lg
          "

          >

          Ouvrir Argent Bank

          <ExternalLink
          className="inline ml-2"
          size={16}
          />

          </a>


        </div>

        )}





        {showAside && (

        <section
        className="
        p-5
        space-y-4
        "
        >

          <p>
            {project.description}
          </p>


          {project.gains && (

          <ProjectGains
          gains={project.gains}
          />

          )}


          <p>

          <b>Résultat :</b>{" "}

          {project.results}

          </p>



          <a

          href={project.repoLink}

          target="_blank"

          rel="noopener noreferrer"

          className="
          block
          border
          p-3
          rounded
          text-center
          "

          >

          <Github
          size={16}
          className="inline mr-2"
          />

          Code source

          </a>



        </section>

        )}



        </div>



      </motion.div>



    </AnimatePresence>

  );

};


export default ProjectDemoModal;