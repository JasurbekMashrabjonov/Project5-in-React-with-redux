import React, { useState } from "react";
import "../styles/Styles.css";
import "../styles/all.css";
import img1 from "../img/img3.png";
import { Link } from "react-router-dom";
// import { useSelector,useDispatch } from 'react-redux';
function Home() {
  // const {class1}  = useSelector(state =>state);
  // const dispatch = useDispatch();
  const [class1, setClass1] = useState("");
  const [class2, setClass2] = useState("");
  return (
    <>
      <div className="home">
        <div className={`inner_home ${class1}`}>
          <div className={`home_registration ${class2}`}>
            <div className="home_navbar navbar2">
              <h1>Logo</h1>
              <nav>
                {/* <ul>
                  <li>
                    <div className="di1">
                    <label htmlFor="kim">Kim sifatida:</label>
                    <a href="#!" className="btn a_dropdown" id="kim">
                      Talaba
                    </a>
                    </div>
                    <ul className="di3">
                        <li><a href="#!" className=" a2">O'qituvchi</a></li>
                        <li><a href="#!" className=" a2">Talaba</a></li>
                        <li><a href="#!" className=" a2">Kuzatuvchi</a></li>
                    </ul>
                  </li>
                  <li>
                    <div className="di2">
                    <label htmlFor="til">Tilni tanlang:</label>
                    <a href="#!" className="btn a_dropdown" id="til">
                      Uz
                    </a>
                    </div>
                    <ul>
                        <li><a href="#!" className=" a2">Uz</a></li>
                        <li><a href="#!" className=" a2">RU</a></li>
                        <li><a href="#!" className=" a2">ENG</a></li>
                    </ul>
                  </li>
                </ul> */}
                <div>
                  <label htmlFor="kim">Kim sifatida:</label>
                  <select name="" id="kim">
                    <option value="talaba" key="">
                      Talaba
                    </option>
                    <option value="ustoz" key="">
                      O'qituvchi
                    </option>
                    <option value="admin" key="">
                      Admin
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="til">Tilni tanlang:</label>
                  <select name="" id="til">
                    <option value="uz" key="">
                      Uz
                    </option>
                    <option value="ru" key="">
                      RU
                    </option>
                    <option value="eng" key="">
                      Eng
                    </option>
                  </select>
                </div>
              </nav>
            </div>
            <div className="registor">
              <i class="fa-solid fa-user-graduate ucer_icon"></i>
              <div>
                <label for="id">
                  <i class="fa-solid fa-id-badge"></i>
                </label>
                <input type="text" placeholder="Talaba ID" id="id" />
              </div>
              <div>
                <label for="parol">
                  <i class="fa-solid fa-lock"></i>
                </label>
                <input type="password" placeholder="Parol" id="parol" />
              </div>
              <Link to="/test" className="btn btn2">Kirish</Link>
              {/* <a href="#!" className="btn btn2">Kirish</a> */}
            </div>
          </div>
          <div className="home_navbar">
            <h3>Logo</h3>
            <nav className="home_nav">
              <a href="#!" className="btn a1">
                Registration
              </a>
              <a href="#!" className="btn a1">
                About
              </a>
              <a href="#!" className="btn a1">
                Contact us
              </a>
            </nav>
          </div>
          <div className="home_context">
            <div className="home_left">
              <div className="home_j1">
                <h1>Salom,</h1>
                <h1>Xush kelibsiz,</h1>
              </div>
              <p>
                Ushbu platforma talabalarning bilim va ko'nikmalarini
                tekshirish, ularni munosib baholash uchun xizmat qiladi
              </p>
              <hr />
              <p>
                Ishni boshlash uchun siz identifikatsiyadan o'tishingiz va uni
                tasdiqlashingiz kerak bo'lad!.
              </p>
              <button
                className="btn btn1"
                onClick={() => {
                  setClass1("home_registor");
                  setClass2("home_registor2");
                }}
              >
                Tasdiqlash
              </button>
            </div>
            <div className="home_right">
              <img src={img1} alt="ddd" className="home_img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
