import { useState } from "react";

function App() {
  const [outputString, setOutputString] = useState<string>("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");



  return (
    <div className="w-[500px] mx-auto h-screen flex items-center justify-center">
      <div>
        <div className="">
          <div className="flex items-center flex-wrap gap-2">
            {letters.map((letter) => (
              <button
                key={letter}
                className="size-8 bg-gray-200 border rounded-lg"
                
              >
                {letter}
              </button>
            ))}
          </div>
          <button
            className="px-8 py-2 bg-gray-200 rounded-xl mt-4"
            onClick={() => setOutputString("")}
          >
            Clear
          </button>
        </div>
        <p className="mt-2 border py-2 px-4 rounded-xl">
          Output: {outputString}
        </p>
      </div>
    </div>
  );
}

export default App;
