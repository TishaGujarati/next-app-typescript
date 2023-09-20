import { GetStaticProps, GetStaticPaths } from 'next'
import { server } from '../../../config'
import Link from 'next/link'
import Meta from '../../../components/Meta'
import { Article } from '../../../types'

interface ArticlePageProps {
  article: Article
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article }) => {
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const res = await fetch(`${server}/api/articles/${params.id}`)
  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  const paths = articles.map((article) => ({
    params: { id: article.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default ArticlePage