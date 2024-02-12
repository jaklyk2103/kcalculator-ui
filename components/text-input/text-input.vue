<template>
  <div>
    <label :htmlFor="props.id">
      {{ props.label }}
    </label>
    <input
      :id="props.id"
      :type="props.inputType || 'text'"
      :value="props.value"
      :onChange="
        (event: Event) =>
          $emit('change', (event?.target as HTMLInputElement)?.value || '')
      "
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  inputType: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
});
</script>
