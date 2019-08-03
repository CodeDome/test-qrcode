import React from 'react';
import QRCode from 'qrcode.react'

function App() {
  return (
    <div className="App">
      <QRCode value="https://www.baidu.com/" fgColor="black" includeMargin={true} renderAs="svg" level="H"  size={250} bgColor="white"></QRCode>
    </div>
  );
}

export default App;
