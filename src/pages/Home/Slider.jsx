import React, { useState, useEffect } from "react";
import "./Slider.css";
import data from "./data";

const Slider = ({callBack}) => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 30000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>Featured Fur Babies Available For Adoption</h2>
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
       
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" onClick={() => callBack("about")}  />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
       
        <div className="prev" onClick={() => setIndex(index - 1)} onKeyDown={() => setIndex(index - 1)} tabIndex="0" >
          <i className="fas fa-arrow-left" />
        </div>
       
        
        
        <div className="next" onClick={() => setIndex(index + 1)} onKeyDown={() => setIndex(index - 1)} tabIndex="0" >
          <i className="fas fa-arrow-right" />
        </div>
      </div>
    </section>
  );
};

export default Slider;
