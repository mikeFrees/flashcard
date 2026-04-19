import CardCreationForm from "@/components/CardCreationForm";
import FlashcardFilter from "@/components/FlashcardFilter";
import styles from "@/pages/CardsPage.module.css";

function CardsPage() {
  return (
    <main className={styles.mainPage}>
      <CardCreationForm />
      <FlashcardFilter />
    </main>
  );
}

export default CardsPage;
