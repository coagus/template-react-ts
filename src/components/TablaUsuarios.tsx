import { useUsers } from "../hooks/useUsers";

export const TablaUsuarios = () => {
  const { users, deleteUser } = useUsers();

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Nombre
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Correo
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Rol
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Fecha de Creación
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                No hay usuarios registrados
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                  {user.nombre}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {user.correo}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      user.rol === "administrador"
                        ? "bg-red-100 text-red-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {user.rol === "administrador"
                      ? "Administrador"
                      : "Estándar"}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {new Date(user.fechaCreacion).toLocaleDateString("es-ES")}
                </td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="text-red-600 hover:text-red-800 font-semibold transition"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
