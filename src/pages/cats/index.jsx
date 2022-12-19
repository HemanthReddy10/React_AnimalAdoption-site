import "./cats.css";
const cats = ({callBack}) => {


  return (
    <div id="root">

    <main className="main">
    <h2 className="main_header">Cats Available For Adoption</h2>
    <div className="cardsgroup">
      
        <div className="cards">
            <h3 className="card_heading">Charlie</h3>
            {/* <img src="./images/pramod-tiwari-Gkk8m0_rFgs-unsplash.jpg" alt="charlie" class="CardLogo" width="183" height="183"/> */}
            <img src="http://placekitten.com/183/183?image=1"  alt="charlie" className="CardLogo" width="183" height="183"/>
            <div className="cardText"> Cats do speak, but only to those who know how to listen.</div>
            
            <button className="button" onClick={() => callBack("about")}><span>Read more </span></button>
            
        </div>
        
        <div className="cards">
            <h3 className="card_heading">Teddy</h3>

            <img src="http://placekitten.com/183/183?image=2"  alt="teddy" className="CardLogo" width="183" height="183"/>
            <div className="cardText">
                Cats’ lives are too short. Their only fault, really.
            </div>
            
            <button className="button" onClick={() => callBack("about")}><span>Read more </span></button>
       
        </div>
        <div className="cards">
            <h3 className="card_heading">Cooper</h3>
            <img src="http://placekitten.com/183/183?image=3"  alt="cooper" className="CardLogo" width="183" height="183"/>
            <div className="cardText">Cats are not our whole life, but they make our lives whole.</div>
           
            <button onClick={() => callBack("about")} className="button"><span>Read more </span></button>
            
        </div>
        <div className="cards">
            <h3 className="card_heading">Rocky</h3>

            <img src="http://placekitten.com/183/183?image=4"  alt="rocky" className="CardLogo" width="183" height="183"/>
            <div className="cardText">
                The better I get to know men, the more I find myself loving cats.
            </div>
            
            <button onClick={() => callBack("about")} className="button"><span>Read more </span></button>
            
        </div>

        <div className="cards">
            <h3 className="card_heading">Alven</h3>
            {/* <img src="./images/pramod-tiwari-Gkk8m0_rFgs-unsplash.jpg" alt="charlie" class="CardLogo" width="183" height="183"/> */}
            <img src="http://placekitten.com/183/183?image=5"  alt="charlie" className="CardLogo" width="183" height="183"/>
            <div className="cardText"> Cats do speak, but only to those who know how to listen.</div>
           
            <button onClick={() => callBack("about")} className="button"><span>Read more </span></button>
           
        </div>
        
        <div className="cards">
            <h3 className="card_heading">Marles</h3>

            <img src="http://placekitten.com/183/183?image=6" alt="marles" className="CardLogo" width="183" height="183"/>
            <div className="cardText">
                Cats’ lives are too short. Their only fault, really.
            </div>
          
            <button onClick={() => callBack("about")} className="button"><span>Read more </span></button>
        
        </div>
        <div className="cards">
            <h3 className="card_heading">Richard</h3>
            <img src="http://placekitten.com/183/183?image=7"  alt="richard" className="CardLogo" width="183" height="183"/>
            <div className="cardText">Cats are not our whole life, but they make our lives whole.</div>
            
            <button onClick={() => callBack("about")} className="button"><span>Read more </span></button>
           
        </div>
        <div className="cards">
            <h3 className="card_heading">Celine</h3>

            <img src="http://placekitten.com/183/183?image=8"  alt="celine" className="CardLogo" width="183" height="183"/>
            <div className="cardText">
                The better I get to know men, the more I find myself loving cats.
            </div>
           
            <button onClick={() => callBack("about")} className="button"><span>Read more </span></button>
           
        </div>

        
    </div>
</main>
</div>
    
  );
};

export default cats;
