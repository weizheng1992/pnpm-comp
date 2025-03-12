<!-- button.vue -->
<template>
  <button class="a-button" :class="styleClass" @click="handleClick">
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading" />
      <a-icon v-else :icon="loadingIcon" :size="loadingSize" class="loading"> </a-icon>
    </template>
    <el-icon v-else-if="icon || $slots.icon">
      <a-icon :icon="icon" v-if="icon" />
      <slot v-else name="icon" />
    </el-icon>
    <slot />
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { bProps, buttonEmits } from './types';
  import AIcon from '../icon';

  import './style/index.less';

  defineOptions({
    name: 'AButton',
  });

  const buttonProps = defineProps(bProps);
  const emit = defineEmits(buttonEmits);

  const styleClass = computed(() => {
    return {
      [`a-button--${buttonProps.type}`]: buttonProps.type,
      'is-plain': buttonProps.plain,
      'is-round': buttonProps.round,
      'is-disabled': buttonProps.disabled,
      'is-loading': buttonProps.loading,
      [`a-button--${buttonProps.size}`]: buttonProps.size,
    };
  });

  const handleClick = (evt: MouseEvent) => {
    emit('click', evt);
  };
</script>
