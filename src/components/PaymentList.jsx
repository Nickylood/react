import { Payment } from "./payment";



export const PaymentList = ({payments}) => {
  return (
    <ul>
      {payments.map((payment) => (
        <li key={payment.id}>
          <Payment data={payment} />
        </li>
      ))}
    </ul>
  );
};
