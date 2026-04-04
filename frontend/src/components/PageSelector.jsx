import styles from "@/components/PageSelector.module.css";

function PageSelector({ setStudy, study }) {
  return (
    <div className={`${styles.modeSelector}`}>
      <div
        className={`${styles.mode} ${study ? styles.active : ""} text-preset-4-semibold`}
        onClick={() => setStudy(true)}
      >
        Study Mode
      </div>
      <div
        className={`${styles.mode} ${!study ? styles.active : ""} text-preset-4-semibold`}
        onClick={() => setStudy(false)}
      >
        All Cards
      </div>
    </div>
  );
}

export default PageSelector;