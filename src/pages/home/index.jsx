import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BottomPanel from './component/BottomPanel';
import MiddlePanel from './component/MiddlePanel';
import TopPanel from './component/TopPanel';
import styles from './index.css';
const Index = () => {
  const history = useHistory();
  const [email, setEmail] = useState(null);

  const [success, setSuccess] = useState(false);

  const [failed, setFailed] = useState(false);

  const handleClick = async (flag) => {
    if (flag !== 'email') {
      history.push('/register');
      return;
    }
    const formData = new FormData();
    // '870104571@qq.com'
    formData.append('email_id', email);

    try {
      const res = await Axios.post(
        'https://api.tiggidoo.com/api/sendemail',
        formData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
        }
      );
      if (flag === 'email') {
        setSuccess(true);
      }
    } catch (e) {
      setFailed(true);
      console.log(e);
    }
  };

  const onChange = (value) => {
    setEmail(value);
  };

  useEffect(() => {
    document.title = 'Tiggidoo: plateforme de ménage';
    document.querySelector('meta[name=description]').content =
      'Tiggidoo, nouvelle plateforme de service de ménage résidentiel! Trouvez une aide ménagère, parmi les professionnels qualifiés en entretien ménager';
  }, []);
  return (
    <div className={styles.homeContainer}>
      <TopPanel
        failed={failed}
        success={success}
        onButtonClick={handleClick}
        onChange={onChange}
      ></TopPanel>
      <MiddlePanel onButtonClick={handleClick}></MiddlePanel>
      <BottomPanel></BottomPanel>
    </div>
  );
};

export default Index;
