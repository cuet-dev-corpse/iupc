import Banner from "@/components/Banner";
import Partner from "@/components/Partner";
import Schedule from "@/components/Schedule";
import Sponsor from "@/components/Spnsor";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* <meta property="og:title" content="Your Website Title" />
        <meta property="og:description" content="Description of your website" /> */}
        <meta property="og:image" content='./public/slides/slide1.png' />
      </Head>
      <Banner />
      <Schedule />
      <Sponsor />
      <Partner />
    </>
  )
}
