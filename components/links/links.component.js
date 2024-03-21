import LinkButton from "components/link-button";

import styles from "./links.module.css";

export default function Links({ className, children, ...restProps }) {
  return (
    <div {...restProps}>
      <LinkButton
        className={styles.link}
        to="https://instagram.com/martaninclass"
      >
        Seja Aluna Martan InClass 💃
      </LinkButton>
      <LinkButton
        className={styles.link}
        to="https://www.youtube.com/@karinamartan"
      >
        YouTube 🎥
      </LinkButton>
      <LinkButton
        className={styles.link}
        to="https://bit.ly/karina-martan-fale-comigo"
      >
        WhatsApp 📲
      </LinkButton>
    </div>
  );
}
