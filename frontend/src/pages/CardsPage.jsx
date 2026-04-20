import CardCreationForm from "@/components/CardCreationForm";
import FlashcardFilter from "@/components/FlashcardFilter";
import FlashcardsPreview from '@/components/FlashcardsPreview';
import styles from "@/pages/CardsPage.module.css";

function CardsPage() {
  return (
    <section className={styles.mainPage}>
      <CardCreationForm />
      <FlashcardFilter />
      <FlashcardsPreview />
    </section>
  );
}

export default CardsPage;
