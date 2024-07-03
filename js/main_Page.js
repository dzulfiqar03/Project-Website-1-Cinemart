document.body.scroll({ behavior: "smooth" });

var posY = 0;
var jarak = 20;

function smoothScroll(id) {
  var target = document.getElementById(id).offsetTop;

  var scrollAnimate = setTimeout(function () {
    smoothScroll(id), 2;
  });

  posY = posY + jarak;

  if (posY >= target) {
    clearTimeout(scrollAnimate);
    posY = 0;
  } else {
    window.scroll(0, posY);
  }
}

const moviePlayList = document.querySelector(".moviePlaylist");
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

btn1.addEventListener("click", function () {
  btn1.style.transform = "scale(1.2)";
  moviePlayList.style.transform = "translateX(0px)";
  moviePlayList.style.transition = "3s all ease-in-out";
  btn1.classList.toggle("active");
  btn3.classList.remove("active");
  btn2.classList.remove("active");
  btn1.style.backgroundColor = "white";
});
btn2.addEventListener("click", function () {
  moviePlayList.style.transform = "translateX(-1385px)";
  moviePlayList.style.transition = "3s all ease-in-out";
  btn2.classList.toggle("active");
  btn3.classList.remove("active");
  btn1.classList.remove("active");
  btn1.style.background = "none";
});

btn3.addEventListener("click", function () {
  btn3.style.transform = "scale(1.2)";
  moviePlayList.style.transform = "translateX(-2765px)";
  moviePlayList.style.transition = "3s all ease-in-out";
  btn3.classList.toggle("active");
  btn2.classList.remove("active");
  btn1.classList.remove("active");
  btn1.style.background = "none";
});

const imageList1 = document.getElementById("imageList1");
imageList1.addEventListener("mouseover", function () {
  imageList1.style.opacity = "60%";
  imageList1.style.boxShadow =
    "-2px 2px 2px 1px #ffffff, 2px 2px 2px 1px #ffffff";

  imageList1.style.cursor = "pointer";
  imageList1.style.transition = "1s all ease-in-out";
});
imageList1.addEventListener("mouseout", function () {
  imageList1.style.boxShadow =
    "0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff";
  imageList1.style.opacity = "100%";
  imageList1.style.cursor = "pointer";
  imageList1.style.transition = "1s all ease-in-out";
});

const imageList2 = document.getElementById("imageList2");
imageList2.addEventListener("mouseover", function () {
  imageList2.style.opacity = "60%";
  imageList2.style.cursor = "pointer";
  imageList2.style.boxShadow =
    "-2px 2px 2px 1px #ffffff, 2px 2px 2px 1px #ffffff";

  imageList2.style.transition = "1s all ease-in-out";
});
imageList2.addEventListener("mouseout", function () {
  imageList2.style.boxShadow =
    "0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff";
  imageList2.style.opacity = "100%";
  imageList2.style.cursor = "pointer";
  imageList2.style.transition = "1s all ease-in-out";
});

const imageList3 = document.getElementById("imageList3");
imageList3.addEventListener("mouseover", function () {
  imageList3.style.opacity = "60%";
  imageList3.style.boxShadow =
    "-2px 2px 2px 1px #ffffff, 2px 2px 2px 1px #ffffff";
  imageList3.style.cursor = "pointer";
  imageList3.style.transition = "1s all ease-in-out";
});
imageList3.addEventListener("mouseout", function () {
  imageList3.style.boxShadow =
    "0px 0px 0px 0px #ffffff, 0px 0px 0px 0px #ffffff";
  imageList3.style.opacity = "100%";
  imageList3.style.cursor = "pointer";
  imageList3.style.transition = "1s all ease-in-out";
});

