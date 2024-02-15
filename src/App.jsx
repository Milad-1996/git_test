import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Courses from './component/Courses'
import Header from './component/Header'

export default function App() {
    return (
        <>
        <Header />
        <Routes>
            <Route path='/courses' element={<Courses />} />
            <Route path='/courses/:courseID' element={<MainCourse />} />
        </Routes>
        </>
    )
}