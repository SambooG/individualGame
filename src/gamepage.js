import React, { useState } from "react";
import Pictures from "./friends.json"


function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


function GamePage (){
  const [score, updateScore] = useState(0);
  const [topScore, updateTopScore] = useState(0);
  const [alreadyClickedArray, updateAlreadyClickedArray] = useState([]);
  const [randomPictures, updateRandomPictures] = useState(Pictures);

  function handleClick(e, id) {
    // see if it's been clicked
    const hasBeenClicked = alreadyClickedArray.includes(id);
    // if already clicked
    if (hasBeenClicked) {
      // make new top score if necessary Math.max();
      updateTopScore(Math.max(score, topScore));
      // reset score back to 0
      updateScore(0);
      // reset alreadyClicked to empty array
      updateAlreadyClickedArray([]);
    }else {
      // put point on board 
     updateScore(score + 1);
     // add id to the array
     alreadyClickedArray.push(id)
     updateAlreadyClickedArray(alreadyClickedArray);

    }
    // change to new one
    updateRandomPictures(shuffleArray(randomPictures))
  }

  return (
    <div>
      <p>Score: {score}</p>
      <p>TopScore: {topScore}</p>
      <div class="gamepage">
      {randomPictures.map(function(pictureObj){
        return (
          <button className='picButton' key={pictureObj.id} onClick={(e) => handleClick(e, pictureObj.id)}>
            <img src= {pictureObj.image} alt={pictureObj.alt} />
          </button>
        )
      })}
      </div>
    </div>
  )
}
export default GamePage;