const movieList1 = [
  {
    id: 0,
    imgSrc: "/assets/mom.jpg",
    nama: "Doctor Strange<br>in the Multiverse of Madness",
    price: "$10",
    numberOfUnits: 1,
    qty: 1,
    duration: "126 min",
    nameCont: "Doctor Strange<br>in the Multiverse of Madness<br><br>",

    sinopsys:
      "Journey into the unknown with Doctor Strange, with the help of mystical allies both old and new, across the stunning alternate reality...",

    onclick: "toogleDetails1()",
  },
  {
    id: 1,
    imgSrc: "/assets/dominion.jpg",
    nama: "Jurassic World Dominion<br><br>",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "147 min",
    nameCont: "Jurassic World<br>Dominion<br><br>",
    sinopsys:
      "Four years after the destruction of the island of Nublar, dinosaurs now live and hunt alongside humans around the world. This delicate...",
    onclick: "toogleDetails2()",
  },
  {
    id: 2,
    imgSrc: "/assets/minionGru.jpg",
    nama: "Minions: The Rise of Gru<br><br>",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "90 min",
    nameCont: "Minions:<br>The Rise of Gru<br><br>",
    sinopsys:
      "The unexpected story of a twelve year old boy's dream to become the world's greatest super villain.",
    onclick: "toogleDetails3()",
  },
  {
    id: 3,
    imgSrc: "/assets/liamNesson.jpg",
    nama: "Memory<br><br>",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "113 min",
    nameCont: "Memory<br><br>",
    sinopsys:
      "A hit man, Alex Lewis discovers that he is being targeted after refusing to complete work for a dangerous criminal organization. Alex must quickly hunt down and kill the people ...",
    onclick: "toogleDetails4()",
  },
  {
    id: 4,
    imgSrc: "/assets/tomCruise.jpg",
    nama: "Top Gun: Maverick<br><br>",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "131 min",
    nameCont: "Top Gun: Maverick<br><br>",
    sinopsys:
      "With more than 30 years of service as one of the Navy's finest aviators, Pete Maverick Mitchell is in the position he's longed to be in,...",
    onclick: "toogleDetails5()",
  },
  {
    id: 5,
    imgSrc: "/assets/theBatman.jpg",
    nama: "The Batman<br><br>",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "174 min",
    nameCont: "The Batman<br><br>",
    sinopsys:
      "When the Riddler, a sadistic serial killer begins murdering important political figures in Gotham, Batman is charged with investigating the city's...",
    onclick: "toogleDetails6()",
  },
  {
    id: 6,
    imgSrc: "/assets/dumbledore.jpg",
    nama: "Fantastic Beasts:<br>The Secrets of Dumbledore",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "142 min",
    nameCont: "Fantastic Beasts:<br>The Secrets of Dumbledore<br><br>",
    sinopsys:
      "Professor Albus Dumbledore learns the powerful Dark wizard Gellert Grindelwald is on the move to rule the wizarding world. ...",
    onclick: "toogleDetails7()",
  },
  {
    id: 7,
    imgSrc: "/assets/sonic2.jpg",
    nama: "Sonic the Hedgehog 2<br><br>",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "122 min",
    nameCont: "Sonic<br>the Hedgehog 2<br><br>",
    sinopsys:
      "Dr. Robotnik returns to Earth with a new ally, Knuckles. Sonic and his new friend Tails will fight against them.",
    onclick: "toogleDetails8()",
  },
];

const nowPlayingMovie = document.querySelector(".nowPlayingMovie");
const olderMoviesMovie = document.querySelector(".olderMoviesMovie");
const onThisWeekMovie = document.querySelector(".onThisWeekMovie");
const comingSoonMovie = document.querySelector(".comingSoonMovie");
const contentSection = document.querySelector(".contentSection");

movieList1.forEach((movies) => {
  nowPlayingMovie.innerHTML += ` 
<div class="contentSection" onclick= '${movies.onclick}'>
    <div class="imageContent" id="imageContent">
    <div class="imageDesc">
        <img src="${movies.imgSrc}" alt="" srcset="" >
    </div>
    
    <div class = "detailImage">
     <div class="imgTitle">
                <h4>${movies.nameCont}</h4> 
             </div>
             <div class="sinopsys">
                <p>${movies.sinopsys}</p>  
             </div>
            
    </div>
        </div>
    <div class="title">
        <h1>${movies.nama}</h1>
    </div>
    <div class="sideContainer" id="sideContainer">
        <div class="duration">
            <img src="/assets/clock.png" alt="" srcset="">
        </div>
        <div class="timer">
            <h1>${movies.duration}</h1>
        </div>
        <div class="addToCartBtn">
        <img src ="/assets/addToCart.png" onclick= "addToCart(${movies.id})"  alt ="" srcset="">
        </div>
    </div>
    <div class="bottomContainer">
        <div class="bottomSection">
             <div class="downloadButton" id="downloadButton">
            <img src="/assets/download.png" alt="" srcset="">
        </div>
        <div class="watchNowBtn" id="watchNowBtn">
            <h1>Watch Now</h1>
        </div>
        </div>
       
    </div>
</div>
                `;
});

const movieClick = document.querySelector(".movieClick");

movieClick.addEventListener("mouseover", function () {
  movieClick.style.transform = "scale(0)";
  movieClick.style.transition = "1s all ease-in-out";

  movieClick.style.margin = "-220px -255px";
});

function toogleDetails1() {
  movieClick.style.margin = "-60px 28px";
  movieClick.style.transition = "1s";
  movieClick.style.position = "absolute";
  movieClick.style.transform = "scale(0.5)";
  movieClick.style.width = "maxContent";
  movieClick.innerHTML = ` <div class="descClk">
    <div class="movChld1">

    <Center>
    <div class="leftCont">
    <img class="movieChld1" src="/assets/mom.jpg" alt="">
    <h1>Doctor Strange<br>in the Multiverse of Madness</h1>
    </div>
    </Center>

    <div class= "content">

    <div class="descCont">
    <h2>Synopsis</h2>
    <p id="desc1">To restore a world where everything is changing, Strange seeks help from his ally Wong, the Sorcerer Supreme, and the Avengers' most powerful Scarlet Witch, Wanda. But a terrible threat looms over humanity and the entire universe that no longer can be done by their power alone. Even more surprising, the greatest threat in the universe looks exactly like Doctor Strange.</p>
    </div>
        
        <div class = "Actris">
            <div class= "actImg"> 

            <div class = "act1"> 
            <img src= "/assets/ActMal1.jpg" alt="">
            <div class="cast1">
                <h2>Angelina Jolie</h2>
                <p>cast</p>
            </div>
                </div>
               
                <div class="act2">  
                
                <img src= "/assets/ActMal2.jpg" alt="">
                <div class="cast2">
                <h2>Angelina Jolie</h2>
                <p>cast</p>
                </div>

                    </div>
                        </div>
              
        </div>
      
    </div>
    </div>
        </div>`;
}

