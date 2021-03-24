import React from 'react';
import { useHistory } from 'react-router-dom';
import ROUTES from '../../routes';

const background = require('../../assets/images/bananas.jpg');

const Dashboard = ({ ...props }) => {
    const history = useHistory();

    const Statistic = ({ amount, description }) => (
        <div className={'flex flex-col items-center mb-8'}>
            <h1 className={'text-5xl text-blue-600'}>{amount} NOK</h1>
            <p className={'text-center'}>{description}</p>
        </div>
    );

    const Banner = () => (
        <div
            className={
                'relative w-full flex flex-col items-center justify-center py-12'
            }>
            <div
                className={'absolute w-full h-full bg-cover z-0'}
                style={{ backgroundImage: `url(${background})`, opacity: 0.3 }}
            />
            <div className={'w-3/4 flex flex-col items-center'}>
                <h1 className={'mb-4 text-3xl font-semibold'}>Matprat</h1>
                <p className={'text-center'}>
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam
                    ad, nam no suscipit quaerendum. At nam minimum ponderum. Est
                    audiam animal molestiae te.
                </p>
            </div>
            <div
                className={
                    'flex flex-col items-center mt-24 p-8 w-1/3 rounded-lg bg-white z-10'
                }>
                <Statistic
                    amount={1587}
                    description={'brukt på å spare miljøet av deg'}
                />
                <Statistic
                    amount={8097}
                    description={
                        'brukt på å spare miljøet av deg og dine venner'
                    }
                />
            </div>
        </div>
    );

    const Activities = () => {
        const Acitivty = ({ name, description, route }) => {
            return (
                <div
                    className={
                        'flex flex-col items-center p-4 rounded bg-blue-200 hover:bg-blue-300 m-4 w-1/3 shadow-lg hover:shadow-xl cursor-pointer'
                    }
                    onClick={() => history.push(route)}>
                    <h3 className={'text-xl font-semibold'}>{name}</h3>
                    <p className={'text-center'}>{description}</p>
                </div>
            );
        };

        return (
            <div className={'flex flex-col items-center'}>
                <h2 className={'mt-4 text-3xl font-semibold'}>Aktiviteter</h2>
                <div className={'flex justify-between mb-8'}>
                    <Acitivty
                        name={'Statistikk'}
                        description={
                            'Se hvor mye du har spart ... type matvarer etter kategori ...'
                        }
                        route={ROUTES.STATISTICS}
                    />
                    <Acitivty
                        name={'Kokebok'}
                        description={
                            'Oppskrifter og inspirasjon til hvordan bruke rester i kjøleskapet'
                        }
                        route={ROUTES.COOKBOOK}
                    />
                    <Acitivty
                        name={'Konkurranse'}
                        description={'Sånn kan du bruke maten du har kjøpt...'}
                        route={ROUTES.COMPETITION}
                    />
                </div>
            </div>
        );
    };

    return (
        <div>
            <Banner />
            <Activities />
        </div>
    );
};

export default Dashboard;
