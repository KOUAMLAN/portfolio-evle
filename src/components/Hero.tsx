import React from "react";
import { ArrowRight, Atom } from "lucide-react";
import { PERSONAL_INFO } from "../constants";
import { motion } from "framer-motion";


const Hero: React.FC = () => {

  return (

    <section
      id="hero"
      className="
        min-h-[100dvh]
        flex
        items-center
        pt-20
        bg-gradient-to-br
        from-blue-50
        via-white
        to-gray-50
        relative
        overflow-hidden
        w-full
      "
    >


      <div
        className="
          absolute
          top-20
          right-0
          w-96
          h-96
          bg-primary/5
          rounded-full
          blur-3xl
          -z-10
          translate-x-1/2
        "
      />


      <div
        className="
          absolute
          bottom-0
          left-0
          w-72
          h-72
          bg-accent/5
          rounded-full
          blur-3xl
          -z-10
        "
      />



      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-10
          w-full
          flex
          flex-col-reverse
          md:flex-row
          items-center
          gap-10
        "
      >



        {/* TEXTE */}

        <motion.div

          initial={{
            opacity:0,
            x:-40
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.8
          }}

          className="
            md:w-1/2
            w-full
            text-center
            md:text-left
          "

        >


          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3
              py-1
              rounded-full
              bg-blue-100
              text-blue-800
              text-sm
              font-semibold
              mb-5
            "
          >

            <span
              className="
                w-2
                h-2
                bg-blue-700
                rounded-full
                animate-pulse
              "
            />

            Disponible pour opportunités

          </div>




          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-extrabold
              leading-tight
              text-secondary
              mb-5
            "
          >

            Développeur Full Stack

            <span
              className="
                block
                text-primary
                mt-2
              "
            >

              React · TypeScript · Node.js

            </span>

          </h1>




          <h2
            className="
              text-xl
              md:text-2xl
              font-bold
              text-primary
              mb-4
            "
          >

            Applications web modernes et performantes

          </h2>




          <p
            className="
              text-gray-600
              text-base
              md:text-lg
              leading-relaxed
              max-w-xl
              mb-6
            "
          >

            Je développe des solutions web rapides, accessibles et évolutives
            pour accompagner les entreprises dans leurs projets digitaux.

          </p>




          <div
            className="
              flex
              flex-wrap
              gap-3
              justify-center
              md:justify-start
              mb-8
            "
          >

            {
              [
                "React",
                "TypeScript",
                "Node.js",
                "API REST",
                "Responsive Design"
              ].map(skill => (

                <span

                  key={skill}

                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-blue-50
                    text-primary
                    font-semibold
                    text-sm
                  "

                >

                  ✓ {skill}

                </span>

              ))
            }

          </div>




          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              justify-center
              md:justify-start
              mb-6
            "
          >


            <a
              href="#projects"
              className="
                inline-flex
                items-center
                justify-center
                px-6
                py-3
                rounded-lg
                bg-primary
                text-white
                font-semibold
                shadow-lg
                hover:bg-blue-700
              "
            >

              Voir mes projets

              <ArrowRight
                size={18}
                className="ml-2"
              />

            </a>




            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                px-6
                py-3
                rounded-lg
                bg-white
                border
                border-gray-300
                font-semibold
              "
            >

              Me contacter

            </a>


          </div>




          <div
            className="
              flex
              justify-center
              md:justify-start
              gap-5
            "
          >

            {
              PERSONAL_INFO.socials.map((social)=>(

                <a

                  key={social.name}

                  href={social.url}

                  target="_blank"

                  rel="noopener noreferrer"

                  aria-label={`Visiter ${social.name}`}

                  className="
                    text-gray-400
                    hover:text-primary
                  "

                >

                  <social.icon size={22}/>

                </a>

              ))
            }

          </div>


        </motion.div>






        {/* IMAGE LCP OPTIMISEE */}


        <motion.div

          initial={{
            opacity:0,
            scale:0.9
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:0.8
          }}

          className="
            md:w-1/2
            w-full
            flex
            justify-center
          "

        >


          <div
            className="
              relative
              w-[18rem]
              h-[14rem]
              sm:w-[28rem]
              sm:h-[22rem]
              md:w-[32rem]
              md:h-[26rem]
            "
          >


            <picture>

              <source
                srcSet="/image/hero-720w.webp"
                media="(min-width:720px)"
                type="image/webp"
              />


              <source
                srcSet="/image/hero-480w.webp"
                media="(min-width:480px)"
                type="image/webp"
              />


              <img

                src="/image/hero-360w.webp"

                alt="Développeur Full Stack travaillant sur une application web moderne"

                width="720"

                height="480"

                loading="eager"

                fetchPriority="high"

                decoding="async"

                className="
                  w-full
                  h-full
                  object-cover
                  rounded-3xl
                  border-4
                  border-white
                  shadow-2xl
                "

              />


            </picture>





            <div
              className="
                absolute
                top-4
                left-4
                bg-white
                px-4
                py-3
                rounded-xl
                shadow-lg
                flex
                items-center
                gap-2
              "
            >

              <Atom size={18} className="text-blue-700"/>

              <span className="font-bold text-sm">
                React & TS
              </span>

            </div>





            <div
              className="
                absolute
                bottom-4
                right-4
                bg-white
                px-4
                py-3
                rounded-xl
                shadow-lg
                hidden
                sm:flex
                items-center
                gap-2
              "
            >

              <span className="font-bold text-sm">
                Full Stack
              </span>

            </div>


          </div>


        </motion.div>



      </div>


    </section>

  );

};


export default Hero;