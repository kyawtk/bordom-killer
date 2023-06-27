import { useContext } from "react";
import "./App.css";
import { AppContext, AppContextProvider } from "./components/AppContext";
import InputForm from "./components/InputForm";
import Main from "./components/Main";
export default function App() {
  return (
    <div className="container mx-auto">
      <InputForm></InputForm>
      <Main></Main>
      <iframe
        src="https://giphy.com/embed/IycWjYN3EIbQY"
        
        
        className="giphy-embed mx-auto pointer-events-none md:fixed md:bottom-6 md:right-0 border-none outline-none"
        allowFullScreen
      ></iframe>
     
      <footer className="rounded-xl border-red-500 border-4 bg-white text-red-600 font-bold text-xl py-4 text-center "><a className='animate-bounce inline-block ' href="https://github.com/kyawtk">This guy built This.</a></footer>
    </div>
  );
}
