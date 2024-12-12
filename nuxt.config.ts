export default defineNuxtConfig({
  app: {
    head: {
      title: '𝙈𝙊𝙍𝙏𝙀𝙇𝙀𝙉𝙏𝘼',
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, height=device-height, user-scalable=no, initial-scale=1'
        },
        {
          name: 'format-detection', content: 'telephone=no'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'SLOWDEATH'
        },
        {
          hid: 'og:type', property: 'og:type', content: 'website'
        },
        {
          hid: 'og:title', property: 'og:title', content: '𝙈𝙊𝙍𝙏𝙀𝙇𝙀𝙉𝙏𝘼'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'SLOWDEATH'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://mortelenta.org/share.png'
        },
        {
          hid: 'og:url', property: 'og:url', content: 'https://mortelenta.org'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:title', name: 'twitter:title', content: '𝙈𝙊𝙍𝙏𝙀𝙇𝙀𝙉𝙏𝘼'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'SLOWDEATH'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://mortelenta.org/share.png'
        },
      ],
      script: [
      ],
      link: [
        { rel: 'icon', href: '/favicon.svg' }
      ],
      style: [
      ],
      noscript: [
        { children: 'Javascript is required' }
      ],
      bodyAttrs: {
        class: 'bg-zinc-900 font-sans pattern select-none'
      }
    }
  },
  css: [
    '~/assets/css/application.scss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
