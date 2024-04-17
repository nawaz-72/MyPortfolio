import Layout from "../components/Layout";
import Transition from "../components/Transition";
import Head from 'next/head'
import "../styles/globals.css";

import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <Head>
			<link rel='icon' href='/favicon.ico' />
		</Head>
      <AnimatePresence mode="wait">
      <motion.div key={router.route} className="h-full" >
      <Transition/>
      <Component {...pageProps} />
      </motion.div>

      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;