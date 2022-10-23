import { parse } from 'csv-parse/browser/esm';

export const parseCsv = () => {
  const records: any[] = [];

  const parser = parse({
    delimiter: ','
  });

  parser.on('readable', function(){
    let record;
    while ((record = parser.read()) !== null) {
      records.push(record);
    }
  });

  parser.on('error', function(err){
    console.error(err.message);
  });

  parser.on('end', function(){
    console.log(records);
  });

  parser.write('');
};
