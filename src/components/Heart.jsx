import "./Heart.css";
import { ImHeart } from "react-icons/im";
import { IoIosHeartEmpty } from "react-icons/io";
import { useState } from "react";

const Heart = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    liked === true ? setLiked(false) : setLiked(true);
  };

  return (
    <div className="heart" onClick={handleClick}>
      {liked === true ? <ImHeart /> : <IoIosHeartEmpty />}
    </div>
  );
};

export { Heart };
