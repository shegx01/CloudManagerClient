<template>
  <div class="bg-gray-darkest py-0 px-4 h-16 flex items-center relative">
    <!-- App logo here -->
    <a class="font-bold text-gray-lightest text-xl capitalize pr-4" href="#">
      cloud manager
    </a>
    <!-- Navigation Menu -->
    <div class="flex items-center px-4 border-l border-r border-gray-900">
      <span class="font-bold capitalize text-gray-600 text-xl">Dashboard</span>
      <button
        @click="toggleNavOpen"
        class="text-gray-600 pl-5 lg:pl-8 cursor-pointer focus:outline-none"
      >
        <svg
          class="w-5 h-5 fill-current transform"
          :class="[isNavOpen ? '-rotate-90' : '']"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 5.833l5 5 5-5L16.667 7.5 10 14.167 3.333 7.5 5 5.833z"
          />
        </svg>
      </button>
      <nav
        v-if="isNavOpen"
        class=" absolute w-full max-w-md shadow-md mt-32 rounded-md overflow-hidden "
      >
        <div class=" flex flex-col text-sm items-center">
          <!-- instance one -->
          <div
            class="pt-3 flex justify-between w-full text-gray-800 bg-white capitalize"
          >
            <a
              href="#"
              class="ml-3 flex items-center text-sm font-semibold whitespace-no-wrap w-1/2 pl-2 py-2 rounded hover:bg-gray-200 hover:text-gray-800 bg-gray-800 text-gray-lightest"
            >
              Dashboard
            </a>
            <a
              href="#"
              class="mx-3 flex items-center text-sm font-semibold whitespace-no-wrap w-1/2 pl-2 py-1 rounded hover:bg-gray-200"
              >Account management
              <div class="ml-2">
                <svg
                  class="w-4 h-4 fil-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 5.25l5 4.5 5-4.5 1.667 1.5-6.667 6-6.667-6L5 5.25z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>
          </div>
          <!-- another instance  -->

          <div
            class="pt-3 flex justify-between w-full text-gray-800 bg-white capitalize"
          >
            <a
              href="#"
              class="ml-3 flex items-center text-sm font-semibold whitespace-no-wrap w-1/2 pl-2 py-2 rounded hover:bg-gray-200 hover:text-gray-800"
            >
              cost management
              <div class="ml-2 text-current">
                <svg
                  class="w-4 h-4 fil-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 5.25l5 4.5 5-4.5 1.667 1.5-6.667 6-6.667-6L5 5.25z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>
            <a
              href="#"
              class="mx-3 flex items-center text-sm font-semibold whitespace-no-wrap w-1/2 pl-2 py-1 rounded hover:bg-gray-200"
              >asset management
              <div class="ml-2">
                <svg
                  class="w-4 h-4 fil-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 5.25l5 4.5 5-4.5 1.667 1.5-6.667 6-6.667-6L5 5.25z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>
          </div>

          <!-- another instance  -->

          <div
            class="pt-3 flex justify-between w-full text-gray-800 bg-white capitalize"
          >
            <a
              href="#"
              class="ml-3 flex items-center text-sm font-semibold whitespace-no-wrap w-1/2 pl-2 py-2 rounded hover:bg-gray-200 hover:text-gray-800"
            >
              security & compliance
              <div class="ml-2 text-current">
                <svg
                  class="w-4 h-4 fil-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 5.25l5 4.5 5-4.5 1.667 1.5-6.667 6-6.667-6L5 5.25z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>
            <a
              href="#"
              class="mx-3 flex items-center text-sm font-semibold whitespace-no-wrap w-1/2 pl-2 py-1 rounded hover:bg-gray-200"
              >cloud monitoring
              <div class="ml-2">
                <svg
                  class="w-4 h-4 fil-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 5.25l5 4.5 5-4.5 1.667 1.5-6.667 6-6.667-6L5 5.25z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>
          </div>
          <!-- another instance  -->

          <div
            class="py-3 flex justify-between w-full text-gray-800 bg-white capitalize"
          >
            <a
              href="#"
              class="ml-3 flex items-center text-sm font-semibold whitespace-no-wrap w-1/2 pl-2 py-2 rounded hover:bg-gray-200 hover:text-gray-800"
            >
              cost optimisation
              <div class="ml-2 text-current">
                <svg
                  class="w-4 h-4 fil-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 5.25l5 4.5 5-4.5 1.667 1.5-6.667 6-6.667-6L5 5.25z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>
            <a
              href="#"
              class="mx-3 flex items-center text-sm font-semibold whitespace-no-wrap w-1/2 pl-2 py-1 rounded hover:bg-gray-200"
              >service monitoring
              <div class="ml-2">
                <svg
                  class="w-4 h-4 fil-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 5.25l5 4.5 5-4.5 1.667 1.5-6.667 6-6.667-6L5 5.25z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </div>
    <!-- messages -->
    <a class="text-gray-lightest mx-4 lg:ml-4 lg:mr-5 relative flex" href="#">
      <span class="">
        <svg class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.996.001C7.278-.063 2.732 2.974.943 7.332c-1.87 4.283-.898 9.602 2.371 12.942 3.145 3.386 8.326 4.628 12.666 3.044 4.497-1.531 7.817-5.948 7.997-10.702.303-4.671-2.445-9.332-6.653-11.367A11.942 11.942 0 0011.996.001zm0 1.297c4.66-.081 9.091 3.267 10.295 7.769 1.258 4.24-.444 9.15-4.098 11.661-3.795 2.79-9.423 2.588-13.006-.469C1.576 17.38.283 12.054 2.136 7.831c1.605-3.905 5.636-6.582 9.86-6.533zm-5.442 6.55v8.303h10.884V7.848H6.554zm2.418 1.297h6.048c-1.072.66-2.143 2.107-3.214 2.264L8.972 9.146zm7.17.764v4.945H7.85V9.909l4.146 3.314 4.148-3.314z"
          />
        </svg>
      </span>
      <span
        class="px-px bg-danger-600 text-xs font-medium rounded-full text-white border-2 border-gray-darkest flex items-center justify-center absolute -right-6 -top-1"
      >
        <span>99+</span>
      </span>
    </a>
    <!-- notification -->
    <a class="text-gray-lightest mx-4  lg:ml-4 lg:mr-5  relative flex" href="#">
      <span class="">
        <svg class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21.673 18.553A9.601 9.601 0 0120 16.6a8.42 8.42 0 01-.9-3.207V10.1a7.207 7.207 0 00-6.294-7.167v-.86a.89.89 0 10-1.78 0v.874a7.207 7.207 0 00-6.22 7.153v3.293a8.42 8.42 0 01-.9 3.207 9.601 9.601 0 01-1.646 1.953.666.666 0 00-.227.5v.907a.667.667 0 00.667.667h18.533a.667.667 0 00.667-.667v-.907a.668.668 0 00-.227-.5zm-18.253.74c.62-.599 1.166-1.27 1.627-2a9.494 9.494 0 001.1-3.9V10.1a5.827 5.827 0 1111.646 0v3.293a9.493 9.493 0 001.1 3.9c.46.73 1.007 1.401 1.627 2H3.42zM12 22.853a1.78 1.78 0 001.72-1.52h-3.507A1.78 1.78 0 0012 22.853z"
          />
        </svg>
      </span>
      <span
        class="px-px5 bg-danger-600 text-xs font-medium rounded-full text-white border-2 border-gray-darkest flex items-center justify-center absolute -right-3 -top-1"
      >
        <span>7</span>
      </span>
    </a>
    <!-- right pane -->
    <div class="flex items-center items-end ml-auto">
      <!-- search control -->
      <div>
        <div class="lg:hidden flex items-center">
          <svg
            class="fill-current w-8 h-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.72 23.04a8.303 8.303 0 01-8.32-8.32 8.303 8.303 0 018.32-8.32 8.303 8.303 0 018.32 8.32 8.303 8.303 0 01-8.32 8.32zm0-15.36a7.02 7.02 0 00-7.04 7.04 7.02 7.02 0 007.04 7.04 7.02 7.02 0 007.04-7.04 7.02 7.02 0 00-7.04-7.04z"
            />
            <path
              d="M20.916 20.01l5.748 5.748-.905.905-5.747-5.747.904-.905z"
            />
          </svg>
        </div>
        <div
          class="hidden lg:flex text-xs capitalize mr-4 relative items-center"
        >
          <div class="text-gray-800 absolute pl-1">
            <svg
              class="fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.319 14.433a8 8 0 10-1.412 1.411l.043.045 4.242 4.243a1 1 0 001.415-1.415l-4.243-4.242a1.117 1.117 0 00-.045-.042zm-2.076-9.15a5.999 5.999 0 11-8.414 8.553 5.999 5.999 0 018.414-8.553z"
              />
            </svg>
          </div>
          <input
            class="pl-8 pr-2 py-2 rounded-sm focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search Assets, Users, Resources..."
          />
        </div>
      </div>
      <!-- doc control -->
      <div class="ml-1 pr-4 border-r border-gray-800">
        <svg
          class="w-8 h-8 fill-current text-white"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 26.88A10.87 10.87 0 015.12 16 10.87 10.87 0 0116 5.12 10.87 10.87 0 0126.88 16 10.87 10.87 0 0116 26.88zM16 6.4A9.587 9.587 0 006.4 16c0 5.312 4.288 9.6 9.6 9.6 5.312 0 9.6-4.288 9.6-9.6 0-5.312-4.288-9.6-9.6-9.6z"
          />
          <path
            d="M12.672 12.544c.192-.512.384-.896.768-1.216.32-.32.704-.576 1.216-.768.512-.192 1.024-.256 1.6-.256.448 0 .896.064 1.28.192s.768.32 1.088.576c.32.256.576.576.704.96.192.384.256.832.256 1.28 0 .64-.128 1.152-.384 1.6-.256.448-.64.832-1.024 1.28l-.832.832c-.192.192-.384.384-.448.576a1.29 1.29 0 00-.192.704c-.064.256-.064.448-.064.96h-1.024c0-.512 0-.704.064-1.088.064-.32.192-.64.32-.96.128-.256.32-.512.576-.768.256-.256.576-.512.896-.896.32-.32.576-.64.768-.96.192-.32.32-.768.32-1.152 0-.32-.064-.64-.192-.896a2.842 2.842 0 00-.512-.704c-.192-.192-.448-.32-.768-.448s-.576-.192-.896-.192c-.448 0-.832.064-1.152.256a2.08 2.08 0 00-.832.64 3.392 3.392 0 00-.512.96c-.128.384-.256.576-.256 1.024h-1.024c0-.576.064-1.024.256-1.536zm3.968 7.936v1.28h-1.28v-1.28h1.28z"
          />
        </svg>
      </div>
      <!-- user control -->
      <div class="ml-4 flex items-center">
        <div class="hidden lg:flex flex-col mr-4">
          <span
            class="text-xs capitalize text-gray-lightest font-semibold tracking-wide whitespace-no-wrap"
            >cameron williamson</span
          >
          <span class="text-xs font-semibold text-gray-400 capitalize self-end "
            >administrator</span
          >
        </div>

        <div class="w-8 h-8 hover:border-gray-200 relative">
          <div class="overflow-hidden rounded-full border-2 border-gray-300">
            <img
              class="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=60&q=60"
              alt="profile"
            />
          </div>
          <div
            class="w-3 h-3 bg-success-600 absolute -mt-3 ml-6 rounded-full border-2 border-gray-darkest"
          ></div>
        </div>

        <a
          class="text-white lg:ml-1 hover:text-gray-200 relative"
          href="#"
          @click="toggleOpen"
        >
          <svg class="w-6 h-6 fill-current " xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 20a2 2 0 110-4 2 2 0 010 4zm0-6a2 2 0 110-4 2 2 0 010 4zm0-6a2 2 0 110-4 2 2 0 010 4z"
            />
          </svg>
          <div
            v-if="isOpen"
            class="bg-white shadow-lg rounded-md py-2 absolute bottom-5 -ml-24 mt-2"
          >
            <a
              href="#"
              class="block text-gray-800 capitalize px-2 py-1 hover:bg-gray-200 active:bg-gray-600 active:text-gray-100 text-sm"
              >account</a
            >
            <a
              href="#"
              class="block text-gray-800 capitalize px-2 py-1 hover:bg-gray-200 active:bg-gray-600 active:text-gray-100 text-sm"
              >resources</a
            >
            <a
              href="#"
              class="block text-gray-800 capitalize px-2 py-1 hover:bg-gray-200 active:bg-gray-600 active:text-gray-100 text-sm"
              >manage users</a
            >
            <a
              href="#"
              class="block text-gray-800 capitalize px-2 py-1 hover:bg-gray-200 active:bg-gray-600 active:text-gray-100 text-sm"
              >log out</a
            >
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppBar',
  data() {
    return {
      isOpen: false,
      isNavOpen: false
    }
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen
    },
    toggleNavOpen() {
      this.isNavOpen = !this.isNavOpen
    }
  }
}
</script>
