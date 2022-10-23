import * as i from 'types';
import * as React from 'react';

const calculateTotalLoss = (payments: i.Payment[]) => {
  let loss = 0;

  for (const payment of payments) {
    const amount = parseInt(payment.Amount);
    if (amount < 0 && payment.active) {
      loss += amount;
    }
  }
  
  return loss;
};

const calculateNetLoss = (payments: i.Payment[]) => {
  let loss = 0;

  for (const payment of payments) {
    const amount = parseInt(payment.Amount);
    if (amount && payment.active) {
      loss += amount;
    }
  }
  
  return loss;
}

export const PaymentList = ({
  payments, handlePaymentClick,
}: PaymentListProps) => {  

  return (
    <div>
      <p>Total loss: {calculateTotalLoss(payments)}</p>
      <p>Net loss: {calculateNetLoss(payments)}</p>
      {payments.map((payment, index) => {        
        if (!payment.active) return null; 

        return (
          <div key={index} onClick={() => handlePaymentClick(index)}>
            {payment.Description} {payment.Amount}
          </div>
        );
      })}
    </div>
  )
};

type PaymentListProps = {
  payments: i.Payment[];
  handlePaymentClick: (payment: number) => void;
};
