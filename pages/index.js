import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    
    <div className="container">
      <Head>
        <title>Haileylujah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <h1>ABOUT ME</h1>
      <p>A Veteran and Software Engineer with a background in Supply Chain and Operations Management.
      <br></br>Tackle all sorts of problems by breaking them down into steps and collaborating with colleagues.
      <br></br>With a military background and experience with tactical movements, approach each project with a 
      <br></br>unique perspective, strong work ethic, and precision.</p>

      <br></br>

      <h1>SKILLS</h1>
      <ul>
        <li>HTML/CSS/JS</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Python</li>
      </ul>

      <br></br>

      <h1>PROJECTS</h1>
      <ul>
        <li><a href="https://harnilin.github.io/Memory-Game/">Memory Game</a></li>
        <li><a href="https://explorethefun.herokuapp.com/">Explore the Fun</a></li>
      </ul>

      <br></br>

      <h1>EDUCATION</h1>
      <h3>California State University Los Angeles</h3>
      <p>Bachelor of Science in Business Administration, Operations/Supply Chain Management</p>
      <h3>East Los Angeles College</h3>
      <p>Associate of Arts in General Studies</p>

      <br></br>

      <h1>EXPERIENCE</h1>
      <h3>United States Army Reserve</h3>
      <p>Unit Supply Specialist <br></br> Feburary 2016 - Present</p>
      <h3>Jiu Jiu Tea House</h3>
      <p>Associate Store Manager <br></br> October 2019 - March 2020</p>

      <br></br>
      <h1>CONTACT ME</h1>
      <sec>Email: haileylujahuang@gmail.com</sec>
      <a href='https://www.linkedin.com/in/haileylujah/'>Linkedin</a>
      <a href='https://github.com/haileylujah'>Github</a>


<br></br>
      <Footer />
    </div>
  )
}
