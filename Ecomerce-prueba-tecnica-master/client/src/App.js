import React from "react";
import AuthProvider from "./auth/AuthProvider";
import AppRoutes from "./Routes/AppRoutes";

/**este viene siendo el segundo lugar mas alto de la pagina 
 * aquí porveo de un estado global a toda la pagina, que esta en AppRoutes
 */

function App() {
  return (
    <div>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
