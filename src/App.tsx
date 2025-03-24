import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/global'

import { BookDetail } from './paginas/BookDetail'
import { Books } from './paginas/Books'
import { Search} from './paginas/Search'
function App() {

  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search />}/>
        <Route path='/books' element={<Books />}/>
        <Route path='/books/:bookId' element={<BookDetail />}/>
      </Routes>    
    </BrowserRouter>
    </>
  )
}

export default App
