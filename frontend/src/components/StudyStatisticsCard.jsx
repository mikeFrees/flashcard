import styles from "@/components/StudyStatisticsCard.module.css";

function StudyStatisticsCard({ title, number, logo, alt, variant }) {
  return (
    <>
      <div className={`${styles.asideCard}`}>
        <div className={`${styles.asideCardStat}`}>
          <h2 className={`text-preset-4-medium`}>{title}</h2>
          <p className={`text-preset-1`}>{number}</p>
        </div>
        <div className={`${styles.asideCardLogo} ${styles[variant]}`}>
          <img
            src={logo}
            alt={alt}
          />
        </div>
      </div>
    </>
  );
}

export default StudyStatisticsCard;
