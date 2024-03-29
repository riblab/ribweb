import { createRoot } from 'react-dom/client'
import './styles.css'
import { App } from './App'
import { Leva } from 'leva'
import { Logo } from '@pmndrs/branding'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="https://riblab.cn/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        rib·lab
        <br />
        排骨实验室
      </a>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>🍖 —</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>hi@rib.im</div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Overlay />
    <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} />
    <Leva collapsed />
  </>
)
