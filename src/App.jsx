import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <section className="intro-section">
      <Header title={"My website"} />
      <Content />
      <Footer year={"2024"} />
    </section>
  );
}

export default App;
