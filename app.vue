<template>
  <div class="flex flex-col bg-black h-screen w-screen text-white items-center justify-center">
    <div class="px-12 lg:p-0">
      <NuxtImg
        provider="imagekit"
        src="/rotieren/rotieren.jpg"
        alt="Description of image"
        sizes="(max-width: 640px) 80vw, (max-width: 768px) 33vw, 33vw"
        class="w-auto lg:w-96 h-auto"
      />
    </div>
    <div class="py-12 flex gap-x-2">
      <template
        v-for="social in socialLinks"
        :key="social.url"
      >
        <NuxtLink
          v-if="social?.url"
          :to="social.url"
          target="_blank"
        >
          <font-awesome-icon
            :icon="social.icon"
            size="xl"
          />
        </NuxtLink>
      </template>
    </div>
    <p>contact: <a href="mailto:maurice@rotieren.com">maurice@rotieren.com</a></p>
    <p>
      <NuxtLink
        to="https://www.sissirecords.com"
        target="_blank"
      >
        www.sissirecords.com
      </NuxtLink>
    </p>
  </div>
</template>

<script lang="ts" setup>
const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/rotieren__',
    icon: 'fab fa-instagram-square',
  },
  {
    name: 'iTunes',
    url: 'https://bfan.link/ich-will-nicht-dass-james-hetfield-stirbt',
    icon: 'fa-brands fa-itunes',
  },
  {
    name: 'Spotify',
    url: 'https://bfan.link/ich-will-nicht-dass-james-hetfield-stirbt',
    icon: 'fa-brands fa-spotify',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/rotieren',
    icon: 'fa-brands fa-facebook',
  },
  {
    name: 'Hoanzl',
    url: 'https://www.hoanzl.at',
    icon: 'fa-solid fa-dollar-sign',
  },
]
</script>
