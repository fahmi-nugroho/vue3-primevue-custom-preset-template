<script setup lang="ts">
import { updatePreset } from '@primeuix/themes'
import chroma from 'chroma-js'

type ColorScale = {
  [key: number]: string
}

const generateColorScale = (baseHex: string): ColorScale => {
  const scale = chroma.scale(['white', baseHex, 'black']).mode('lab')
  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
  const result: ColorScale = {}

  steps.forEach((step, index) => {
    const t = index / (steps.length - 1)
    result[step] = scale(t).hex()
  })

  return result
}

const changePrimaryColor = (hex: string) => {
  console.log('🚀 ~ changePrimaryColor ~ hex:', hex)
  const generatedScale = generateColorScale(hex)

  updatePreset({
    semantic: {
      primary: generatedScale,
    },
  })
}

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('my-app-dark')
}
</script>

<template>
  <h1 class="text-primary">You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <Select
    :options="[
      { name: 'Surabaya', code: 'SBY' },
      { name: 'Mojokerto', code: 'MJK' },
      { name: 'Sidoarjo', code: 'SDA' },
      { name: 'Malang', code: 'MLG' },
      { name: 'Lamongan', code: 'LMG' },
    ]"
    optionLabel="name"
    placeholder="Select a City"
    class="w-full md:w-56"
  />
  <ColorPicker @update:modelValue="changePrimaryColor" />

  <Button label="Toggle Dark Mode" @click="toggleDarkMode()" />

  <div class="text-test-300">Text dengan warna custom</div>
</template>

<style scoped></style>
