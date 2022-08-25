let submit_button= document.querySelector('#submit-button');
let thankYou_container = document.querySelector('.thankYou-container');
let main_container= document.querySelector('.main-container');

let rating1= document.querySelector('.rating1');
let rating2= document.querySelector('.rating2');
let rating3= document.querySelector('.rating3');
let rating4= document.querySelector('.rating4');
let rating5= document.querySelector('.rating5');

let number_rating= document.querySelector('#number');

thankYou_container.style.display= "none";

rating1.addEventListener('click', saveRating1);
rating2.addEventListener('click', saveRating2)
rating3.addEventListener('click', saveRating3)
rating4.addEventListener('click', saveRating4)
rating5.addEventListener('click', saveRating5)

submit_button.addEventListener('click', showThankYouCard);

function showThankYouCard(){
    thankYou_container.style.display= "flex";
    main_container.style.display= 'none'; 

}

function saveRating1(){
    rating1.style.setProperty("background-color", "hsl(216, 12%, 54%)");
    rating1.style.setProperty("color", "hsl(0, 0%, 100%)");

    number_rating.innerHTML= 'You selected 1 out of 5';
}
function saveRating2(){
    rating2.style.setProperty("background-color", "hsl(216, 12%, 54%)");
    rating2.style.setProperty("color", "hsl(0, 0%, 100%)");

    number_rating.innerHTML= 'You selected 2 out of 5';

}
function saveRating3(){
    
    rating3.style.setProperty("background-color", "hsl(216, 12%, 54%)");
    rating3.style.setProperty("color", "hsl(0, 0%, 100%)");

    number_rating.innerHTML= 'You selected 3 out of 5';

}
function saveRating4(){
    
    rating4.style.setProperty("background-color", "hsl(216, 12%, 54%)");
    rating4.style.setProperty("color", "hsl(0, 0%, 100%)");

    number_rating.innerHTML= 'You selected 4 out of 5';

}
function saveRating5(){
    
    rating5.style.setProperty("background-color", "hsl(216, 12%, 54%)");
    rating5.style.setProperty("color", "hsl(0, 0%, 100%)");

    number_rating.innerHTML= 'You selected 5 out of 5';

}