import { useState } from "react";
import Container from "../components/Container";
import { TablaUsuarios } from "../components/TablaUsuarios";
import { ModalAgregarUsuario } from "../components/ModalAgregarUsuario";

const Usuarios = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container title="Usuarios" path="home / usuarios">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Gestión de Usuarios
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition font-semibold"
          >
            + Agregar Usuario
          </button>
        </div>

        <TablaUsuarios />

        <ModalAgregarUsuario
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </Container>
  );
};

export default Usuarios;
