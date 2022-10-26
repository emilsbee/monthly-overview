import * as i from 'types';
import type { NextPage } from 'next'
import Papa from 'papaparse';
import * as React from 'react';
import { PaymentList } from 'components';

const Home: NextPage = () => {
  const [payments, setPayments] = React.useState<i.Payment[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      
      reader.addEventListener('load', (event) => {
        if (event.target?.result) {
          let data = Papa.parse<i.Payment>(event.target.result.toString(), { header: true });
          setPayments(data.data.map((payment) => ({ ...payment, active: true })));
        }
        
      });
  
      reader.readAsText(e.target.files[0]);
    }
  };

  const handlePaymentClick = (index: number) => {
    const paymentsCopy = [...payments];
    const prevActive = paymentsCopy[index].active;
    paymentsCopy[index].active = !prevActive;
    setPayments(paymentsCopy);
  };
  
  return (
    <div className="w-full flex flex-col p-6">
      <input type="file" onChange={handleFileUpload} />
      <PaymentList payments={payments} onClick={handlePaymentClick} />
    </div>
  )
}

export default Home
