import { useEffect, useState } from "react";
import List from "./components/List";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=9319cffee6964724afadb60e700eaa72"
    )
      .then((res) => res.json())
      .then((data) => setData(data.articles))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <div className="text-center" >
      <h1 className="text-4xl font-bold pt-10 pb-10 mb-10 text-white bg-black">NEWS APP</h1>
      <List data={data} />
    </div>
  );
}
