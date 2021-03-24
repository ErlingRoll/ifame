import React from 'react';

const podium = require('../../assets/images/podium.png');

const competitionData = [
    { rank: 1, name: 'Audun Heimdal', spent: 2367 },
    { rank: 2, name: 'Ida Minde', spent: 1322 },
    { rank: 3, name: 'Erling Roll', spent: 981 },
    { rank: 4, name: 'Oda Oppfunnet', spent: 550 },
    { rank: 5, name: 'Filip Stokvik', spent: 489 },
    { rank: 6, name: 'Maiken Gjermstad', spent: 450 },
    { rank: 7, name: 'Fanja Fiktiv', spent: 319 },
    { rank: 8, name: 'Tore Tullenavn', spent: 86 },
];

const Competition = () => {
    const Placement = ({ number, name, spent, border = true }) => (
        <div
            className={`flex items-center justify-between rounded-lg p-2 ${
                border && 'shadow border-2 border-gray-400 mb-2'
            }`}>
            <div style={{ width: '10%' }}>{number}</div>
            <div style={{ width: '60%' }}>{name}</div>
            <div style={{ width: '20%' }} className={'flex justify-end'}>
                {spent}
            </div>
        </div>
    );

    return (
        <div
            style={{
                paddingRight: '5vw',
                paddingLeft: '5vw',
                paddingTop: '5vh',
            }}>
            <div className={'flex flex-col items-center'}>
                <h1 className={'text-3xl'}>
                    Penger brukt på å spare miljøet - Mars
                </h1>
                <p>Antall NOK brukt på å kjøpe varer som skal kastes</p>
                <div className={'relative'}>
                    <img
                        src={podium}
                        className={'image-cover'}
                        alt={'podium'}
                    />
                    <div
                        className={
                            'absolute w-full flex justify-center items-end z-10'
                        }
                        style={{ bottom: '10%' }}>
                        <div style={{ textAlign: 'center' }}>Ida Minde</div>
                        <div
                            style={{
                                width: '20%',
                                marginLeft: '8%',
                                marginRight: '8%',
                                textAlign: 'center',
                                paddingBottom: '3%',
                            }}>
                            Audun Heimdal
                        </div>
                        <div style={{ textAlign: 'center' }}>Erling Roll</div>
                    </div>
                </div>
            </div>
            <div>
                <Placement
                    number={'#'}
                    name={'Navn'}
                    spent={'NOK'}
                    border={false}
                />
                {competitionData.map((e) => (
                    <Placement number={e.rank} name={e.name} spent={e.spent} />
                ))}
            </div>
        </div>
    );
};

export default Competition;
