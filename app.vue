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
    <div class="pt-12 pb-4 flex gap-x-2">
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
    <template v-if="showParagraph(new Date('2024-07-26'))">
      <p>
        Neue Single „Stiller Moment“ ab 26.07.2024
      </p>
      <p>
        pre-save here (link über pre-save here: <nuxt-link
          class="underline"
          to="https://bfan.link/stiller-moment"
        >
          https://bfan.link/stiller-moment
        </nuxt-link>)
      </p>
    </template>
    <p class="mt-4">
      Album „Immer Zurück“ ab 16.08.2024
    </p>
    <p
      v-show="showParagraph(new Date('2024-08-13'))"
      class="mt-2"
    >
      Album Release Party am 13.08.2024 im
      <nuxt-link
        target="_blank"
        class="underline"
        to="https://www.facebook.com/share/crhpn74is9C5KuZC/"
      >B72 </nuxt-link>
      Wien
    </p>
    <p class="mt-4">
      contact: <a href="mailto:maurice@rotieren.com">maurice@rotieren.com</a>
    </p>
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
import { computed } from 'vue'

const showParagraph = function (limit: Date): boolean {
  return new Date() <= limit
}
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
    url: 'https://open.spotify.com/intl-de/artist/3pIhrraIz88BWaa0Rm1zoa',
    icon: 'fa-brands fa-spotify',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/at/artist/rotieren/1752904846',
    icon: 'fa-brands fa-apple',
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
