// Rotas
import { Routes, Route } from 'react-router-dom'

// Pages
import { Home } from '../pages/Home/index.jsx'


export function RoutesApp() {

    return (
        <Routes>

            <Route path="/" element={<Home />} />

        </Routes>
    )
}