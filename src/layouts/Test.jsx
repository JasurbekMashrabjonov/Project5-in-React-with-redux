import React, { useState } from "react";
import Right from "../components/Right";
import Savollar from "../components/Savollar";
import "../styles/Right.css";
function Test(props) {
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      {isClick ? (
        <div className="main_test">
          <Savollar />
          <Right />
        </div>
      ) : null}
      {/* <Savollar/> 
                 <Right/>  */}
      {!isClick ? (
        <div className="Test_boslash">
          <h3>
            Salom TLT-6 guruh talabasi Mashrabjonov Jasurbek
            <br />
            Siz ... fandan imtihon topshirmoqchisiz.
          </h3>
          <h4>Agar tayyor bo'lsangiz boshlaymiz:</h4>
          <button className="btn btn1" onClick={() => setIsClick(!isClick)}>
            Boshlash
          </button>
        </div>
      ) : null}
    </>
  );
}

export default Test;
