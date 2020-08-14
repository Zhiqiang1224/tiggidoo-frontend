import React from 'react';
import emailLogo from '../images/email.png';
import inputLogo from '../images/inputLogo.png';
import TopLeftImg from '../images/TopLeftImg.svg';
import TopLogo from '../images/TopLogo.svg';
import BetweenConatiner from './BetweenContainer';

const TopPanel = ({ href, onInput, value, onButtonClick }) => {
  return (
    <div className="topContainer">
      <BetweenConatiner>
        <div className="topImgConatiner">
          <img src={TopLogo}></img>
        </div>
        <div
          className="topText button"
          onClick={() => onButtonClick && onButtonClick('top')}
        >
          <a href={href}>DEVENIR PRO</a>
        </div>
      </BetweenConatiner>
      <BetweenConatiner>
        <div className="topMainInfo">
          <div className="title">Service de Ménage résidentiel</div>
          <div className="subTitle">
            Nouvelle offre de service de ménage résidentiel au Quebec !
          </div>
          <div className="blueAnchor">
            <span>100% EXPERTS</span>
            <span>SANS ENGAGEMENT</span>
            <span>ASSISTANCE 7j/7</span>
          </div>
          <div className="topDesc">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          </div>
          <div className="subTitle2">
            Restez informé du lancement officiel de nos services
          </div>
          <div className="topDesc">
            Saisissez votre courriel pour être informé en avant première du
            lancement de notre service d’offre de ménage résidentiels adapté au
            besoin de votre logement et de vos disponibilités.
          </div>
          <div className="blueAnchor">PRÉ-INSCRIPTION : - 20%</div>
          <div className="inputContainer">
            <div>
              <img src={emailLogo}></img>
            </div>
            <div>
              <input
                value={value}
                onInput={(e) => {
                  onInput(e.target.value);
                }}
                type="text"
                placeholder="Saisissez votre courriel"
              />
            </div>
            <div>
              <img src={inputLogo}></img>
            </div>
          </div>
        </div>
        <div className="TopLeftImg">
          <img src={TopLeftImg}></img>
        </div>
      </BetweenConatiner>
    </div>
  );
};

export default TopPanel;
