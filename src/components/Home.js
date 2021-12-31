import React, { useState } from "react";
import user_icon from "../icons/user.png";

function Home() {
  const [seasonal, setSeasonal] = useState(false);
  return (
    <div id="homeContainer">
      <div id="sidebar">
        <div id="userDiv">
          <div className="icon">
            <img src={user_icon} alt="user_icon" id="user_icon"></img>
          </div>
          <h3>Username</h3>
        </div>
        <button className="button4" onClick={() => setSeasonal(false)}>
          계절별 구매 수량 분석
        </button>
        <button className="button4" onClick={() => setSeasonal(true)}>
          계절별 구매 수량 결과
        </button>
      </div>
      <div id="dataMain">
        <div className="dataTable">
          <div className="dataTableTop">
            <div className="seasonSelect">
              <label htmlFor="seasons">기간</label>
              <select name="seasons" className="seasons">
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
                <option value="fall">Fall</option>
                <option value="winter">Winter</option>
              </select>
            </div>
            <table className="table1">
              <thead>
                <tr>
                  <th>화장품명</th>
                  <th>판매량(개)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
          {seasonal && (
            <div className="dataTableBottom">
              <div className="seasonSelect">
                <label htmlFor="seasons">기간</label>
                <select name="seasons" className="seasons">
                  <option value="spring">Spring</option>
                  <option value="summer">Summer</option>
                  <option value="fall">Fall</option>
                  <option value="winter">Winter</option>
                </select>
              </div>
              <div className="infoBox">
                <p>에센스 물량 확보 추천</p>
              </div>
            </div>
          )}
        </div>
        <div className="dataTable">
          <div className="dataTableTop">
            <div className="seasonSelect">
              <label htmlFor="seasons">기간</label>
              <select name="seasons" className="seasons">
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
                <option value="fall">Fall</option>
                <option value="winter">Winter</option>
              </select>
            </div>
            <table className="table1">
              <thead>
                <tr>
                  <th>화장품명</th>
                  <th>판매량(개)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
          {seasonal && (
            <div className="dataTableBottom">
              <div className="seasonSelect">
                <label htmlFor="seasons">기간</label>
                <select name="seasons" className="seasons">
                  <option value="spring">Spring</option>
                  <option value="summer">Summer</option>
                  <option value="fall">Fall</option>
                  <option value="winter">Winter</option>
                </select>
              </div>
              <div className="infoBox">
                <p>에센스 물량 확보 추천</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
