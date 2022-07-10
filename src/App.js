import { useContext } from "react"
import { TreesContext } from "."

function App() {
    const trees= useContext(TreesContext)
    
    return (
      <ul>
          {trees.map(({id, type})=> (<li key={id}>{type}</li>) )}
      </ul>
    )
   }

   export default App