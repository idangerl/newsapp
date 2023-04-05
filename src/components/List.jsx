import React from "react";

function List({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-10 md:px-20 lg:px-30 xl:px-52">
      {data &&
        data.map((item) => (
          <div key={item.url} className="flex flex-col  shadow-xl">
            <div className="overflow-hidden">
              <img
                src={item.urlToImage}
                alt=""
                className="hover:scale-110 transition duration-500 ease-in-out"
              />
            </div>
            <p className="text-red-700 font-extrabold">{item.source.name}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-start">{item.title}</a>
          </div>
        ))}
    </div>
  );
}
export default List;
