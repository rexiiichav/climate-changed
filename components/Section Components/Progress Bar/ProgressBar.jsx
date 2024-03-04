import styles from "./ProgressBar.module.css";

export default function ProgressBar({ percentage, color }) {
  return (
    <div className={styles.border}>
      <div
        className={styles.bar}
        style={{ width: `${percentage}`, backgroundColor: `${color}` }}
      >
        <p>{percentage}</p>
      </div>
    </div>
  );
}
