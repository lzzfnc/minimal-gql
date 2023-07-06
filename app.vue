<template>
  <div>
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
    <button @click="activeCustomer">Active Customer</button>
  </div>
</template>

<script setup>
// useGqlHeaders({ "vendure-token": "Switzerland" });

const login = async () =>
  await GqlLogin().then((r) => {
    console.log(r);
  });

const logout = async () => await GqlLogout().then((r) => console.log(r));

const activeCustomer = async () => await GqlActiveCustomer().then((r) => console.log(r));
</script>
