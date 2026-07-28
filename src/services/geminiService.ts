interface GeminiResponse {

  answer:string;

}



export const sendMessageToGemini = async (
  userMessage:string
):Promise<string> => {


  try {


    const response = await fetch(
      "/api/gemini",
      {

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },


        body:JSON.stringify({

          message:userMessage

        })

      }
    );



    if(!response.ok){

      throw new Error(
        "Erreur serveur Gemini"
      );

    }



    const data:GeminiResponse =
      await response.json();



    return data.answer;



  }

  catch(error){


    console.error(
      "Gemini error:",
      error
    );



    return fallbackResponse(userMessage);


  }


};





const fallbackResponse = (
  message:string
):string => {


 const text =
   message.toLowerCase();



 if(
   text.includes("bonjour") ||
   text.includes("salut")
 ){

   return (
    "Bonjour 👋 Je suis l'assistant IA d'Evle. " +
    "Je peux vous renseigner sur ses compétences, projets et services."
   );

 }



 if(
   text.includes("compétence") ||
   text.includes("technologie")
 ){

   return (
    "Evle travaille avec React, TypeScript, JavaScript, " +
    "Node.js, Express, MongoDB, PostgreSQL et Tailwind CSS."
   );

 }



 if(
   text.includes("projet")
 ){

   return (
    "Vous pouvez découvrir les projets React, " +
    "applications web et dashboards présentés dans la section portfolio."
   );

 }



 if(
   text.includes("contact") ||
   text.includes("email")
 ){

   return (
    "Vous pouvez contacter Evle via la section Contact du portfolio."
   );

 }



 return (

  "Je peux vous aider concernant les projets, " +
  "les compétences, l'expérience ou les services proposés par Evle."

 );


};