import React from 'react';
import MiddleImage from '../images/MiddleImage.svg';
import BetweenConatiner from './BetweenContainer';
const MiddlePanel = ({ href, onButtonClick }) => {
  return (
    <div className="middlePanel">
      <BetweenConatiner>
        <div className="middleImg">
          <img src={MiddleImage}></img>
        </div>
        <div className="midMainInfo">
          <div>Vous êtes un professionnel préposé au ménage ?</div>
          <div>
            <span>
              Inscrivez-vous à notre campagne de recrutement d’experts du
              ménage. Tiggidoo est une plateforme simple d’utilisation, qui vous
              permet d’être contacté pour la réalisation d’une prestation de
              service de ménage résidentiel.
            </span>
            <span>
              Grâce à la plateforme vous profitez d’outils nécessaires à
              l’amélioration de votre quotidien, au soutien de votre
              organisation et à l’accélération de votre productivité.
            </span>
          </div>
          <div>
            Inscrivez vous à notre recrutement, en répondant à notre
            questionnaire
          </div>
          <div
            className="button"
            onClick={() => onButtonClick && onButtonClick('middle')}
          >
            <a href={href}>JE DEVIENS PRO</a>
          </div>
        </div>
      </BetweenConatiner>
    </div>
  );
};

export default MiddlePanel;
