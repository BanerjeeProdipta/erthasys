import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BarChart = () => {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      width: '100%',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['জানু', 'ফেব্রু', 'মার্চ', 'এপ্রিল', 'মে', 'জুন'],
    },
    colors: ['#D32D42', '#3E6B52'],
    fill: {
      opacity: 1,
    },
    legend: {
      show: false,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val;
        },
      },
    },
  };
  const series = [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 67],
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105],
    },
  ];

  return (
    <Box>
      <ApexChart options={options} series={series} type="bar" height="200" />
    </Box>
  );
};

export default BarChart;
