import React from "react";

import {
  Gauge,
  Eye,
  MousePointerClick,
  Search,
  Smartphone
} from "lucide-react";


import {
  ProjectGains as Gains
} from "../types";



interface ProjectGainsProps {

  gains:Gains;

}



const METRIC_CONFIG = [


{
 key:"speed" as const,
 label:"Performance",
 icon:Gauge,
 color:"text-blue-700 bg-blue-50 border-blue-200"
},


{
 key:"visibility" as const,
 label:"Visibilité",
 icon:Eye,
 color:"text-purple-700 bg-purple-50 border-purple-200"
},


{
 key:"ergonomics" as const,
 label:"Expérience utilisateur",
 icon:MousePointerClick,
 color:"text-green-700 bg-green-50 border-green-200"
},


{
 key:"seo" as const,
 label:"SEO",
 icon:Search,
 color:"text-orange-700 bg-orange-50 border-orange-200"
},


{
 key:"mobile" as const,
 label:"Mobile",
 icon:Smartphone,
 color:"text-pink-700 bg-pink-50 border-pink-200"
}



];





const ProjectGains:React.FC<ProjectGainsProps> = ({
 gains
})=>{


const activeMetrics =
METRIC_CONFIG.filter(
(item)=>gains[item.key]
);



if(activeMetrics.length===0)
return null;




return (

<div className="space-y-3">


<p
className="
text-xs
font-bold
uppercase
tracking-wide
text-secondary
"
>

Améliorations réalisées

</p>




<div
className="
grid
grid-cols-1
sm:grid-cols-2
gap-2
"
>


{
activeMetrics.map(
({
key,
label,
icon:Icon,
color
})=>(


<div

key={key}

className={`
border
rounded-lg
p-3
flex
gap-2
text-xs
${color}
`}

>


<Icon
size={16}
className="shrink-0 mt-0.5"
/>



<div>

<strong className="block">
{label}
</strong>


<span>
{gains[key]}
</span>


</div>


</div>


)

)


}



</div>


</div>


);


};


export default ProjectGains;