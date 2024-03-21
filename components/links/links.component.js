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
        to="https://api.whatsapp.com/send?phone=5565996023672&text=Oi%20Karina,%20tenho%20interesse%20no%20seu%20trabalho%20de%20Dan%C3%A7a%20do%20Ventre."
      >
        WhatsApp 📲
      </LinkButton>
    </div>
  );
}
