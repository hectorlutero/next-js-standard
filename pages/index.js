import { useState } from 'react'

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']
  const [likes, setLikes] = useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }

  return (
    <div>
      <Header title="Hector Siman Portfolio 🚀" />
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>something ({likes})</button>
    </div>
  )
}