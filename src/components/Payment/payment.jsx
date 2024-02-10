import css from "./Payment.module.css";
import clsx from "clsx";

import { DiApple } from "react-icons/di";

export const Payment = ({
  data: { amount, description, cardNumber, cardType, cardOwner, date, isPaid },
}) => {
  const containerClass = clsx(
    css.container,
    isPaid ? css.isPaid : css.isPeding
  );
  return (
    <div className={containerClass}>
      <div>
        <DiApple className={css.icon} />
      </div>
      <p>
        Status: {isPaid ? "Paid" : "Peding"} {amount}$
      </p>
      <p>Description: {description}</p>
      <p>Card Number: {cardNumber}</p>
      <p>Card Type: {cardType}</p>
      <p>Card Holder Name: {cardOwner}</p>
      <p>Payment Date: {date}</p>
      <hr />
    </div>
  );
};
