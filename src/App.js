import { useTrees } from "."

function App() {
    const trees= useTrees()
    
    return (
      <ul>
          {trees.map(({id, type})=> (<li key={id}>{type}</li>) )}
      </ul>
    )
   }

   export default App