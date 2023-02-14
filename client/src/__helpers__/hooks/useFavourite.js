import { useState } from "react";
import classnames from "classnames";

/**
 * Allows users to click on heart icon and favourite job list items.
 * @returns className and fn handleFavourite to toggle between if clicked or not
 */
export default function useFavourite() {
  
  const [isFavourite, setFavourite] = useState(false);
  const handleFavourite = () => {
    setFavourite((current) => !current);
  };
  const favouriteClass = classnames({
    "fa-solid fa-heart": isFavourite,
    "fa-regular fa-heart": !isFavourite,
  });

  return {
    handleFavourite,
    favouriteClass,
  };
}
