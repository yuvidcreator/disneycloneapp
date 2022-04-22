import Image from "next/image";
import { FilmIcon, HomeIcon, PlusIcon, SearchIcon, StarIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";


function Header() {
    const { data: session} = useSession();
    const router = useRouter();

    return (
        <header className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 h-[72px] md:px-12 ">
            <Image 
                src="/images/logo.svg" 
                alt="" 
                width={80} 
                height={80} 
                className="cursor-pointer" 
                onClick={() => router.push("/")}
            />

            { session && (
                <div className="hidden ml-10 md:flex items-center space-x-6">
                    <a className="header-link group">
                        <HomeIcon className="h-4" />
                        <span className="span">Home</span>
                    </a>

                    <a className="header-link group">
                        <SearchIcon className="h-4" />
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
                        {/* <FilmIcon className="h-4" /> */}
                        <Image src="/images/movie-icon.svg" alt="" className="h-5" width={20} height={20} />
                        <span className="span">Movies</span>
                    </a>

                    <a className="header-link group">
                        {/* <HomeIcon className="h-4" /> */}
                        <Image src="/images/series-icon.svg" alt="" className="h-5" width={20} height={20} />
                        <span className="span">Series</span>
                    </a>
                </div>
            )}
            {!session ? (
                <button className="ml-auto uppercase border px-4 py-1 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200" onClick={signIn}>
                    Login
                </button>
            ) : (
                <Image src={session.user.image} alt="" className="ml-auto h-12 w-12 rounded-full object-cover cursor-pointer" height={36} width={36} onClick={signOut} />
            )}
            
        </header>

    )
}

export default Header;