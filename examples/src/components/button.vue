<template>
  <div>
    <a-button type="primary" loading> 是颠三倒四 </a-button>
    <a-button type="primary" size="large"
      >是颠三倒四
      <template #icon> <a-icon icon="dynamic-avatar-1|svg"></a-icon></template>
    </a-button>
    <a-button round>是颠三倒四</a-button>
    <a-button round disabled>是颠三倒四</a-button>
    <AButton type="primary" disabled>是颠三倒四</AButton>
    <AButton type="text">是颠三倒四</AButton>
    <AButton type="text" disabled>是颠三倒四</AButton>
    <ElButton>jjjjj</ElButton>
  </div>
</template>
<script lang="ts" setup>
  import { AButton, AIcon } from '@a-ui/components';
  import { ElButton } from 'element-plus';
  console.log(AButton);
</script>
