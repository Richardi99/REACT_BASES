
import { useState } from "react"

export function TwitterFollowCard ({userName, children, initialIsfollowing} ) {

  const [isFollowing, setIsFollowing] = useState(initialIsfollowing)

  console.log('[TwitterFollowCard] render with userName: ', userName)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
  ? 'tw-followCard-button is-following'
  : 'tw-followCard-button'

  const handleClick = () =>{
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
      <img 
        className='tw-followCard-avatar'
        src={`https://unavatar.io/${userName}`}
        alt="Avatar de MIDUDEV" />
      <div className='tw-followCard-info' >
        <strong>{children}</strong>
        <span
        className='tw-followCard-infoUserName'>
          {`@${userName}`}
          </span>
      </div>
    </header>
    <aside>
      <button className={buttonClassName} onClick={handleClick} >
        <span className="tw-followCard-text" >{text}</span>
        <span className="tw-followCard-stopFollow" >Dejar de seguir</span>
      </button>
    </aside>
  </article>
  )
}