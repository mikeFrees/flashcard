import styles from "@/components/FlashcardEditable.module.css";
import threeDots from "@/assets/icons/icon-menu.svg";
import masteredIcon from "@/assets/icons/icon-mastered.svg";

function FlashcardEditable({ card }) {
    let progressPercentage = (card.knownCount / 5) * 100;

  return (
    <div className={styles.card}>
      <h2 className={`${styles.title} text-preset-3`}>{card.question}</h2>
      <p className={`${styles.content} text-preset-5`}>
        <span>Answer: </span>
        {card.answer}
      </p>
      <div className={`${styles.details} text-preset-5`}>
        <div className={`${styles.category} text-preset-6`}>
          {card.category}
        </div>
        <div className={`${styles.bar}`}>
          {card.knownCount === 5 ? (
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
              <p className={`text-preset-6`}>{card.knownCount}/5</p>
            </div>
          )}
        </div>
        <img
          src={threeDots}
          alt='menu icon'
        />
      </div>
    </div>
  );
}

export default FlashcardEditable;
