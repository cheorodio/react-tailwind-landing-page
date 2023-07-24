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
    </main>
  );
}

export default Home;
