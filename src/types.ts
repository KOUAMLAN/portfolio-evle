import { LucideIcon } from "lucide-react";


export interface Social {

  name:string;

  url:string;

  icon:LucideIcon;

}



export interface ProjectGains {


  speed?:string;


  visibility?:string;


  ergonomics?:string;


  seo?:string;


  mobile?:string;


}



export interface Project {


 id:number;


 title:string;


 description:string;


 tags:string[];


 context:string;


 objectives:string;


 results:string;


 improvements:string;


 repoLink:string;


 demoLink:string;


 embedDemo:boolean;


 image:string;



 // preuves concrètes des améliorations

 gains?:ProjectGains;



}



export const hasLiveDemo = (
url:string
):boolean=>{


 return Boolean(
   url &&
   !url.includes("github.com")
 );


};