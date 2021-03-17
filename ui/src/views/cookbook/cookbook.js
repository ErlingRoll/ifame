import React from 'react';
import { useHistory } from 'react-router';
import ROUTES from '../../routes';

const meieriprodukt = require('../../assets/images/meieriprodukt.png');
const fruktOgGronnsaker = require('../../assets/images/frukt_og_gronnsaker.png');
const middagsrester = require('../../assets/images/middagsrester.png');
const kornprodukter = require('../../assets/images/kornprodukter.png');

const Cookbook = () => {
    const history = useHistory();

    const Quote = ({ children, sender }) => (
        <div className={'mb-24'}>
            <p className={'text-3xl'}>{children}</p>
            <p>- hilsen {sender}</p>
        </div>
    );

    return (
        <div
            className={'flex justify-between'}
            style={{
                paddingRight: '5vw',
                paddingLeft: '5vw',
                paddingTop: '5vh',
            }}>
            <div
                className={'w-2/5 flex flex-col items-center p-12'}
                style={{ paddingTop: '10%' }}>
                <Quote sender={'en utgående matvar'}>
                    "Ingen kan kjøpe seg lykke, men jeg blir lykkelig om du
                    kjøper meg"
                </Quote>
                <Quote sender={'en brun banan'}>
                    “Jeg ser kanskje ikke så pen ut, men det er da innsiden som
                    teller!”
                </Quote>
            </div>

            <div className={'relative'}>
                <div
                    className={'relative inline-block mb-8 mr-4 cursor-pointer'}
                    style={{ width: '18vw', height: '22vw' }}
                    onClick={() => history.push(ROUTES.RECIPES)}>
                    <img src={meieriprodukt} className={'w-full h-full'} />
                    <h3
                        className={
                            'absolute m-8 top-0 left-0 text-white text-lg'
                        }>
                        MEIERIPRODUKT
                    </h3>
                </div>
                <div
                    className={'relative inline-block align-top cursor-pointer'}
                    style={{ width: '30vw', height: '16vw' }}
                    onClick={() => history.push(ROUTES.RECIPES)}>
                    <img src={fruktOgGronnsaker} className={'w-full h-full'} />
                    <div
                        className={
                            'absolute flex w-full h-full top-0 left-0 justify-center items-center'
                        }>
                        <h3 className={'text-lg'}>FRUKT & GRØNNSAKER</h3>
                    </div>
                </div>
                <div className={'flex relative'}>
                    <div
                        className={'relative block cursor-pointer'}
                        style={{ width: '30vw', height: '16vw' }}
                        onClick={() => history.push(ROUTES.RECIPES)}>
                        <img src={middagsrester} className={'w-full h-full'} />
                        <h3 className={'absolute m-8 bottom-0 left-0 text-lg'}>
                            MIDDAGSRESTER
                        </h3>
                    </div>
                    <div
                        className={
                            'block absolute bottom-0 right-0 cursor-pointer'
                        }
                        style={{ width: '18vw', height: '22vw' }}
                        onClick={() => history.push(ROUTES.RECIPES)}>
                        <img src={kornprodukter} className={'w-full h-full'} />
                        <div
                            className={
                                'absolute flex w-full h-full top-0 left-0 justify-center items-center'
                            }>
                            <h3
                                className={
                                    'text-center text-white w-1/2 text-lg'
                                }>
                                BRØD & ANDRE KORNPRODUKTER
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cookbook;
