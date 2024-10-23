import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import "./style.css";

export default function SignUpPage() {
  const [penguinColor, setPenguinColor] = useState("#000000");
  const baseUrl = "http://20.162.213.120:5000/";
  const navigate = useNavigate();

  const initialData = {
    username: "",
    favoriteColor: "",
    firstAppearance: "",
    mostRecentGiveaway: "",
    meetable: true,
    visitor: false,
    villainous: false,
    pictureUrl: "src/assets/unknown_penguin.png",
  };

  const [userData, setUserData] = useState(initialData);

  const changeColor = (e) => {
    setPenguinColor(e.target.value);
    setUserData({ ...userData, favoriteColor: e.target.value });
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputvalue = e.target.value;

    if (inputName == "username") {
      setUserData({ ...userData, username: inputvalue });
    }
  };

  const handleSubmit = async (e) => {
    console.log("This is the data");
    console.log(userData);

    e.preventDefault();

    await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    setUserData(initialData);
    navigate("/");
  };

  return (
    <>
      <Header />

      <div className="container">
        <div className="title-item">
          <h1>Create your Penguin!</h1>
        </div>
        <div className="container-splitter">
          <div className="penguin-container">
            <div className="penguin-item">
              <img
                style={{ backgroundColor: penguinColor }}
                src="src\assets\unknown_penguin.png"
                alt=""
              />
            </div>

            <div className="color-picker-container">
              <button
                onClick={changeColor}
                style={{ backgroundColor: "#2ecc71" }}
                className="swatch"
                name="swatch-pick"
                value="#2ecc71"
              ></button>

              <button
                onClick={changeColor}
                style={{ backgroundColor: "#e74c3c" }}
                className="swatch"
                name="swatch-pick"
                value={"#e74c3c"}
              ></button>

              <button
                onClick={changeColor}
                style={{ backgroundColor: "#9b59b6" }}
                className="swatch"
                name="swatch-pick"
                value={"#9b59b6"}
              ></button>

              <button
                onClick={changeColor}
                style={{ backgroundColor: "#ff8504" }}
                className="swatch"
                name="swatch-pick"
                value={"#ff8504"}
              ></button>

              <button
                onClick={changeColor}
                style={{ backgroundColor: "#04fff7" }}
                className="swatch"
                name="swatch-pick"
                value={"#04fff7"}
              ></button>

              <div></div>
            </div>
          </div>

          <div className="form-item">
            <div className="form-item-container">
              <p>Username: </p>
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="form-ending">
          <input type="submit" value="Create!" onClick={handleSubmit} />
        </div>
      </div>
    </>
  );
}
