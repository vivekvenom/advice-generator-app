import { useEffect, useState } from "react";
import pauseMobile from "../../images/pattern-divider-mobile.svg";
import pauseDesktop from "../../images/pattern-divider-desktop.svg";
import buttonIcon from "../../images/icon-dice.svg";

const Advice = () => {
  const [adviceData, setAdviceData] = useState({});
  const fetchData = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdviceData(data.slip);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="advice-container">
      <p>ADVICE #{adviceData.id}</p>
      <h1>“{adviceData.advice}”</h1>
      <picture>
        <source srcSet={pauseMobile} media="(max-width: 768px)" />
        <img src={pauseDesktop} alt="pause" />
      </picture>
      <button onClick={fetchData}>
        <img className="circle-button" src={buttonIcon} alt="button" />
      </button>
    </div>
  );
};

export default Advice;
