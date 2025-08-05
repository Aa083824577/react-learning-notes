import { use } from "react";

const Userinfo = () => {
    const users = [
  {
    username: "brahim_b",
    location: "Agadir, Morocco",
    email: "brahim@example.com"
  },
  {
    username: "amin_dev",
    location: "Casablanca, Morocco",
    email: "amin@example.com"
  },
  {
    username: "sara.codes",
    location: "Rabat, Morocco",
    email: "sara@example.com"
  },
  {
    username: "youssef99",
    location: "Fes, Morocco",
    email: "youssef99@example.com"
  },
  {
    username: "aymane_uiux",
    location: "Marrakech, Morocco",
    email: "aymane@example.com"
  },
  {
    username: "fatima_js",
    location: "Tangier, Morocco",
    email: "fatima@example.com"
  }
];
  return (
    <main>
        {users.map(user =>(
            <ul >
                <li>{user.username}</li>
                <li>{user.location}</li>
                <li>{user.email}</li>
            </ul>
        ))}
    </main>
  );
};
export default Userinfo;
