
import React from 'react';
import {
  Gauge,
  Eye,
  MousePointerClick,
  Search,
  Smartphone
} from 'lucide-react';

import { ProjectGains as Gains } from '../types';


interface ProjectGainsProps {
  gains:Gains;
}


const METRIC_CONFIG = [

  {
    key:'speed' as const,
    label:'Rapidité',
    icon:Gauge,
    color:'text-blue-600 bg-blue-50 border-blue-100'
  },

  {
    key:'visibility' as const,
    label:'Visibilité',
    icon:Eye,
    color:'text-purple-600 bg-purple-50 border-purple-100'
  },

  {
    key:'ergonomics' as const,
    label:'Ergonomie',
    icon:MousePointerClick,
    color:'text-green-600 bg-green-50 border-green-100'
  },

  {
    key:'seo' as const,
    label:'Référencement',
    icon:Search,
    color:'text-amber-600 bg-amber-50 border-amber-100'
  },

  {
    key:'mobile' as const,
    label:'Mobile',
    icon:Smartphone,
    color:'text-rose-600 bg-rose-50 border-rose-100'
  }

];


const ProjectGains:React.FC<ProjectGainsProps> = ({gains})=>{


const activeMetrics =
METRIC_CONFIG.filter(
({key})=>gains[key]
);



if(activeMetrics.length===0)
return null;



return (

<div className="space-y-2">


<p className="
text-xs
font-bold
uppercase
tracking-wide
text-secondary
">
Améliorations obtenues
</p>


<div className="
grid
grid-cols-1
sm:grid-cols-2
gap-2
">


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
flex
items-start
gap-2
p-2.5
rounded-lg
border
text-xs
${color}
`}
>


<Icon
size={14}
className="mt-0.5 shrink-0"
/>


<div>

<span className="font-bold block">
{label}
</span>


<span className="leading-snug">
{gains[key]}
</span>


</div>


</div>


))

}


</div>


</div>

);

};


export default ProjectGains;