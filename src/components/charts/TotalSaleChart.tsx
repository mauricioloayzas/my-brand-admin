import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
const chartOptions = {
  chart: {
    height: 80,
    width: 160,
    type: "area",
    fontFamily: "Poppins, sans-serif",
    dropShadow: {
      enabled: true,
      opacity: 0.1,
      blur: 2,
      left: -1,
      top: 5,
    },
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 800,
    },
    sparkline: {
      enabled: true,
    },
  },
  colors: ["#1A83FE"],
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 0.04,
    type: "solid",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.1,
      gradientToColors: "#1A83FE",
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0,
      stops: [0, 50, 100],
    },
  },
  tooltip: {
    theme: "dark",
    fillSeriesColor: true,
    style: {
      fontSize: "9px",
    },
    marker: {
      show: false,
    },
    x: {
      show: false,
    },
  },
  stroke: {
    show: true,
    curve: "smooth",
    width: 1,
  },
  series: [
    {
      name: "Order",
      data: [90, 85, 75, 85, 95, 110],
    },
  ],
};
const TotalSaleChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = new ApexCharts(chartRef.current, chartOptions);

    const initChart = () => {
      chart.render(); // Attempt to render with default options
    };

    initChart();

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);
  return <div id="totalSaleChart" ref={chartRef}></div>;
};
export default TotalSaleChart;