function toogleDetails2() {
  movieClick.style.margin = "-60px 228px";
  movieClick.style.transition = "1s";
  movieClick.style.position = "absolute";
  movieClick.style.transform = "scale(0.5)";
  movieClick.style.width = "maxContent";
  movieClick.innerHTML = ` <div class="descClk">
    <div class="movChld1">

    <Center>
    <div class="leftCont">
    <img class="movieChld1" src="/assets/mom.jpg" alt="">
    <h1>Doctor Strange<br>in the Multiverse of Madness</h1>
    </div>
    </Center>

    <div class= "content">

    <div class="descCont">
    <h2>Synopsis</h2>
    <p id="desc1">To restore a world where everything is changing, Strange seeks help from his ally Wong, the Sorcerer Supreme, and the Avengers' most powerful Scarlet Witch, Wanda. But a terrible threat looms over humanity and the entire universe that no longer can be done by their power alone. Even more surprising, the greatest threat in the universe looks exactly like Doctor Strange.</p>
    </div>
        
        <div class = "Actris">
            <div class= "actImg"> 

            <div class = "act1"> 
            <img src= "/assets/ActMal1.jpg" alt="">
            <div class="cast1">
                <h2>Angelina Jolie</h2>
                <p>cast</p>
            </div>
                </div>
               
                <div class="act2">  
                
                <img src= "/assets/ActMal2.jpg" alt="">
                <div class="cast2">
                <h2>Angelina Jolie</h2>
                <p>cast</p>
                </div>

                    </div>
                        </div>
              
        </div>
      
    </div>
    </div>
        </div>`;
}

function toogleDetails3() {
  movieClick.style.margin = "-60px 428px";
  movieClick.style.transition = "1s";
  movieClick.style.position = "absolute";
  movieClick.style.transform = "scale(0.5)";
  movieClick.style.width = "maxContent";
  movieClick.innerHTML = ` <div class="descClk">
    <div class="movChld1">

    <Center>
    <div class="leftCont">
    <img class="movieChld1" src="/assets/mom.jpg" alt="">
    <h1>Doctor Strange<br>in the Multiverse of Madness</h1>
    </div>
    </Center>

    <div class= "content">

    <div class="descCont">
    <h2>Synopsis</h2>
    <p id="desc1">To restore a world where everything is changing, Strange seeks help from his ally Wong, the Sorcerer Supreme, and the Avengers' most powerful Scarlet Witch, Wanda. But a terrible threat looms over humanity and the entire universe that no longer can be done by their power alone. Even more surprising, the greatest threat in the universe looks exactly like Doctor Strange.</p>
    </div>
        
        <div class = "Actris">
            <div class= "actImg"> 

            <div class = "act1"> 
            <img src= "/assets/ActMal1.jpg" alt="">
            <div class="cast1">
                <h2>Angelina Jolie</h2>
                <p>cast</p>
            </div>
                </div>
               
                <div class="act2">  
                
                <img src= "/assets/ActMal2.jpg" alt="">
                <div class="cast2">
                <h2>Angelina Jolie</h2>
                <p>cast</p>
                </div>

                    </div>
                        </div>
              
        </div>
      
    </div>
    </div>
        </div>`;
}

function toogleDetails4() {
  movieClick.style.margin = "-60px 628px";
  movieClick.style.transition = "1s";
  movieClick.style.position = "absolute";
  movieClick.style.transform = "scale(0.5)";
  movieClick.style.width = "maxContent";
  movieClick.innerHTML = ` <div class="descClk">
    <div class="movChld1">

    <Center>
    <div class="leftCont">
    <img class="movieChld1" src="/assets/mom.jpg" alt="">
    <h1>Doctor Strange<br>in the Multiverse of Madness</h1>
    </div>
    </Center>

    <div class= "content">

    <div class="descCont">
    <h2>Synopsis</h2>
    <p id="desc1">To restore a world where everything is changing, Strange seeks help from his ally Wong, the Sorcerer Supreme, and the Avengers' most powerful Scarlet Witch, Wanda. But a terrible threat looms over humanity and the entire universe that no longer can be done by their power alone. Even more surprising, the greatest threat in the universe looks exactly like Doctor Strange.</p>
    </div>
        
        <div class = "Actris">
            <div class= "actImg"> 

            <div class = "act1"> 
            <img src= "/assets/ActMal1.jpg" alt="">
            <div class="cast1">
                <h2>Angelina Jolie</h2>
                <p>cast</p>
            </div>
                </div>
               
                <div class="act2">  
                
                <img src= "/assets/ActMal2.jpg" alt="">
                <div class="cast2">
                <h2>Angelina Jolie</h2>
                <p>cast</p>
                </div>

                    </div>
                        </div>
              
        </div>
      
    </div>
    </div>
        </div>`;
}

