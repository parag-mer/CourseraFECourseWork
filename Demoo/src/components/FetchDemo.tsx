export const FetchDemo = () => {
  const onChange = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://randomuser.me/api/0.8/?results=1", requestOptions as any)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    // const response = fetch(`https://http.cat/${code}`);
    // console.log(code, response);
  };    

  return (
    <div>
      <button onClick={onChange}>change</button>
    </div>
  );
};
