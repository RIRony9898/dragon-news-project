import React from 'react';
import Header from '../components/Header';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <div className="nav-left"></div>
                <div className="main"></div>
                <div className="nav-right"></div>
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;