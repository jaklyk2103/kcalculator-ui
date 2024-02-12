<template>
  <html lang="en">
    <body>
      <main id="main">
        <slot />
      </main>
    </body>
  </html>
</template>

<script setup lang="ts">
useHead({
  title: 'Kcalculator App',
});
</script>
