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
        max-w-[100vw]
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
          pointer-events-none
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
          -translate-x-1/2
          pointer-events-none
        "
      />


      <div
        className="
          max-w-7xl
          mx-auto
          px-3
          sm:px-6
          lg:px-8
          py-8
          sm:py-12
          w-full
          box-border
          flex
          flex-col-reverse
          md:flex-row
          items-center
          gap-8
          sm:gap-12
        "
      >


        {/* TEXTE */}

        <motion.div
          initial={{
            opacity:0,
            x:-50
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
            min-w-0
            text-center
            md:text-left
            space-y-4
            sm:space-y-6
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
              text-xs
              sm:text-sm
              font-semibold
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
              font-heading
              font-extrabold
              text-secondary
              leading-snug
              tracking-tight
              text-center
              md:text-left
              break-words
              text-[1.3rem]
              sm:text-3xl
              md:text-5xl
            "
          >

            <span className="block">
              Développeur Full Stack
            </span>


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
              text-sm
              sm:text-xl
              md:text-2xl
              font-heading
              font-bold
              text-primary
            "
          >
            Applications web modernes et performantes
          </h2>



          <h3
            className="
              text-sm
              sm:text-lg
              md:text-xl
              font-semibold
              text-gray-700
            "
          >
            Développeur web freelance spécialisé React & Node.js
          </h3>



          <p
            className="
              text-sm
              sm:text-base
              md:text-lg
              text-gray-600
              max-w-lg
              mx-auto
              md:mx-0
              leading-relaxed
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
              pt-6
              justify-center
              md:justify-start
            "
          >

            {[
              "React",
              "TypeScript",
              "Node.js",
              "API REST",
              "Responsive Design"
            ].map((item)=>(
              <span
                key={item}
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
                ✓ {item}
              </span>
            ))}

          </div>




          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-3
              sm:gap-4
              justify-center
              md:justify-start
              pt-2
              sm:pt-4
            "
          >

            <a
              href="#projects"
              className="
                inline-flex
                items-center
                justify-center
                px-5
                py-3
                rounded-lg
                text-white
                bg-primary
                hover:bg-blue-700
                transition-all
                shadow-lg
              "
            >
              Voir mes projets
              <ArrowRight
                className="ml-2"
                size={18}
              />
            </a>



            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                px-5
                py-3
                rounded-lg
                text-secondary
                bg-white
                border
                border-gray-300
                hover:bg-gray-50
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
              pt-2
            "
          >

            {PERSONAL_INFO.socials.map((social)=>(

              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visiter ${social.name}`}
                className="
                  text-gray-400
                  hover:text-primary
                  transition-colors
                  p-2
                "
              >

                <social.icon size={22}/>

              </a>

            ))}

          </div>


        </motion.div>





        {/* IMAGE */}

        <motion.div
          initial={{
            opacity:0,
            scale:0.8
          }}
          animate={{
            opacity:1,
            scale:1
          }}
          transition={{
            duration:0.8,
            delay:0.2
          }}
          className="
            md:w-1/2
            w-full
            flex
            justify-center
            relative
            py-6
            sm:py-10
            md:py-0
            overflow-hidden
          "
        >


          <div
            className="
              relative
              w-[18rem]
              h-[14rem]
              min-[360px]:w-[20rem]
              min-[360px]:h-[16rem]
              sm:w-[28rem]
              sm:h-[22rem]
              md:w-[32rem]
              md:h-[26rem]
              max-w-[90vw]
              mx-auto
            "
          >


            <div
              className="
                absolute
                inset-0
                bg-primary/20
                rounded-3xl
                blur-3xl
              "
            />



            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=70&auto=format&fit=crop"
              alt="Développeur travaillant sur une application web"
              width="600"
              height="400"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="
                relative
                w-full
                h-full
                object-cover
                rounded-3xl
                border-4
                border-white
                shadow-2xl
                z-10
              "
            />



            <motion.div
              animate={{
                y:[0,-8,0]
              }}
              transition={{
                duration:4,
                repeat:Infinity,
                ease:"easeInOut"
              }}
              className="
                absolute
                top-2
                left-2
                sm:-left-6
                bg-white
                p-3
                rounded-xl
                shadow-lg
                z-20
                flex
                items-center
                gap-2
                border
                border-blue-100
              "
            >

              <div
                className="
                  text-blue-700
                  bg-blue-50
                  p-2
                  rounded-lg
                "
              >
                <Atom size={18}/>
              </div>


              <span
                className="
                  font-bold
                  text-secondary
                  text-xs
                  sm:text-sm
                "
              >
                React & TS
              </span>


            </motion.div>




            <motion.div
              animate={{
                y:[0,8,0]
              }}
              transition={{
                duration:5,
                repeat:Infinity,
                ease:"easeInOut"
              }}
              className="
                absolute
                top-8
                right-2
                sm:-right-8
                bg-white
                p-3
                rounded-xl
                shadow-lg
                z-20
                hidden
                md:flex
                items-center
                gap-2
                border
                border-green-100
              "
            >

              <div
                className="
                  text-green-700
                  bg-green-50
                  p-2
                  rounded-lg
                "
              >
                Aa
              </div>


              <span
                className="
                  font-bold
                  text-secondary
                  text-xs
                  sm:text-sm
                "
              >
                Accessibilité
              </span>


            </motion.div>



            <motion.div
              initial={{
                y:20,
                opacity:0
              }}
              animate={{
                y:0,
                opacity:1
              }}
              transition={{
                delay:1
              }}
              className="
                absolute
                bottom-2
                right-2
                sm:-bottom-4
                sm:-right-4
                bg-white
                p-3
                rounded-xl
                shadow-xl
                z-20
                hidden
                sm:flex
                items-center
                gap-2
                border
                border-gray-100
              "
            >

              <div
                className="
                  bg-primary/10
                  p-2
                  rounded-full
                  text-primary
                "
              >
                <Atom size={18}/>
              </div>


              <div>

                <p
                  className="
                    text-xs
                    text-gray-500
                    font-bold
                    uppercase
                  "
                >
                  Expertise
                </p>

                <p
                  className="
                    text-sm
                    font-bold
                    text-secondary
                  "
                >
                  Full Stack
                </p>

              </div>


            </motion.div>


          </div>


        </motion.div>


      </div>

    </section>
  );
};


export default Hero;