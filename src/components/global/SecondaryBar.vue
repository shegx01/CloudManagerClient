<template>
  <div
    class="h-12  flex px-16 bg-white items-stretch justify-between flex-wrap flex-auto"
  >
    <!-- current page -->
    <div class="relative self-center flex">
      <h2 class="text-gray-800 capitalize font-medium">dashboard</h2>
      <span class="block h-1 bg-gray-800 w-full absolute -bottom-3"></span>
    </div>
    <!-- secondary menu -->
    <div v-if="subMenu" class="flex">
      <a
        v-for="(item, idx) in menuList"
        :key="idx"
        href="#"
        class="text-gray-800 font-semibold uppercase self-center py-3 px-4"
        :class="[idx === 0 ? 'bg-gray-darkest text-gray-lightest' : '']"
        >{{ item }}</a
      >
    </div>
    <!-- right control -->
    <div class="flex self-center ml-auto lg:ml-0">
      <!-- location filter -->
      <div class="flex items-center py-3">
        <span class="text-gray-600 text-xs capitalize font-medium"
          >filtering location:</span
        >
        <div class="flex ml-4 items-center">
          <div class="mr-2">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.875 8.625h-3.75l-4.5-5.25h12.75l-4.5 5.25z"
                fill="#9FB3C8"
              />
              <path
                d="M10.875 14.25l-3.75 2.25V8.625h3.75v5.625zM15.563 3.375H2.437a.577.577 0 01-.562-.563c0-.3.263-.562.563-.562h13.124c.3 0 .563.263.563.563 0 .3-.262.562-.563.562z"
                fill="#627D98"
              />
            </svg>
          </div>
          <span class="text-gray-700 uppercase font-semibold">{{
            currentFilter
          }}</span>
          <div class="ml-2">
            <svg class="w-4 h-4 fil-current" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 5.25l5 4.5 5-4.5 1.667 1.5-6.667 6-6.667-6L5 5.25z"
                fill="#486581"
              />
            </svg>
          </div>
        </div>
      </div>
      <!-- download selector -->
      <a class="flex items-center ml-4">
        <div class="text-gray-700">
          <svg class="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.415 7.5c-.863 0-1.569.675-1.569 1.5s.706 1.5 1.57 1.5c.862 0 1.569-.675 1.569-1.5s-.707-1.5-1.57-1.5zm4.708 0c-.863 0-1.57.675-1.57 1.5s.707 1.5 1.57 1.5c.863 0 1.57-.675 1.57-1.5s-.707-1.5-1.57-1.5zm-9.415 0c-.863 0-1.57.675-1.57 1.5s.707 1.5 1.57 1.5c.863 0 1.569-.675 1.569-1.5s-.706-1.5-1.57-1.5z"
            />
          </svg>
        </div>
        <span class="text-gray-700 text-lg px-1">{{
          currentDownloadFormat
        }}</span>
        <div class="text-gray-700">
          <svg class="w-5 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.829 12.375h-.294V11.25h.294a2.723 2.723 0 001.903-.67 2.488 2.488 0 00.85-1.76 2.47 2.47 0 00-.7-1.82 2.704 2.704 0 00-1.841-.812h-.506l-.06-.462a3.89 3.89 0 00-1.367-2.446 4.231 4.231 0 00-2.716-.977c-1 0-1.965.347-2.716.977a3.889 3.889 0 00-1.368 2.446l-.012.462H4.79A2.704 2.704 0 002.95 7a2.47 2.47 0 00-.701 1.82c.028.67.334 1.304.85 1.76a2.723 2.723 0 001.904.67h.294v1.124h-.294a3.925 3.925 0 01-2.55-.952 3.602 3.602 0 01-1.231-2.336 3.538 3.538 0 01.717-2.525 3.845 3.845 0 012.299-1.42 5.034 5.034 0 011.85-2.876A5.45 5.45 0 019.414 1.14a5.45 5.45 0 013.33 1.126 5.034 5.034 0 011.849 2.875 3.845 3.845 0 012.299 1.42c.557.729.812 1.628.717 2.526a3.603 3.603 0 01-1.231 2.336 3.925 3.925 0 01-2.55.952z"
            />
            <path
              d="M10.004 14.72V7.876H8.827v6.846l-1.524-1.452-.83.793 2.942 2.813 2.943-2.813-.83-.793-1.524 1.452z"
            />
          </svg>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondaryBar',
  props: {
    subMenu: {
      default: false,
      type: Boolean
    },
    currentFilter: {
      default: 'us west',
      type: String
    }
  },
  data() {
    return {
      menuList: ['aws', 'azure', 'gcd', 'oci', 'ibm', 'alibaba'],
      currentDownloadFormat: 'csv'
    }
  }
}
</script>
