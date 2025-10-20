import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header/>
                <LatestNews/>
                <Navbar/>
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