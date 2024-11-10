<template>
<div>

  <ul>
    <li><router-link :to="{name: 'home'}">Home</router-link></li>  
    <li><router-link :to="{name: 'login'}">Login</router-link></li> 
    <li><router-link :to="{name: 'register'}">Registro</router-link></li>  
  </ul>
    <router-view/>

</div>
</template>

<script setup>

</script>