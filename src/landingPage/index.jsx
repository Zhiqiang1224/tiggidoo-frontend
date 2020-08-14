import React, { useEffect, useState } from 'react';
import BottomPanel from './component/BottomPanel';
import MiddlePanel from './component/MiddlePanel';
import TopPanel from './component/TopPanel';
import './index.css';
const Index = () => {
  const [email, setEmail] = useState(null);

  const handleClick = (flag) => {
    console.log(flag, email);
  };

  useEffect(() => {
    document.title = 'Tiggidoo';
    document.querySelector('meta[name=description]').content = 'this is the desciption of the meta';
  }, []);
  return (
    <div className="homeContainer">
      <TopPanel
        onButtonClick={handleClick}
        onInput={(value) => {
          setEmail(value);
        }}
        value={email || ''}
      ></TopPanel>
      <MiddlePanel onButtonClick={handleClick}></MiddlePanel>
      <BottomPanel></BottomPanel>
    </div>
  );
};

export default Index;
