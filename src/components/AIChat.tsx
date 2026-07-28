import React, {
  useState,
  useRef,
  useEffect,
  useCallback
} from "react";


import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  User,
  Bot
} from "lucide-react";


import {
  motion,
  AnimatePresence
} from "framer-motion";


import {
  sendMessageToGemini
} from "../services/geminiService";





interface Message {


id:string;


role:
"user" | "assistant";


text:string;


}








const AIChat:React.FC = ()=>{


const [
isOpen,
setIsOpen
]
=
useState(false);



const [
messages,
setMessages
]
=
useState<Message[]>([


{

id:"1",

role:"assistant",

text:
"Bonjour 👋 Je suis l'assistant IA d'Evle. Posez-moi vos questions sur mes projets, compétences ou services."


}


]);




const [
inputValue,
setInputValue
]
=
useState("");




const [
isLoading,
setIsLoading
]
=
useState(false);





const messagesEndRef =
useRef<HTMLDivElement>(null);



const inputRef =
useRef<HTMLInputElement>(null);







const scrollToBottom =
useCallback(()=>{


messagesEndRef.current?.scrollIntoView({

behavior:"smooth"

});


},[]);






useEffect(()=>{


scrollToBottom();


},[
messages,
scrollToBottom
]);







useEffect(()=>{


if(isOpen){

setTimeout(()=>{

inputRef.current?.focus();

},100);


}


},[isOpen]);








const handleSend = async(
e?:React.FormEvent
)=>{


e?.preventDefault();



if(
!inputValue.trim()
||
isLoading
)
return;





const question =
inputValue.trim();





const userMessage:Message={


id:
Date.now().toString(),


role:"user",


text:question


};





setMessages(prev=>[

...prev,

userMessage

]);





setInputValue("");



setIsLoading(true);





try{



const answer =
await sendMessageToGemini(question);




const botMessage:Message={


id:
(Date.now()+1).toString(),


role:"assistant",


text:answer


};





setMessages(prev=>[

...prev,

botMessage

]);



}

catch(error){



setMessages(prev=>[

...prev,

{

id:
(Date.now()+2).toString(),

role:"assistant",

text:
"Une erreur est survenue. Merci de réessayer."

}

]);



}

finally{


setIsLoading(false);


}



};









return (

<>



{
!isOpen &&



<motion.button


type="button"


onClick={()=>setIsOpen(true)}


aria-label="Ouvrir l'assistant IA"



className="
fixed
bottom-4
right-4
sm:bottom-6
sm:right-6
z-40
w-14
h-14
rounded-full
bg-blue-600
text-white
shadow-2xl
flex
items-center
justify-center
"


whileHover={{
scale:1.1
}}


whileTap={{
scale:0.95
}}



>

<MessageSquare size={25}/>


</motion.button>



}







<AnimatePresence>



{

isOpen &&

<>



<motion.div


className="
fixed
inset-0
bg-black/40
z-40
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



onClick={()=>setIsOpen(false)}



/>







<motion.div


className="
fixed
z-50
left-3
right-3
bottom-3
sm:left-auto
sm:right-6
sm:w-96
"


initial={{

opacity:0,

y:30

}}



animate={{

opacity:1,

y:0

}}



exit={{

opacity:0,

y:30

}}



>


<div

className="
bg-white
rounded-3xl
shadow-2xl
border
flex
flex-col
max-h-[80vh]
overflow-hidden
"

>







<div

className="
bg-blue-700
text-white
px-4
py-3
flex
items-center
justify-between
"

>


<div

className="
flex
items-center
gap-2
"

>


<Sparkles size={18}/>


<span className="font-semibold">

Assistant IA Evle

</span>


</div>





<button


type="button"


onClick={()=>setIsOpen(false)}


aria-label="Fermer l'assistant IA"



className="
p-2
rounded-full
hover:bg-white/20
"

>

<X size={18}/>


</button>



</div>









<div

className="
flex-1
overflow-y-auto
p-4
space-y-3
"

>


{

messages.map(message=>(



<div


key={message.id}


className={`flex ${
message.role==="user"
?
"justify-end"
:
"justify-start"
}`}



>


<div


className={`

max-w-[85%]

rounded-2xl

px-3

py-2

text-sm

${
message.role==="user"

?

"bg-blue-600 text-white"

:

"bg-gray-100 text-gray-900"

}

`}


>


<div

className="
flex
gap-1
items-center
text-xs
opacity-70
mb-1
"

>


{
message.role==="user"

?

<User size={12}/>

:

<Bot size={12}/>

}


<span>

{
message.role==="user"
?
"Vous"
:
"IA"
}

</span>


</div>



<p>

{message.text}

</p>


</div>


</div>



))


}








{

isLoading &&


<div className="text-sm text-gray-500">

L'assistant écrit...

</div>


}






<div ref={messagesEndRef}/>



</div>









<form


onSubmit={handleSend}


className="
border-t
p-3
flex
gap-2
"

>



<input


ref={inputRef}


value={inputValue}


onChange={
e=>setInputValue(e.target.value)
}



disabled={isLoading}


placeholder="Votre question..."



aria-label="Votre question à l'assistant IA"



className="
flex-1
border
rounded-xl
px-3
py-2
focus:outline-none
focus:ring-2
focus:ring-blue-400
"



/>






<button


type="submit"


disabled={
!inputValue.trim()
||
isLoading
}



aria-label="Envoyer"



className="
bg-blue-700
text-white
rounded-xl
w-10
flex
items-center
justify-center
disabled:opacity-50
"

>


<Send size={18}/>


</button>




</form>






</div>


</motion.div>




</>


}



</AnimatePresence>



</>


);


};



export default AIChat;