import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const TreeMapChart = () => {
  const options: ApexOptions = {
    legend: {
      show: false,
    },
    chart: {
      height: 350,
      type: 'treemap',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
      },
      offsetY: -4,
    },
    stroke: {
      width: 1,
    },
    plotOptions: {
      treemap: {
        enableShades: true,
        shadeIntensity: 0.5,
        reverseNegativeShade: true,
        colorScale: {
          ranges: [
            {
              from: -6,
              to: 0,
              color: '#D32D42',
            },
            {
              from: 0.001,
              to: 3,
              color: '#3E6B52',
            },
            {
              from: 3.001,
              to: 6,
              color: '#E5B132',
            },
          ],
        },
      },
    },
  };

  const series = [
    {
      data: [
        {
          x: 'Procurement Plan',
          y: 4,
        },
        {
          x: '',
          y: 0.4,
        },
        {
          x: '',
          y: -1.4,
        },
        {
          x: 'Tender Examination',
          y: 3,
        },
        {
          x: '',
          y: -0.3,
        },
        {
          x: 'Tender Issue, Receipt',
          y: 6,
        },
        {
          x: '',
          y: -2.3,
        },
        {
          x: 'Tender Approval',
          y: 2.1,
        },
        {
          x: '',
          y: 0.3,
        },
        {
          x: '',
          y: 0.12,
        },
        {
          x: '',
          y: 0.18,
        },
        {
          x: '',
          y: 2.18,
        },
        {
          x: '',
          y: 2.18,
        },
        {
          x: 'Tender Preparation',
          y: -2.31,
        },
        {
          x: '',
          y: 3.98,
        },
        {
          x: 'Procurement Plan',
          y: 1.67,
        },
      ],
    },
  ];

  return (
    <Box>
      <ApexChart options={options} series={series} type="treemap" height="200" />
    </Box>
  );
};

export default TreeMapChart;
