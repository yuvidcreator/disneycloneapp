import Head from 'next/head';
import Image from 'next/image';

function Hero() {
    return (
        <section>
            <Head>
                <title>Login in | Disney+</title>
                <meta name="keywords" content="" />
                <meta name="description" content="This NextJS App is designed and developed by Yuvraj Limbole" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="relative min-h-[calc(100vh-72px)]">
                <Image src="/images/hero-background.jpg" layout="fill" objectFit="cover" alt="hero background image" />
            </div>
            <div className="flex justify-center items-center">
                <div className="absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auti p-8 -mt-16">
                    <Image src="/images/cta-logo-one.svg" width="600" height="150" objectFit="contain" alt="logo" />
                    <button className="bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-[#0485ee]">
                        Get all there
                    </button>

                    <p className="text-xs text-center">
                        {" "}
                        Get premier Access to Raya and the Latest Dragon for an additional fee with a Disney+ subsription. As of 04/20/22, the price of Disney+ and the Disney Bundle will increase by $.
                    </p>

                    <Image src="/images/cta-logo-two.png" width={600} height={70} objectFit="contain" alt="cta logo" />
                </div>
            </div>
        </section>
    )
}

export default Hero;