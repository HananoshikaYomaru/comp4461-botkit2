const attractions = { 
    "Jungle River Cruise" : {
        location : "Adventureland", 
        hours : "10:30 AM to 7:30 PM" , 
        img : "img/jungle_river_cruise.png" , 
        img2: "img/attraction1.png", 
        waiting_time : "7 mins" ,  
    },  
    "Liki Tikis" : {
        location : "Adventureland" , 
        hours : "10:30 AM to 7:30 PM",
        img : "img/liki_tikis.png" , 
        img2: "img/attraction2.png", 
        waiting_time : "20 mins" ,
    },
    "Cinderella Carousel" : {
        location : "Fantasyland" , 
        hours : "10:30 AM to 7:30 PM" , 
        img : "img/cinderella_carousel.png", 
        img2: "img/attraction3.png", 
        waiting_time : "11 mins" , 
    }, 
    "Dumbo the Flying Elephant" : {
        location : "Fantasyland" , 
        hours : "10:30 AM to 7:30 PM" , 
        img : "img/dumbo_the_flying_elephant.png", 
        img2: "img/attraction4.png", 
        waiting_time : "12 mins"
    }, 
    "Fairy Tale Forest" : {
        location : "Fantasyland" , 
        hours : "10:30 AM to 6:00 PM" , 
        img : "img/fairy_tale_forest.png", 
        img2: "img/attraction5.png", 
        waiting_time : "26 mins"
    }, 
    "it's a small world" : {
        location : "Fantasyland" , 
        hours : "11:00 AM to 7:30 PM" , 
        img : "img/small_world.png", 
        img2: "img/attraction6.png", 
        waiting_time : "15 mins"
    }, 
    "The Many Adventures of Winnie the Pooh" : {
        location : "Fantasyland" , 
        hours : "10:30 AM to 7:30 PM" , 
        img : "img/winnie_the_pooh.png", 
        img2: "img/attraction7.png", 
        waiting_time : "20 mins"
    }
}

const attraction_keys = Object.keys(attractions)
temp = []
for(item in attractions){
    temp.push(attractions[item]["img2"])
}
// console.log(temp)
const attraction_imgs = temp ; 

const attraction_syn = ["attraction", "game", "attractions" , "games"]

module.exports  = { 
    attractions : attractions , 
    attraction_keys : attraction_keys , 
    attraction_imgs : attraction_imgs , 
    attraction_syn : attraction_syn
} ; 