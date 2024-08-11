import { Ui } from "./Ui.module.js"

export class Details{
    constructor(id){
        document.getElementById("closeBtn").addEventListener("click",()=>{
            document.getElementById("deatails").classList.add("d-none")
            document.getElementById("Games").classList.remove("d-none")
        })
     this.getDetails(id)
    }



   async getDetails(id){

        const options ={
            method:"get",
            headers:{
          
              "x-rapidapi-key":"a7400e3614mshdd3c9e700ac0192p123b41jsna3792c5e1eff",
              "x-rapidapi-host":"free-to-play-games-database.p.rapidapi.com"
            },
          
          }

          const api =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)

          const response=await api.json()
       new Ui().displayDetails(response)
          
    }
}