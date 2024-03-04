import styles from "./Section.module.css";

export default function Section({ children, color, textColor }) {
  return (
    <div
      className={styles.internals}
      style={{
        backgroundColor: `${color}`,
        color: `${textColor}`,
      }}
    >
      {children}
    </div>
  );
}
