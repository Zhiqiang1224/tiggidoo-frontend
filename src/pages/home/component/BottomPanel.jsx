import React from 'react';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import LeftTree from '../images/LeftTree.svg';
import linkedin from '../images/linkedin.png';
import LogoBottom from '../images/LogoBottom.svg';
import RightTree from '../images/RightTree.svg';
import styles from '../index.css';
import BetweenConatiner from './BetweenContainer';
import Wrap from './Wrap';
const BottomPanel = () => {
  return (
    <div className={styles.bottomPanel}>
      <img src={LeftTree}></img>

      <BetweenConatiner>
        <div className={styles.bottomInfo1}>
          <img src={LogoBottom}></img>
          <div className={styles.copyRight}>
            Copiright 2020 Tout droit réservé
          </div>
        </div>
        <div className={styles.bottomInfo2}>
          <div>SUIVEZ-NOUS</div>
          {/* <div className={styles.bottomIcons}> */}
          <Wrap space="56px" marginTop="15px" runSpace="20px">
            <img src={facebook}></img>
            <img src={linkedin}></img>
            <img src={instagram}></img>
          </Wrap>
        </div>
        {/* </div> */}
      </BetweenConatiner>
      <img className={styles.rightTree} src={RightTree}></img>
    </div>
  );
};

export default BottomPanel;
