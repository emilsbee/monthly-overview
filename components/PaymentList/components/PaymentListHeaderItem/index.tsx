export const PaymentListHeaderItem = ({
  text,
}: PaymentListHeaderItemProps) => {
  return (
    <div className="bg-slate-600 p-2 rounded-md">
      <p>{text}</p>
    </div>
  )
};

type PaymentListHeaderItemProps = {
  text: string;
};
