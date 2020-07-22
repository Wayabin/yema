import React from "react";
import Head from "next/head";
import Header from "./Header";

export default ({ children }) => {
  return (
    <>
      <Head>
        <title>Proyecto demo Yema Front End</title>
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        />
      </Head>

      <div className=" min-h-screen p-5">
        <div className="container mx-auto">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};
