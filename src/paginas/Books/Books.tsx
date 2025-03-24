import { useEffect, useState } from 'react'
import { useLocation, useSearchParams, Navigate, Link } from 'react-router-dom'
import { googleBooksApi } from '../../services/googleBooksApi'
import { Thumbnail } from '../../components/Thumbnail/Thubnail'
import { Container, Title, Subtitle } from './Books.styles'
import {BookState as Book} from '../BookDetail'
import { Spinner } from '../../components/Spinner'



interface BooksState {
  totalItems: number
  items: Book[]
}

export function Books() {

  const [books, setBooks] = useState<BooksState | null>(null)
  const params = useSearchParams()
  const location = useLocation()

  const [searchParams] = params
  const q = searchParams.get('q')

  useEffect(() => {
    googleBooksApi
    .get(`/v1/volumes?q=${q}&maxResults=20`)
    .then(response => setBooks(response.data))
  }, [q])

  if (!q) {
    return <Navigate to='/' state={{from: location }} replace/>
  }
  return (
    <Container>
    <h1>Resultado da Busca</h1>

    {books ? (
      <ul>
      {books.items.map(book => (
        <li key={book.id}>
          <Link to={`/books/${book.id}`}>
           <Thumbnail 
          thumbnail={book.volumeInfo.imageLinks?.thumbnail} 
          title={book.volumeInfo.title}
          bgColor= "#d9d9d9"
          />

          <Title>{book.volumeInfo.title}</Title>
          <Subtitle>{book.volumeInfo.subtitle}</Subtitle>
          </Link>
         
          
        </li> 
        
      ))}
      </ul>
    ) : (
      <Spinner/>
    )}

    </Container>
  )
}