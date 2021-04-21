import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { FaChevronDown } from 'react-icons/fa';
import { useHistory } from 'react-router';
import ROUTES from '../../routes';

const barcode = require('../../assets/images/barcode.png');
const savedGraphs = require('../../assets/images/graphs.png');
const earth = require('../../assets/images/earth.png');
const award = require('../../assets/images/award.png');
const recipe = require('../../assets/images/recipe.png');
const arrowLoop = require('../../assets/images/arrow_1.png');
const arrowSquiggle = require('../../assets/images/arrow_2.png');

const grillpolser_image = require('../../assets/images/grillpolser.png');
const lordagspizza_image = require('../../assets/images/lordagspizza.png');
const salathode_image = require('../../assets/images/salathode.jpg');
const digg_image = require('../../assets/images/digg.png');
const gudbrand_image = require('../../assets/images/gudbrand.jpg');
const kylling_image = require('../../assets/images/kylling.png');
const pastasalat_image = require('../../assets/images/pastasalat.jpg');
const potetsalat_image = require('../../assets/images/potetsalat.jpg');
const salatboks_image = require('../../assets/images/salatboks.png');
const sursild_image = require('../../assets/images/sursild.jpg');

const grillpolser = { name: 'Grillpølser', cost: 39, sale: 39, image: grillpolser_image };
const lordagspizza = { name: 'Pizza', cost: 49, sale: 49, image: lordagspizza_image };
const salathode = { name: 'Salathode', cost: 13, sale: 13, image: salathode_image };
const digg = { name: 'DIGG', cost: 39, sale: 19, image: digg_image };
const gudbrand = { name: 'Ost', cost: 49, sale: 24, image: gudbrand_image };
const kylling = { name: 'Kylling', cost: 129, sale: 94, image: kylling_image };
const pastasalat = { name: 'Pastasalat', cost: 47, sale: 34, image: pastasalat_image };
const potetsalat = { name: 'Potetsalat', cost: 29, sale: 14, image: potetsalat_image };
const salatboks = { name: 'Salatboks', cost: 59, sale: 34, image: salatboks_image };
const sursild = { name: 'Sursild', cost: 59, sale: 27, image: sursild_image };

const initialProducts = [grillpolser, lordagspizza, salathode];

