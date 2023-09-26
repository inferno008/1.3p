<!-- Contact.vue -->

<template>
    <div>
      <header>
        <h1>Contact Us</h1>
        <p>Get in Touch with Us</p>
      </header>
  
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/priceList">Price List</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
  
      <main>
        <section class="contact-details">
          <h2>Contact Information</h2>
          <ul>
            <li><strong>Name:</strong> Buvan</li>
            <li><strong>Email:</strong> mbuvan75@gmail.com</li>
            <li><strong>Phone Number:</strong> 0276717480</li>
          </ul>
        </section>
  
        <section class="contact-form">
          <h2>Contact Us</h2>
          <form>
            <label for="inquiry">Your Inquiry:</label>
            <textarea id="inquiry" name="inquiry" rows="4" required></textarea>
  
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
  
      <footer>
        <p>&copy; 2023 Car Detailing Website</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact',
  }
  </script>
  
  <style scoped>
  /* CSS for the Contact component */
  header {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    text-align: center;
  }
  
  nav ul {
    list-style-type: none;
    background-color: #444;
    text-align: center;
    padding: 1rem;
  }
  
  nav li {
    display: inline;
    margin: 0 1rem;
  }
  
  nav a {
    text-decoration: none;
    color: #fff;
  }
  
  .contact-details, .contact-form {
    background-color: #fff;
    padding: 2rem;
    border-radius: 5px;
    margin: 2rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  ul li {
    margin: 0.5rem 0;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    background-color: #333;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #444;
  }
  </style>
  