import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Brands from '../components/Brands';
import MoviesCollection from '../components/MoviesCollection';
import ShowsCollection from '../components/ShowsCollection';
// import { useRouter } from 'next/router';

export default function Home({
  popularMovies,
  popularShows,
  top_ratedMovies,
  top_ratedShows,
}) {
    const { data: session } = useSession();
    // const router = useRouter();
  
  return (
    <>
      <Head>
        <title>Disney+</title>
        <meta name="keywords" content="NextJS Tailwind CSS Web Application, NextJS App by Yuvraj Limbole" />
        <meta name="description" content="This NextJS App is designed and developed by Yuvraj Limbole" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {!session ? <Hero /> : (
        <main className='relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]'>
          <Slider />
          <Brands />
          <MoviesCollection results={popularMovies} title="Popular Movies" />
          <ShowsCollection results={popularShows} title="Popular Shows" />

          <MoviesCollection results={top_ratedMovies} title="Top Rated Movies" />
          <ShowsCollection results={top_ratedShows} title="Top Rated Shows" />
        </main>
      )}
    </>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context);

  const [popularMoviesRes, popularShowsRes, top_ratedMoviesRes, top_ratedShowsRes] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MV_API_KEY}&language=en-US&page=1`),
    fetch(`
    https://api.themoviedb.org/3/tv/popular?api_key=${process.env.MV_API_KEY}&language=en-US&page=1`),
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MV_API_KEY}&language=en-US&page=1`),
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.MV_API_KEY}&language=en-US&page=1`),
  ]);

  const [ popularMovies, popularShows, top_ratedMovies, top_ratedShows ] = await Promise.all([
    popularMoviesRes.json(),
    popularShowsRes.json(),
    top_ratedMoviesRes.json(),
    top_ratedShowsRes.json(),
  ]);

  return {
    props: {
      session,
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      top_ratedMovies: top_ratedMovies.results,
      top_ratedShows: top_ratedShows.results
    },
  };
}