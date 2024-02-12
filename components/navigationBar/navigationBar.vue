<template>
  <div class="flex justify-between gap-3 w-full border-2 border-black">
    <a class="skip-to-content-link" href="#main"> Skip to content </a>
    <div class="flex">
      <button class="navigation-item" @click="() => push('/')">
        <span>Home</span>
      </button>
      <button class="navigation-item" @click="() => push('/nutrition')">
        <span>Nutrition</span>
      </button>
      <button
        class="navigation-item"
        @click="() => push('/dishes-ingredients')"
      >
        <span>Dishes & Ingredients</span>
      </button>
    </div>

    <div class="flex">
      <div class="p-2 border-l-2 border-black h-full">Welcome!</div>
      <button class="p-2 border-l-2 border-black" @click="handleLogOut">
        Log out
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { push } = useRouter();
const handleLogOut = () => {
  // cookie should be removed by api?
  push('/login');
};
</script>

<style scoped>
@import './navigationBar.css';
</style>
