<template>
  <div>
    <!-- secondary bar -->
    <SecondaryBar :subMenu="true" :currentDir="currentDir" />

    <div class="mt-20 bg-white py-4 pb-6 lg:mx-2 lg:border lg:border-gray-200">
      <div class="flex justify-between w-full max-w-lg px-4 py-4 lg:max-w-lg">
        <div
          class="font-semibold text-gray-700  text-xs capitalize whitespace-no-wrap flex"
        >
          currently viewing as
          <span
            class="px-2 text-sm font-bold uppercase tracking-wide text-gray-800"
            >monthly</span
          >
          <div>
            <span
              class="font-semibold text-gray-700  text-xs border-b pb-px2 border-gray-700"
              >change</span
            >
          </div>
        </div>
        <div
          class="px-4 py-1 rounded flex items-center font-semibold bg-gray-lightest tracking-wider"
        >
          <span
            class="text-xs font-semibold tracking-wider text-gray-800 uppercase"
            >services</span
          >
          <div class="ml-4">
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
      <div class="flex flex-wrap w-full">
        <div
          class="pt-4 flex w-full flex-shrink-0 mx-4 justify-around  lg:w-2/5"
        >
          <!-- monthly spend card-->
          <div class="flex flex-col max-w-lg rounded shadow items-center pt-4">
            <div class="flex w-full ml-6">
              <span
                class="text-gray-700 text-xs py-px2  rounded-full uppercase font-semibold mr-auto"
              >
                spent this month
              </span>
            </div>
            <div
              class="pt-2 mt-2 h-full flex flex-col w-full items-center bg-success-lightest px-4"
            >
              <span class="-ml-16 text-gray-800 font-semibold text-2xl"
                >$2,343,00</span
              >
              <div
                class=" ml-8 mb-6
              
               flex flex-col"
              >
                <div class="font-semibold text-sm text-gray-700 mt-2">
                  You saved total of
                  <span
                    class="px-1 py-px-1 mx-1 rounded text-success-800 border bg-success-200"
                    >$432</span
                  >
                  on
                </div>
                <span class="font-semibold text-sm text-gray-700 mt-1"
                  >aws cloudfront and aws redshift</span
                >
              </div>
            </div>
          </div>
          <!-- highest spent card card-->

          <div class="flex flex-col max-w-lg rounded shadow items-center pt-4">
            <div class="flex w-full ml-6">
              <span
                class="text-gray-700 text-xs py-px2  rounded-full uppercase font-semibold mr-auto"
              >
                spent this month
              </span>
            </div>
            <div
              class="pt-2 mt-2 h-full flex flex-col w-full items-center bg-success-lightest px-4"
            >
              <span class="-ml-16 text-gray-800 font-semibold text-2xl"
                >$2,343,00</span
              >
              <div
                class=" ml-8 mb-6
              
               flex flex-col"
              >
                <div class="font-semibold text-sm text-gray-700 mt-2">
                  You saved total of
                  <span
                    class="px-1 py-px-1 mx-1 rounded text-success-800 border bg-success-200"
                    >$432</span
                  >
                  on
                </div>
                <span class="font-semibold text-sm text-gray-700 mt-1"
                  >aws cloudfront and aws redshift</span
                >
              </div>
            </div>
          </div>
        </div>
        <div>chart here</div>
      </div>
    </div>
  </div>
</template>

<script>
import SecondaryBar from '@/components/global/SecondaryBar.vue'
export default {
  name: 'costManagement',
  components: {
    SecondaryBar
  },
  data() {
    return {
      currentDir: 'cost management'
    }
  }
}
</script>
