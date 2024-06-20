import { useState } from "react";

const Todo = (props: { id: string; createdAt: string }) => {
  return (
    <tr>
      <td>
        <label>{props.id}</label>
      </td>
      <td>
        <input />
      </td>
      <td>
        <label>{props.createdAt}</label>
      </td>
    </tr>
  );
};

export const TodoSwap = () => {
  const [data, setData] = useState([
    { id: "todo1", createdAt: "11:00" },
    { id: "todo2", createdAt: "12:00" },
  ]);

  const onSwap = () => {
    setData([...data].reverse());
  };

  return (
    <div>
      <button onClick={onSwap}>Swap</button>
      <table>
        {data.map((d, index) => (
          <Todo id={d.id} createdAt={d.createdAt} key={d.id} />
        ))}
      </table>
    </div>
  );
};
