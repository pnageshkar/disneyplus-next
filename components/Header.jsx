import Image from 'next/image';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  StarIcon
} from '@heroicons/react/24/solid';
import { signIn, signOut, useSession } from "next-auth/react";
import {useRouter} from "next/router";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <header className="sticky  bg-[#131A28] top-0 h-[4.5rem] px-6 z-[1000] flex items-center justify-between  md:px-10">
      <Image
        src="/images/logo.svg"
        width={60}
        height={60}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      { session && (
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
      )}
      
      {!session ? (
        <button
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
          onClick={signIn}
        >
          Login
        </button>
      ) : (
        <img
          src={session.user.image}
          className="ml-auto h-10 w-10 rounded-full object-cover cursor-pointer"
          onClick={signOut}
        />
      )}
    </header>
  );
}

export default Header;
