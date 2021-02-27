import React from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

axios.get('/api/auth/getAllSubs').then((res) => {
  const subs = res.data.subscriptions;

  if (subs) {
    subs.map((item) => {
      let joy = item.rating;
      let name = item.SubscriptionName;
      enjoyment.push(joy);
      title.push(name);
    });
  }
});

const enjoyment = [];
const title = [];

export default class App extends React.Component {
  state = {
    labels: title,
    datasets: [
      {
        label: 'Enjoyment',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4',
        ],
        hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350',
          '#35014F',
        ],
        data: enjoyment,
      },
    ],
  };
  render() {
    return (
      <div>
        <Pie
          data={state}
          width={350}
          height={300}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Average Enjoyment of Subs',
              fontSize: 20,
            },
          }}
        />
      </div>
    );
  }
}
