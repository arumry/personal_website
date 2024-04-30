import React, { useCallback, useRef, useState } from "react";

export default function Biography() {
  const observer = useRef();
  const indicatorRef = useRef();

  const [TabIndex, setTabIndex] = useState(0);
  const [Viewing, setViewing] = useState(false);

  const biographySection = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setViewing(true);
      }
    });
    if (node) observer.current.observe(node);
  },[]);

  const handleBiographyChangeTab = (index) => {
    setTabIndex(index);
    indicatorRef.current.style.top = `${index * 44 + 40}px`;
  };

  const handleEducationChangeTab = (index) => {
    setTabIndex(index);
    indicatorRef.current.style.top = `${index * 44 + 100}px`;
  };

  return (
    <section
      id="biography-section"
      className="relative w-full bg-primary flex flex-col items-center justify-center mb-20 pb-14"
    >
      <div
        className={`w-full grid max-w-[1280px] gap-8 py-10 px-5 mx-auto rounded-lg md:px-12 lg:px-16 xl:px-32 bg-transparent text-gray-100 transition-all duration-1000 ${
          Viewing ? "opacity-1 translate-y-0" : "opacity-0 translate-y-52"
        }`}
      >
        <h2 className="text-zinc-500 w-full">&#47;&#47; Biography</h2>
        <div
          ref={biographySection}
          className="w-full flex flex-col sm:flex-row justify-start gap-5 items-start mt-10 overflow-hidden"
        >
          <div
            className={`w-full h-fit max-w-full sm:max-w-[220px] overflow-x-auto`}
          >
            <div className="relative w-fit max-w-fit sm:min-w-[220px] sm:max-w-[220px] sm:w-[220px] flex flex-row overflow-x-scroll hidden-scrollbar sm:overflow-hidden overflow-y-hidden sm:flex-col items-start text-white/80 border-l-0 sm:border-l-2 border-primary_dark">
              <div
                ref={indicatorRef}
                className={`hidden sm:block absolute w-1 transition-all top-10 -left-[1px] h-11 bg-secondary`}
              ></div>
              <h2 className="relative text-tertiary px-5 py-2 before:absolute before:top-0 before:left-0.5 before:content-['▹'] before:text-tertiary before:mt-2">
                Experience
              </h2>
              <button
                className={`py-2.5 w-fit sm:w-full text-left px-4 sm:px-2 rounded-md sm:rounded-r-md transition-all whitespace-nowrap overflow-hidden overflow-ellipsis max-w-fit sm:max-w-full ${
                  TabIndex === 0
                    ? "text-secondary bg-primary_dark/70"
                    : "hover:text-secondary/80 hover:translate-x-0.5 hover:-translate-y-0.5 "
                }`}
                onClick={() => handleBiographyChangeTab(0)}
              >
                Payward, Inc.
              </button>
              <button
                className={`py-2.5 w-fit sm:w-full text-left px-4 sm:px-2 rounded-md sm:rounded-r-md transition-all whitespace-nowrap overflow-hidden overflow-ellipsis max-w-fit sm:max-w-full ${
                  TabIndex === 1
                    ? "text-secondary bg-primary_dark/70"
                    : "hover:text-secondary/80 hover:translate-x-0.5 hover:-translate-y-0.5 "
                }`}
                onClick={() => handleBiographyChangeTab(1)}
              >
                Cars.Com
              </button>
              <button
                className={`py-2.5 w-fit sm:w-full text-left px-4 sm:px-2 rounded-md sm:rounded-r-md transition-all whitespace-nowrap overflow-hidden overflow-ellipsis max-w-fit sm:max-w-full ${
                  TabIndex === 2
                    ? "text-secondary bg-primary_dark/70"
                    : "hover:text-secondary/80 hover:translate-x-0.5 hover:-translate-y-0.5 "
                }`}
                onClick={() => handleBiographyChangeTab(2)}
              >
                MVPindex
              </button>
              <button
                className={`py-2.5 w-fit sm:w-full text-left px-4 sm:px-2 rounded-md sm:rounded-r-md transition-all whitespace-nowrap overflow-hidden overflow-ellipsis max-w-fit sm:max-w-full ${
                  TabIndex === 3
                    ? "text-secondary bg-primary_dark/70"
                    : "hover:text-secondary/80 hover:translate-x-0.5 hover:-translate-y-0.5 "
                }`}
                onClick={() => handleBiographyChangeTab(3)}
              >
                ZEFR
              </button>
              <button
                className={`py-2.5 w-fit sm:w-full text-left px-4 sm:px-2 rounded-md sm:rounded-r-md transition-all whitespace-nowrap overflow-hidden overflow-ellipsis max-w-fit sm:max-w-full ${
                  TabIndex === 4
                    ? "text-secondary bg-primary_dark/70"
                    : "hover:text-secondary/80 hover:translate-x-0.5 hover:-translate-y-0.5 "
                }`}
                onClick={() => handleBiographyChangeTab(4)}
              >
                Previous roles
              </button>
              <h2 className="relative text-tertiary px-5 py-2 before:absolute before:top-0 before:left-0.5 before:content-['▹'] before:text-tertiary before:mt-2 sm:mt-5">
                Education
              </h2>
              <button
                className={`py-2.5 w-fit sm:w-full text-left px-4 sm:px-2 rounded-md sm:rounded-r-md transition-all whitespace-nowrap overflow-hidden overflow-ellipsis max-w-fit sm:max-w-full ${
                  TabIndex === 5
                    ? "text-secondary bg-primary_dark/70"
                    : "hover:text-secondary/80 hover:translate-x-0.5 hover:-translate-y-0.5 "
                }`}
                onClick={() => handleEducationChangeTab(5)}
              >
                Machine Learning Engineering Bootcamp
              </button>
              <button
                className={`py-2.5 w-fit sm:w-full text-left px-4 sm:px-2 rounded-md sm:rounded-r-md transition-all whitespace-nowrap overflow-hidden overflow-ellipsis max-w-fit sm:max-w-full ${
                  TabIndex === 6
                    ? "text-secondary bg-primary_dark/70"
                    : "hover:text-secondary/80 hover:translate-x-0.5 hover:-translate-y-0.5 "
                }`}
                onClick={() => handleEducationChangeTab(6)}
              >
                DevMountain Certificate
              </button>
              <button
                className={`py-2.5 w-fit sm:w-full text-left px-4 sm:px-2 rounded-md sm:rounded-r-md transition-all whitespace-nowrap overflow-hidden overflow-ellipsis max-w-fit sm:max-w-full ${
                  TabIndex === 7
                    ? "text-secondary bg-primary_dark/70"
                    : "hover:text-secondary/80 hover:translate-x-0.5 hover:-translate-y-0.5 "
                }`}
                onClick={() => handleEducationChangeTab(7)}
              >
                Utah Valley University
              </button>
            </div>
          </div>
          {TabIndex === 0 && (
            <div className="w-full simple-fade-in-animation p-4 min-h-[250px]">
              <h3>
                Senior Software Engineer
                <span className="text-sixth"> @ Payward, Inc. (Remote)</span>
              </h3>
              <p className="text-sm text-zinc-400 mt-1 mb-6">2021 - Present</p>
              <ul className="relative pl-5 text-sm text-zinc-300 list-disc flex flex-col gap-4">
                <li>
                  Reduced downtime by 2% and increased data throughput by 11% by
                  engineering fault-tolerant data pipelines through Rust,
                  Python, and TypeScript.
                </li>
                <li>
                  Cut message processing latency by optimizing Kafka-based data
                  ingestion and processing to ensure 99.9% data delivery
                  reliability.
                </li>
                <li>
                  Decreased operational costs by 5% and improved scalability by
                  architecting AWS infrastructure that supported data-intensive
                  applications with 99.99% uptime.
                </li>
                <li>
                  Developed analytics frameworks to enhance actionable insights
                  extraction efficiency, drive data-driven decision-making, and
                  improve product performance.
                </li>
                <li>
                  Reduced bugs and improved code maintainability in Node.js
                  projects by leading TypeScript adoption to accelerate feature
                  delivery.
                </li>
                <li>
                  Delivered resource savings by developing and implementing
                  automation strategies to reduce manual intervention and
                  improve workflow efficiency.
                </li>
                <li>
                  Improved code coverage metrics by 17% and increased team
                  productivity by fostering a culture of continuous improvement
                  among junior engineers.
                </li>
                <li>
                  Increased employee satisfaction by cultivating an inclusive
                  environment and advocating for team cohesion and innovation.
                </li>
              </ul>

              <div className="w-full flex flex-wrap items-center mt-4 gap-2">
                <p className="text-xs bg-secondary/30 text-secondary rounded p-1 w-fit">
                  Rust
                </p>
                <p className="text-xs bg-secondary/30 text-secondary rounded p-1 w-fit">
                  Python
                </p>
                <p className="text-xs bg-secondary/30 text-secondary rounded p-1 w-fit">
                  TypeScript
                </p>
              </div>
            </div>
          )}
          {TabIndex === 1 && (
            <div className="w-full simple-fade-in-animation p-4 min-h-[250px]">
              <h3>
                Senior Software Engineer
                <span className="text-sixth"> @ Cars.com (Remote)</span>
              </h3>
              <p className="text-sm text-zinc-400 mt-1 mb-6">2019 – 2021</p>
              <h3>Software Engineer </h3>
              <p className="text-sm text-zinc-400 mt-1 mb-6">2017 – 2019</p>
              <ul className="relative pl-5 text-sm text-zinc-300 list-disc flex flex-col gap-4">
                <li>
                  Promoted to Senior Software Engineer by delivering exceptional
                  results and demonstrating leadership potential.
                </li>
                <li>
                  Accelerated inventory placement tenfold with Elixir and
                  Erlang/OTP, leveraging GenStage, Flow, and streaming
                  technologies.
                </li>
                <li>
                  Increased user engagement metrics by implementing the Elixir
                  Phoenix Framework to improve user experience and functionality
                  across multiple dimensions of the Cars.com website.
                </li>
                <li>
                  Reduced costs by 3% and improved user satisfaction by
                  engineering a greenfield dealer management system, automating
                  dealership and inventory data on our platform.
                </li>
                <li>
                  Enhanced search speed and precision by 30%, improving customer
                  retention by 6%, by deploying advanced search functionality
                  powered by Elasticsearch and Redis.
                </li>
                <li>
                  Decreased data discrepancies by integrating APIs from various
                  third-party vendors.
                </li>
                <li>
                  Achieved a balance between user experience, architecture, and
                  functionality by facilitating collaboration with
                  cross-functional non-technical teams to gather requirements.
                </li>
                <li>
                  Reduced post-launch issue resolution time as a co-author for
                  specifications, design documents, and documentation.
                </li>
              </ul>
              <div className="w-full flex flex-wrap items-center mt-4 gap-2">
                <p className="text-xs bg-secondary/30 text-secondary rounded p-1 w-fit">
                  Elixir
                </p>
                <p className="text-xs bg-secondary/30 text-secondary rounded p-1 w-fit">
                  Erlang/OTP
                </p>
                <p className="text-xs bg-secondary/30 text-secondary rounded p-1 w-fit">
                  GenStage
                </p>
                <p className="text-xs bg-secondary/30 text-secondary rounded p-1 w-fit">
                  Flow
                </p>
                <p className="text-xs bg-secondary/30 text-secondary rounded p-1 w-fit">
                  Elixir Phoenix Framework
                </p>
                <p className="text-xs bg-secondary/30 text-secondary rounded p-1 w-fit">
                  Elasticsearch
                </p>
                <p className="text-xs bg-secondary/30 text-secondary rounded p-1 w-fit">
                  Redis
                </p>
              </div>
            </div>
          )}
          {TabIndex === 2 && (
            <div className="w-full simple-fade-in-animation p-4 min-h-[250px]">
              <h3>
                Software Engineer{" "}
                <span className="text-sixth">@ MVPindex - Dallas, TX</span>
              </h3>
              <p className="text-sm text-zinc-400 mt-1 mb-6">2017</p>
              <ul className="relative pl-5 text-sm text-zinc-300 list-disc flex flex-col gap-4">
                <li>
                  Reduced processing times 15% using Node.js, Kafka, SQL,
                  Elasticsearch, and AWS.
                </li>
                <li>
                  Improved audience segmentation by collaborating with data
                  scientists on Facebook data to develop advanced demographic
                  models.
                </li>
                <li>
                  Increased user acquisition and retention by integrating OAuth
                  for multiple social media logins.
                </li>
              </ul>
              <div className="w-full flex flex-wrap items-center mt-4 gap-2">
                <p className="text-xs bg-secondary/30 text-secondary rounded p-1 w-fit">
                  Node.js
                </p>
                <p className="text-xs bg-secondary/30 text-secondary rounded p-1 w-fit">
                  Kafka
                </p>
                <p className="text-xs bg-secondary/30 text-secondary rounded p-1 w-fit">
                  SQL
                </p>
                <p className="text-xs bg-secondary/30 text-secondary rounded p-1 w-fit">
                  Elasticsearch
                </p>
                <p className="text-xs bg-secondary/30 text-secondary rounded p-1 w-fit">
                  AWS
                </p>
              </div>
            </div>
          )}
          {TabIndex === 3 && (
            <div className="w-full simple-fade-in-animation p-4 min-h-[250px]">
              <h3>
                Software Engineer{" "}
                <span className="text-sixth">@ ZEFR - PROVO, UT</span>
              </h3>
              <p className="text-sm text-zinc-400 mt-1 mb-6">2015 - 2017</p>
              <ul className="relative pl-5 text-sm text-zinc-300 list-disc flex flex-col gap-4">
                <li>
                  Boosted collaboration among internal marketing teams and
                  external partners by developing and deploying an Influencer
                  Management System (IMS).
                </li>
                <li>
                  Enhanced campaign insights by designing and implementing data
                  extraction and analysis procedures to monitor daily social
                  media posts from top influencers.
                </li>
                <li>
                  Increased campaign engagement by 35% and reduced acquisition
                  costs by 10% by enhancing influencer discovery and targeting
                  precision in ad campaigns with advanced faceted search
                  features.
                </li>
              </ul>
              <div className="w-full flex flex-wrap items-center mt-4 gap-2">
                <p className="text-xs bg-secondary/30 text-secondary rounded p-1 w-fit">
                  IMS
                </p>
                <p className="text-xs bg-secondary/30 text-secondary rounded p-1 w-fit">
                  Data analysis & extraction
                </p>
              </div>
            </div>
          )}
          {TabIndex === 4 && (
            <div className="w-full simple-fade-in-animation p-4 min-h-[250px]">
              <h3>
                Web Developer{" "}
                <span className="text-sixth">
                  @ About Time Technologies, LLC
                </span>
              </h3>
              <p className="text-sm text-zinc-400 mt-1 mb-6">2014 - 2015</p>
              <h3>
                Technical Supervisor{" "}
                <span className="text-sixth">@ Bluehost</span>
              </h3>
              <p className="text-sm text-zinc-400 mt-1 mb-6">2012 - 2014</p>
            </div>
          )}
          {TabIndex === 5 && (
            <div className="w-full simple-fade-in-animation p-4 min-h-[250px]">
              <h3>
                Extended Studies Machine Learning Engineering Bootcamp{" "}
                <span className="text-sixth">@ UC San Diego (Online)</span>
              </h3>
              <p className="text-sm text-zinc-400 mt-1 mb-6">2024</p>
              <p className="relative pl-5 text-sm text-zinc-300 before:absolute before:top-0 before:left-0.5 before:content-['▹'] before:text-secondary">
                <span className="text-secondary">Relevant Coursework:</span>{" "}
                Deep Learning, Computer Vision and Image Processing, The Machine
                Learning Engineering Stack, ML Models at Scale and In
                Production, Deploying ML Systems
              </p>
            </div>
          )}
          {TabIndex === 6 && (
            <div className="w-full simple-fade-in-animation p-4 min-h-[250px]">
              <h3>
                Certificate Of Completion, Full Stack Software Engineer{" "}
                <span className="text-sixth">@ DevMountain, Provo, UT</span>
              </h3>
              <p className="text-sm text-zinc-400 mt-1 mb-6">2015</p>
              <p className="relative pl-5 text-sm text-zinc-300 before:absolute before:top-0 before:left-0.5 before:content-['▹'] before:text-secondary">
                <span className="text-secondary">Relevant Coursework:</span>{" "}
                HTML 5 & CSS3, JavaScript, Git & GitHub, jQuery, AngularJS,
                Test-Driven Development, Node.JS, Databases
              </p>
            </div>
          )}
          {TabIndex === 7 && (
            <div className="w-full simple-fade-in-animation p-4 min-h-[250px]">
              <h3>
                Coursework toward a Bachelor of Science (B.Sc.) In Computer
                Science{" "}
                <span className="text-sixth">@ Utah Valley University, Orem, UT</span>
              </h3>
              <p className="text-sm text-zinc-400 mt-1 mb-6">2011 - 2012</p>
            </div>
          )}
        </div>
      </div>
      <div className="h-[3px] opacity-90 absolute -bottom-20 left-0 right-0 mx-auto w-32 rounded-md bg-tertiary seperation-animation-1"></div>
      <div className="absolute h-[3px] rounded-md -bottom-14 right-0 left-0 mx-auto w-48 bg-sixth opacity-90 seperation-animation-2"></div>
      <div className="h-[3px] absolute opacity-90 -bottom-8 left-0 right-0 w-40 mx-auto rounded-md bg-tertiary seperation-animation-3"></div>
    </section>
  );
}
