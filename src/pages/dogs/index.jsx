import "./dogs.css";
import pramod from "./images/pramod-tiwari-Gkk8m0_rFgs-unsplash.jpg";
import ash from "./images/ash-v0_MCllHY9M-unsplash.jpg";
import alven  from "./images/alvan-nee-eoqnr8ikwFE-unsplash.jpg";
import alven1 from "./images/alvan-nee-8g0D8ZfFXyA-unsplash.jpg";
import celine from "./images/celine-sayuri-tagami-2s6ORaJY6gI-unsplash.jpg";
import richard from "./images/richard-brutyo-Sg3XwuEpybU-unsplash.jpg";
import marles from "./images/marliese-streefland-2l0CWTpcChI-unsplash.jpg";
const dogs = ({callBack}) => {


  return (
    <div id="root">

    <main className="main">
    <h2 className="main_header">Dogs Available For Adoption</h2>
    <div className="cardsgroup">
      
        <div className="cards">
            <h3 className="card_heading">Charlie</h3>
            {/* <img src="./images/pramod-tiwari-Gkk8m0_rFgs-unsplash.jpg" alt="charlie" class="CardLogo" width="183" height="183"/> */}
            <img src={pramod} alt="charlie" className="CardLogo" width="183" height="183"/>
            <div className="cardText"> Dogs do speak, but only to those who know how to listen.</div>
            
            <button className="button" onClick={() => callBack("about")}><span>Read more </span></button>
            
        </div>
        
        <div className="cards">
            <h3 className="card_heading">Teddy</h3>

            <img src={ash} alt="teddy" className="CardLogo" width="183" height="183"/>
            <div className="cardText">
                Dogs’ lives are too short. Their only fault, really.
            </div>
            
            <button className="button" onClick={() => callBack("about")}><span>Read more </span></button>
       
        </div>
        <div className="cards">
            <h3 className="card_heading">Cooper</h3>
            <img src={alven} alt="cooper" className="CardLogo" width="183" height="183"/>
            <div className="cardText">Dogs are not our whole life, but they make our lives whole.</div>
           
            <button onClick={() => callBack("about")} className="button"><span>Read more </span></button>
            
        </div>
        <div className="cards">
            <h3 className="card_heading">Rocky</h3>

            <img src={alven1} alt="rocky" className="CardLogo" width="183" height="183"/>
            <div className="cardText">
                The better I get to know men, the more I find myself loving dogs.
            </div>
            
            <button onClick={() => callBack("about")} className="button"><span>Read more </span></button>
            
        </div>

        <div className="cards">
            <h3 className="card_heading">Alven</h3>
            {/* <img src="./images/pramod-tiwari-Gkk8m0_rFgs-unsplash.jpg" alt="charlie" class="CardLogo" width="183" height="183"/> */}
            <img src={alven} alt="charlie" className="CardLogo" width="183" height="183"/>
            <div className="cardText"> Dogs do speak, but only to those who know how to listen.</div>
           
            <button onClick={() => callBack("about")} className="button"><span>Read more </span></button>
           
        </div>
        
        <div className="cards">
            <h3 className="card_heading">Marles</h3>

            <img src={marles} alt="marles" className="CardLogo" width="183" height="183"/>
            <div className="cardText">
                Dogs’ lives are too short. Their only fault, really.
            </div>
          
            <button onClick={() => callBack("about")} className="button"><span>Read more </span></button>
        
        </div>
        <div className="cards">
            <h3 className="card_heading">Richard</h3>
            <img src={richard} alt="richard" className="CardLogo" width="183" height="183"/>
            <div className="cardText">Dogs are not our whole life, but they make our lives whole.</div>
            
            <button onClick={() => callBack("about")} className="button"><span>Read more </span></button>
           
        </div>
        <div className="cards">
            <h3 className="card_heading">Celine</h3>

            <img src={celine} alt="celine" className="CardLogo" width="183" height="183"/>
            <div className="cardText">
                The better I get to know men, the more I find myself loving dogs.
            </div>
           
            <button onClick={() => callBack("about")} className="button"><span>Read more </span></button>
           
        </div>

        
    </div>
</main>
</div>
    
  );
};

export default dogs;
