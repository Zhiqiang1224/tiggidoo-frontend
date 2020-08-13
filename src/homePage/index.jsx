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
    document.title = 'HomePage';
    document.querySelector('meta[name=description]').content = '这是一条元描述';
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
