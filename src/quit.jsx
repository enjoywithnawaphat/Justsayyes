import "./quit.css";
import { useEffect, useRef,useState } from "react";

function Quit() {
  const btnNoRef = useRef(null);
  const checkbtn = useRef(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  
  useEffect(() => {
    // ฟังการเปลี่ยนแปลงขนาดหน้าจอ
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    // เพิ่ม event listener
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function noClick() {
    const audio = new Audio("./Vine Boom.mp3");
    audio.play();
    
    const randomTop = Math.random() * (screenHeight / 1.5) -100;
    const randomLeft = Math.random() * (screenWidth / 1.5) -100;

    
    btnNoRef.current.style.top = randomTop + "px";
    btnNoRef.current.style.left = randomLeft + "px";
    
    handleMouseOver();
    checkbtn.current = checkbtn.current + 1;
  }

  function yesClick() {
    alert("You are gay lol 🤣🤣🤣");
  }

  function handleMouseOver() {
    if (checkbtn.current > 0) {
      const audio = new Audio("./Vine Boom.mp3");
      audio.play();
      const randomTop = Math.random() * (screenHeight / 1.5) -100;
      const randomLeft = Math.random() * (screenWidth / 1.5) -100;

      btnNoRef.current.style.top = randomTop + "px";
      btnNoRef.current.style.left = randomLeft + "px";
      console.log(screenWidth)
    }
  }

  return (
    <div>
      <div className="container">
        <h1>Are you gay?</h1>

        <div className="btn-container">
          <button
            onClick={() => noClick()}
            ref={btnNoRef}
            onMouseOver={handleMouseOver}
            id="btn-no"
          >
            No
          </button>
          <button onClick={() => yesClick()}>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default Quit;
