let submit_button= document.querySelector('#submit-button');
let thankYou_container = document.querySelector('.thankYou-container');
let main_container= document.querySelector('.main-container');

let thankYou_text_container = document.querySelector('.thankYou-text-container');

let rating1= document.querySelector('.rating1');
let rating2= document.querySelector('.rating2');
let rating3= document.querySelector('.rating3');
let rating4= document.querySelector('.rating4');
let rating5= document.querySelector('.rating5');

let number_rating= document.querySelector('#number');

thankYou_container.style.display= "none";

//let click1= rating1.addEventListener('click', saveRating1);
//let click2= rating2.addEventListener('click', saveRating2)
//let click3= rating3.addEventListener('click', saveRating3)
//let click4= rating4.addEventListener('click', saveRating4)
//let click5= rating5.addEventListener('click', saveRating5)

let clickOnSubmit= submit_button.addEventListener('click', showThankYouCard);

let timesClicked= 0;

let numberRating1= 1;
let numberRating2= 2;
let numberRating3= 3;
let numberRating4= 4;
let numberRating5=5;


function basicColor(rating){
    rating.style.setProperty("background-color", "hsl(216, 12%, 8%)");
    rating.style.setProperty("color", "hsl(0, 0%, 100%)");
}

function showThankYouCard(){
    thankYou_container.style.display= "flex";
    main_container.style.display= 'none'; 
    
}
function createThankYouBlock(){
        const title= document.createElement('h1');
        const paragraph= document.createElement('p');
    
        title.textContent= 'Thank you!';
        paragraph.textContent= "We appreciate you taking the time to give a rating. If you ever need more support don't hesitate to get in touch!";
    
        thankYou_text_container.appendChild(title);
        thankYou_text_container.appendChild(paragraph);
}

function saveRatings(rating,number){
    rating.style.setProperty("background-color", "hsl(216, 12%, 54%)");
    rating.style.setProperty("color", "hsl(0, 0%, 100%)");

    number_rating.innerHTML= `You selected ${number} out of 5`;
}

rating1.onclick=function(){
    timesClicked++;
    
    createThankYouBlock();
    createThankYouBlock= function(){};

    if(timesClicked%2==0){
        basicColor(rating1);
    }else{
        saveRatings(rating1,numberRating1);
    }
}

rating2.onclick=function(){
    timesClicked++;

    createThankYouBlock();
    createThankYouBlock= function(){};

    if(timesClicked%2==0){
        basicColor(rating2);
    }else{
        saveRatings(rating2, numberRating2);
    }
}

rating3.onclick=function(){
    timesClicked++;

    createThankYouBlock();
    createThankYouBlock= function(){};

    if(timesClicked%2==0){
        basicColor(rating3);
    }else{
        saveRatings(rating3, numberRating3);
    }
}

rating4.onclick=function(){
    timesClicked++;

    createThankYouBlock();
    createThankYouBlock= function(){};

    if(timesClicked%2==0){
        basicColor(rating4);
    }else{
        saveRatings(rating4, numberRating4);
    }
}

rating5.onclick=function(){
    timesClicked++;

    createThankYouBlock();
    createThankYouBlock= function(){};

    if(timesClicked%2==0){
        basicColor(rating5);
    }else{
        saveRatings(rating5, numberRating5);
    }
}





