import { useState } from "react"


function App() {
  const [bgcolor, setbgcolor] = useState("black")

  return (
    <div className="w-full h-screen" style={{backgroundColor:bgcolor}}>
      <div className="flex gap-12 items-center justify-center pt-12 ">
        <button onClick={()=>setbgcolor("red")} className="bg-red-500 rounded-3xl px-6 py-2">Red</button>
        <button onClick={()=>setbgcolor("green")} className="bg-green-500 rounded-3xl px-6 py-2">Green</button>
        <button onClick={()=>setbgcolor("yellow")} className="bg-yellow-500 rounded-3xl px-6 py-2">Yellow</button>
        <button onClick={()=>setbgcolor("blue")} className="bg-blue-500 rounded-3xl px-6 py-2">Blue</button>
        <button onClick={()=>setbgcolor("white")} className="bg-white rounded-3xl px-6 py-2">White</button>
        <button onClick={()=>setbgcolor("orange")} className="bg-orange-500 rounded-3xl px-6 py-2">Orange</button>
        <button onClick={()=>setbgcolor("black")} className="bg-black rounded-3xl px-6 py-2 text-white">Black</button>
        <button onClick={()=>setbgcolor("bg-violet-500")} className="bg-violet-800 rounded-3xl px-6 py-2">Violet</button>
      </div>
    </div>
  )
}

export default App