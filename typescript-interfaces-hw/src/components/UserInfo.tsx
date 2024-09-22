import { User } from "../interfaces/UserInfoProps";

const UserInfo = ({username, age, email}: User) => {
  return (
    <>
        <h1>User Info:</h1>
        <h4>Username: {username}</h4>
        <h4>Age: {age}</h4>
        <h4>Email: {email}</h4>
    </>
  )
}

export default UserInfo