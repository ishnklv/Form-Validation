import React from 'react'
import {Navbar} from "./components/Navbar";
import {Home} from "./pages/Home";


interface AppProps {

}

export const App: React.FC<AppProps> = () => {
    return (
        <div className="app">
            <Navbar />
            <Home />
        </div>
    )
}