
import { 
            Meta,
            Links,
            Outlet,
            Scripts,
            LiveReload,
            } from "@remix-run/react";

import style from './styles/index.css'
import Header from "./components/header";
import Footer from "./components/footer";


    export function meta() {
                    return [
                        {
                        charset: 'UTF-8',
                        title: 'GuitarLa - Remix',
                        viewport: 'width=device-width, initial-scale=1'
                        }
                    ];
                    }


                    
            export function links(){
                return[
                    {
                     rel: 'stylesheet',
                        href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'   
                    },
                    {
                        rel: 'stylesheet',
                        href: style
                    },
                    {
                        rel:'preconnect',
                        href:'https://fonts.googleapis.com'
                    },
                    {
                        rel:'preconnect',
                        href:'https://fonts.gstatic.com',
                        crossOrigin:"true"
                    },
                    {
                        rel:'stylesheet',
                        href:'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,900&family=Outfit:wght@400;700;900&display=swap'
                    }
                ]

            }


                export default function App() {
                        return (
                            <Document>
                                <Outlet />
                            </Document>
                        );
                    }

                function Document({children})
                {
                    return(

                      <html lang="en">
                      <head>
                            <Meta/>
                            <Links/>
                      </head>
                            <body>
                                <Header/>
                                {children}
                                <Footer/>
                                <Scripts/>
                                <LiveReload/>
                            </body>
                 </html>
                    )
                }

