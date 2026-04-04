import { createContext, useState, useMemo, useEffect } from "react";

const FlashcardContext = createContext();

export default function FlashcardProvider({ children }) {
  const [flashcards, setFlashcards] = useState([
    {
      id: "fc001",
      question: "What does HTML stand for?",
      answer: "HyperText Markup Language",
      category: "Web Development",
    },
  ]);
  const [cardIndex, setCardIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [hideMastered, setHideMastered] = useState(false);

  const filteredFlashcards = useMemo(() => {
    if (selectedCategory === "All Categories") {
      return !hideMastered
        ? flashcards
        : flashcards.filter((card) => card.knownCount != 5);
    }

    return !hideMastered
      ? flashcards.filter((card) => card.category === selectedCategory)
      : flashcards.filter(
          (card) => card.category === selectedCategory && card.knownCount != 5,
        );
  }, [flashcards, selectedCategory, hideMastered]);

  useEffect(() => {
    fetch("http://146.190.225.200:3000/card") // Node backend
      .then((res) => res.json())
      .then((data) => setFlashcards(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    setCardIndex(0);
  }, [selectedCategory]);

  useEffect(() => {
    if (cardIndex >= filteredFlashcards.length) {
      setCardIndex(0);
    }
  }, [filteredFlashcards, cardIndex]);

  const categories = new Map();
  flashcards.map((card) =>
    categories.set(
      card.category,
      categories.get(card.category) ? categories.get(card.category) + 1 : 1,
    ),
  );
  let totalCards = flashcards.length;
  let mastered = flashcards.reduce((acc, curr) => {
    return curr.knownCount == 5 ? acc + 1 : acc;
  }, 0);
  let notStarted = flashcards.reduce((acc, curr) => {
    return curr.knownCount == 0 ? acc + 1 : acc;
  }, 0);
  let inProgress = totalCards - (mastered + notStarted);

  const value = {
    flashcards,
    setFlashcards,
    cardIndex,
    setCardIndex,
    totalCards,
    mastered,
    inProgress,
    notStarted,
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredFlashcards,
    hideMastered,
    setHideMastered,
  };

  return (
    <FlashcardContext.Provider value={value}>
      {children}
    </FlashcardContext.Provider>
  );
}

export { FlashcardContext };
