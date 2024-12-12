import React from 'react';
import { Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import './App.css';



function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={reactLogo} alt="React Logo" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
            <span className="ml-3 text-xl">テールブロック</span>
          </div>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/about" className="mr-5 hover:text-gray-900">
            最初のリンク
          </Link>
          <Link to="/about" className="mr-5 hover:text-gray-900">
            2番目のリンク
          </Link>
          <Link to="/contact" className="mr-5 hover:text-gray-900">
            3番目のリンク
          </Link>
          <Link to="/headerlist" className="mr-5 hover:text-gray-900">
          ヘッダーリスト</Link>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          ボタン
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;