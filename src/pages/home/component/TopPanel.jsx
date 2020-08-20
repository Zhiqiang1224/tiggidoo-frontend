import React, { useState } from 'react';
import TopLogo from '../images/logo_tiggidoo.svg';
import TopLeftImg from '../images/menage-domicile-montreal.svg';
import successLogo from '../images/success.png';
import styles from '../index.css';
import BetweenConatiner from './BetweenContainer';
import BlueText from './BlueText';
import CustomHead from './CustomHead';
import CustomParagraph from './CustomParagraph';
import Wrap from './Wrap';

const TopPanel = ({
  onButtonClick,
  onChange,
  success = false,
  failed = false,
}) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={styles.topContainer}>
      <BetweenConatiner>
        <div className={styles.topImgConatiner}>
          <img
            src={TopLogo}
            alt="Tiggidoo : l'entretien ménager au Quebec"
          ></img>
        </div>
        <div
          className={`${styles.topText} ${styles.button}`}
          onClick={() => onButtonClick && onButtonClick('top')}
        >
          <a>DEVENIR PRO</a>
        </div>
      </BetweenConatiner>
      <BetweenConatiner>
        <div className={styles.topMainInfo}>
          <CustomHead marginTop="0">Pas le temps, ni le goût </CustomHead>
          <CustomHead marginTop="0">
            <div className={styles.titleBig}>
              C’est Tiggid<span>oo</span>
            </div>
          </CustomHead>
          <CustomHead type="h2" marginTop="30px">
            Trouvez votre expert en entretien ménager résidentiel
          </CustomHead>
          <Wrap marginTop="14px">
            <BlueText>VALIDER VOTRE TARIF</BlueText>
            <BlueText>CHOISISSEZ VOTRE TODOO</BlueText>
            <BlueText>RÉSERVEZ EN LIGNE</BlueText>
          </Wrap>
          <CustomParagraph>
            Découvrez les Todoo, nos spécialistes du ménage prêts à faire
            briller votre logis, quand vous le voulez, comme vous le voulez.
            Chaque expert en entretien ménager est trié sur le volet par notre
            équipe et noté après chaque prestation par des utilisateurs comme
            vous. Choisissez un ou plusieurs profils préférés et dites adieu aux
            corvées.
          </CustomParagraph>
          <CustomHead type="h2">
            Devenez client VIP : C'est gratuit et sans engagement!
          </CustomHead>
          <BlueText>PRÉ-INSCRIPTION : - 20%</BlueText>
          <CustomParagraph marginTop="30px">
            Tiggidoo prendra bientôt d’assaut le marché de l’entretien ménager
            résidentiel dans la grande région de Montréal. Laissez nous votre
            courriel, nous vous préviendrons dès que nos services seront
            disponibles, en plus vous bénéficiez de -20% sur votre premier
            ménage.
          </CustomParagraph>

          <div
            className={`${styles.inputContainer} ${
              !failed ? null : styles.inputBorder
            } `}
          >
            {success ? (
              <>
                <img
                  src={successLogo}
                  alt=""
                  className={styles.successLogo}
                ></img>
                <BlueText marginTop="0" fontSize="25px" marginLeft="56px">
                  MERCI, vos informations sont enregistrées
                </BlueText>
              </>
            ) : (
              <>
                <div>{/* <img src={emailLogo}></img> */}</div>
                <div>
                  <input
                    value={inputValue}
                    onBlur={() => {
                      onChange(inputValue);
                    }}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                    }}
                    type="text"
                    placeholder="courriel@tiggidoo.com"
                  />
                </div>
                <div>
                  <div
                    className={styles.inputButton}
                    onClick={() => {
                      onButtonClick('email');
                    }}
                  >
                    ENVOYER
                  </div>
                </div>
              </>
            )}
          </div>
          {failed && (
            <div className={styles.inputBtmText}>
              Désolé, il semblerait que ce courriel soit éronée
            </div>
          )}
        </div>
        <div className={styles.TopLeftImg}>
          <img
            src={TopLeftImg}
            alt="Trouver une femme de ménage à Montréal"
          ></img>
        </div>
      </BetweenConatiner>
    </div>
  );
};

export default TopPanel;
