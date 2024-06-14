<template>
  <div class="flex flex-col bg-black h-screen w-screen text-white items-center justify-center py-12">
    <img src="assets/img/rotieren.jpg" class="w-96"/>
    <div class="py-12 flex gap-x-2">
      <template v-for="social in socialLinks" :key="social.url">
        <NuxtLink :to="social.url" target="_blank" v-if="social?.url" >
          <font-awesome-icon :icon="social.icon" size="xl" />
        </NuxtLink>
      </template>
    </div>
    <p>contact: <a href="mailto:maurice@rotieren.com">maurice@rotieren.com</a></p>
    <p><NuxtLink to="https://www.sissirecords.com" target="_blank">www.sissirecords.com</NuxtLink></p>
  </div>
</template>

<script lang="ts" setup>

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/rotieren__',
    icon: 'fa-brands fa-instagram-square',
  },
  {
    name: 'iTunes',
    url: '',
    icon: 'fa-brands fa-itunes',
  },
  {
    name: 'Spotify',
    url: '',
    icon: 'fa-brands fa-spotify',
  },
  {
    name: 'Facebook',
    url: '',
    icon: 'fa-brands fa-facebook',
  },
  {
    name: 'Hoanzl',
    url: 'https://www.hoanzl.at',
    icon: 'fas fa-dollar-sign',
  },

];
</script>