import ArticleList from '../components/ArticleList'
import { GetStaticProps } from 'next'
import { Article } from '../types'

interface HomeProps {
  articles: Article[]
}

const Home: React.FC<HomeProps> = ({ articles }) => {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

export default Home
