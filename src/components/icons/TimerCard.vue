<template>
  <div class="timer">
    <div class="clock" :class="{activeClock: isActive}">
      <span v-if="getHours(time)">{{ getHours(time) }}:</span>
      <span v-if="getMinutes(time)">{{ getMinutes(time) }}:</span>
      <span>{{ getSeconds(time)}}</span>
    </div>
    <div class="divider" :class="{activeDivider: isActive}"></div>
    <div class="controls">
      <button class="controls__btn" @click="startTimer">
        <SvgIcon :is-active="isActive" :icon-type="isActive ? 'pause' : 'play'"/>
      </button>
      <button class="controls__btn" @click="stopTimer">
        <SvgIcon :is-active="isActive" :icon-type="'stop'"/>
      </button>
    </div>
  </div>
</template>

<script setup>
import {onUpdated, ref,} from 'vue'
import SvgIcon from '../SvgIcon';
import {getHours, getMinutes, getSeconds} from "@/utils";

let isActive = ref(false);
let time = ref(0);

defineProps({
  id: {
    type: Number,
    default: 0,
  }
})

function startTimer() {
  isActive.value = !isActive.value;
}

function stopTimer() {
  isActive.value = false;
  time.value = 0;
}

onUpdated(() => {

  if (isActive.value) {
    setTimeout(() => {
      if (isActive.value) { //prevent increment after stop
        time.value++
      }
    }, 1000)
  }
})

</script>

<style scoped>

.timer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}

.clock {
  padding: 20px;
  color: var(--color-text-off);
  font-size: 22px;
  line-height: 21px;
  text-align: center;
}

.activeClock {
  color: var(--color-text-on);
}

.divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-text-off);
}

.activeDivider {
  background-color: var(--color-text-on);
}

.controls {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
}

.controls__btn {
  display: block;
  background-color: transparent;
}

</style>