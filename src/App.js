import Navbar from "./components/Navbar";
import "../src/dist/styles.css";
import Footer from "./components/Footer";
import DartPage from "./components/DartPage";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <DartPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
