import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const title = "My Website";
  const year = "2024";

  return (
    <section className="intro-section">
      <Header title={title} />
      <Content />
      <Footer year={year} />
    </section>
  );
}

export default App;
