import { Details } from "./details.module.js"
import { Ui } from "./Ui.module.js "

 export class Home{
  constructor(){
document.querySelectorAll(".nav-link").forEach(link=>{
link.addEventListener("click",()=>{
  this.changeActiveLink(link)   
  const category=link.getAttribute("data-category")
  this.getGames(category)
  })

 
})


this.deatail=document.getElementById("deatails")
this.Games=document.getElementById("Games")
this.Ui= new Ui()
this.getGames("mmorpg")

  }

changeActiveLink(link){
  const activeLink = document.querySelector(".navbar-nav .active");
  if (activeLink) {
    activeLink.classList.remove("active");
  }
  link.classList.add("active");
    
}

 async getGames(cat){
  
const options ={
  method:"get",
  headers:{

    "x-rapidapi-key":"a7400e3614mshdd3c9e700ac0192p123b41jsna3792c5e1eff",
    "x-rapidapi-host":"free-to-play-games-database.p.rapidapi.com"
  },

}

const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,options)
const response= await api.json()

console.log(response);  


this.Ui.displayGames(response)

document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("click",()=>{
    this.deatail.classList.remove("d-none")
    this.Games.classList.add("d-none")
    new Details(card.dataset.id)
  })
})

}


}