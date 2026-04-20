import styles from "@/components/FlashcardsPreview.module.css";
import FlashcardEditable from "@/components/FlashcardEditable";
import {useContext} from "react";
import {FlashcardContext} from "@/context/FlashCardContext";

function FlashcardsPreview() {
  const {filteredFlashcards} = useContext(FlashcardContext);

  return (
  <section>
  {filteredFlashcards.map((card) => {
    return <FlashcardEditable key={card.id} card={card}/>
  })}
  </section>
  );
}

export default FlashcardsPreview;
