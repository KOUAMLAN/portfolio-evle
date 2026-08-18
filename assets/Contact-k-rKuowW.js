import{j as n,m as t,a as i}from"./index-DWBzuLvF.js";const o=()=>{const a=i.email?.trim()||"",r=a?`mailto:${a}`:"#";return n.jsxs("section",{id:"contact",className:`
        py-24
        bg-secondary
        text-white
        relative
        overflow-hidden
      `,children:[n.jsx(t.div,{animate:{rotate:360},transition:{duration:50,repeat:1/0,ease:"linear"},className:`
          absolute
          top-0
          left-0
          w-64
          h-64
          bg-primary/10
          rounded-full
          blur-3xl
          -translate-x-1/2
          -translate-y-1/2
        `}),n.jsx(t.div,{animate:{rotate:-360},transition:{duration:60,repeat:1/0,ease:"linear"},className:`
          absolute
          bottom-0
          right-0
          w-96
          h-96
          bg-accent/10
          rounded-full
          blur-3xl
          translate-x-1/2
          translate-y-1/2
        `}),n.jsxs("div",{className:`
          max-w-4xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8

          text-center

          relative
          z-10
        `,children:[n.jsx(t.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},className:`
            text-3xl
            font-heading
            font-bold
            mb-8
          `,children:"Me Contacter"}),n.jsx(t.p,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0,amount:.2},transition:{delay:.2},className:`
            text-gray-300
            mb-12
            max-w-2xl
            mx-auto

            text-lg
            leading-relaxed
          `,children:"Je suis actuellement à l'écoute de nouvelles opportunités. Que vous ayez une question technique, une proposition de mission ou simplement envie de discuter pédagogie et code, n'hésitez pas !"}),n.jsx(t.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.2},transition:{delay:.4},className:`
            flex
            justify-center
            gap-6
            sm:gap-8
            mb-12
          `,children:i.socials.map(e=>n.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:`
                p-4

                bg-white/10

                rounded-full

                hover:bg-primary

                transition-all

                duration-300

                hover:-translate-y-1

                hover:shadow-lg

                focus:outline-none

                focus:ring-2

                focus:ring-white
              `,"aria-label":`Me suivre sur ${e.name}`,children:n.jsx(e.icon,{size:24,className:"text-white"})},e.name))}),n.jsx(t.a,{whileHover:{scale:1.05},whileTap:{scale:.95},href:r,onClick:e=>{a||(e.preventDefault(),alert("Veuillez configurer votre adresse email dans constants.ts"))},className:`
            inline-flex

            items-center

            justify-center


            px-8

            py-4


            bg-primary


            text-white


            font-bold


            rounded-lg


            hover:bg-blue-600


            transition-all


            shadow-lg


            hover:shadow-primary/50


            text-lg


            focus:outline-none


            focus:ring-2


            focus:ring-white
          `,children:"Envoyer un email"})]})]})};export{o as default};
