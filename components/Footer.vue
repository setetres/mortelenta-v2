<template>
  <footer aria-labelledby="footer-heading" class="flex flex-col flex-1">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="flex md:items-center justify-between mt-6 pt-6 md:mt-12 md:pt-12 border-t border-zinc-700">
      <div class="flex items-center space-x-2">
        <FooterLink
          label="Sete Três"
          url="https://setetr.es"
        >
          <svg class="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0H3V3H5V4H3H2V0ZM6 2V3H5V2H6ZM10 3H8V0H7V1H6V2H7V5H6V6H3V7H2V8H1V9H2V10H1V11H2V14H3V11H4V10H3V9H4V8H3V7H6V6H7V5H8V4H10V3ZM11 2V3H10V2H11ZM12 5V2H11V1H12V0H13V5H12ZM11 6V5H12V6H11ZM11 7H10H9V6H10H11V7ZM12 8H11V7H12V8ZM13 9V8H12V9V11H11V10H10V9H8V8H7V16H8V10H10V11H11V12H12V13H13V9ZM3 8V9H2V8H3ZM3 10H2V11H3V10ZM15 6H14V7H15V6Z"/>
          </svg>
        </FooterLink>
        <span class="hidden sm:inline text-xs text-zinc-400 uppercase">
          Since 2008 — Media, Unlimited.
        </span>
      </div>
      <div class="flex items-center justify-start sm:justify-end space-x-2">
        <span class="p-1 text-white">
          <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 640 512">
            <path d="M614.7 .7c5.6 1.2 10.5 3.8 14.5 7.3c8.4 7.4 12.6 19 10.1 30.7l-4.8 22.6L577.6 326.7l-34.3 160c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38l26-121.3H416c-17.7 0-32-14.3-32-32s14.3-32 32-32H520.4L569 61.3l7.7-36 0 0L582.1 0H608c2.2 0 4.5 .2 6.7 .7zM352 0H549.4l-4 18.6L508.3 192H12.7C5.7 192 0 186.3 0 179.3c0-2.1 .5-4.1 1.6-6C15 151.1 114.8 0 352 0z"/>
          </svg>
        </span>
      </div>
    </div>
  </footer>
</template>
