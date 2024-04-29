import React, { useCallback, useRef, useState } from "react";

export default function Introduction() {
  const [Viewing, setViewing] = useState(false);

  const observer = useRef();
  const introductionSection = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setViewing(true);
      }
    });
    if (node) observer.current.observe(node);
  }, [setViewing]);

  return (
    <>
      <section
        id="introduction-section"
        className={`w-full bg-primary_dark shadow-card flex flex-col items-center justify-center pt-24 pb-60`}
      >
        <div
          ref={introductionSection}
          className={`max-w-[1480px] w-11/12 overflow-visible mt-5 transition-all duration-1000 flex flex-wrap items-start gap-10 justify-around ${
            Viewing ? "opacity-1 translate-y-0" : "opacity-0 translate-y-52"
          } `}
        >
          <div className="flex flex-col items-start gap-5 w-full lg:w-3/6">
            <h2 className="text-sixth font-bold w-fit px-10 lg:px-0 text-lg uppercase relative after:absolute after:left-[110%] after:top-1/2 after:h-0.5 after:w-20 after:bg-sixth">
              About me
            </h2>
            <p className="text-gray-200 whitespace-normal text-justify text-sm md:text-lg">
              Forward-Thinking Senior Software Engineer showcasing over ten
              years of developing innovative technologies to improve user
              experiences and resolve complex problems. Strategic, influential
              leader experienced in co-authoring specifications, design
              documents, documentation, and other training and educational
              content. Committed to serving as a versatile, collaborative, and
              enthusiastic team leader with a passion for tackling challenges
              across the full stack.
            </p>
          </div>

          <div className="flex flex-col gap-5 items-start w-full lg:w-2/6">
            <h2 className="text-sixth font-bold w-fit ml-24 px-10 lg:px-0 text-lg uppercase relative after:absolute after:right-[110%] after:top-1/2 after:h-0.5 after:w-20 after:bg-sixth">
              SKILLS
            </h2>
            <div className="text-fourth flex flex-row items-start justify-start gap-2 flex-wrap">
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/rust.png"
                  alt="Rust icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  Rust{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/python.png"
                  alt="Python icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  Python
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/elixir.png"
                  alt="Elixir icon"
                  width={35}
                  height={35}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  Elixir{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/node.svg"
                  alt="Node.js icon"
                  width={40}
                  height={40}
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  Node.js
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative p-1.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/js.svg"
                  alt="JavaScript icon"
                  width={35}
                  height={35}
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  JavaScript
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative p-1 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/ts.svg"
                  alt="Typescript icon"
                  width={35}
                  height={35}
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  Typescript
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/html.svg"
                  alt="HTML icon"
                  width={40}
                  height={40}
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  HTML
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/css.svg"
                  alt="CSS icon"
                  width={40}
                  height={40}
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  CSS
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/react.svg"
                  alt="ReactJS icon"
                  width={40}
                  height={40}
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  ReactJS
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/angular.png"
                  alt="Angular icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  AngularJS
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/express.png"
                  alt="Express.js icon"
                  width={40}
                  height={40}
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  Express.js
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/koa.png"
                  alt="Koa icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  Koa{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/next.svg"
                  alt="Next.js icon"
                  width={40}
                  height={40}
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  Next.js
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/apollo.png"
                  alt="Apollo server icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center whitespace-nowrap p-1 w-24 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  Apollo Server{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/phoenix.png"
                  alt="Phoenix icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  Phoenix{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/rocket.png"
                  alt="Rocket icon"
                  width={35}
                  height={35}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  Rocket{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/kafka.png"
                  alt="Kafka icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  Kafka{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/airflow.png"
                  alt="Airflow icon"
                  width={30}
                  height={30}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  Airflow{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/spark.png"
                  alt="Spark icon"
                  width={35}
                  height={35}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  Spark{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/elasticsearch.png"
                  alt="Elasticsearch icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  Elasticsearch{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/solr.png"
                  alt="Solr icon"
                  width={35}
                  height={35}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  Solr{" "}
                </span>
              </div>

              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/postgres.png"
                  alt="PostgreSQL icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  PostgreSQL
                </span>
              </div>

              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/mysql.png"
                  alt="MySQL icon"
                  width={40}
                  height={40}
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  MySQL
                </span>
              </div>

              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/mariadb.png"
                  alt="MariaDB icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  MariaDB{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/scylladb.png"
                  alt="ScyllaDB icon"
                  width={35}
                  height={35}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  ScyllaDB{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/redis.png"
                  alt="Redis icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  Redis{" "}
                </span>
              </div>

              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/mongo.svg"
                  alt="MongoDB icon"
                  width={40}
                  height={40}
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  MongoDB
                </span>
              </div>

              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/dynamodb.png"
                  alt="DynamoDB icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  DynamoDB{" "}
                </span>
              </div>

              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/git.svg"
                  alt="Git icon"
                  width={40}
                  height={40}
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  Git
                </span>
              </div>

              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/gitlab.png"
                  alt="GitLab CI/CD icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  GitLab CI/CD{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/circleci.png"
                  alt="CircleCI icon"
                  width={35}
                  height={35}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  CircleCI{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/aws.png"
                  alt="AWS icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  AWS{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/docker.png"
                  alt="Docker icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  Docker{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/kubernetes.png"
                  alt="Kubernetes icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  Kubernetes{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/nomad.png"
                  alt="Nomad icon"
                  width={35}
                  height={35}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  Nomad{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/mocha.png"
                  alt="Mocha icon"
                  width={35}
                  height={35}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  Mocha{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/jest.png"
                  alt="Jest icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  Jest{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/chai.png"
                  alt="Chai icon"
                  width={35}
                  height={35}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  Chai{" "}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/puppeteer.png"
                  alt="Puppeteer icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  {" "}
                  Puppeteer{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
