import styles from "./Section.module.css";

export default function Section({
  children,
  color,
  textColor,
  height = "none",
}) {
  return (
    <div
      className={styles.internals}
      style={{
        backgroundColor: `${color}`,
        color: `${textColor}`,
        height: height,
      }}
    >
      {children}
    </div>
  );
}
