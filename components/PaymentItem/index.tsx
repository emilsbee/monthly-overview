import * as i from 'types';

export const PaymentItem = ({
  payment, index, onClick,
}: PaymentItemProps) => {
  // Determines whether it's income or expenditure
  const pos = parseInt(payment.Amount) >= 0;
  const active = payment.active;

  return (
    <div
      className={`flex gap-x-4 items-center p-4 border-b-[1px] border-slate-700 ${active ? 'opacity-100' : 'opacity-60'}`}
      onClick={() => onClick(index)}
    >
      <p className={`font-bold w-28 ${pos ? 'text-[#00b300]' : 'text-[#cd0000]'}`}>
        {payment.Amount}
      </p>
      <p className="w-[300px]">
        {payment.Name}
      </p>
      <p className="w-[100px]">
        {payment.Date}
      </p>
      {payment.Description}
    </div>
  );
};

type PaymentItemProps = {
  payment: i.Payment;
  onClick: (index: number) => void;
  index: number;
};
