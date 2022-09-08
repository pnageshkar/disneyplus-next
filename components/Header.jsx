import Image from 'next/image';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  StarIcon
} from '@heroicons/react/24/solid';

function Header() {
  return (
    <header className="sticky  bg-[#040714] top-0 h-[20] px-6 z-[1000] flex items-center justify-between  md:px-10">
      <Image
        src="/images/logo.svg"
        width={60}
        height={60}
        className="cursor-pointer"
      />
      <div className="hidden ml-4 md:flex items-center space-x-4">
        <a className="header-link group">
          <HomeIcon className="h-4" />
          <span className="span">Home</span>
        </a>
        <a className="header-link group">
          <MagnifyingGlassIcon className="h-4" />
          <span className="span">Search</span>
        </a>
        <a className="header-link group">
          <PlusIcon className="h-4" />
          <span className="span">Watchlist</span>
        </a>
        <a className="header-link group">
          <StarIcon className="h-4" />
          <span className="span">Originals</span>
        </a>
        <a className="header-link group">
          <img src="/images/movie-icon.svg" alt="" className="h-5" />
          <span className="span">Movies</span>
        </a>
        
      </div>
      <button
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
         
        >
          Login
        </button>
    </header>
  );
}

export default Header;
