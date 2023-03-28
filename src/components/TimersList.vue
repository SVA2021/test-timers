<script setup>
import {ref,} from 'vue'
import SvgIcon from "@/components/SvgIcon";
import TimerCard from "@/components/icons/TimerCard";

const timerList = ref([]);

function addTimer() {
  timerList.value.push({id: Date.now()})
}

</script>

<template>
  <div class="wrapper">
    <TimerCard v-for="timer in timerList" class="card" :id="timer.id" :key="timer.id"/>
    <button class="card addBtn" @click="addTimer">
      <SvgIcon :icon-type="'plus'"/>
    </button>
  </div>
</template>

<style scoped>

.wrapper {
  margin: 0 auto;
  max-width: 1200px;
  padding: 72px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 45px 50px;
}

.card {
  width: 225px;
  height: 120px;
  background-color: var(--color-bg-card);
  color: var(--color-text-off);
  fill: var(--color-text-off);
}

.addBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
}

</style>