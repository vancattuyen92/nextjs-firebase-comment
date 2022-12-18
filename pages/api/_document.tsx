import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
    return(
        <Html lang="en">
            <Head>
                <meta name="description" content="Generared bt create next app"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document