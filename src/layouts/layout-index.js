import React, { useState } from "react";
import HeaderComponent from "@/components/Header";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

const RootLayoutIndex = ({ children }) => {
    const router = useRouter();
    const [scrollY, setScrollY] = useState(0);
    const [showMenu, setShowMenu] = useState(false);

    const onscroll = (e) => {
        // console.log(e.target.scrollTop);
        setScrollY(e.target.scrollTop);
    }

    return (
        <>
            <Head>
                <title>BLP | Blinding Lights Project</title>
                <meta name="description" content="Blinding Lights Project" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Blinding Lights Project" />
                <meta property="og:type" content="website" />
                <meta property="og:image:url" content="https://main.dqdps8txgzkps.amplifyapp.com/_next/image?url=%2Fimages%2Fchristmas_blp.jpg&w=3840&q=75" />
                <meta property="og:description" content="Blinding Lights Project" />
                <meta property="og:image" content="https://main.dqdps8txgzkps.amplifyapp.com/_next/image?url=%2Fimages%2Fchristmas_blp.jpg&w=3840&q=75" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="300" />
                <link rel="icon" href="/images/logo-blp-circle.png" />
            </Head>
            <div>
                {children}
            </div>
        </>
    )

}

export default RootLayoutIndex;