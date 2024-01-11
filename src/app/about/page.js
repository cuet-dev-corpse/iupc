import Commite2 from "@/components/Commite2";
import Developer from "@/components/Developer";
import Gallery from "@/components/Gallery";
import Slider from "@/components/Slider";

export default function About() {
  return (
    <>
      <section className="container2 space-y-12 pb-12">
        <Slider/>
        <div className="space-y-3">
          <div className="title !my-0 text-center">About Us</div>
          <div className="flex lg:flex-row flex-col gap-6 items-center">
            <div className="text lg:order-1 order-2 flex-[2]">
              CUET Computer Club, born from the aspirations of visionary students at Chittagong University of Engineering and Technology (CUET), emerged to fill a void in organised exploration of computer science and modern technology. Upon entering the campus, particularly the Computer Science and Engineering (CSE) department, the absence of a well-structured computer club was palpable. Inspired by universities globally achieving ICPC world finals, developing groundbreaking apps, and creating viral games, we questioned why we couldn't paint similar success stories. The desire to bridge these gaps, connect with past batch seniors, and chart a new course motivated us. The club envisions a platform not only for competitive programming but for collaboration across diverse fields, recognizing the indispensable role of technology in today's world. In a society where halting technological use would freeze daily life, CUET Computer Club is dedicated to propelling forward in harmony with evolving technology.
            </div>
            <div className="flex-1">
              <img className="md:max-w-[350px] max-w-[250px]" src="./computer_club_logo.png" alt="" />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="title !my-6 text-center">Vision</div>
          <ul className="text space-y-2 list-disc">
            <li>Establish a well-organised platform at CUET for comprehensive student practice in computer and modern technology.</li>
            <li>Address the absence of a structured computer club, particularly for CSE students, providing a dedicated space for technological exploration.</li>
            <li>Foster a global competitive spirit among CUET students, drawing inspiration from annual participation in the ICPC world finals.</li>
            <li>Cultivate innovation within CUET Computer Club, motivating members to embark on new projects as a means to overcome perceived limitations and generate fresh ideas through gap analysis.</li>
          </ul>
        </div>
        <div className="space-y-3">
          <div className="title !my-6 text-center">Why CodeStorm 1.0</div>
          <div className="text">
            CodeStorm 1.0, our upcoming Inter-University Programming Contest (IUPC), is poised to be a landmark event that transcends the boundaries of academic institutions and fosters a vibrant culture of innovation and collaboration. With the participation of 100 university teams, including top-tier institutions such as BUET, DU, SUST, RUET, JU, KUET, and CUET, this coding extravaganza promises to be a dynamic platform for the brightest minds in computer science and engineering. Sponsors of CodeStorm 1.0 will have a unique opportunity to align their brand with cutting-edge technology and academic excellence, reaching a diverse audience of talented students and faculty members from prestigious universities. By supporting this event, sponsors can contribute to the growth and development of the next generation of tech leaders, reinforcing their commitment to education, innovation, and the advancement of the digital landscape. CodeStorm 1.0 represents more than just a competition; it symbolizes a collective effort to push the boundaries of knowledge and inspire the leaders of tomorrow. As sponsors, your involvement will not only elevate your brand but also play a pivotal role in nurturing the future trailblazers of the tech industry.
            <br />
            <br />
            For more details regarding the event, please visit at-
            <br />
            <div className="flex justify-center items-center">
              <div className="flex items-center mxau gap-6 text-blue-300 my-4">
                <a className="button rounded-sm font-bold" href="https://fb.me/e/4YS59u9iT" target="_blank" rel="noreferrer noopener">Event</a>
                <a className="button font-bold" href="https://www.facebook.com/profile.php?id=61555337101476&mibextid=zLoPMf" target="_blank" rel="noreferrer noopener">Event Page</a>
                <a className="button font-bold" href="https://www.facebook.com/cuetcomputerclub" target="_blank" rel="noreferrer noopener">Club Page</a>
              </div>
            </div>
          </div>
        </div>

        <Commite2 />
        <Gallery />
        <Developer/>

      </section>
    </>
  )
}
