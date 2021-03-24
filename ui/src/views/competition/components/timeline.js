import React from 'react';
import { Bar } from 'react-chartjs-2';

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Des',
];

const Timeline = ({ data }) => (
    <Bar
        data={{
            labels: months,
            datasets: [
                {
                    label: 'Frukt & Grønnsaker',
                    backgroundColor: '#50CE30',
                    data: data.map((row) => row.greens),
                },
                {
                    label: 'Kjøtt',
                    backgroundColor: '#ED8F03',
                    data: data.map((row) => row.meat),
                },
                {
                    label: 'Kornprodukter',
                    backgroundColor: '#FFB946',
                    data: data.map((row) => row.corn),
                },
                {
                    label: 'Meieri',
                    backgroundColor: '#B7B7B7',
                    data: data.map((row) => row.dairy),
                },
            ],
        }}
        options={{
            scales: {
                responsive: true,
                xAxes: [{ stacked: true }],
                yAxes: [
                    {
                        stacked: true,
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function (value, index, values) {
                                return value + ' NOK';
                            },
                        },
                    },
                ],
            },
        }}
    />
);

export default Timeline;
