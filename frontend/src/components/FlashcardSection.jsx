import styles from "@/components/FlashcardSection.module.css";
import FlashcardFilter from '@/components/FlashcardFilter';
import Flashcard from '@/components/Flashcard';
import FlashcardNav from '@/components/FlashcardNav';

function FlashcardSection() {
  return (
    <div className={`${styles.flashcardContainer}`}>
      <FlashcardFilter />
      <Flashcard />
      <FlashcardNav />
    </div>
  );
}

export default FlashcardSection;
