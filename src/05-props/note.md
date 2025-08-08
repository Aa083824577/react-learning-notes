### 📘 `note.md` – React Props Example Documentation

```md
# 📦 React Props Example – User Card List

This example demonstrates how to use **props** in React by building a simple **User Card List**.  
It showcases:

- JSX
- Functional components
- Props passing
- `.map()` to render a list of components
- Folder structure for modular practice

---

## 📁 Folder Structure

```

src/
├── 05-props/
│   ├── props.jsx              # The User component
│   └── Userprop.jsx    # Main app logic for this example
├── App.jsx                    # Main entry (temporary usage)

````

---

## 📄 File: `props.jsx` – Reusable User Component

```jsx
const User = (props) => {
  return (
    <section>
      <img src={props.img} alt={props.name} width={200} />
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Is Married: {props.isMarried}</h3>
      <h4>Hobbies: {props.hobbies.join(", ")}</h4>
    </section>
  );
};

export default User;
````

---

## 📄 File: `Userprop.jsx` – Renders Multiple Users

```jsx
import User from './props';

const Userprop = () => {
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
      {users.map((user, index) => (
        <User
          key={index}
          img={user.img}
          name={user.name}
          age={user.age}
          isMarried={user.isMarried}
          hobbies={user.hobbies}
        />
      ))}
    </div>
  );
};

export default Userprop;
```

---

## 🧪 Usage in `App.jsx`

To test it, import and render inside `App.jsx`:

```jsx
import Userprop from './05-props/Userprop';

function App() {
  return <Userprop />;
}

export default App;
```

---

## 🎯 What You Learned

✅ How to:

* Create a reusable component with props
* Pass props dynamically from an array
* Use `.map()` to loop over data and generate multiple components
* Structure your project into folders for better organization

---

## 📝 Tips

* Always add a `key` when mapping components
* Keep learning examples in separate folders
* Use `.join(", ")` to render arrays like hobbies nicely

```