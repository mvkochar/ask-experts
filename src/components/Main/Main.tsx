import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Case, Home, Services, Team, Blog, Contact, Licenses, ServiceSingle, TeamSingle } from '../../pages'



const Main = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Home />}
            />
            <Route
                path='about'
                element={<About />}
            />
            <Route
                path='services'
                element={<Services />}
            />
            <Route
                path='team'
                element={<Team />}
            />
            <Route
                path='case-study'
                element={<Case />}
            />
            <Route
                path='blog'
                element={<Blog />}
            />
            <Route
                path='contact'
                element={<Contact />}
            />
            <Route
                path='licenses'
                element={<Licenses/>}
            />
            <Route
                path='service-single'
                element={<ServiceSingle/>}
            />
            <Route
                path='team-single/:id'
                element={<TeamSingle/>}
            />
        </Routes>
    )
}

export default Main