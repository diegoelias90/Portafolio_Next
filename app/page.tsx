export default function Home() {
  return (
    <main className="min-h-screen bg-[#11120f] text-[#e8e7df] px-6 py-8 md:px-12 lg:px-20">

      {/* --------------------------------------------------
          INTRODUCTION
      -------------------------------------------------- */}

      <section className="min-h-[90vh] flex flex-col justify-between py-8">

        <div className="flex justify-between items-start text-sm text-[#8d8e86]">
          <p>Diego Elías</p>
          <p>El Salvador — 2026</p>
        </div>

        <div className="max-w-6xl">

          <p className="text-[#8d8e86] text-sm mb-6">
            Software Development / Cybersecurity / Things I probably shouldn't be building
          </p>

          <h1 className="text-[14vw] md:text-[11vw] leading-[0.8] tracking-[-0.07em] font-bold">
            Diego
            <br />
            Elías
          </h1>

          <div className="mt-10 max-w-xl">
            <p className="text-2xl md:text-3xl leading-tight">
              I hate making websites.
            </p>

            <p className="mt-4 text-[#8d8e86] text-lg leading-relaxed">
              Which is probably a strange thing to say when you're looking
              at a website about me.
            </p>
          </div>

        </div>

        <div className="flex justify-between items-end text-sm text-[#8d8e86]">
          <p>Scroll if you want to know me.</p>
          <p>↓</p>
        </div>

      </section>


      {/* --------------------------------------------------
          WHO AM I
      -------------------------------------------------- */}

      <section className="py-32 border-t border-[#2b2c27]">

        <div className="grid md:grid-cols-12 gap-10">

          <div className="md:col-span-4">
            <p className="text-sm text-[#8d8e86]">
              01 — Who am I?
            </p>
          </div>

          <div className="md:col-span-8 max-w-3xl">

            <p className="text-3xl md:text-5xl leading-tight">
              I'm a software development student from El Salvador trying
              to figure out what kind of developer I actually want to become.
            </p>

            <p className="mt-10 text-[#a7a79f] text-lg leading-relaxed">
              I've spent the last few years learning how software works by
              actually building things. Sometimes they work. Sometimes they
              don't. Both situations usually teach me something.
            </p>

            <p className="mt-6 text-[#a7a79f] text-lg leading-relaxed">
              I'm especially interested in software development,
              cybersecurity and technology that can solve problems that
              people actually have.
            </p>

          </div>

        </div>

      </section>


      {/* --------------------------------------------------
          WHAT I DO
      -------------------------------------------------- */}

      <section className="py-32 border-t border-[#2b2c27]">

        <div className="grid md:grid-cols-12 gap-10">

          <div className="md:col-span-4">
            <p className="text-sm text-[#8d8e86]">
              02 — What I do
            </p>
          </div>

          <div className="md:col-span-8">

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">

              <div>
                <p className="text-2xl mb-4">
                  Software Development
                </p>

                <p className="text-[#8d8e86] leading-relaxed">
                  I build applications from the initial idea and system
                  analysis to development, testing and deployment.
                </p>
              </div>


              <div>
                <p className="text-2xl mb-4">
                  Backend
                </p>

                <p className="text-[#8d8e86] leading-relaxed">
                  APIs, databases, authentication and server-side logic.
                  I've worked with PHP, C#, Java, Node.js and SQL.
                </p>
              </div>


              <div>
                <p className="text-2xl mb-4">
                  Mobile Development
                </p>

                <p className="text-[#8d8e86] leading-relaxed">
                  I've worked with React Native and Expo to build mobile
                  applications and connect them with real services.
                </p>
              </div>


              <div>
                <p className="text-2xl mb-4">
                  Cybersecurity
                </p>

                <p className="text-[#8d8e86] leading-relaxed">
                  I'm interested in understanding how systems can fail,
                  how they can be protected and how security should be
                  considered while building software.
                </p>
              </div>


              <div>
                <p className="text-2xl mb-4">
                  Databases
                </p>

                <p className="text-[#8d8e86] leading-relaxed">
                  Database design, relational models, SQL, normalization
                  and connecting applications to structured information.
                </p>
              </div>


              <div>
                <p className="text-2xl mb-4">
                  System Analysis
                </p>

                <p className="text-[#8d8e86] leading-relaxed">
                  Requirements, UML, layered architecture, MVC,
                  SOLID principles and technical documentation.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* --------------------------------------------------
          TECHNOLOGIES
      -------------------------------------------------- */}

      <section className="py-32 border-t border-[#2b2c27]">

        <div className="grid md:grid-cols-12 gap-10">

          <div className="md:col-span-4">
            <p className="text-sm text-[#8d8e86]">
              03 — Things I've touched
            </p>
          </div>

          <div className="md:col-span-8">

            <p className="text-3xl md:text-4xl leading-tight mb-14">
              I don't really believe in knowing everything.
              I prefer knowing how to figure things out.
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-5 text-xl md:text-2xl">

              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>React</span>
              <span>React Native</span>
              <span>Next.js</span>
              <span>Expo</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>PHP</span>
              <span>C#</span>
              <span>Java</span>
              <span>SQL</span>
              <span>MySQL</span>
              <span>SQL Server</span>
              <span>PostgreSQL</span>
              <span>Git</span>
              <span>Docker</span>
              <span>REST APIs</span>
              <span>JWT</span>
              <span>Linux</span>
              <span>Cisco Packet Tracer</span>
              <span>n8n</span>

            </div>

          </div>

        </div>

      </section>


      {/* --------------------------------------------------
          PROJECTS
      -------------------------------------------------- */}

      <section className="py-32 border-t border-[#2b2c27]">

        <div className="grid md:grid-cols-12 gap-10">

          <div className="md:col-span-4">
            <p className="text-sm text-[#8d8e86]">
              04 — Things I've built
            </p>
          </div>

          <div className="md:col-span-8 space-y-24">


            {/* SACOR */}

            <article>

              <div className="flex justify-between items-baseline gap-4">
                <h2 className="text-4xl md:text-6xl tracking-tight">
                  SACOR System
                </h2>

                <span className="text-sm text-[#8d8e86]">
                  2026
                </span>
              </div>

              <p className="mt-6 text-xl text-[#a7a79f] max-w-2xl">
                A complete information system designed for a Salvadoran
                environmental services company.
              </p>

              <p className="mt-5 text-[#777870] leading-relaxed max-w-2xl">
                The project connects a central database with mobile,
                desktop and web applications. It focuses on organizing
                scattered information, improving communication and
                automating processes that were previously handled through
                Excel, WhatsApp and email.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-sm border border-[#363731] px-3 py-1">
                  System Analysis
                </span>
                <span className="text-sm border border-[#363731] px-3 py-1">
                  Database
                </span>
                <span className="text-sm border border-[#363731] px-3 py-1">
                  Mobile
                </span>
                <span className="text-sm border border-[#363731] px-3 py-1">
                  Desktop
                </span>
                <span className="text-sm border border-[#363731] px-3 py-1">
                  Web
                </span>
              </div>

            </article>


            {/* LESSAI */}

            <article>

              <div className="flex justify-between items-baseline gap-4">
                <h2 className="text-4xl md:text-6xl tracking-tight">
                  LESSAI
                </h2>

                <span className="text-sm text-[#8d8e86]">
                  AI / Computer Vision
                </span>
              </div>

              <p className="mt-6 text-xl text-[#a7a79f] max-w-2xl">
                An experimental AI project focused on posture and
                movement analysis.
              </p>

              <p className="mt-5 text-[#777870] leading-relaxed max-w-2xl">
                Built around computer vision and machine learning,
                combining FastAPI, WebSockets, OpenCV, MediaPipe and
                TensorFlow. The project also communicates with an
                ESP32-CAM for real-time image streaming.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-sm border border-[#363731] px-3 py-1">
                  Python
                </span>
                <span className="text-sm border border-[#363731] px-3 py-1">
                  FastAPI
                </span>
                <span className="text-sm border border-[#363731] px-3 py-1">
                  OpenCV
                </span>
                <span className="text-sm border border-[#363731] px-3 py-1">
                  MediaPipe
                </span>
                <span className="text-sm border border-[#363731] px-3 py-1">
                  TensorFlow
                </span>
                <span className="text-sm border border-[#363731] px-3 py-1">
                  ESP32-CAM
                </span>
              </div>

            </article>


            {/* JERTIC */}

            <article>

              <div className="flex justify-between items-baseline gap-4">
                <h2 className="text-4xl md:text-6xl tracking-tight">
                  JerTic Automotriz
                </h2>

                <span className="text-sm text-[#8d8e86]">
                  Full Stack
                </span>
              </div>

              <p className="mt-6 text-xl text-[#a7a79f] max-w-2xl">
                An automotive management system built around an API,
                authentication and database integration.
              </p>

              <p className="mt-5 text-[#777870] leading-relaxed max-w-2xl">
                The project includes an ASP.NET API, JWT authentication,
                SQL Server and a web interface. I also worked with a
                separate administration application.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-sm border border-[#363731] px-3 py-1">
                  C#
                </span>
                <span className="text-sm border border-[#363731] px-3 py-1">
                  ASP.NET
                </span>
                <span className="text-sm border border-[#363731] px-3 py-1">
                  SQL Server
                </span>
                <span className="text-sm border border-[#363731] px-3 py-1">
                  REST API
                </span>
                <span className="text-sm border border-[#363731] px-3 py-1">
                  JWT
                </span>
              </div>

            </article>


            {/* TOURIST WEB */}

            <article>

              <div className="flex justify-between items-baseline gap-4">
                <h2 className="text-4xl md:text-6xl tracking-tight">
                  TouristWebSV
                </h2>

                <span className="text-sm text-[#8d8e86]">
                  Mobile / Web
                </span>
              </div>

              <p className="mt-6 text-xl text-[#a7a79f] max-w-2xl">
                A project focused on tourism and information about
                El Salvador.
              </p>

              <p className="mt-5 text-[#777870] leading-relaxed max-w-2xl">
                Built using React Native and Expo, experimenting with
                mobile interfaces, external services and structured
                information for tourism.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-sm border border-[#363731] px-3 py-1">
                  React Native
                </span>
                <span className="text-sm border border-[#363731] px-3 py-1">
                  Expo
                </span>
                <span className="text-sm border border-[#363731] px-3 py-1">
                  Supabase
                </span>
                <span className="text-sm border border-[#363731] px-3 py-1">
                  TypeScript
                </span>
              </div>

            </article>


            {/* CLOUD COMPUTER VISION */}

            <article>

              <div className="flex justify-between items-baseline gap-4">
                <h2 className="text-4xl md:text-6xl tracking-tight">
                  Cloud Classification
                </h2>

                <span className="text-sm text-[#8d8e86]">
                  Computer Vision
                </span>
              </div>

              <p className="mt-6 text-xl text-[#a7a79f] max-w-2xl">
                An experimental computer vision project for identifying
                cloud shapes.
              </p>

              <p className="mt-5 text-[#777870] leading-relaxed max-w-2xl">
                Working with image datasets, OpenCV, image processing,
                contour analysis and machine learning approaches such
                as decision trees and random forests.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* --------------------------------------------------
          HOW I WORK
      -------------------------------------------------- */}

      <section className="py-32 border-t border-[#2b2c27]">

        <div className="grid md:grid-cols-12 gap-10">

          <div className="md:col-span-4">
            <p className="text-sm text-[#8d8e86]">
              05 — How I work
            </p>
          </div>

          <div className="md:col-span-8 max-w-3xl">

            <p className="text-3xl md:text-5xl leading-tight">
              I like understanding the whole thing.
            </p>

            <div className="mt-14 space-y-10">

              <div>
                <p className="text-xl">
                  01 / Understand
                </p>

                <p className="mt-2 text-[#8d8e86] leading-relaxed">
                  Before writing code, I try to understand the problem,
                  the people involved and what the system actually needs.
                </p>
              </div>


              <div>
                <p className="text-xl">
                  02 / Design
                </p>

                <p className="mt-2 text-[#8d8e86] leading-relaxed">
                  Database structure, architecture, requirements,
                  UML and the relationship between the different parts
                  of a system.
                </p>
              </div>


              <div>
                <p className="text-xl">
                  03 / Build
                </p>

                <p className="mt-2 text-[#8d8e86] leading-relaxed">
                  Then I start building. Backend, frontend, APIs,
                  databases, authentication, mobile applications or
                  whatever the project requires.
                </p>
              </div>


              <div>
                <p className="text-xl">
                  04 / Break it
                </p>

                <p className="mt-2 text-[#8d8e86] leading-relaxed">
                  Testing is part of development. Things break.
                  Finding out why is usually where I learn the most.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* --------------------------------------------------
          CURRENTLY
      -------------------------------------------------- */}

      <section className="py-32 border-t border-[#2b2c27]">

        <div className="grid md:grid-cols-12 gap-10">

          <div className="md:col-span-4">
            <p className="text-sm text-[#8d8e86]">
              06 — Currently
            </p>
          </div>

          <div className="md:col-span-8">

            <p className="text-4xl md:text-6xl leading-tight max-w-4xl">
              Still learning.
              <br />
              Still building.
              <br />
              Still figuring it out.
            </p>

            <p className="mt-10 text-lg text-[#8d8e86] max-w-2xl leading-relaxed">
              Right now I'm finishing my studies in Software Development
              while trying to go deeper into cybersecurity, backend
              development, artificial intelligence and systems that can
              actually be useful outside a classroom.
            </p>

          </div>

        </div>

      </section>


      {/* --------------------------------------------------
          THE HUMAN PART
      -------------------------------------------------- */}

      <section className="py-32 border-t border-[#2b2c27]">

        <div className="max-w-4xl">

          <p className="text-sm text-[#8d8e86] mb-10">
            07 — The part that doesn't fit a résumé
          </p>

          <p className="text-3xl md:text-5xl leading-tight">
            I'm still trying to figure out whether I actually like
            software development or whether I've simply spent too much
            time doing it to walk away now.
          </p>

          <p className="mt-10 text-[#8d8e86] text-lg leading-relaxed max-w-2xl">
            Maybe that's not the kind of thing you're supposed to put
            on a portfolio. I think it's more honest than pretending
            I've already figured everything out.
          </p>

        </div>

      </section>


      {/* --------------------------------------------------
          CONTACT
      -------------------------------------------------- */}

      <section className="py-32 border-t border-[#2b2c27]">

        <div className="grid md:grid-cols-12 gap-10">

          <div className="md:col-span-4">
            <p className="text-sm text-[#8d8e86]">
              08 — Find me
            </p>
          </div>

          <div className="md:col-span-8">

            <p className="text-4xl md:text-6xl leading-tight">
              If you want to see what I'm building,
              <br />
              that's probably the easiest way to know me.
            </p>

            <div className="mt-12 flex flex-wrap gap-8 text-lg">

              <a
                href="https://github.com/AdrianRosa21"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[#777870] hover:border-[#e8e7df] transition-colors"
              >
                GitHub ↗
              </a>

              <a
                href="mailto:your-email@example.com"
                className="border-b border-[#777870] hover:border-[#e8e7df] transition-colors"
              >
                Email ↗
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* --------------------------------------------------
          FOOTER
      -------------------------------------------------- */}

      <footer className="py-10 border-t border-[#2b2c27] flex flex-col md:flex-row justify-between gap-4 text-sm text-[#777870]">

        <p>
          Diego Elías
        </p>

        <p>
          Built with Next.js. Probably overthought.
        </p>

        <p>
          © 2026
        </p>

      </footer>

    </main>
  );
}