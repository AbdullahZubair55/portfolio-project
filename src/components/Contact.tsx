import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [toastVisible, setToastVisible] = useState(false)

  useEffect(() => {
    if (!toastVisible) return

    const timer = setTimeout(() => {
      setToastVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [toastVisible])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setToastVisible(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id='contact' className='contact'>
      <h2>Contact</h2>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type='email'
          placeholder='Enter email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <textarea
          placeholder='Message'
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        <button type='submit'>Send</button>
      </form>

      {toastVisible && <div className='toast-message'>SENDED</div>}
      <footer>Contact no: 03455547483 <br />
        email:abdullahzubair33489@gmail.com
      </footer>
    </section>
  )
}

export default Contact