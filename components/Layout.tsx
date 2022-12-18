import React from 'react'
import Header from "../components/Header"

// type IProps = {
//  children: React.ReactNode;   
// }

interface IProps extends React.PropsWithChildren<{}> {
    // declare any additional props here
}

export const Layout: React.FC<IProps> = ({ children }) => {
    return (
        <div className='mx-6 md:max-w-2xl md:mx-auto font-poppins'>
            <header>
                <Header />
            </header>
            <main>{children}</main>
            <footer>footer</footer>
        </div>
    )
}