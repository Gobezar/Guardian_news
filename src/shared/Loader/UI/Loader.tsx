import cl from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={cl.loader}>
      <p>Ищем новости...Переключаем каналы...Листаем ленту...</p>
    </div>
  )
}

export default Loader
