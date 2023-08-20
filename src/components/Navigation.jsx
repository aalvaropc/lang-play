import {Link} from 'react-router-dom'

export const Navigation = () => {
  return (
    <div>
      <Link to='/tasks-create'>Create task</Link>
      <Link to='/task'>task</Link>
    </div>
  )
}
