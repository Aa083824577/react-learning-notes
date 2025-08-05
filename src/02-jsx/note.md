so here ae the JSX rules :

JSX (JavaScript XML) looks like HTML, but it has **some important rules** that make it work correctly inside JavaScript. Here are the key **JSX rules** every developer should know:

---

## ✅ Top JSX Rules (with examples)

### 1. **Only One Parent Element**

Every JSX block must return **one parent element**.

✅ Correct:

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

❌ Incorrect:

```jsx
return (
  <h1>Hello</h1>
  <p>World</p>
);
```

➡️ Use a fragment (`<> </>`) if you don’t want extra HTML:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);
```

---

### 2. **Use `className` Instead of `class`**

JS uses `class` as a keyword, so JSX uses `className` for CSS classes.

```jsx
<div className="container">Hello</div>
```

---

### 3. **Use `camelCase` for Event Handlers and Attributes**

JSX uses camelCase for all attributes and events.

✅ Correct:

```jsx
<button onClick={handleClick}>Click me</button>
```

❌ Incorrect:

```jsx
<button onclick="handleClick()">Click me</button>
```

---

### 4. **JSX Must Be Closed**

All tags (even self-closing) must be closed properly.

✅ Correct:

```jsx
<img src="logo.png" alt="Logo" />
<br />
```

❌ Incorrect:

```jsx
<img src="logo.png">
```

---

### 5. **Insert JavaScript in `{}`**

You can write JS expressions inside JSX using `{}`.

```jsx
const name = "Brahim";

return <h1>Hello, {name}!</h1>;
```

You can also do math or call functions:

```jsx
<p>{5 + 5}</p>
```

---

### 6. **Use `style` as an Object**

Inline styles are written in **camelCase** object format.

```jsx
<div style={{ backgroundColor: "red", fontSize: "16px" }}>
  Styled text
</div>
```

---

### 7. **Ternary Operators for Conditional Rendering**

Use `condition ? true : false` inside JSX.

```jsx
{isLoggedIn ? <p>Welcome!</p> : <p>Please log in.</p>}
```

---

### 8. **Use `.map()` for Rendering Lists**

When rendering lists, use `.map()` and give each item a unique `key`.

```jsx
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}
```

---