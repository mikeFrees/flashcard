import styles from "@/components/FlashcardNav.module.css";
import chevronPrevious from "@/assets/icons/icon-chevron-left.svg";
import chevronNext from "@/assets/icons/icon-chevron-right.svg";
import { useContext } from "react";
import { FlashcardContext } from "@/context/FlashCardContext";

function FlashcardNav() {
  const { cardIndex, setCardIndex, filteredFlashcards } = useContext(FlashcardContext);

  return (
    <div className={`${styles.navContainer}`}>
      <button
        className={`${styles.button} text-preset-4-medium`}
        onClick={() => setCardIndex(cardIndex - 1)}
        disabled={cardIndex === 0}
      >
        <img
          src={chevronPrevious}
          alt='Previous icon'
        />
        Previous
      </button>
      <p className={`${styles.navText} text-preset-5`}>
        Card {cardIndex + 1} of {filteredFlashcards.length}
      </p>
      <button
        className={`${styles.button} text-preset-4-medium`}
        onClick={() => setCardIndex(cardIndex + 1)}
        disabled={cardIndex === filteredFlashcards.length - 1}
      >
        Next
        <img
          src={chevronNext}
          alt='Next icon'
        />
      </button>
    </div>
  );
}

export default FlashcardNav;
