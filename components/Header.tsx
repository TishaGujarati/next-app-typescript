import headerStyles from '../styles/Header.module.css'

const Header: React.FC = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>My</span> App
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest My App news
      </p>
    </div>
  )
}

export default Header
