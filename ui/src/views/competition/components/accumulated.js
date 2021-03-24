import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const Accumulated = ({ data }) => (
    <HorizontalBar
        data={{
            labels: ['Frukt & Grønnsaker', 'Kjøtt', 'Kornprodukter', 'Meieri'],
            datasets: [
                {
                    label: 'Penger spart',
                    backgroundColor: [
                        '#50CE30',
                        '#ED8F03',
                        '#FFB946',
                        '#B7B7B7',
                    ],
                    data: [
                        data
                            .map((row) => row.greens)
                            .reduce((acc, v) => (acc += v)),
                        data
                            .map((row) => row.meat)
                            .reduce((acc, v) => (acc += v)),
                        data
                            .map((row) => row.corn)
                            .reduce((acc, v) => (acc += v)),
                        data
                            .map((row) => row.dairy)
                            .reduce((acc, v) => (acc += v)),
                    ],
                },
            ],
        }}
        options={{
            legend: { display: false },
            scales: {
                responsive: true,
                xAxes: [
                    {
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function (value, index, values) {
                                return value + ' NOK';
                            },
                            beginAtZero: true,
                        },
                    },
                ],
            },
        }}
    />
);

export default Accumulated;
