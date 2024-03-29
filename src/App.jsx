import './App.css'
import Bio from './Components/Bio'
import Header from './Components/Header'
import Projects from './Components/Projects'
import Projects2 from './Components/Projects2'
import Skills from './Components/Skills'

export default function App() {

  return (
    <>
      <Header />
      <div className="container">
        <div className="content">
          <h1>Tasarım çözümleri artık çok kolay</h1>
          <p>Çeşitli tasarım disiplinlerinde on yılı aşkın deneyimimle, tasarım ihtiyaçlarınız için tek adresinizim.</p>
        </div>
        <Skills />
        <Bio />
        <Projects />
        {/* <Projects2 /> */}
        <div className="meetMe">
          <div className="interview">
            <div className="interviewDesc">
              <h1>Benimle bir görüşme ayarlayın</h1>
              <p>Size nasıl yardımcı olabileceğimi görmek için sohbet etmek isterim. En iyi ilk adım, ücretsiz bir danışmanlık sırasında projenizi tartışmamızdır. Sonra oradan ilerleyebiliriz.</p>
            </div>
            <div className="consultation">
              <a href="#">Ücretsiz Danışmanlık</a>
            </div>
          </div>
        </div>
      </div>
      <Header />
    </>
  )
}

