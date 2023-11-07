import {
  UserPlus,
  User,
  Target,
  Disc,
  BookOpen,
  DollarSign,
} from "react-feather";

export const MENUITEMS = [
  {
    menutitle: "Transacciones",
    Items: [
      {
        title: "Facturas por pagar",
        icon: DollarSign,
        type: "link",
        active: false,
        path: "facturas-por-pagar",
      },
    ],
  },

  {
    menutitle: "Configuración",
    Items: [
      {
        title: "Clientes",
        icon: UserPlus,
        type: "link",
        active: false,
        path: `clientes`,
      },
      {
        title: "Cuentas Contables",
        icon: BookOpen,
        type: "sub",
        active: false,
        children: [
          {
            title: "Grupo cuentas",
            icon: UserPlus,
            type: "exteral_link",
            path: `cuentas-contables`,
            active: true,
          },
        ],
      },
      {
        title: "Empresa",
        icon: Target,
        type: "link",
        active: false,
        path: `empresa`,
      },
      {
        title: "Facturación",
        icon: DollarSign,
        type: "link",
        active: false,
        path: `facturacion`,
      },
      {
        title: "Proveedores",
        icon: Disc,
        type: "link",
        active: false,
        path: `proveedores`,
      },
      {
        title: "Usuarios",
        icon: User,
        type: "link",
        active: false,
        path: `usuarios`,
      },
    ],
  },
];
