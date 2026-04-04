import styles from "@/App.module.css";
import Header from "@/components/Header";
import StudyPage from "@/pages/StudyPage";
import CardsPage from "@/pages/CardsPage";
import FlashcardProvider from "@/context/FlashCardContext";
import {useState} from 'react';

function App() {
  const [studyPage, setStudyPage] = useState(true);
  return (
    <FlashcardProvider>
      <div className={`${styles.appContainer}`}>
        <Header setStudy={setStudyPage} study={studyPage} />
        <main className={`${styles.appMainContent}`}>
          {studyPage ? <StudyPage /> : <CardsPage />}
        </main>
      </div>
    </FlashcardProvider>
  );
}

export default App;
