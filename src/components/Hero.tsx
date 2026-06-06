import profile from '../assets/profile.jpg'

function Hero() {
  return (
    <section id='home' className='hero'>
      <div>
        <h2>Hello, I am Abdullah</h2>
        <p>Frontend React Developer</p>
      </div>

      <img src={profile} alt='profile' />
    </section>
  )
}

export default Hero