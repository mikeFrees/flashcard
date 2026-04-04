import styles from "@/components/Flashcard.module.css";
import resetLogo from "@/assets/icons/icon-reset.svg";
import checkLogo from "@/assets/icons/icon-check.svg";
import starBlue from "@/assets/images/pattern-star-blue.svg";
import starPink from "@/assets/images/pattern-star-pink.svg";
import starYellow from "@/assets/images/pattern-star-yellow.svg";
import masteredIcon from "@/assets/icons/icon-mastered.svg";
import { useState, useContext, useEffect } from "react";
import { FlashcardContext } from "@/context/FlashCardContext";

function Flashcard() {
  const [revealAnswer, setRevealAnswer] = useState(false);
  const { cardIndex, setFlashcards, filteredFlashcards } =
    useContext(FlashcardContext);

  const flashcardInfo = filteredFlashcards[cardIndex];

  useEffect(() => {
    setRevealAnswer(false);
  }, [cardIndex]);

  if (!flashcardInfo) {
    return (
      <div className={styles.flashcard}>
        <p>No cards available in this category.</p>
      </div>
    );
  }

  let progressPercentage = (flashcardInfo.knownCount / 5) * 100;

  function updateKnownCount(newNumber) {
    setFlashcards((prevFlashcards) =>
      prevFlashcards.map((card) =>
        card.id === filteredFlashcards[cardIndex].id
          ? { ...card, knownCount: Math.min(newNumber, 5) }
          : card,
      ),
    );
  }

  return (
    <div className={`${styles.flashcard}`}>
      {!revealAnswer ? (
        <div
          className={`${styles.questionCard}`}
          onClick={() => setRevealAnswer(!revealAnswer)}
        >
          <h2 className={`${styles.category} text-preset-6`}>
            {flashcardInfo.category}
          </h2>
          <img
            src={starBlue}
            alt='blue star'
            className={`${styles.starRight}`}
          />
          <div className={`${styles.questionCardContent}`}>
            <p className={`text-preset-1`}>{flashcardInfo.question}</p>
            <p className={`text-preset-4-medium`}>Click to reveal the answer</p>
          </div>
          <img
            src={starYellow}
            alt='yellow star'
            className={`${styles.starLeft}`}
          />
          {flashcardInfo.knownCount === 5 ? (
            <p className={`${styles.mastered} text-preset-6`}>
              <img
                src={masteredIcon}
                alt='brain icon'
              />
              Mastered 5/5
            </p>
          ) : (
            <div className={`${styles.progressBarContainer}`}>
              <div className={`${styles.progressBar}`}>
                {" "}
                <div
                  className={`${styles.progressBarFill}`}
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className={`text-preset-6`}>{flashcardInfo.knownCount}/5</p>
            </div>
          )}
        </div>
      ) : (
        <div
          className={`${styles.questionCard} ${styles.answer}`}
          onClick={() => setRevealAnswer(!revealAnswer)}
        >
          <h2 className={`${styles.category} text-preset-6`}>
            {flashcardInfo.category}
          </h2>
          <img
            src={starPink}
            alt='pink star'
            className={`${styles.starRight}`}
          />
          <div className={`${styles.questionCardContent}`}>
            <p className={`text-preset-4-medium`}>Answer:</p>
            <p className={`text-preset-2`}>{flashcardInfo.answer}</p>
          </div>
          <img
            src={starYellow}
            alt='yellow star'
            className={`${styles.starLeft}`}
          />
          {flashcardInfo.knownCount === 5 ? (
            <p className={`${styles.mastered} text-preset-6`}>
              <img
                src={masteredIcon}
                alt='brain icon'
              />
              Mastered 5/5
            </p>
          ) : (
            <div className={`${styles.progressBarContainer}`}>
              <div className={`${styles.progressBar}`}>
                {" "}
                <div
                  className={`${styles.progressBarFill}`}
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className={`text-preset-6`}>{flashcardInfo.knownCount}/5</p>
            </div>
          )}
        </div>
      )}
      <div className={`${styles.actionButtons}`}>
        <button
          className={`${styles.button} ${styles.buttonGold} text-preset-4-medium`}
          onClick={() => updateKnownCount(flashcardInfo.knownCount + 1)}
        >
          <img
            src={checkLogo}
            alt='check logo'
            className={`${styles.logo}`}
          />
          I Know This
        </button>
        <button
          className={`${styles.button} text-preset-4-medium`}
          onClick={() => updateKnownCount(0)}
        >
          <img
            src={resetLogo}
            alt='reset logo'
            className={`${styles.logo}`}
          />
          Reset Progress
        </button>
      </div>
    </div>
  );
}

export default Flashcard;
