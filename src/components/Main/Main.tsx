import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Case, Home, Services, Team } from '../../pages'

const Main = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Home />}
            />
            <Route
                path='about'
                element={<About/>}
            />
            <Route
                path='services'
                element={<Services/>}
            />
            <Route
                path='team'
                element={<Team/>}
            />
            <Route 
                path='case-study'
                element={<Case/>}
            />
        </Routes>
    )
}

export default Main