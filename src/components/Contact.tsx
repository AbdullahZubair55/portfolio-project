function Contact() {
  return (
    <section id='contact' className='contact'>
      <h2>Contact</h2>

      <form>
        <input type='text' placeholder='Enter name' />

        <input type='email' placeholder='Enter email' />

        <textarea placeholder='Message'></textarea>

        <button>Send</button>
      </form>
    </section>
  )
}

export default Contact