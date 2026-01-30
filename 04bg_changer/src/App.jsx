import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200 border"
        style={{ backgroundColor: color }}
      >
        <div className="flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white rounded-full px-3 py-2">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
             onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
             onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
             onClick={() => setColor("brown")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "brown" }}
            >
              Brown
            </button>
            <button
             onClick={() => setColor("hotpink")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "hotpink" }}
            >
              Hot Pink
            </button>{" "}
            <button
             onClick={() => setColor("teal")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "teal" }}
            >
              Teal
            </button>{" "}
            <button
             onClick={() => setColor("violet")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>{" "}
            <button
             onClick={() => setColor("lime")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "lime" }}
            >
              Lime
            </button>{" "}
            <button
             onClick={() => setColor("fuchsia")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "fuchsia" }}
            >
              Fuchsia
            </button>{" "}
            <button
             onClick={() => setColor("indigo")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "indigo" }}
            >
              Indigo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
