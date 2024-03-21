import ExpandingCards from './components/ExpandingCards'
import { cardsData } from './containerData'

const App = () => {
  return (
    <div>
      <ExpandingCards data = {cardsData} />
    </div>
  )
}

export default App;