import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({

  plugins:[
    react()
  ],


  base:"/",


  server:{

    port:5173,

    open:true,

    host:true

  },


  build:{

    outDir:"dist",

    sourcemap:false,

    chunkSizeWarningLimit:1000

  },


  optimizeDeps:{

    include:[
      "react",
      "react-dom",
      "lucide-react",
      "framer-motion"
    ]

  }

});