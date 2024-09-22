import UserInfo from "./components/UserInfo"
import { User } from "./interfaces/UserInfoProps"
import Card from "./components/Card"

const newUser: User = {
  username: "user123",
  age: 25,
  email: "user123@email.com"
}


function App() {

  return (
    <>
      <UserInfo {...newUser}/>
      <Card>
        <h3>User Info Pulled From ReactNode:</h3>
        <p>{newUser.username}</p>
        <p>{newUser.age}</p>
        <p>{newUser.email}</p>
      </Card>
    </>
  )
}

export default App
