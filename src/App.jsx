import { useEffect, useState } from "react";
import List from "./components/List";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const apiKey = "f3e65fef0959da32d378302185426d2a";
    fetch(`https://gnews.io/api/v4/search?q=example&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setData(data.articles))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold pt-10 pb-10 mb-10 text-white bg-black">
        NEWS APP
      </h1>
      <List data={data} />
    </div>
  );
}
