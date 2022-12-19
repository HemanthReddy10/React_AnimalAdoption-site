import React,{useState} from "react";
import "./stylesOfIndex1.css";
import pramod from "./images/pramod-tiwari-Gkk8m0_rFgs-unsplash.jpg";
import ash from "./images/ash-v0_MCllHY9M-unsplash.jpg";
import Modal from "./Modal";

const About = ({callBack}) => {
    const [modalOpen, setModalOpen] = useState(false);
    

 
    
  return (
    
    <main className="main">
            <h2 className="main_header" id="content">" Adoption is a journey of faith, from beginning to end"</h2>
            <div className="cardsgroup1">
              
                <div className="cards1">
                    
                  
                        <img src={pramod} alt="Not found pramod" className="CardLogo1" width="183" height="250"/>
                    
                        
                    
                        
                    <h3 className="card_heading1">Charlie</h3>
                        
                    
                    
                    <div className="cardText1"> Dogs do speak, but only to those who know how to listen.The dog is a pet animal. A dog has sharp teeth so that it can eat flesh very easily, it has four legs, two ears, two eyes, a tail, a mouth, and a nose. It is a very clever animal and is very useful in catching thieves.
                         It runs very fast, barks loudly and attacks the strangers.Another thing I enjoy doing with my pet dog is playing fetch. My dog loves to chase after balls, and it’s a great way to keep him active. I always make sure to throw the ball a good distance so he has to run to catch it. This is a great way for us to bond and have some fun together.
                         I also enjoy simply spending time with my pet dog. He is such a loving and affectionate animal, and he always makes me feel better when I’m having a bad day. I know that no matter what happens, he will always be there for me.I love my dog until my last breath.This is a great way for us to bond and have some fun together.
                         I also enjoy simply spending time with my pet dog.
                         
                         </div>
                        
                         
                        
      <button
        className="button"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <span>Adopt</span>
      </button>
      
                   
      {modalOpen && <Modal setOpenModal={setModalOpen} callBack={callBack} />}          
                </div>
                
                <div className="cards1">

                    <img src={ash} alt="Not Found ash" className="CardLogo1" width="183" height="250"/>
                    
                    <h3 className="card_heading1">Teddy</h3>
    
                    
                    <div className="cardText1">
                        Dogs’ lives are too short. Their only fault, really. I love my pet dog, and I know many other people feel the same way about their pets. Dogs make great companions, and they provide us with a lot of love and affection. In this paragraph, I want to talk about some of the things that I enjoy doing with my pet dog.
                        One of my favourite activities is taking my dog for walks. It’s a great way to get some exercise, and it’s also a lot of fun. I love seeing all the different sights and sounds in my neighbourhood, and my dog loves to explore everything he can find. We always have a great time when we go for walks together.
                        Pavlov had the idea that dogs do not need to learn certain things, such as salivating when they see food. He said these reflexes are hard-wired into dogs. He coined the dog's food as an unconditioned stimulus and the salivation as an unconditioned response - this response did not require any learning on the dog's part.

                    </div>
                    <button
        className="button"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <span>Adopt</span>
      </button>
      
                   
      {modalOpen && <Modal setOpenModal={setModalOpen} callBack={callBack} />}  
                
                   
                </div>

                <div className="cards1">

                    <img src="http://placekitten.com/183/250?image=8" alt="Not Found ash" className="CardLogo1" width="183" height="250"/>
                    
                    <h3 className="card_heading1">Rami</h3>
    
                    
                    <div className="cardText1">
                        Cats’ lives are too short. Their only fault, really. I love my pet cat, and I know many other people feel the same way about their pets. Dogs make great companions, and they provide us with a lot of love and affection. In this paragraph, I want to talk about some of the things that I enjoy doing with my pet dog.
                        One of my favourite activities is taking my cat for walks. It’s a great way to get some exercise, and it’s also a lot of fun. I love seeing all the different sights and sounds in my neighbourhood, and my dog loves to explore everything he can find. We always have a great time when we go for walks together.
                        Pavlov had the idea that dogs do not need to learn certain things, such as salivating when they see food. He said these reflexes are hard-wired into dogs. He coined the cat's food as an unconditioned stimulus and the salivation as an unconditioned response - this response did not require any learning on the dog's part.

                    </div>
                    <button
        className="button"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <span>Adopt</span>
      </button>
      
                   
      {modalOpen && <Modal setOpenModal={setModalOpen} callBack={callBack} />}  
                
                   
                </div>

                <div className="cards1">

                    <img src="http://placekitten.com/183/250?image=5"alt="Not Found ash" className="CardLogo1" width="183" height="250"/>
                    
                    <h3 className="card_heading1">Tuska</h3>
    
                    
                    <div className="cardText1">
                        Cats’ lives are too short. Their only fault, really. I love my pet cat, and I know many other people feel the same way about their pets. cats make great companions, and they provide us with a lot of love and affection. In this paragraph, I want to talk about some of the things that I enjoy doing with my pet dog.
                        One of my favourite activities is taking my cat for walks. It’s a great way to get some exercise, and it’s also a lot of fun. I love seeing all the different sights and sounds in my neighbourhood, and my cat loves to explore everything he can find. We always have a great time when we go for walks together.
                        Pavlov had the idea that dogs do not need to learn certain things, such as salivating when they see food. He said these reflexes are hard-wired into dogs. He coined the dog's food as an unconditioned stimulus and the salivation as an unconditioned response - this response did not require any learning on the dog's part.

                    </div>
                    <button
        className="button"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <span>Adopt</span>
      </button>
      
                   
      {modalOpen && <Modal setOpenModal={setModalOpen} callBack={callBack} />}  
                
                   
                </div>
             
          

       
            </div>

        </main>
      


    
  );
};

export default About;
