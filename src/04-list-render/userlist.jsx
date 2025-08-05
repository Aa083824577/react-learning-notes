const Userlist = () =>{
    const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
    { id: 5, name: "Elias", age: 29 },
    { id: 6, name: "Fatima", age: 24 },
    { id: 7, name: "George", age: 33 },
    ];
    return (
        <main>
            {users.map(user => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <h2>{user.age}</h2>
                <br />
                </div>
            ))}
        </main>
    )
}

export default Userlist  ;