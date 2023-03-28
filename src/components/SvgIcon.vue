<script setup>
import IconPlus from "@/components/icons/IconPlus";
import IconPause from "@/components/icons/IconPause";
import IconPlay from "@/components/icons/IconPlay";
import IconStop from "@/components/icons/IconStop";

const icons = {
  plus: IconPlus,
  play: IconPlay,
  pause: IconPause,
  stop: IconStop,
}

defineProps({
      isActive: {
        type: Boolean,
        default: false,
      },
      iconType: {
        type: () => 'plus' | 'play' | 'pause' | 'stop',
        default: 'plus'
      }
    }
)
</script>

<template>
  <component
      :is="icons[iconType]"
      :class="{active: isActive}"
      role="img"
  />
</template>

<style scoped>

svg {
  height: 20px;
  width: 20px;
  fill: var(--color-text-off);
}

.active {
  fill: var(--color-text-on);
}

</style>