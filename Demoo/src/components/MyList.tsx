import { useDataContext } from "../provider/DataProvider";

export const MyList = () => {
  const { phones } = useDataContext();
  console.log("phones ::", phones);
  return (
    <div>
      <ol>
        {phones.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};
