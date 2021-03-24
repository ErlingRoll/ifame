import React from 'react';
import Accumulated from '../competition/components/accumulated';
import Timeline from '../competition/components/timeline';

const testData = [
    { greens: 200, meat: 220, corn: 140, dairy: 120 },
    { greens: 220, meat: 210, corn: 70, dairy: 300 },
    { greens: 100, meat: 350, corn: 120, dairy: 150 },
    { greens: 80, meat: 310, corn: 140, dairy: 150 },
    { greens: 140, meat: 225, corn: 210, dairy: 175 },
    { greens: 40, meat: 200, corn: 200, dairy: 160 },
    { greens: 30, meat: 80, corn: 270, dairy: 220 },
    { greens: 250, meat: 50, corn: 170, dairy: 150 },
    { greens: 160, meat: 360, corn: 150, dairy: 80 },
    { greens: 400, meat: 155, corn: 250, dairy: 120 },
    { greens: 360, meat: 120, corn: 120, dairy: 180 },
    { greens: 250, meat: 100, corn: 90, dairy: 200 },
];

const Statistics = () => {
    const Card = ({ children, ...props }) => (
        <div
            {...props}
            className={
                'border-2 border-gray-400 rounded bg-white p-2 ' +
                props.className
            }>
            {children}
        </div>
    );

    return (
        <div className={'bg-gray-200 p-4'} style={{ minHeight: '100vh' }}>
            <div className={'w-full mb-4'}>
                <h3
                    className={
                        'text-2xl font-semibold text-gray-700 ml-1 mb-4'
                    }>
                    Oversikt
                </h3>
                <div className={'flex'}>
                    <Card className={'flex flex-col items-center p-4 mr-4'}>
                        <h3
                            className={
                                'text-gray-600 text-lg mb-2 font-semibold'
                            }>
                            Penger spart
                        </h3>
                        <strong className={'text-2xl'}>1780 NOK</strong>
                    </Card>
                    <Card className={'flex flex-col items-center p-4 mr-4'}>
                        <h3
                            className={
                                'text-gray-600 text-lg mb-2 font-semibold'
                            }>
                            Totalt brukt
                        </h3>
                        <strong className={'text-2xl'}>5764 NOK</strong>
                    </Card>
                    <Card className={'flex flex-col items-center p-4'}>
                        <h3
                            className={
                                'text-gray-600 text-lg mb-2 font-semibold'
                            }>
                            Andel varer kjøpt på tilbud
                        </h3>
                        <strong className={'text-2xl'}>47%</strong>
                    </Card>
                </div>
            </div>
            <div className={'w-full flex'}>
                <Card className={'w-1/2 flex flex-col mr-4'}>
                    <h6
                        className={
                            'text-lg font-semibold text-gray-800 mb-4 ml-2'
                        }>
                        Penger spart i løpet av det siste året
                    </h6>
                    <Timeline data={testData} />
                </Card>
                <Card className={'w-1/2 flex flex-col'}>
                    <h6
                        className={
                            'text-lg font-semibold text-gray-800 mb-4 ml-2'
                        }>
                        Samlet penger spart på kategorier
                    </h6>
                    <Accumulated data={testData} />
                </Card>
            </div>
        </div>
    );
};

export default Statistics;
