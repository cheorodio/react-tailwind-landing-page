import React from 'react';

function Home() {
  return (
    <main>
      <section className="relative">
        <img src="/images/image-header.jpg" alt="hero" />
        <h1 className="absolute top-52 text-center w-full text-white font-fraunces uppercase text-6xl tracking-widest">
          We are creatives
        </h1>
        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="/images/icon-arrow-down.svg"
          alt="arrow down"
        />
      </section>
      <section className="flex">
        <div className="flex flex-col justify-center pl-40 pr-24 gap-9">
          <h2 className="font-fraunces text-[40px] tracking-wide leading-tight">
            Transform your brand
          </h2>
          <p className="font-barlow text-[18px] text-grayBlue">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a className="uppercase font-fraunces relative before:absolute before:top-3/4 before:left-0 before:h-2 before:w-32 before:-z-10 before:rounded-3xl w-32 text-center before:bg-lightYellow">
            Learn more
          </a>
        </div>
        <img src="/images/image-transform.jpg" alt="egg" />
      </section>
    </main>
  );
}

export default Home;
