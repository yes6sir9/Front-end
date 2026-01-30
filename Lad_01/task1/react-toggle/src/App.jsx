import { useState } from "react";
import "./App.css";

function App() {
  // Состояние: подсвечен абзац или нет
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setIsHighlighted(!isHighlighted)}>
        Переключить подсветку
      </button>

      <p className={isHighlighted ? "highlight" : ""}>
        Это абзац текста. Нажмите кнопку, чтобы включить или выключить подсветку.
      </p>
    </div>
  );
}

export default App;

