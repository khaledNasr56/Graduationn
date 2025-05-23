import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {

    return <React.Fragment>

        <Header />

        <Outlet />

        <Footer />

    </React.Fragment>

}
