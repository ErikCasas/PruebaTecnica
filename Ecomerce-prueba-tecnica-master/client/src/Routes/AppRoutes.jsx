import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";
// import AdminSettings from "../page/AdminSettings/AdminSettings";
import Detail from "../page/Detail/Detail";
// import EditInfo from "../page/EditInfo/EditInfo";
import EditProduct from "../page/EditProduct/EditProduct";
import LogIn from "../page/LogIn/LogIn";
import Home from "../page/Home/Home";
import Landing from "../page/Landing/Landing";
import Profile from "../page/Profile/Profile";
import UploadProduct from "../page/Upload/UploadProduct";
import Register from "../page/Regist/Register";
import Pruebas from "../components/Pruebas/Pruebas";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import AdminteRoute from "./AdminRoute";
import FormEditProduct from "../page/FormEditProduct/FormEditProduct";
import EditUser from "../page/EditUser/EditUser";
import FormEditUser from "../page/FormEditUser/FormEditUser";
import NotPage from "../components/NotPage/NotPage";
import CreateUSer from "../page/CreateUser/CreateUser";

/**
 * es un componente en el cual defino el BrowserRouter, para manejar
 * las distintas rutas, en donde trabajo con un Layout, con el que renderizo
 * siempre los componentes de footer y navbar desde cada ruta, junto con la definición
 * de distintos tipos de rutas
 * @returns las rutas predefinidas y las no definidas
 */
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path={"/pruebas"} component={Pruebas} />
          <Route exact path={"/"} component={Landing} />
          <Route exact path={"/home"} component={Home} />
          <Route exact path={"/detail/:id"} component={Detail} />
          <PublicRoute exact path={"/register"} component={Register} />
          <PublicRoute exact path={"/login"} component={LogIn} />
          <PrivateRoute exact path={"/editUser/:id"} component={FormEditUser} />
          <PrivateRoute exact path={"/profile"} component={Profile} />
          <AdminteRoute exact path={"/admin/editProduct"} component={EditProduct}/>
          <AdminteRoute exact path={"/admin/editProduct/:id"} component={FormEditProduct}/>
          <AdminteRoute exact path={"/admin/editUser"} component={EditUser} />
          <AdminteRoute exact path={"/admin/newProduct"} component={UploadProduct}/>
          <AdminteRoute exact path={"/admin/newUser"} component={CreateUSer}/>
          <Route path="*" component={NotPage}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
