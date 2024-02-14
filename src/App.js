import "./App.css";
import ModalButton from "./components/shared/ModalButton";
import Modal from "./components/shared/Modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ModalButton openModal={openModal} closeModal={closeModal} isOpen={isOpen} />
      </header>
      {isOpen && <Modal closeModal={closeModal} isOpen={isOpen} />}
    </div>
  );
}

export default App;
