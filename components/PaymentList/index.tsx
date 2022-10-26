import * as i from 'types';
import accounting from 'accounting';

import { PaymentItem } from 'components';

import { PaymentListHeaderItem } from './components';

const calculateTotalLoss = (payments: i.Payment[]) => {
  let loss = 0;

  for (const payment of payments) {
    const amount = accounting.unformat(payment.Amount, ',');
    if (amount < 0 && payment.active) {
      loss += amount;
    }
  }
  
  return loss.toFixed(2);
};

const calculateNetLoss = (payments: i.Payment[]) => {
  let loss = 0;

  for (const payment of payments) {
    const amount = accounting.unformat(payment.Amount, ',');
    if (amount && payment.active) {
      loss += amount;
    }
  }
  
  return loss.toFixed(2);
}

export const PaymentList = ({
  payments, onClick,
}: PaymentListProps) => {
  return (
    <div className="p-6 rounded-lg mt-6 bg-slate-800">
      <div className="flex items-center gap-x-4 mb-4">
        <PaymentListHeaderItem text={`Total spent: € ${calculateTotalLoss(payments)}`} />
        <PaymentListHeaderItem text={`Net spent: € ${calculateNetLoss(payments)}`} />
      </div>
      <div className="flex flex-col">
        {payments.map((payment, index) => (
          <PaymentItem
            key={index}
            { ...{ index, payment, onClick }}
          />
        ))}
      </div>
    </div>
  )
};

type PaymentListProps = {
  payments: i.Payment[];
  onClick: (payment: number) => void;
};
