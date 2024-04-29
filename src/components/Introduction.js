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
  },[]);

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
            <p className="text-gray-200 whitespace-normal text-sm md:text-lg">
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

  // return (
  //   <>
  //     <section
  //       id="introduction-section"
  //       className={`w-full bg-primary_dark shadow-card flex flex-col items-center justify-center pt-32 pb-80`}
  //     >
  //       <h2 className="text-zinc-500 max-w-[800px] w-full px-10 lg:px-0">
  //         // Introduction
  //       </h2>
  //       <div
  //         ref={introductionSection}
  //         className={`mockup-code bg-primary_light max-w-[800px] w-11/12 overflow-visible shadow-2xl mt-5 transition-all duration-1000 ${
  //           Viewing ? "opacity-1 translate-y-0" : "opacity-0 translate-y-52"
  //         } `}
  //       >
  //         <pre data-prefix="$" className="text-white pl-4 pt-3">
  //           <code className="text-sm md:text-lg"> info</code>
  //         </pre>
  //         <pre
  //           data-prefix=">"
  //           className="text-sixth whitespace-normal pl-4 pt-2"
  //         >
  //           <code className="text-sm md:text-base">
  //             {" "}
  //             Proactive and self-motivated Senior Software Engineer with a
  //             distinguished, decade-long professional track record, excited to
  //             operate at the cutting edge of the machine learning and AI
  //             renaissance.
  //           </code>
  //         </pre>
  //         <pre data-prefix="$" className="text-white pl-4 pt-6">
  //           <code className="text-sm md:text-lg"> skills</code>
  //         </pre>
  //         <pre data-prefix=">" className="text-fourth pl-6 flex pt-4">
  //           <code className="flex flex-row items-start justify-center flex-wrap">
  //             {" "}
  //             &#91;"
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1640648512/html_pxk3rn.svg"
  //                 alt="HTML icon"
  //                 width={40}
  //                 height={40}
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 HTML
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1640648507/css_gyaf7z.svg"
  //                 alt="CSS icon"
  //                 width={40}
  //                 height={40}
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 CSS
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative p-1.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1640648512/js_imr3bo.svg"
  //                 alt="JavaScript icon"
  //                 width={35}
  //                 height={35}
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 JavaScript
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1683426114/icons8-php-48_vernow.png"
  //                 alt="PHP icon"
  //                 width={40}
  //                 height={40}
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 PHP
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="/skills/python.png"
  //                 alt="Python icon"
  //                 width={40}
  //                 height={40}
  //                 id="services-section"
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 Python
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="/skills/java.png"
  //                 alt="Java icon"
  //                 width={45}
  //                 height={45}
  //                 id="services-section"
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 Java
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative p-1 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1640648518/ts_t6ipoc.svg"
  //                 alt="Typescript icon"
  //                 width={35}
  //                 height={35}
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 Typescript
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1640648513/next_csitru.svg"
  //                 alt="Next.js icon"
  //                 width={40}
  //                 height={40}
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 Next.js
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1640648515/react_ak0sla.svg"
  //                 alt="ReactJS icon"
  //                 width={40}
  //                 height={40}
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 ReactJS
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1640648517/tailwind_k1zaze.png"
  //                 alt="Tailwind CSS icon"
  //                 width={40}
  //                 height={40}
  //               />
  //               <span className="absolute text-center p-1 w-24 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 Tailwind CSS
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1640648514/node_nj2kde.svg"
  //                 alt="Node.js icon"
  //                 width={40}
  //                 height={40}
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 Node.js
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1640648512/express_n1saii.png"
  //                 alt="Express.js icon"
  //                 width={40}
  //                 height={40}
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 Express.js
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="/skills/angular.png"
  //                 alt="Angular icon"
  //                 width={40}
  //                 height={40}
  //                 id="services-section"
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 AngularJS
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-1.5 py-1.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="/skills/chartjs.png"
  //                 alt="Chart.js icon"
  //                 width={35}
  //                 height={35}
  //                 id="services-section"
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 Chart.js
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1646650106/Three.js_Icon.svg_i13nrx.png"
  //                 alt="Three.js icon"
  //                 width={40}
  //                 height={40}
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 Three.js
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 z-10 mb-4 rounded-full bg-transparent relative p-1 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1670160372/icons8-stripe-48_egmca6.png"
  //                 alt="Stripe icon"
  //                 width={40}
  //                 height={40}
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 Stripe
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1670160372/icons8-json-web-token-48_ujle0l.png"
  //                 alt="JWT icon"
  //                 width={40}
  //                 height={40}
  //                 id="services-section"
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 JWT
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="/skills/prisma.png"
  //                 alt="Prisma icon"
  //                 width={40}
  //                 height={40}
  //                 id="services-section"
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 Prisma
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1640648514/mongo_uqpcud.svg"
  //                 alt="MongoDB icon"
  //                 width={40}
  //                 height={40}
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 MongoDB
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative  hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1640648509/firebase_ztz5rt.png"
  //                 alt="Firebase icon"
  //                 width={40}
  //                 height={40}
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 Firebase
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1683493768/pfe/mysql_n3hwqg.png"
  //                 alt="MySQL icon"
  //                 width={40}
  //                 height={40}
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 MySQL
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="/skills/postgres.png"
  //                 alt="PostgreSQL icon"
  //                 width={40}
  //                 height={40}
  //                 id="services-section"
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 PostgreSQL
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1640648510/git_b23wnr.svg"
  //                 alt="Git icon"
  //                 width={40}
  //                 height={40}
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 Git
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative p-1 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="/skills/laravel.png"
  //                 alt="Laravel icon"
  //                 width={40}
  //                 height={40}
  //                 id="services-section"
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 Laravel
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="/skills/symfony.png"
  //                 alt="Symfony icon"
  //                 width={40}
  //                 height={40}
  //                 id="services-section"
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 Symfony
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-10 h-10 z-10 mb-4 rounded-full bg-transparent relative p-1.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1683426735/codeigniter_evfxab.png"
  //                 alt="CodeIgniter 4 icon"
  //                 width={35}
  //                 height={35}
  //               />
  //               <span className="absolute text-center p-1 w-24 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 CodeIgniter 4
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1683426114/icons8-wordpress-48_zhcr2l.png"
  //                 alt="Wordpress icon"
  //                 width={40}
  //                 height={40}
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 Wordpress
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-1 py-1 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="/skills/django.png"
  //                 alt="Django icon"
  //                 width={40}
  //                 height={40}
  //                 id="services-section"
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 Django
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="/skills/leaflet.png"
  //                 alt="Leaflet icon"
  //                 width={40}
  //                 height={40}
  //                 id="services-section"
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 Leaflet
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative p-1 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="/skills/keycloak.png"
  //                 alt="Keycloak icon"
  //                 width={40}
  //                 height={40}
  //                 id="services-section"
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 Keycloak
  //               </span>
  //             </div>
  //             ","
  //             <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative p-1 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
  //               <img
  //                 src="/skills/quarkus.svg"
  //                 alt="Quarkus icon"
  //                 width={40}
  //                 height={40}
  //                 id="services-section"
  //               />
  //               <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
  //                 Quarkus
  //               </span>
  //             </div>
  //             "&#93;
  //           </code>
  //         </pre>
  //       </div>
  //     </section>
  //   </>
  // );
}
