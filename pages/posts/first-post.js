import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost(){
    return (
        <Layout>
            <Head>
                <title>First Post title</title>
            </Head>
            <h1>First Post</h1>
            <h2>Back To <Link href="/">Homepage</Link></h2>
        </Layout>
    );
}