function toogleDetails5() {
  movieClick.style.margin = "240px 628px";
  movieClick.style.transition = "1s";
  movieClick.style.position = "absolute";
  movieClick.style.transform = "scale(0.5)";
  movieClick.style.width = "maxContent";
  movieClick.innerHTML = ` <div class="descClk">
    <div class="movChld1">

    <Center>
    <div class="leftCont">
    <img class="movieChld1" src="/assets/mom.jpg" alt="">
    <h1>Doctor Strange<br>in the Multiverse of Madness</h1>
    </div>
    </Center>

    <div class= "content">

    <div class="descCont">
    <h2>Synopsis</h2>
    <p id="desc1">To restore a world where everything is changing, Strange seeks help from his ally Wong, the Sorcerer Supreme, and the Avengers' most powerful Scarlet Witch, Wanda. But a terrible threat looms over humanity and the entire universe that no longer can be done by their power alone. Even more surprising, the greatest threat in the universe looks exactly like Doctor Strange.</p>
    </div>
        
        <div class = "Actris">
            <div class= "actImg"> 

            <div class = "act1"> 
            <img src= "/assets/ActMal1.jpg" alt="">
            <div class="cast1">
                <h2>Angelina Jolie</h2>
                <p>cast</p>
            </div>
                </div>
               
                <div class="act2">  
                
                <img src= "/assets/ActMal2.jpg" alt="">
                <div class="cast2">
                <h2>Angelina Jolie</h2>
                <p>cast</p>
                </div>

                    </div>
                        </div>
              
        </div>
      
    </div>
    </div>
        </div>`;
}

function toogleDetails6() {
  movieClick.style.margin = "330px 28px";
  movieClick.style.transition = "1s";
  movieClick.style.position = "absolute";
  movieClick.style.transform = "scale(0.5)";
  movieClick.style.width = "maxContent";
  movieClick.innerHTML = ` <div class="descClk">
    <div class="movChld1">

    <Center>
    <div class="leftCont">
    <img class="movieChld1" src="/assets/mom.jpg" alt="">
    <h1>Doctor Strange<br>in the Multiverse of Madness</h1>
    </div>
    </Center>

    <div class= "content">

    <div class="descCont">
    <h2>Synopsis</h2>
    <p id="desc1">To restore a world where everything is changing, Strange seeks help from his ally Wong, the Sorcerer Supreme, and the Avengers' most powerful Scarlet Witch, Wanda. But a terrible threat looms over humanity and the entire universe that no longer can be done by their power alone. Even more surprising, the greatest threat in the universe looks exactly like Doctor Strange.</p>
    </div>
        
        <div class = "Actris">
            <div class= "actImg"> 

            <div class = "act1"> 
            <img src= "/assets/ActMal1.jpg" alt="">
            <div class="cast1">
                <h2>Angelina Jolie</h2>
                <p>cast</p>
            </div>
                </div>
               
                <div class="act2">  
                
                <img src= "/assets/ActMal2.jpg" alt="">
                <div class="cast2">
                <h2>Angelina Jolie</h2>
                <p>cast</p>
                </div>

                    </div>
                        </div>
              
        </div>
      
    </div>
    </div>
        </div>`;
}

function toogleDetails7() {
  movieClick.style.margin = "330px 228px";
  movieClick.style.transition = "1s";
  movieClick.style.position = "absolute";
  movieClick.style.transform = "scale(0.5)";
  movieClick.style.width = "maxContent";
  movieClick.innerHTML = ` <div class="descClk">
    <div class="movChld1">

    <Center>
    <div class="leftCont">
    <img class="movieChld1" src="/assets/mom.jpg" alt="">
    <h1>Doctor Strange<br>in the Multiverse of Madness</h1>
    </div>
    </Center>

    <div class= "content">

    <div class="descCont">
    <h2>Synopsis</h2>
    <p id="desc1">To restore a world where everything is changing, Strange seeks help from his ally Wong, the Sorcerer Supreme, and the Avengers' most powerful Scarlet Witch, Wanda. But a terrible threat looms over humanity and the entire universe that no longer can be done by their power alone. Even more surprising, the greatest threat in the universe looks exactly like Doctor Strange.</p>
    </div>
        
        <div class = "Actris">
            <div class= "actImg"> 

            <div class = "act1"> 
            <img src= "/assets/ActMal1.jpg" alt="">
            <div class="cast1">
                <h2>Angelina Jolie</h2>
                <p>cast</p>
            </div>
                </div>
               
                <div class="act2">  
                
                <img src= "/assets/ActMal2.jpg" alt="">
                <div class="cast2">
                <h2>Angelina Jolie</h2>
                <p>cast</p>
                </div>

                    </div>
                        </div>
              
        </div>
      
    </div>
    </div>
        </div>`;
}

