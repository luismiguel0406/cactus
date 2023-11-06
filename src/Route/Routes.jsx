import Ecommerce from '../Components/Dashboard/Ecommerce';

export const routes = [
        //dashboard
        { path: `/home`, Component: <h1>Home</h1>},
        { path: `${process.env.PUBLIC_URL}/ecommerce`, Component: <Ecommerce /> },

        //Config
        {path:'/clientes', Component:<pre> Clientes </pre>},
        {path:'/cuentas-contables', Component:<pre>Cuentas contables</pre>},
        {path:'/empresa', Component:<pre>Empresa</pre>},
        {path:'/facturacion', Component:<pre>Facturacion</pre>},
        {path:'/proveedores', Component:<pre>Proveedores</pre>},
        {path:'/usuarios', Component:<pre>Usuarios</pre>},
];
