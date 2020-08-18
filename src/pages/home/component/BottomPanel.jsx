import React from 'react';
import facebook from '../images/Facebook-tiggidoo.png';
import instagram from '../images/instagram-tiggidoo.png';
import LeftTree from '../images/plante.svg';
import linkedin from '../images/linkedin-tiggidoo.png';
import LogoBottom from '../images/logo-tiggidoo-blanc.svg';
import RightTree from '../images/Plante2.svg';
import styles from '../index.css';
import BetweenConatiner from './BetweenContainer';
import Wrap from './Wrap';
const BottomPanel = () => {
  return (
    <div className={styles.bottomPanel}>
      <img src={LeftTree}></img>

      <BetweenConatiner>
        <div className={styles.bottomInfo1}>
          <img src={LogoBottom} alt="Service de ménage à domicile au Quebec"></img>
          <div className={styles.copyRight}>
            Copiright 2020 Tout droit réservé
          </div>
        </div>
        <div className={styles.bottomInfo2}>
          <div>SUIVEZ-NOUS</div>
          {/* <div className={styles.bottomIcons}> */}
          <Wrap space="56px" marginTop="15px" runSpace="20px">
            <img src={facebook} alt="Facebook de Tiggidoo"></img>
            <img src={linkedin} alt="Linkedin de Tiggidoo"></img>
            <img src={instagram} alt="Instagram de Tiggidoo"></img>
          </Wrap>
        </div>
        {/* </div> */}
      </BetweenConatiner>
      <img className={styles.rightTree} src={RightTree}></img>
    </div>
  );
};

export default BottomPanel;
