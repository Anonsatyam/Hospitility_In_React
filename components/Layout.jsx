import Head from 'next/head';
import {Box} from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
import Search from '../pages/search';

const Layout = ({children}) => (
    <>
        <Head>
            <title>Real State</title>
        </Head>
        <Box maxWidth="1280px" m="auto">
            <header><Navbar /></header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </>
)

export default Layout;