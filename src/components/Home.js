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
          <a className="uppercase font-fraunces relative before:absolute before:top-3/4 before:left-0 before:h-2 before:w-32 before:-z-10 before:rounded-3xl w-32 text-center before:bg-lightYellow cursor-pointer">
            Learn more
          </a>
        </div>
        <img src="/images/image-transform.jpg" alt="egg" />
      </section>
      <section className="flex">
        <img src="/images/image-stand-out.jpg" alt="cup" />
        <div className="flex flex-col justify-center pl-28 pr-40 gap-9">
          <h2 className="font-fraunces text-[40px] tracking-wide leading-tight">
            Stand out to the right audience
          </h2>
          <p className="font-barlow text-[18px] text-grayBlue">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <a className="uppercase font-fraunces relative before:absolute before:top-3/4 before:left-0 before:h-2 before:w-32 before:-z-10 before:rounded-3xl w-32 text-center before:bg-lightRed cursor-pointer">
            Learn more
          </a>
        </div>
      </section>
      <section className="flex">
        <div className="relative">
          <img src="/images/image-graphic-design.jpg" alt="cherry" />
          <h3 className="absolute bottom-40 left-64 font-fraunces text-3xl text-cyan">
            Graphic Design
          </h3>
          <p className="absolute bottom-16 px-44 text-center text-cyan font-barlow">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </div>
        <div className="relative">
          <img src="/images/image-photography.jpg" alt="orange" />
          <h3 className="absolute bottom-40 left-64 font-fraunces text-3xl text-blue">
            Photography
          </h3>
          <p className="absolute bottom-16 px-44 text-center text-blue font-barlow">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </section>
      <section className="flex items-center justify-center flex-col gap-20 h-screen">
        <h2 className="font-fraunces text-xl uppercase tracking-widest text-darkGrayBlue">
          Client Testimonials
        </h2>
        <div className="flex items-center justify-center gap-7 px-44">
          <div className="flex flex-col items-center text-center gap-14">
            <img
              src="images/image-emily.jpg"
              alt="profile"
              className="rounded-full h-20 w-20"
            />
            <p className="text-lg leading-7">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <div>
              <p className="font-fraunces text-lg">Emily R.</p>
              <p className="font-barlow text-darkGrayBlue text-sm">
                Marketing Director
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-14">
            <img
              src="images/image-thomas.jpg"
              alt="profile"
              className="rounded-full h-20 w-20"
            />
            <p className="text-lg leading-7">
              Sunnyside's enthusiasm coupled with their keen interest in our
              brand's success made it a satisfying and enjoyable experience.
            </p>
            <div>
              <p className="font-fraunces text-lg">Thomas S.</p>
              <p className="font-barlow text-darkGrayBlue text-sm">
                Chief Operating Officer
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-14">
            <img
              src="images/image-jennie.jpg"
              alt="profile"
              className="rounded-full h-20 w-20"
            />
            <p className="text-lg leading-7">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <div>
              <p className="font-fraunces text-lg">Jennie F.</p>
              <p className="font-barlow text-darkGrayBlue text-sm">
                Business Owner
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-screen">
        <img
          src="/images/image-gallery-milkbottles.jpg"
          alt="milk bottles"
          className="w-[360px]"
        />
        <img
          src="/images/image-gallery-orange.jpg"
          alt="orange"
          className="w-[360px]"
        />
        <img
          src="/images/image-gallery-cone.jpg"
          alt="cone"
          className="w-[360px]"
        />
        <img
          src="/images/image-gallery-sugarcubes.jpg"
          alt="sugar cubes"
          className="w-[360px]"
        />
      </section>
    </main>
  );
}

export default Home;
