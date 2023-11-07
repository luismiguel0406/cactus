import { Suppliers } from "../Pages/Suppliers";


export const routes = [
        //dashboard
        { path: `/home`, Component: <h1>Home</h1>},
     

        //Config
        {path:'/clientes', Component:<pre> Clientes </pre>},
        {path:'/cuentas-contables', Component:<pre>Cuentas contables</pre>},
        {path:'/empresa', Component:<pre>Empresa</pre>},
        {path:'/facturacion', Component:<pre>Facturacion</pre>},
        {path:'/proveedores', Component:<Suppliers/>},
        {path:'/usuarios', Component:<pre>Usuarios</pre>},
];
