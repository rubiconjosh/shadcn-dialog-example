import Head from "next/head";

import AboutDialog from "@/components/AboutDialog";
import RulesDialog from "@/components/RulesDialog";

export default function Home() {
  return (
    <>
      <Head>
        <title>shadcn dialog example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <AboutDialog />
          <RulesDialog />
        </div>
      </main>
    </>
  );
}
