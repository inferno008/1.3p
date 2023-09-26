<!-- Home.vue -->

<template>
  <div>
    <header>
      <h1>Welcome to Our Car Detailing Website</h1>
      <p>Discover the Ultimate Car Care Experience</p>
    </header>

    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/priceList">Price List</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>

    <main>
      <section class="introduction">
        <h2>About Us</h2>
        <p>Welcome to our car detailing website, your one-stop destination for professional car care and detailing services. We take pride in providing top-notch care for your vehicles, leaving them looking as good as new.</p>
        <p>Our team of experienced technicians is dedicated to delivering exceptional results, whether it's a thorough interior cleaning, exterior waxing, or paint correction. We use state-of-the-art equipment and premium products to ensure your car receives the best treatment.</p>
        <p>Explore our services and pricing, and don't hesitate to get in touch if you have any questions or would like to schedule an appointment. We look forward to serving you and your beloved vehicles!</p>
      </section>
    </main>

    <footer>
      <p>&copy; 2023 Car Detailing Website</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
/* CSS for the Home component */
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

.introduction {
  background-color: #fff;
  padding: 2rem;
  border-radius: 5px;
  margin: 2rem;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
}
</style>