function toogleDetails8() {
  movieClick.style.margin = "330px 428px";
  movieClick.style.transition = "1s";
  movieClick.style.position = "absolute";
  movieClick.style.transform = "scale(0.5)";
  movieClick.style.width = "maxContent";
  movieClick.innerHTML = ` <div class="descClk">
    <div class="movChld1">

    <Center>
    <div class="leftCont">
    <img class="movieChld1" src="/assets/mom.jpg" alt="">
    <h1>Doctor Strange<br>in the Multiverse of Madness</h1>
    </div>
    </Center>

    <div class= "content">

    <div class="descCont">
    <h2>Synopsis</h2>
    <p id="desc1">To restore a world where everything is changing, Strange seeks help from his ally Wong, the Sorcerer Supreme, and the Avengers' most powerful Scarlet Witch, Wanda. But a terrible threat looms over humanity and the entire universe that no longer can be done by their power alone. Even more surprising, the greatest threat in the universe looks exactly like Doctor Strange.</p>
    </div>
        
        <div class = "Actris">
            <div class= "actImg"> 

            <div class = "act1"> 
            <img src= "/assets/ActMal1.jpg" alt="">
            <div class="cast1">
                <h2>Angelina Jolie</h2>
                <p>cast</p>
            </div>
                </div>
               
                <div class="act2">  
                
                <img src= "/assets/ActMal2.jpg" alt="">
                <div class="cast2">
                <h2>Angelina Jolie</h2>
                <p>cast</p>
                </div>

                    </div>
                        </div>
              
        </div>
      
    </div>
    </div>
        </div>`;
}
const movieList2 = [
  {
    id: 8,
    imgSrc: "/assets/infinity.jpg",
    nama: "Avengers Infinity War<br><br>",
    price: "$10",
    numberOfUnits: 1,
    qty: 1,
    duration: "149 min",
    nameCont: "Avengers Infinity War<br><br>",
    sinopsys:
      "The Avengers and their allies must be willing to sacrifice everything in an attempt to defeat the powerful Thanos before he succeeds in destroying the universe.",
  },
  {
    id: 9,
    imgSrc: "/assets/Spiderman 3.jpg",
    nama: "Spiderman-3<br><br>",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "139 min",
    nameCont: "Spiderman-3<br><br>",
    sinopsys:
      "A strange black liquid from another world adheres to Peter Parker's body and causes his inner turmoil. At the same time, a new villain appears to threaten...",
  },
  {
    id: 10,
    imgSrc: "/assets/spidermanFarFromHome.jpg",
    nama: "Spiderman<br>Far From Home",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "129 min",
    nameCont: "Spiderman<br>Far From Home<br><br>",
    sinopsys:
      "Peter Parker (Tom Holland) is visiting Europe for a long vacation with his friends. Unfortunately, Parker could not calmly enjoy his vacation, because Nick Fury ...",
  },
  {
    id: 11,
    imgSrc: "/assets/thorRagnarok.jpg",
    nama: "Thor : Ragnarok<br><br>",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "130 min",
    nameCont: "Thor : Ragnarok<br><br>",
    sinopsys:
      "Imprisoned, the great Thor finds himself in a deadly gladiatorial contest against the Hulk, his former ally. Thor must fight to survive and race against time to ...",
  },
  {
    id: 12,
    imgSrc: "/assets/titanic.png",
    nama: "Titanic<br><br>",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "194 min",
    nameCont: "Titanic<br><br>",
    sinopsys:
      "Rose suffocates, while playing the elite society girl, attending parties, dressing up and constantly being scrutinized. When she met Jack on the Titanic, her life was changed forever.",
  },
  {
    id: 13,
    imgSrc: "/assets/Spiderman Home Coming.jpg",
    nama: "Spiderman Home Coming<br><br>",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "133 min",
    nameCont: "Spiderman Home Coming<br><br>",
    sinopsys:
      "Peter Parker tries to balance his two very opposite lives - stopping Adrian Toomes' Chitauri gun sales and living his life like a high school student.",
  },
  {
    id: 14,
    imgSrc: "/assets/aquaman.jpg",
    nama: "Aquaman<br><br>",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "142 min",
    nameCont: "Aquaman<br><br>",
    sinopsys:
      "This film reveals the origins of Arthur Curry, a mighty man who can control water and sea animals. Where did he get his power from? Who are his parents, and is he fit to be a king...",
  },
  {
    id: 15,
    imgSrc: "/assets/Avatar.jpg",
    nama: "Avatar<br><br>",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "160 min",
    nameCont: "Avatar<br><br>",
    sinopsys:
      "Jake, a crippled marine, replaces his brother in Na'vi Pandora for a mission. After being accepted by the natives as part of them, he must decide where his allegiance is.",
  },
];

