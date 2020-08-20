import React from 'react';
import MiddleImage from '../images/emploi-entretien-menager-montreal.svg';
import styles from '../index.css';
import BetweenConatiner from './BetweenContainer';
import CustomHead from './CustomHead';
import CustomParagraph from './CustomParagraph';
const MiddlePanel = ({ onButtonClick, success = false }) => {
  return (
    <div className={styles.middlePanel}>
      <BetweenConatiner>
        <div className={styles.middleImg}>
          <img
            src={MiddleImage}
            alt="Emploi entretien ménager à Montréal"
          ></img>
        </div>
        <div className={styles.midMainInfo}>
          <CustomHead type="h2" color="#FFF">
            Vous êtes un professionnel préposé au ménage ?
          </CustomHead>
          <CustomHead type="h3" color="#FFF">
            Devenez un ToDoo !
          </CustomHead>
          <CustomParagraph marginTop="16px" color="#FFF" fontWeight="lighter">
            Devenez un Todoo, gratuit, sans engagement et flexible : Tiggidoo
            est la solution pour tous les travailleurs autonomes en entretien
            ménager résidentiel.
          </CustomParagraph>
          <CustomHead type="h3" color="#FFF">
            C'est vous le patron
          </CustomHead>
          <CustomParagraph marginTop="16px" color="#FFF" fontWeight="lighter">
            En tant que Todoo, vous gardez le plein contrôle de votre horaire.
            Vous recevrez des offres automatiquement selon vos critères, votre
            secteur et vos disponibilités.
          </CustomParagraph>
          <CustomHead type="h3" color="#FFF">
            Travaillez mieux, pour gagnez plus
          </CustomHead>
          <CustomParagraph marginTop="16px" color="#FFF" fontWeight="lighter">
            Moins de gestion signifie plus de revenus et de liberté. Vous aurez
            accès gratuitement à des outils de gestion efficaces pour optimiser
            votre temps et augmenter vos gains.
          </CustomParagraph>

          <CustomHead type="h4" color="#FFF" marginTop="61px">
            <div className={styles.itemsText}>
              <span>✔</span> Inscription gratuite sans engagement
            </div>
            <div className={styles.itemsText}>
              <span>✔</span> Rémunération minimum réglementée
            </div>
            <div className={styles.itemsText}>
              <span>✔</span> Paiement sécurisé et garanti
            </div>
            <div className={styles.itemsText}>
              <span>✔</span> Grande visibilité de vos services
            </div>
          </CustomHead>

          <div
            className={styles.button}
            onClick={() => onButtonClick && onButtonClick('middle')}
          >
            <a>JE DEVIENS PRO</a>
          </div>
        </div>
      </BetweenConatiner>
    </div>
  );
};

export default MiddlePanel;
