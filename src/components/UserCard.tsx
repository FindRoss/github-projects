import type { User } from '../types/user';

interface UserProps {
  user: User
}

const UserCard = ({ user }: UserProps) => {
  console.log(user);

  return (
    <p>Hello world</p>
  )
}

export default UserCard;