import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import Script from "next/script";

export default function FirstPost(){
    return (
        <Layout>
            <Head>
                <title>First Post title</title>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={ () => 
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                ></Script>
                
            </Head>
            <h1>First Post</h1>
            <h2>Back To <Link href="/">Homepage</Link></h2>
        </Layout>

    );
}