import { RoutesApp } from './routes/index'
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global'

export function App() {
    return (
        <>
            <BrowserRouter>
                <RoutesApp />

                <GlobalStyle />
            </BrowserRouter>
        </>
    );
}