const Tutorial = () => {
    const history = useHistory();

    const [products, setProducts] = useState(initialProducts);
    const [newProduct, setNewProduct] = useState(null);
    const Step = ({ children }) => (
        <div className={'p-8'} style={{ height: '400px' }}>
            {children}
        </div>
    );

    const updatePhone = ({ played, playedSeconds, loaded, loadedSeconds }) => {
        if (playedSeconds > 20 && playedSeconds <= 25) {
            if (newProduct == null || newProduct.name !== digg.name) {
                setNewProduct(digg);
                setProducts([digg, ...initialProducts]);
            }
        } else if (playedSeconds > 25 && playedSeconds <= 28) {
            if (newProduct == null || newProduct.name !== kylling.name) {
                setNewProduct(kylling);
                setProducts([kylling, digg, ...initialProducts]);
            }
        } else if (playedSeconds > 28 && playedSeconds <= 46) {
            if (newProduct == null || newProduct.name !== salatboks.name) {
                setNewProduct(salatboks);
                setProducts([salatboks, kylling, digg, ...initialProducts]);
            }
        } else if (playedSeconds > 46 && playedSeconds <= 53) {
            if (newProduct == null || newProduct.name !== sursild.name) {
                setNewProduct(sursild);
                setProducts([sursild, salatboks, kylling, digg, ...initialProducts]);
            }
        } else if (playedSeconds > 53 && playedSeconds <= 58) {
            if (newProduct == null || newProduct.name !== gudbrand.name) {
                setNewProduct(gudbrand);
                setProducts([gudbrand, sursild, salatboks, kylling, digg, ...initialProducts]);
            }
        } else if (playedSeconds > 58 && playedSeconds <= 69) {
            if (newProduct == null || newProduct.name !== potetsalat.name) {
                setNewProduct(potetsalat);
                setProducts([potetsalat, gudbrand, sursild, salatboks, kylling, digg, ...initialProducts]);
            }
        } else if (playedSeconds > 69) {
            if (newProduct == null || newProduct.name !== pastasalat.name) {
                setNewProduct(pastasalat);
                setProducts([pastasalat, potetsalat, gudbrand, sursild, salatboks, kylling, digg, ...initialProducts]);
            }
        } else {
            setNewProduct(null);
            setProducts([grillpolser, lordagspizza, salathode]);
        }
    };

    const ItemRow = ({ product }) => {
        const [bg, setBg] = useState(newProduct != null && product.name === newProduct.name ? 'primary' : 'white');

        useEffect(() => {
            if (newProduct != null && product.name === newProduct.name) {
                setTimeout(() => setBg('white'), 500);
            }
        }, []); // eslint-disable-line react-hooks/exhaustive-deps

        return (
            <div className={`transition duration-1000 bg-${bg} border rounded flex items-center p-1 mb-2 shadow justify-between`}>
                <div className={'flex items-center'}>
                    <img src={product.image} alt={'product'} className={'w-12 h-12 object-scale-down mr-2'} />
                    <p>{product.name}</p>
                </div>
                <div className={'pr-4'}>{product.cost} NOK</div>
            </div>
        );
    };

    const Phone = () => (
        <div
            className={'border-2 shadow-2xl h-full w-full flex flex-col'}
            style={{
                backgroundColor: '#161616',
                borderRadius: '20px',
                paddingBottom: '18%',
            }}>
            <div style={{ height: '10%' }} className={'flex items-center justify-center'}>
                <div className={'w-8 flex justify-center'}>
                    <div className={'h-2 w-2 rounded-full bg-gray-600'} />
                </div>
                <div className={'border-2 h-1 w-8 border-color rounded border-gray-400'} />
                <div className={'w-8'} />
            </div>
            <div className={'w-full h-full px-2'}>
                <div style={{ height: '70%' }} className={'relative border-b-2 overflow-hidden p-4 bg-white overflow-hidden'}>
                    <div className={'absolute h-full w-full left-0 top-0 p-4'}>
                        <div>
                            <p className={'font-bold mb-2'}>Varer</p>
                            {products.map((product, i) => (
                                <ItemRow key={i} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
                <div style={{ height: '30%' }} className={'flex items-center justify-around bg-white text-lg font-semibold text-gray-800'}>
                    <div className={'flex flex-col items-center rounded-lg'}>
                        <p>Du har brukt</p>
                        <p className={'font-mono'}>{products.reduce((acc, product) => (acc += product.cost), 0)} NOK</p>
                    </div>
                    <div className={'flex flex-col items-center rounded-lg'}>
                        <p>
                            Du har <span className={'text-primary'}>spart</span>
                        </p>
                        <p className={'text-primary font-mono'}>
                            {products.reduce((acc, product) => (acc += product.cost), 0) -
                                products.reduce((acc, product) => (acc += product.sale), 0)}{' '}
                            NOK
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className={'flex justify-center'}>
            <div className={'max-w-screen-xl'}>
                <div className={'h-screen flex flex-col justify-between py-12'}>
                    <div className={'flex items-center'} style={{ height: '80%' }}>
                        <div className={'w-2/3 flex flex-col items-center'}>
                            <ReactPlayer
                                url={'https://vimeo.com/539562565'}
                                width='100%'
                                controls={true}
                                loop={true}
                                muted={true}
                                playing={true}
                                onProgress={updatePhone}
                            />
                            <p className={'mt-12 text-2xl'}>Last ned appen i dag og bli med i kampen mot matsvinn!</p>
                        </div>
                        <div className={'h-full w-1/3 flex justify-center items-center px-12'}>
                            <Phone />
                        </div>
                    </div>
                    <div className={'h-24 flex items-center justify-center'}>
                        <FaChevronDown size={42} />
                    </div>
                </div>
                <div className={'flex justify-center text-2xl'}>
                    Hei og velkommen! Du er snart klar til å bidra til mindre matsvinn i butikkene.
                </div>
                <Step>
                    <h2 className={'font-semibold text-4xl text-primary'}>Steg 1</h2>
                    <div className={'flex'}>
                        <div className={'w-2/3 flex justify-start items-center'}>
                            <p className={'font-semibold text-3xl font-mono mr-8'} style={{ width: '60%' }}>
                                Skan tilbudsvare med utvidet tilbudsstrekkode
                            </p>
                            <img src={barcode} alt={'scan product'} className={'w-1/2 rounded'} />
                        </div>
                        <div className={'relative w-1/3'}>
                            <img src={arrowLoop} alt={'arrow'} className={'absolute w-1/2 ml-32'} style={{ bottom: '-20%' }} />
                        </div>
                    </div>
                </Step>
                <Step>
                    <div className={'h-full flex flex-col items-end'}>
                        <h2 className={'font-semibold text-4xl text-primary'}>Steg 2</h2>
                        <div className={'h-full flex w-full items-center'}>
                            <div className={'h-full flex w-1/5 justify-start items-end'}>
                                <img
                                    src={arrowSquiggle}
                                    alt={'arrow'}
                                    className={'w-32'}
                                    style={{ transform: 'rotate(25deg)', marginBottom: '-10%' }}
                                />
                            </div>
                            <div className={'flex justify-end items-center'}>
                                <img src={savedGraphs} alt={'scan product'} className={'w-full rounded'} />
                                <p className={'w-64 font-semibold text-3xl ml-8 font-mono text-right'}>Se personlig sparing</p>
                            </div>
                        </div>
                    </div>
                </Step>
                <Step>
                    <h2 className={'font-semibold text-4xl text-primary mb-12 mt-8'}>Steg 3</h2>
                    <div className={'w-full flex justify-around mb-24'}>
                        <div
                            className={'w-1/3 flex flex-col justify-center items-center p-4 cursor-pointer'}
                            onClick={() => history.push(ROUTES.STATISTICS)}>
                            <p className={'font-semibold text-3xl font-mono mb-4'}>Få bevissthet</p>
                            <img src={earth} alt={'scan product'} className={'w-1/2 h-32 object-scale-down rounded'} />
                        </div>
                        <div
                            className={'w-1/3 flex flex-col justify-center items-center p-4 cursor-pointer'}
                            onClick={() => history.push(ROUTES.COOKBOOK)}>
                            <p className={'font-semibold text-3xl font-mono mb-4'}>Lag mat</p>
                            <img src={recipe} alt={'scan product'} className={'w-1/2 h-32 object-scale-down rounded'} />
                        </div>
                        <div
                            className={'w-1/3 flex flex-col justify-center items-center p-4 cursor-pointer'}
                            onClick={() => history.push(ROUTES.COMPETITION)}>
                            <p className={'font-semibold text-3xl font-mono mb-4'}>Vinn premier</p>
                            <img src={award} alt={'scan product'} className={'w-1/2 h-32 object-scale-down rounded'} />
                        </div>
                    </div>
                </Step>
            </div>
        </div>
    );
};

export default Tutorial;
