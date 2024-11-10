<template>
    <div class="max-w-lg mx-auto mt-10 p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
      <h2 class="text-3xl font-semibold mb-6 text-center text-gray-800">Cadastrar</h2>
  
      <div v-if="successMessage" class="bg-green-100 text-green-800 p-4 mb-4 rounded-md">
        <p>{{ successMessage }}</p>
      </div>
  
      <div v-if="errorMessage" class="bg-red-100 text-red-800 p-4 mb-4 rounded-md">
        <p>{{ errorMessage }}</p>
      </div>
  
      <form @submit.prevent="register" class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
          <input v-model="name" id="name" type="text" required
            class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
        </div>
  
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">E-mail</label>
          <input v-model="email" id="email" type="email" required
            class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
        </div>
  
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Senha</label>
          <input v-model="password" id="password" type="password" required
            class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
        </div>
  
        <button type="submit" class="w-full py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Registrar
        </button>
      </form>
  
      <p class="mt-6 text-center text-sm text-gray-600">
        Já tem uma conta? 
        <router-link to="/login" class="text-blue-600 hover:text-blue-800">Entrar</router-link>
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import authService from '@/services/auth';  
  import { useRouter } from 'vue-router';
  
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const successMessage = ref('');
  const errorMessage = ref('');
  const router = useRouter();
  
  const register = async () => {
    try {
      await authService.register(name.value, email.value, password.value);  
      successMessage.value = 'Cadastro realizado com sucesso! Agora, por favor, faça login.';
      errorMessage.value = '';  
      router.push('/login');  
    } catch (error) {
      successMessage.value = ''; 
      errorMessage.value = error.message || 'Ocorreu um erro durante o cadastro.'; 
    }
  };
  </script>
  
  <style scoped>

  </style>
  