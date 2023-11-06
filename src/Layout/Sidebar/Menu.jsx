import { Headphones, Home, UserPlus, User, Target, Disc, BookOpen, DollarSign } from 'react-feather';

export const MENUITEMS_example = [
    {
        menutitle: 'General',
        menucontent: 'Dashboards,Widgets',
        Items: [
            {
                title: 'Dashboard', icon: Home, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Sample', type: 'link' },
                ]
            }
        ]
    },
    {
        menutitle: "Support",
        Items: [
            {
                title: 'Raise Support', icon: Headphones, type: 'sub', active: false, children: [
                    { title: 'Raise Ticket', type: 'exteral_link', path: 'http://support.pixelstrap.com/help-center' },
                ]
            }
        ]
    },
];
export const MENUITEMS = [
    {
        menutitle:'Configuración',
        Items:[
            {
                title:'Clientes',
                icon:  UserPlus,
                type: 'link',
                active: false,
                path:`clientes`
            },
            {
                title:'Cuentas Contables',
                icon:BookOpen,
                type: 'sub',
                active: false,             
                children:[{
                   title:'Grupo cuentas',
                   icon:UserPlus,
                   type:'link',
                   path:`cuentas-contables`
                }]
            },
            {
                title:'Empresa',
                icon:Target,
                type: 'link',
                active: false,
                path:`empresa`
            },
            {
                title:'Facturación',
                icon:DollarSign,
                type: 'link',
                active: false,
                path:`facturacion`
            },
            {
                title:'Proveedores',
                icon:Disc,
                type: 'link',
                active: false,
                path:`proveedores`
            },
            {
                title:'Usuarios',
                icon: User,
                type: 'link',
                active: false,
                path:`usuarios`
            }
        ]

    }
]