movieList2.forEach((movies) => {
  olderMoviesMovie.innerHTML += ` 
                <div class="contentSection">
                <div class="imageContent" id="imageContent">
                <div class="imageDesc">
                    <img src="${movies.imgSrc}" alt="" srcset="" >
                </div>
                
                <div class = "detailImage">
                 <div class="imgTitle">
                            <h4>${movies.nameCont}</h4> 
                         </div>
                         <div class="sinopsys">
                            <p>${movies.sinopsys}</p>  
                         </div>
                </div>
                    </div>
                <div class="title">
                    <h1>${movies.nama}</h1>
                </div>
                <div class="sideContainer" id="sideContainer">
                    <div class="duration">
                        <img src="/assets/clock.png" alt="" srcset="">
                    </div>
                    <div class="timer">
                        <h1>${movies.duration}</h1>
                    </div>
                    <div class="addToCartBtn">
                    <img src ="/assets/addToCart.png" onclick= "addToCart(${movies.id})"  alt ="" srcset="">
                    </div>
                </div>
                <div class="bottomContainer">
                    <div class="bottomSection">
                         <div class="downloadButton" id="downloadButton">
                        <img src="/assets/download.png" alt="" srcset="">
                    </div>
                    <div class="watchNowBtn" id="watchNowBtn">
                        <h1>Watch Now</h1>
                    </div>
                    </div>
                   
                </div>
            </div>
                            `;
});

const movieList3 = [
  {
    id: 16,
    imgSrc: "/assets/dumbledore.jpg",
    nama: "Fantastic Beasts:<br>The Secrets of Dumbledore",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "142 min",
    nameCont: "Fantastic Beasts:<br>The Secrets of Dumbledore<br><br>",
    sinopsys:
      "Professor Albus Dumbledore learns the powerful Dark wizard Gellert Grindelwald is on the move to rule the wizarding world. ...",
  },
  {
    id: 17,
    imgSrc: "/assets/turningred.jpg",
    nama: "Turning Red<br><br>",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "100 min",
    nameCont: "Turning Red<br><br>",
    sinopsys:
      "Jake, a crippled marine, replaces his brother in Na'vi Pandora for a mission. After being accepted by the natives as part of them, he must decide where his allegiance is.",
  },
  {
    id: 18,
    imgSrc: "/assets/scream5.jpeg",
    nama: "Scream 5<br><br>",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "114 min",
    nameCont: "Scream 5<br><br>",
    sinopsys:
      "Twenty-five years after a brutal murder shocked the quiet town of Woodsboro, a new assassin has donned the Ghostface mask and has begun to push a group of teenagers ...",
  },
  {
    id: 19,
    imgSrc: "/assets/morbius.jpg",
    nama: "Morbius<br><br>",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "104 min",
    nameCont: "Morbius<br><br>",
    sinopsys:
      "Biochemist Michael Morbius (Jared Leto) tries to cure himself of a rare blood disease, but accidentally infects his body and transforms into a vampire-like creature.",
  },
  {
    id: 20,
    imgSrc: "/assets/lostcity.jpg",
    nama: "The Lost City<br><br>",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "112 min",
    nameCont: "The Lost City<br><br>",
    sinopsys:
      "Loretta Sage is a romantic novelist who likes to be alone, but her life changes when she goes on a book tour with and the handsome model on the cover of her latest novel.",
  },
  {
    id: 21,
    imgSrc: "/assets/uncharted.jpg",
    nama: "Uncharted<br><br>",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "116 min",
    nameCont: "Uncharted<br><br>",
    sinopsys:
      "Nathan Drake is recruited by experienced treasure hunter Victor Sullivan (Sully) to return the wealth accumulated by Ferdinand Magellan and lost 500 years ago ...",
  },
  {
    id: 22,
    imgSrc: "/assets/ambulance.jpg",
    nama: "Ambulance<br><br>",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "136 min",
    nameCont: "Ambulance<br><br>",
    sinopsys:
      "In this highly suspenseful thriller from director-producers Michael Bay, veteran Will Sharp, desperate for money to cover his wife's medical bills,...",
  },
  {
    id: 23,
    imgSrc: "/assets/iceagewild.jpg",
    nama: "The Ice Age<br>Adventures of Buck Wild",
    price: "$10",
    numberOfUnits: "1",
    qty: 1,
    duration: "82 min",
    nameCont: "The Ice Age<br>Adventures of Buck Wild<br><br>",
    sinopsys:
      "The Ice Age Adventures of Buck Wild continues the escapades of the possum brothers Crash and Eddie who set out to find a place of their own.",
  },
];

