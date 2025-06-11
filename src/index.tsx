/* istanbul ignore file */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <main>
      <h1>React-three-fiber issues #3520</h1>
      <p>
        Run the tests by executing <code>npm test</code> in your terminal.
      </p>
    </main>
  </StrictMode>
)
