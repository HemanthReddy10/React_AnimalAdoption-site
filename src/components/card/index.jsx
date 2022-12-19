import React from "react";

const Card = () => {
  return (
    <div id="root">

    <main class="main">


    <h2 class="main_header">A dog is the only thing on earth that loves you more than he loves himself</h2>





    <div class="cardsgroup">
      
        <div class="cards">
            <h3 class="card_heading">Charlie</h3>
            <img src="images/pramod-tiwari-Gkk8m0_rFgs-unsplash.jpg" alt="" class="CardLogo" width="183" height="183"/>
            <div class="cardText"> Dogs do speak, but only to those who know how to listen.</div>
            <a href="readMore.html">
            <button class="button"><span>Read more </span></button>
            </a>
        </div>
        
        <div class="cards">
            <h3 class="card_heading">Teddy</h3>

            <img src="images/ash-v0_MCllHY9M-unsplash.jpg" alt="" class="CardLogo" width="183" height="183"/>
            <div class="cardText">
                Dogs’ lives are too short. Their only fault, really.
            </div>
            <a href="readMore.html">
            <button class="button"><span>Read more </span></button>
        </a>
        </div>
        <div class="cards">
            <h3 class="card_heading">Cooper</h3>
            <img src="images/alvan-nee-eoqnr8ikwFE-unsplash.jpg" alt="" class="CardLogo" width="183" height="183"/>
            <div class="cardText">Dogs are not our whole life, but they make our lives whole.</div>
            <a href="readMore.html">
            <button class="button"><span>Read more </span></button>
            </a>
        </div>
        <div class="cards">
            <h3 class="card_heading">Rocky</h3>

            <img src="images/alvan-nee-8g0D8ZfFXyA-unsplash.jpg" alt="" class="CardLogo" width="183" height="183"/>
            <div class="cardText">
                The better I get to know men, the more I find myself loving dogs.
            </div>
            {/* <!-- <li class="readMoreCard">
            <a href="read more" class="rm_link" >read more</a>
            </li> --> */}
            <a href="readMore.html">
            <button class="button"><span>Read more </span></button>
            </a>
        </div>
    </div>
</main>
</div>
    
  );
};

export default Card;
