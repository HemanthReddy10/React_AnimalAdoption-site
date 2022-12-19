import React from "react";
import Tabs from './Tabs';
const TabPage = ({callBack}) => {
  return (
      <div>
          <h2>Top 5 Frequently Asked Questions:</h2>
          <br/>
          <br/>
  <Tabs callBack={callBack}/>
  
  
  </div>
  );
};

export default TabPage;
