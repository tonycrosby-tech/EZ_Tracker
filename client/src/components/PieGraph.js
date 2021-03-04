import React from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

// const state = {
//   labels: title,
//   datasets: [
//     {
//       label: 'Enjoyment',
//       backgroundColor: ['#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4'],
//       hoverBackgroundColor: [
//         '#501800',
//         '#4B5000',
//         '#175000',
//         '#003350',
//         '#35014F',
//       ],
//       data: enjoyment,
//     },
//   ],
// };

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      subscriptions: [],
    };
  }

  groomGraphData() {
    const labels = this.state.subscriptions.map(
      (item) => item.SubscriptionName
    );
    const data = this.state.subscriptions.map((item) => item.rating);

    return {
      labels,
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
          data,
        },
      ],
    };
  }

  componentDidMount() {
    axios.get('/api/auth/getAllSubs').then((res) => {
      this.setState({ subscriptions: res.data.subscriptions });
    });
  }

  render() {
    return (
      <div>
        <Container style={{ paddingBottom: 15 }} component={Paper} spacing={4}>
        <Pie
          data={this.groomGraphData()}
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
        </Container>
      </div>
    );
  }
}
