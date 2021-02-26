import React from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

axios.get('/api/auth/getAllSubs').then((res) => {
  const subs = res.data.subscriptions;

  subs.map((item) => {
    let joy = item.rating;
    let name = item.SubscriptionName;
    enjoyment.push(joy);
    title.push(name);
  });
});

const enjoyment = [];
const title = [];

const state = {
  labels: title,
  datasets: [
    {
      label: 'Enjoyment',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: enjoyment,
    },
  ],
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          height={300}
          width={350}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            title: {
              display: true,
              text: 'Average Joy from Subscriptions',
              fontSize: 20,
            },
          }}
        />
      </div>
    );
  }
}