movieList3.forEach((movies) => {
  onThisWeekMovie.innerHTML += ` 
                            <div class="contentSection">
                            <div class="imageContent" id="imageContent">
                            <div class="imageDesc">
                                <img src="${movies.imgSrc}" alt="" srcset="" >
                            </div>
                            
                            <div class = "detailImage">
                             <div class="imgTitle">
                                        <h4>${movies.nameCont}</h4> 
                                     </div>
                                     <div class="sinopsys">
                                        <p>${movies.sinopsys}</p>  
                                     </div>
                            </div>
                                </div>
                            <div class="title">
                                <h1>${movies.nama}</h1>
                            </div>
                            <div class="sideContainer" id="sideContainer">
                                <div class="duration">
                                    <img src="/assets/clock.png" alt="" srcset="">
                                </div>
                                <div class="timer">
                                    <h1>${movies.duration}</h1>
                                </div>
                                <div class="addToCartBtn">
                                <img src ="/assets/addToCart.png" onclick= "addToCart(${movies.id})"  alt ="" srcset="">
                                </div>
                            </div>
                            <div class="bottomContainer">
                                <div class="bottomSection">
                                     <div class="downloadButton" id="downloadButton">
                                    <img src="/assets/download.png" alt="" srcset="">
                                </div>
                                <div class="watchNowBtn" id="watchNowBtn">
                                    <h1>Watch Now</h1>
                                </div>
                                </div>
                               
                            </div>
                        </div>
                                        `;
});

const movieList4 = [
  {
    id: 24,
    imgSrc: "/assets/avatar2.jpg",
    nama: "Avatar: The Way of Water<br><br>",
    price: "$10",
    numberOfUnits: 1,
    qty: 1,
    duration: "0 min",
    nameCont: "Avatar: The Way of Water<br><br>",
  },
  {
    id: 25,
    imgSrc: "/assets/GOTG 3.jpg",
    nama: "Guardians of the Galaxy<br>Vol. 3",
    price: "$10",
    numberOfUnits: 1,
    qty: 1,
    duration: "0 min",
    nameCont: "Guardians of the Galaxy Vol.3<br><br>",
  },
  {
    id: 26,
    imgSrc: "/assets/avatar5.jpg",
    nama: "Avatar 5<br><br>",
    price: "$10",
    numberOfUnits: 1,
    qty: 1,
    duration: "0 min",
    nameCont: "Avatar 5<br><br>",
  },
  {
    id: 27,
    imgSrc: "/assets/indianajones5.jpg",
    nama: "Indiana Jones 5<br><br>",
    price: "$10",
    numberOfUnits: 1,
    qty: 1,
    duration: "0 min",
    nameCont: "Indiana Jones 5<br><br>",
  },
  {
    id: 28,
    imgSrc: "/assets/fastx.jpeg",
    nama: "Fast X<br><br>",
    price: "$10",
    numberOfUnits: 1,
    qty: 1,
    duration: "0 min",
    nameCont: "Fast X<br><br>",
  },
  {
    id: 29,
    imgSrc: "/assets/aquaman2.jpg",
    nama: "Aquaman<br>and the Lost Kingdom",
    price: "$10",
    numberOfUnits: 1,
    qty: 1,
    duration: "0 min",
    nameCont: "Aquaman and the Lost Kingdom<br><br>",
  },
  {
    id: 30,
    imgSrc: "/assets/MImpp1.png",
    nama: "Mission: Impossible<br>Dead Reckoning Part One",
    price: "$10",
    numberOfUnits: 1,
    qty: 1,
    duration: "0 min",
    nameCont: "Mission: Impossible<br>Dead Reckoning Part One",
  },
  {
    id: 31,
    imgSrc: "/assets/themarvels.jpg",
    nama: "The Marvels<br><br>",
    price: "$10",
    numberOfUnits: 1,
    qty: 1,
    duration: "0 min",
    nameCont: "The Marvels<br><br>",
  },
  {
    id: 32,
    imgSrc: "/assets/jwick4.jpg",
    nama: "John Wick: Chapter 4<br><br>",
    price: "$10",
    numberOfUnits: 1,
    qty: 1,
    duration: "0 min",
    nameCont: "John Wick: Chapter 4<br><br>",
  },
  {
    id: 33,
    imgSrc: "/assets/spidermanats1.jpg",
    nama: "Spider-Man:<br>Across the Spider-Verse",
    price: "$10",
    numberOfUnits: 1,
    qty: 1,
    duration: "0 min",
    nameCont: "Spider-Man: Across the Spider-Verse",
  },
];

movieList4.forEach((movies) => {
  comingSoonMovie.innerHTML += ` 
                                        <div class="contentSection">
                                        <div class="imageContent" id="imageContent">
                                        <div class="imageDesc">
                                            <img src="${movies.imgSrc}" alt="" srcset="" >
                                        </div>
                                        
                                        <div class = "detailImage">
                                         <div class="imgTitle">
                                                    <h4></h4> 
                                                 </div>
                                                 <div class="sinopsys">
                                                    <p></p>  
                                                 </div>
                                        </div>
                                            </div>
                                        <div class="title">
                                            <h1>${movies.nama}</h1>
                                        </div>
                                        <div class="sideContainer" id="sideContainer">
                                            <div class="duration">
                                                <img src="/assets/clock.png" alt="" srcset="">
                                            </div>
                                            <div class="timer">
                                                <h1>${movies.duration}</h1>
                                            </div>
                                            <div class="addToCartBtn">
                                            <img src ="/assets/addToCart.png" onclick= "addToCart(${movies.id})"  alt ="" srcset="">
                                            </div>
                                        </div>
                                        <div class="bottomContainer">
                                            <div class="bottomSection">
                                                 <div class="downloadButton" id="downloadButton">
                                                <img src="/assets/download.png" alt="" srcset="">
                                            </div>
                                            <div class="watchNowBtn" id="watchNowBtn">
                                                <h1>Watch Now</h1>
                                            </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                                    `;
});

