import styles from "@/components/studyStatisticsRecap.module.css";
import StudyStatisticsCard from "@/components/StudyStatisticsCard";
import statsTotalLogo from "@/assets/icons/icon-stats-total.svg";
import statsMasteredLogo from "@/assets/icons/icon-stats-mastered.svg";
import statsProgressLogo from "@/assets/icons/icon-stats-in-progress.svg";
import statsNotStartedLogo from "@/assets/icons/icon-stats-not-started.svg";
import { useContext } from "react";
import { FlashcardContext } from "@/context/FlashCardContext";

function StudyStatisticsRecap() {
  const { totalCards, mastered, inProgress, notStarted } =
    useContext(FlashcardContext);

  return (
    <aside className={`${styles.aside}`}>
      <h2 className={`text-preset-2`}>Study Statistics</h2>
      <div className={`${styles.cardsContainer}`}>
        <StudyStatisticsCard
          title='Total Cards'
          number={totalCards}
          logo={statsTotalLogo}
          alt='stacked cards logo'
        />
        <StudyStatisticsCard
          title='Mastered'
          number={mastered}
          logo={statsMasteredLogo}
          alt='brain logo'
          variant='teal400'
        />
        <StudyStatisticsCard
          title='In Progress'
          number={inProgress}
          logo={statsProgressLogo}
          alt='open book logo'
          variant='pink500'
        />
        <StudyStatisticsCard
          title='Not Started'
          number={notStarted}
          logo={statsNotStartedLogo}
          alt='empty desk organizer logo'
          variant='pink400'
        />
      </div>
    </aside>
  );
}

export default StudyStatisticsRecap;
