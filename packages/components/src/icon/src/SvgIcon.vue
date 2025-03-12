<template>
  <svg :class="[$attrs.class, spin && 'svg-icon-spin']" :style="getStyle" aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>
<script setup lang="ts">
  import type { CSSProperties } from 'vue';
  import { computed } from 'vue';

  import { svgProps } from '../types';

  const props = defineProps(svgProps);
  const symbolId = computed(() => `#${props.prefix}-${props.name}`);

  const getStyle = computed((): CSSProperties => {
    const { size } = props;
    let s = `${size}`;
    s = `${s.replace('px', '')}px`;
    return {
      width: s,
      height: s,
    };
  });
</script>
../types