const nowPlayingBtn = document.querySelector(".nowPlayingBtn");
const olderMoviesBtn = document.querySelector(".olderMoviesBtn");
const onThisWeekBtn = document.querySelector(".onThisWeekBtn");
const comingSoonBtn = document.querySelector(".comingSoonBtn");

nowPlayingBtn.addEventListener("click", function () {
  nowPlayingBtn.classList.toggle("active");
  olderMoviesBtn.classList.remove("active");
  onThisWeekBtn.classList.remove("active");
  comingSoonBtn.classList.remove("active");

  nowPlayingMovie.style.transform = "translateX(0px)";
  olderMoviesMovie.style.transform = "translateX(0px)";
  onThisWeekMovie.style.transform = "translateX(0px)";
  comingSoonMovie.style.transform = "translateX(0px)";
  olderMoviesMovie.style.transition = "3s";
});

olderMoviesBtn.addEventListener("click", function () {
  olderMoviesBtn.classList.toggle("active");
  nowPlayingBtn.classList.remove("active");
  onThisWeekBtn.classList.remove("active");
  comingSoonBtn.classList.remove("active");

  olderMoviesMovie.style.transform = "translateX(-1200px)";
  olderMoviesMovie.style.transition = "3s";
  nowPlayingMovie.style.transform = "translateX(-1200px)";
  nowPlayingMovie.style.transition = "3s";
  onThisWeekMovie.style.transform = "translateX(-1200px)";
  onThisWeekMovie.style.transition = "3s";
  comingSoonMovie.style.transform = "translateX(-1200px)";
  comingSoonMovie.style.transition = "3s";
});

onThisWeekBtn.addEventListener("click", function () {
  onThisWeekBtn.classList.toggle("active");
  olderMoviesBtn.classList.remove("active");
  nowPlayingBtn.classList.remove("active");
  comingSoonBtn.classList.remove("active");

  olderMoviesMovie.style.transform = "translateX(-2400px)";
  olderMoviesMovie.style.transition = "3s";
  nowPlayingMovie.style.transform = "translateX(-2400px)";
  nowPlayingMovie.style.transition = "3s";
  onThisWeekMovie.style.transform = "translateX(-2400px)";
  onThisWeekMovie.style.transition = "3s";
  comingSoonMovie.style.transform = "translateX(-2400px)";
  comingSoonMovie.style.transition = "3s";
});

comingSoonBtn.addEventListener("click", function () {
  comingSoonBtn.classList.toggle("active");
  nowPlayingBtn.classList.remove("active");
  olderMoviesBtn.classList.remove("active");
  onThisWeekBtn.classList.remove("active");

  olderMoviesMovie.style.transform = "translateX(-3600px)";
  olderMoviesMovie.style.transition = "3s";
  nowPlayingMovie.style.transform = "translateX(-3600px)";
  nowPlayingMovie.style.transition = "3s";
  onThisWeekMovie.style.transform = "translateX(-3600px)";
  onThisWeekMovie.style.transition = "3s";
  comingSoonMovie.style.transform = "translateX(-3600px)";
  comingSoonMovie.style.transition = "3s";
});

const wishlistBtn = document.querySelector(".wishlistBtn");
const carts = document.querySelector(".carts");
const addToCartBtn = document.querySelector(".addToCartBtn");

wishlistBtn.addEventListener("click", function () {
  carts.style.margin = "0px 100px";
  carts.style.transition = "3s";
  carts.style.width = "maxContent";
  carts.style.position = "absolute";
  cartProduct.style.background = "transparent";
  nowPlayingMovie.classList.toggle("active");
  wishlistBtn.classList.toggle("active");
  carts.classList.toggle("active");
});

let cart = [];
const cartProduct = document.querySelector(".cartProduct");

function addToCart(id) {
  if (cart.some((item) => item.id === id)) {
    alert("product Already");
  } else {
    const item = movieList1.find((movies) => movies.id === id);
    const item2 = movieList2.find((movies) => movies.id === id);
    const item3 = movieList3.find((movies) => movies.id === id);
    const item4 = movieList4.find((movies) => movies.id === id);
    cart.push({
      ...item,
      ...item2,
      ...item3,
      ...item4,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

function updateCart() {
  renderCartItem();
}

function renderCartItem() {
  cartProduct.innerHTML = " ";
  cart.forEach((item) => {
    cartProduct.innerHTML += ` 
           

        <div class="movieBox">
            <div class="imageCont">
                <img src="${item.imgSrc}" alt="" srcset="">
            </div>
            <div class="movieDetail">   
            <div class="movieProductTitle">${item.nama}</div>
        <div class="moviePrice">${item.price}</div>
        
       
    </div>
       
        </div>
       
  
                            `;
  });
}
