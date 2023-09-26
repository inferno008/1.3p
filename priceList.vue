<!-- PriceList.vue -->

<template>
    <div>
      <header>
        <h1>Car Detailing Price List</h1>
        <p>Explore Our Competitive Prices</p>
      </header>
  
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/priceList">Price List</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
  
      <main>
        <section class="price-list">
          <h2>Service Price List</h2>
          <table>
            <thead>
              <tr>
                <th>Car Brand</th>
                <th>Model Type</th>
                <th>Interior Detailing</th>
                <th>Paint Works</th>
                <th>Additional Stickering</th>
                <th>Spare Parts</th>
              </tr>
            </thead>
            <tbody>
              <!-- Sample data -->
              <tr>
                <td>Toyota</td>
                <td>Camry</td>
                <td>$100</td>
                <td>$150</td>
                <td>$50</td>
                <td>$80</td>
              </tr>
              <!-- Add more rows with data here -->
              <tr>
                <td>Ford</td>
                <td>Mustang</td>
                <td>$120</td>
                <td>$180</td>
                <td>$60</td>
                <td>$90</td>
              </tr>
              <tr>
                <td>Honda</td>
                <td>Accord</td>
                <td>$110</td>
                <td>$160</td>
                <td>$55</td>
                <td>$85</td>
              </tr>
              <tr>
                <td>Chevrolet</td>
                <td>Cruze</td>
                <td>$95</td>
                <td>$140</td>
                <td>$45</td>
                <td>$75</td>
              </tr>
              <tr>
                <td>BMW</td>
                <td>3 Series</td>
                <td>$130</td>
                <td>$200</td>
                <td>$70</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Audi</td>
                <td>A4</td>
                <td>$125</td>
                <td>$190</td>
                <td>$65</td>
                <td>$95</td>
              </tr>
            </tbody>
          </table>
          <p>If you are satisfied with our prices, please don't hesitate to contact the owner for more details and appointments.</p>
        </section>
      </main>
  
      <footer>
        <p>&copy; 2023 Car Detailing Website</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PriceList',
  }
  </script>
  
  <style scoped>
  /* CSS for the PriceList component */
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
  
  .price-list {
    background-color: #fff;
    padding: 2rem;
    border-radius: 5px;
    margin: 2rem;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }
  
  table th, table td {
    padding: 0.5rem;
    text-align: center;
    border: 1px solid #ccc;
  }
  
  table th {
    background-color: #333;
    color: #fff;
  }
  
  table tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  p {
    text-align: center;
    margin-top: 1rem;
  }
  
  footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
  }
  </style>
  
  
  