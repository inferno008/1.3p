
<template>
  <div>
    
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/priceList">Price List</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>




