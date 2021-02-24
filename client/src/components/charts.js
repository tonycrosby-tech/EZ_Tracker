import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';
import API from '../utils/API';

export default function Graph() {
  const [user, setUser] = useState({});

  useEffect(() => {
    chartRef = React.createRef();
    const myChartRef = this.chartRef.current.getContext('2d');

    API.getUser()
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));

    const enjoyment = [];

    user.Subscription.forEach((item) => {
      enjoyment.push(item);
    });

    new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: enjoyment,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, []);

  return (
    <div>
      <canvas id="myChart" ref={this.chartRef}></canvas>
    </div>
  );
}
