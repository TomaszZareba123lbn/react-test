import './App.css'
import animalsData from './data/animals.json'
import type { Animal } from './types/Animal'

const animals: Animal[] = animalsData

function App() {
  return (
    <main>
      <h1>Animals</h1>

      {animals.map((animal) => (
        <div key={animal.name}>
          <h2>{animal.name}</h2>
          <p>Continent: {animal.continent}</p>
          <p>Average speed: {animal.averageSpeed} km/h</p>
          <p>Average weight: {animal.weight} kg</p>
        </div>
      ))}
    </main>
  )
}

export default App