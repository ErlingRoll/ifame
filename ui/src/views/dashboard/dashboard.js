import React from 'react';
import { useHistory } from 'react-router-dom';
import ROUTES from '../../routes';

const Dashboard = ({ ...props }) => {
    const history = useHistory();

    const Statistic = ({ amount, description }) => (
        <div className={'flex flex-col items-center mb-8'}>
            <h1 className={'text-xl lg:text-5xl text-blue-600'}>{amount} NOK</h1>
            <p className={'text-center'}>{description}</p>
        </div>
    );

    const Title = () => (
        <div className={'w-4/5 lg:w-2/3 lg:px-24 flex flex-col items-center mt-12'}>
            <h1 className={'mb-4 text-3xl font-semibold'}>Matprat</h1>
            <p className={'text-center'}>
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est
                audiam animal molestiae te.
            </p>
            <button className={'border-2 border-primary rounded p-2 mt-8 bg-green-100'} onClick={() => history.push(ROUTES.TUTORIAL)}>
                Hvordan fungerer det?
            </button>
        </div>
    );

    const Banner = () => (
        <div className={'flex flex-col items-center mt-12 p-8 w-4/5 lg:w-1/3 rounded-lg z-10 '}>
            <Statistic amount={1587} description={'brukt på å spare miljøet av deg'} />
            <Statistic amount={8097} description={'brukt på å spare miljøet av deg og dine venner'} />
        </div>
    );

    const Acitivty = ({ name, description, route }) => {
        return (
            <div
                className={
                    'h-48 w-4/5 lg:w-1/3 flex flex-col items-center justify-center p-4 rounded-lg bg-white hover:bg-blue-100 hover:border-gray-700 m-4 border-2 border-gray-500 shadow-xl hover:shadow-xl cursor-pointer'
                }
                onClick={() => history.push(route)}>
                <h3 className={'text-xl font-semibold'}>{name}</h3>
                <p className={'text-center'}>{description}</p>
            </div>
        );
    };

    const Activities = () => (
        <div className={'w-full flex flex-col items-center z-10'}>
            <h2 className={'mt-4 text-3xl font-semibold'}>Aktiviteter</h2>
            <div className={'w-full flex flex-col lg:flex-row items-center justify-between mb-8'}>
                <Acitivty
                    name={'Statistikk'}
                    description={'Se hvor mye du har spart ... type matvarer etter kategori ...'}
                    route={ROUTES.STATISTICS}
                />
                <Acitivty
                    name={'Kokebok'}
                    description={'Oppskrifter og inspirasjon til hvordan bruke rester i kjøleskapet'}
                    route={ROUTES.COOKBOOK}
                />
                <Acitivty name={'Konkurranse'} description={'Sånn kan du bruke maten du har kjøpt...'} route={ROUTES.COMPETITION} />
            </div>
        </div>
    );
    return (
        <div className={'w-full flex justify-center'}>
            <div className={'relative min-h-full w-full max-w-screen-xl flex flex-col items-center px-4'}>
                <div className={'flex flex-col lg:flex-row justify-around items-center mb-12'}>
                    <Title />
                    <Banner />
                </div>
                <Activities />
            </div>
        </div>
    );
};

export default Dashboard;
