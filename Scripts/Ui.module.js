export class Ui{
    constructor(){}

    displayGames(data){
        let Box=``

        for(let i=0;i< data.length;i++){
            Box+=` <div   class="col-md-3 ">
        <div class="card " data-id="${data[i].id}" >
          <img src="${data[i].thumbnail}" class="card-img-top" alt="img">
          <div class="card-body">
              <div class="header-content d-flex justify-content-between align-items-center">
              <h6 class="fs-5    fw-bold">${data[i].title}</h6>
                <span class="badge fw-bolder fs-5 text-bg-primary   p-2">Free</span>
              </div>
          </div>
          <div class="main-content ">
            <p class="text-center opacity-50">${data[i].short_description.split(" ",4)}</p>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center p-3">
            <span class="fs-5  ">${data[i].genre}</span>
            <span class="  fs-5">${data[i].platform}</span>
          </div>
        </div>
      </div>` 

        }

        document.getElementById("Games").innerHTML=Box
    }

    displayDetails(data){

      let BoxDetails=`    <div class="col-md-4" >
          <img src="${data.thumbnail}" class="w-100" alt="image details">
       </div>
       <div class="col-md-8">
          <h3>Title:${data.title} </h3>
          <p class="fs-3">Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
          <p class="fs-3">Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
          <p class="fs-3">Status: <span class="badge text-bg-info"> ${data.Status}</span> </p>
          <p class="small">${data.description}</p>
     <a  class="btn btn-outline-success" target="_blank" href="${data.game_url}">Show Game</a>
       </div>`

       document.getElementById("detailsContent").innerHTML=BoxDetails
    }
    
}