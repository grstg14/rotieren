import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagramSquare, faItunes, faSpotify, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

library.add(faInstagramSquare, faItunes, faSpotify, faFacebook, faDollarSign)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
