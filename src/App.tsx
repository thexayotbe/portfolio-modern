import { useEffect, useState } from "react";
import Loading from "./components/ui/Loading";
import Main from "./pages/Main";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);
  return isLoading ? <Loading /> : <Main />;
}

export default App;
