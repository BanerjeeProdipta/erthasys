import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type PropTypes = {
  series: ApexAxisChartSeries;
  legend: boolean;
};

const RadarChart = ({ series = [], legend }: PropTypes) => {
  const options: ApexOptions = {
    chart: {
      type: 'radar',
      width: '100%',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radar: {
        size: 80,
        polygons: {
          strokeColors: '#CDCECC',
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'Procurement Plan',
        'Tender Preparation',
        'Tender Issue, Receipt & Process',
        'Tender Examination & Evaluation',
        'Tender Approval',
        'Contract Management',
      ],
    },
    colors: ['#3E6B52', '#D32D42'],
    fill: {
      opacity: 1,
    },
    legend: {
      show: legend,
    },
  };

  return (
    <Box>
      <ApexChart options={options} series={series} type="radar" />
    </Box>
  );
};

RadarChart.defaultProps = {
  legend: false,
};

export default RadarChart;
