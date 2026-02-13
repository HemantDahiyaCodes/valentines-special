import { useState } from "react";
import { useEffect } from "react";
import { gifArray } from "../scripts/valentineGifStorage";

function ValentineGifPlayer() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        console.log("The value before starting the interval is: ", prevIndex);
        if (prevIndex === 5) {
          setCount((prevCount) => {
            if (prevCount === 5) {
                console.log("DONE")
                clearInterval(interval);
              return prevCount;
            }

            return prevCount + 1;
          });
          return 0;
        }

        return prevIndex + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  console.log("The value of the index after interval is: ", index);
  console.log(gifArray[index]);

  return (
    <>
      <div className="valentine-gif-container">
        <img src={gifArray[index]} alt="bubu-dudu-love" />
      </div>
    </>
  );
}

export { ValentineGifPlayer };
