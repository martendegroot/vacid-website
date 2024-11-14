import { MessageCircle, Phone } from "lucide-react";
import styles from "./WhatsappIcon.module.scss";

interface WhatsappIconProps {
  size: number;
}

export const WhatsappIcon = ({ size = 32 }: WhatsappIconProps) => (
  <div className={styles.container}>
    <MessageCircle size={size} strokeWidth={1.25} />
    <Phone
      className={styles.phone}
      size={size / 2 - 2}
      strokeWidth={0}
      fill="#666"
    />
  </div>
);
