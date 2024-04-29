/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useCallback, useRef, useState } from "react";
import Gallery from "./Gallery";

export default function Project() {
  const carsObserver = useRef();
  const quickObserver = useRef();
  const carsGalleryRef = useRef();
  const quickGalleryRef = useRef();

  const [carsViewing, setcarsViewing] = useState(false);
  const [QuickViewing, setQuickViewing] = useState(false);

  const carsSection = useCallback((node) => {
    if (carsObserver.current) carsObserver.current.disconnect();
    carsObserver.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setcarsViewing(true);
      }
    });
    if (node) carsObserver.current.observe(node);
  }, [setcarsViewing]);

  const QuickSection = useCallback((node) => {
    if (quickObserver.current) quickObserver.current.disconnect();
    quickObserver.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setQuickViewing(true);
      }
    });
    if (node) quickObserver.current.observe(node);
  }, [setQuickViewing]);

  const handleOpenGallery = (Ref) => {
    Ref.current.firstChild.firstChild.click();
  };

  return (
    <section id="projects-section" className="w-full max-w-[1200px] py-32">
      <h2 className="text-zinc-500 px-10">// Projects</h2>
      <div className="w-full flex flex-col mt-14 items-center">
        <div
          ref={carsSection}
          className={`flex items-center justify-center w-full mb-28 flex-wrap px-5 md:px-0 transition-all duration-1000 ${
            carsViewing ? "opacity-1 translate-x-0" : "opacity-0 translate-x-72"
          }`}
        >
          <div className="w-full md:w-[50%] order-2 md:order-1 relative group cursor-pointer rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-fourth/[35%] z-10 group-hover:hidden opacity-100 transition-all "></div>
            <div ref={carsGalleryRef}>
              <Gallery
                galleryID="cars-gallery"
                className="grayscale"
                images={[
                  {
                    largeURL: "/car/cars-home.webp",
                    thumbnailURL: "/car/cars-thumbnail.jpg",
                    width: 776,
                    height: 800,
                  },
                  {
                    largeURL: "/car/cars-search.webp",
                    width: 767,
                    height: 800,
                  },
                  {
                    largeURL: "/car/cars-vdp.webp",
                    width: 853,
                    height: 800,
                  },
                  {
                    largeURL: "/car/cars-ims.webp",
                    width: 604,
                    height: 800,
                  },
                ]}
              />
            </div>
          </div>
          <div className="w-full md:w-[40%] order-1 my-5 md:my-0 flex flex-col justify-start md:justify-end items-start md:items-end">
            <h3 className="text-xs text-fourth self-start pl-0 md:pl-3">
              Work project
            </h3>
            <h3 className="text-white text-2xl mb-3 self-start pl-0 md:pl-3">
              cars.com
            </h3>
            <div className="bg-primary_dark rounded-md w-full md:w-[110%] h-fit text-white text-sm z-20 px-5 py-3 shadow-card">
            <span className="text-fourth text-base">&#123; "</span>content<span className="text-fourth text-base">": "</span> Elevated user
              engagement and functionality by
              implementing Elixir Phoenix Framework, enhancing search speed by
              30% with Elasticsearch and Redis, and integrating third-party APIs
              for seamless data flow.
              <span className="text-fourth">" &#125;</span>
            </div>
            <div className="flex gap-3 text-white w-fit self-start md:self-end mt-5 h-fit flex-wrap text-xs pl-0 md:pl-3">
              <span>Elixir</span>
              <span>Erlang/OTP</span>
              <span>GenStage</span>
              <span>Flow</span>
              <span>Elixir Phoenix Framework</span>
              <span>Elasticsearch</span>
              <span>Redis</span>
            </div>
            <button
              className="px-3 py-1 border mt-3 border-fourth text-fourth rounded text-sm hover:bg-fourth hover:text-primary self-start ml-0 md:ml-3"
              onClick={() => handleOpenGallery(carsGalleryRef)}
            >
              View more
            </button>
          </div>
        </div>

        <div
          ref={QuickSection}
          className={`flex items-center w-full mb-28 flex-wrap px-5 md:px-0 justify-center transition-all duration-1000 ${
            QuickViewing
              ? "opacity-1 translate-x-0"
              : "opacity-0 -translate-x-72"
          }`}
        >
          <div className="w-full md:w-[40%] order-1 my-5 md:my-0 flex flex-col justify-start items-start">
            <h3 className="text-xs text-tertiary">Work project</h3>
            <h3 className="text-white text-2xl mb-3">Zefr</h3>
            <div className="bg-primary_dark rounded-md w-full md:w-[110%] h-fit text-white text-sm z-20 px-5 py-3 shadow-card">
            <span className="text-tertiary text-base">&#123; "</span>content<span className="text-tertiary text-base">": "</span> Enabled seamless collaboration and boosted campaign performance with an Influencer Management System, optimizing targeting and reducing costs
              <span className="text-tertiary">" &#125;</span>
            </div>
            <div className="flex gap-3 text-white w-full pr-3 mt-5 h-fit flex-wrap text-xs">
              <span>IMS</span>
              <span>Data analysis & extraction</span>
            </div>
            <button
              className="px-3 py-1 border mt-3 border-tertiary text-tertiary rounded text-sm hover:bg-tertiary hover:text-primary"
              onClick={() => handleOpenGallery(quickGalleryRef)}
            >
              View more
            </button>
          </div>

          <div className="w-full md:w-[50%] order-2 relative group cursor-pointer rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-tertiary/[35%] z-10 group-hover:hidden opacity-100 transition-all "></div>
            <div ref={quickGalleryRef}>
              <Gallery
                galleryID="quick-gallery"
                className="grayscale"
                images={[
                  {
                    largeURL: "/zefr.webp",
                    thumbnailURL: "/zefr.png",
                    width: 613,
                    height: 752,
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
