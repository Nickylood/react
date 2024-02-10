import { PaymentList } from "../PaymentList/PaymentList";
import payments from "../../payments.json";
// import { Button } from "../Button/Button";
import { PageTitle } from "../PageTitle/PageTitle";

// const isPrimary = true;
// const isSale = true;

export const App = () => {
  return (
    <>
      <PageTitle>Paymenut</PageTitle>
      <PaymentList payments={payments} />
      {/* <PaymentList payments={payments} /> */}
    </>
  );
};
