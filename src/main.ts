import './style.css'
import { html } from './index.md'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <div class="markdown">
    ${html}
  </div>
`