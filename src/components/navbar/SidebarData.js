import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: 'Painel de Controle',
        path: '/',
        icon: <AiIcons.AiOutlineAppstore />,
        cName: 'nav-text'
    },
    {
        title: 'Reservas',
        path: '/reservas',
        icon: <RiIcons.RiParkingBoxLine />,
        cName: 'nav-text'
    },
    {
        title: 'Cadastro de Usuários',
        path: '/cadastro-usuario',
        icon: <AiIcons.AiOutlineUserAdd />,
        cName: 'nav-text'
    },
    {
        title: 'Cadastro de Período',
        path: '/cadastro-periodo',
        icon: <AiIcons.AiOutlineClockCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Valor Hora',
        path: '/valor-hora',
        icon: <RiIcons.RiMoneyDollarCircleLine />,
        cName: 'nav-text'
    }
]