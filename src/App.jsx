import User from './05-props/props'
function App() {
const users = [
  {
    img: "https://via.placeholder.com/150",
    name: "pc",
    age: 17,
    isMarried: "yes",
    hobbies: ["coding"]
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Sara",
    age: 22,
    isMarried: "no",
    hobbies: ["drawing", "traveling"]
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Ali",
    age: 28,
    isMarried: "yes",
    hobbies: ["gaming", "fitness"]
  }
];
  return (

    <div>
      {users.map((user , index) => (
      <User
    
        img = {user.img}  
        name = {user.name}
        age = {user.age}
        isMarried = {user.isMarried}
        hobbies = {user.hobbies}
        />
      ))}
      </div>
  )
}

export default App;
