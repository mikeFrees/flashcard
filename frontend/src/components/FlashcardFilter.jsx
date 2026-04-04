import styles from "@/components/FlashcardFilter.module.css";
import shuffleIcon from "@/assets/icons/icon-shuffle.svg";
import chevronDown from "@/assets/icons/icon-chevron-down.svg";
import { useContext, useState } from "react";
import { FlashcardContext } from "@/context/FlashCardContext";

function FlashcardFilter() {
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    hideMastered,
    setHideMastered,
    setFlashcards,
  } = useContext(FlashcardContext);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  function shuffleCards(cards) {
    const shuffled = [...cards]
    let currentIndex = shuffled.length;

    while (currentIndex !== 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [shuffled[currentIndex], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[currentIndex],
      ];
    }
    return shuffled;
  }

  return (
    <div className={`${styles.filterContainer}`}>
      <div className={styles.filters}>
        <div className={styles.dropdown}>
          <button
            className={`${styles.dropdownToggle} text-preset-4-medium`}
            onClick={() => {
              setToggleDropDown((prev) => !prev);
            }}
          >
            {selectedCategory}
            <img
              src={chevronDown}
              alt='open filter icon'
            />
          </button>
        </div>
        <div
          className={`${styles.dropdownMenu} ${
            toggleDropDown
              ? styles.dropdownMenuVisible
              : styles.dropdownMenuInvisible
          }`}
          role='listbox'
        >
          <label className={`${styles.dropdownMenuItem} text-preset-5`}>
            <input
              type='radio'
              name='status'
              value='All Categories'
              checked={selectedCategory === "All Categories"}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setToggleDropDown(false);
              }}
            />
            All Categories
          </label>

          {Array.from(categories.entries()).map(([category, numberOfCards]) => (
            <label
              key={category}
              className={`${styles.dropdownMenuItem} text-preset-5`}
            >
              <input
                type='radio'
                name='status'
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setToggleDropDown(false);
                }}
              />
              {category} ({numberOfCards})
            </label>
          ))}
        </div>
        <label className={`${styles.mastered} text-preset-4-medium`}>
          <input
            type='checkbox'
            id='mastered'
            name='mastered'
            checked={hideMastered}
            onChange={() => setHideMastered(!hideMastered)}
          />
          Hide Mastered
        </label>
      </div>
      <button className={styles.button} onClick={() => {
        setFlashcards(prev => shuffleCards(prev))}}>
        <img
          src={shuffleIcon}
          alt='shuffle icon'
        />
        shuffle
      </button>
    </div>
  );
}

export default FlashcardFilter;
