import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { FaChevronDown } from 'react-icons/fa';

const tutorialVideo = require('../../assets/videos/tutorial.mp4');
const scanImage = require('../../assets/images/scan_cropped.png');
const arrowLoop = require('../../assets/images/arrow_loop.png');

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
                        <div className={'w-2/3 flex items-center'}>
                            <ReactPlayer
                                url={tutorialVideo}
                                width='100%'
                                height='auto'
                                controls={true}
                                loop={true}
                                muted={true}
                                playing={true}
                                onProgress={updatePhone}
                            />
                        </div>
                        <div className={'h-full w-1/3 flex justify-center items-center px-12'}>
                            <Phone />
                        </div>
                    </div>
                    <div className={'h-24 flex items-center justify-center'}>
                        <FaChevronDown size={42} />
                    </div>
                </div>
                <Step>
                    <h2 className={'font-semibold text-2xl text-primary'}>Steg 1</h2>
                    <div className={'flex'}>
                        <div className={'w-2/3 flex justify-center items-center'}>
                            <p className={'font-semibold text-3xl mr-8 font-mono'}>Scan tilbudsvarer</p>
                            <img src={scanImage} alt={'scan product'} className={'w-1/2 rounded'} />
                        </div>
                        <div className={'relative w-1/3'}>
                            <img src={arrowLoop} alt={'arrow'} className={'absolute w-1/5 ml-12'} style={{ bottom: '-50%' }} />
                        </div>
                    </div>
                </Step>
                <Step>
                    <div className={'flex justify-end'}>
                        <h2 className={'font-semibold text-2xl text-primary'}>Steg 2</h2>
                    </div>
                </Step>
                <Step>
                    <h2 className={'font-semibold text-2xl text-primary'}>Steg 3</h2>
                </Step>
            </div>
        </div>
    );
};

export default Tutorial;
