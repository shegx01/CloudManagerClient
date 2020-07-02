<template>
  <div>
    <!-- secondary bar -->
    <SecondaryBar :subMenu="true" :currentDir="currentDir" />

    <div
      class="mt-20 bg-white pt-4  pb-6 lg:mx-2 lg:border lg:border-gray-200 lg:bg-transparent lg:border-none"
    >
      <div
        class="flex w-full pl-6 lg:ml-0 lg:bg-app-cardBg lg:pr-6 lg:py-2 rounded lg:shadow-xs lg:mb-24"
      >
        <div
          class="flex justify-between w-full max-w-lg py-4 lg:max-w-lg lg:ml-auto
          "
        >
          <div
            class="font-semibold text-gray-700  text-xs capitalize whitespace-no-wrap flex  items-center"
          >
            currently viewing as
            <span
              class="px-2 text-sm font-bold uppercase tracking-wide text-gray-800"
              >monthly</span
            >
            <div>
              <span
                class="font-semibold text-gray-700  text-xs border-b pb-px2 border-gray-300"
                >change</span
              >
            </div>
          </div>
          <div
            class="px-4 py-2  flex items-center font-semibold bg-gray-200 rounded-sm tracking-wider"
          >
            <span
              class="text-xs font-semibold tracking-wider text-gray-700 uppercase"
              >services</span
            >
            <div class="ml-4">
              <svg
                class="w-4 h-4 fil-current"
                xmlns="http://www.w3.org/2000/svg"
              >
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
      </div>
      <div class="flex flex-wrap w-full lg:flex-no-wrap lg:mt-16 lg:h-full">
        <div
          class="pt-4 flex w-full flex-shrink-0 px-4 justify-around  lg:w-4/12 lg:flex-col lg:items-center"
        >
          <!-- monthly spend card-->
          <div
            class="flex flex-col max-w-lg rounded shadow-xs items-center pt-4 lg:max-w-sm"
          >
            <div class="flex w-full ml-6">
              <span
                class="text-gray-700 text-xs py-px2  rounded-full uppercase font-semibold mr-auto"
              >
                spent this month
              </span>
            </div>
            <div
              class="pt-2 mt-2 h-full flex flex-col w-full items-center bg-success-lightest px-4 lg:bg-success-200"
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
                <span
                  class="font-semibold text-xs text-gray-700 mt-2 uppercase tracking-wide text-success-800"
                  >aws cloudfront and aws redshift</span
                >
              </div>
            </div>
          </div>
          <!-- highest spent card card-->

          <div
            class="flex flex-col max-w-lg rounded shadow-xs items-center pt-4 lg:max-w-sm lg:mt-10"
          >
            <div class="flex w-full ml-6">
              <span
                class="text-gray-700 text-xs py-px2  rounded-full uppercase font-semibold mr-auto"
              >
                highest spent in 5 months
              </span>
            </div>
            <div
              class="pt-2 mt-2 h-full flex flex-col w-full items-center bg-danger-lightest px-4"
            >
              <span class="-ml-16 text-gray-800 font-semibold text-2xl"
                >$32,673,00</span
              >
              <div
                class=" ml-8 mb-6
              
               flex flex-col"
              >
                <div class="font-semibold text-sm text-gray-700 mt-2">
                  you spend total of
                  <span
                    class="px-1 py-px-1 mx-1 rounded text-danger-800 border bg-danger-200 border-danger-300"
                    >$23,989,00</span
                  >
                  on
                </div>
                <span
                  class="font-semibold text-xs text-danger-800 mt-2 uppercase tracking-wide"
                  >aws glacier and aws sns</span
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex lg:order-first lg:w-8/12 w-full mt-12 pt-12 lg:pt-0 lg:mt-0 bg-app-background"
        >
          <v-chart :options="options" autoresize />
        </div>
      </div>
    </div>
    <!-- consumed product -->

    <div class="mt-8 bg-white py-4 pb-6 lg:px-2 lg:border lg:border-gray-200">
      <div class="flex items-center justify-center lg:justify-start">
        <div class="flex justify-between w-full max-w-xs px-4 pt-4 lg:max-w-md">
          <span
            class="font-semibold text-gray-700 tracking-wide text-sm uppercase"
            >services used this month</span
          >
          <a class="text-gray-800 cursor-pointer">
            <svg
              class="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style="-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg)"
              viewBox="0 0 16 16"
              transform="rotate(360)"
            >
              <g fill="#626262" fill-rule="evenodd">
                <path
                  d="M3 13a.5.5 0 00.5-.5v-10a.5.5 0 00-1 0v10a.5.5 0 00.5.5z"
                />
                <path
                  d="M5.354 4.854a.5.5 0 000-.708l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L3 3.207l1.646 1.647a.5.5 0 00.708 0zM7 9.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0 9a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-wrap w-full">
        <div
          class="pt-4 flex w-full flex-shrink-0 px-4 justify-around  lg:w-2/5 lg:mt-4"
        >
          <!-- empty on desktop -->
        </div>
        <div
          class="flex flex-col w-full lg:w-3/5 px-6 pt-12 lg:pt-0 lg:px-0 lg:pl-4"
        >
          <div class="shadow-xs flex w-full rounded mb-6">
            <el-table
              :data="tableData"
              stripe
              :border="false"
              style="width: 100%"
            >
              <el-table-column prop="service" label="SERVICE" width="">
              </el-table-column>
              <el-table-column
                prop="amountSpent"
                label="AMOUNT SPENT"
                width=""
                align="right"
              >
              </el-table-column>
              <el-table-column label="USAGE" width="" align="center">
                <template slot-scope="scope">
                  <div>
                    <span
                      :class="[
                        scope.row.usage === 'high'
                          ? 'text-warning-darkest uppercase'
                          : 'uppercase'
                      ]"
                      >{{ scope.row.usage }}</span
                    >
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="" align="center">
                <template slot-scope="scope">
                  <div>
                    <a :href="scope.row.link" class="text-success-800"
                      >view all</a
                    >
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="border-t border-gray-200 flex pr-20">
            <span
              class="text-gray-700 text-xs font-semibold  capitalize ml-auto mt-2 -mr-2"
              >load more</span
            >
          </div>
        </div>
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
      currentDir: 'cost management',
      options: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            shadowStyle: {
              color: 'rgba(0, 90, 109, .1)'
            }
          },
          backgroundColor: '#EFFCF6',
          borderWidth: '1',
          textStyle: {
            color: '#0C6B58',
            borderRadius: 3,
            fontWeight: 'normal'
          },
          borderColor: '#8EEDC7'
        },
        legend: {
          data: [
            'AWS lambda',
            'AWS glacier',
            'AWS sns',
            'AWS cloudFront',
            'AWS EBS',
            'AWS SQS',
            'AWS RDS',
            'AWS elasticCache',
            'AWS RedShift',
            'AWS kinesis'
          ],
          textStyle: {
            color: '#54677A',
            fontWeight: 600,
            padding: [0, 22, 0, 0]
          },
          bottom: '0',
          left: '4%'
        },
        grid: {
          left: '4%',
          right: '4%',
          top: '0',
          bottom: '22%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: 'rgba(111, 127, 144, 1)'
            }
          },
          axisLabel: {
            fontWeight: 700
          }
        },
        yAxis: {
          type: 'category',
          data: ['JUNE 2019', 'JULY 2019', 'AUG 2019', 'SEPT 2019', 'OCT 2019'],

          axisLine: {
            lineStyle: {
              color: 'rgba(111, 127, 144, 1)'
            }
          },
          axisLabel: {
            fontWeight: 700
          }
        },
        series: [
          {
            name: 'AWS lambda',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [1220, 867, 2324, 621, 390, 1330, 920]
          },
          {
            name: 'AWS glacier',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [1020, 192, 801, 104, 990, 130, 321]
          },
          {
            name: 'AWS sns',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [820, 382, 891, 294, 490, 600, 900]
          },
          {
            name: 'AWS cloudFront',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [150, 212, 201, 154, 190, 330, 410]
          },
          {
            name: 'AWS EBS',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
          },
          {
            name: 'AWS SQS',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [900, 1032, 901, 334, 190, 1330, 1320]
          },
          {
            name: 'AWS RDS',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [1400, 122, 901, 1034, 190, 130, 920]
          },
          {
            name: 'AWS elasticCache',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [1000, 1032, 901, 734, 490, 730, 820]
          },
          {
            name: 'AWS RedShift',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [960, 1032, 901, 734, 990, 1930, 120]
          },
          {
            name: 'AWS kinesis',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [1000, 2032, 901, 1034, 500, 1330, 1320]
          }
        ]
      },

      tableData: [
        {
          service: 'AWS cloudFront',
          amountSpent: '$3,231',
          usage: 'normal',
          link: '/#'
        },
        {
          service: 'AWS redShift',
          amountSpent: '$6,231',
          usage: 'high',
          link: '/#'
        },
        {
          service: 'AWS SQS',
          amountSpent: '$2,231',
          usage: 'normal',
          link: '/#'
        },
        {
          service: 'AWS RDS',
          amountSpent: '$1,231',
          usage: 'normal',
          link: '/#'
        },
        {
          service: 'AWS SNS',
          amountSpent: '$931',
          usage: 'normal',
          link: '/#'
        },
        {
          service: 'AWS elasticSearch',
          amountSpent: '$2,231',
          usage: 'normal',
          link: '/#'
        },
        {
          service: 'AWS RDS',
          amountSpent: '$4,231',
          usage: 'high',
          link: '/#'
        },
        {
          service: 'AWS RDS',
          amountSpent: '$5,231',
          usage: 'high',
          link: '/#'
        }
      ]
    }
  }
}
</script>

<style lang="css">
/* .echarts {
  width: 100% !important;
} */
</style>
