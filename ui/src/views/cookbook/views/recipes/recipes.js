import React from 'react';

// Assets
const bananpannekaker = require('../../../../assets/images/bananpannekaker.png');
const bananbrod = require('../../../../assets/images/bananbrod.png');
const bananchips = require('../../../../assets/images/bananchips.png');
const bananis = require('../../../../assets/images/bananis.png');
const banankake = require('../../../../assets/images/banankake.png');
const bananlapper = require('../../../../assets/images/bananlapper.png');
const bananmilkshake = require('../../../../assets/images/bananmilkshake.png');
const bananmos = require('../../../../assets/images/bananmos.png');
const bananmuffins = require('../../../../assets/images/bananmuffins.png');
const banansalat = require('../../../../assets/images/banansalat.png');
const bananscones = require('../../../../assets/images/bananscones.png');
const banansmoothie = require('../../../../assets/images/banansmoothie.png');
const banansplit = require('../../../../assets/images/banansplit.png');
const bananvafler = require('../../../../assets/images/bananvafler.png');
const fruktsalat = require('../../../../assets/images/fruktsalat.png');
const havregrot = require('../../../../assets/images/havregrot.png');
const nicecream = require('../../../../assets/images/nicecream.png');
const sjokoladepalegg = require('../../../../assets/images/sjokoladepalegg.png');

const Recipes = () => {
    const Recipe = ({ title, src, heightMulti = 1 }) => (
        <a href={'https://www.godt.no/oppskrift/2217/sunne-bananpannekaker'}>
            <div
                className={
                    'relative flex items-center justify-center bg-gray-800 cursor-pointer'
                }
                style={{ height: `${30 * heightMulti}vw` }}>
                <div className={'w-full h-full hover:opacity-25 z-10'}>
                    <img
                        src={src}
                        className={'object-cover h-full w-full'}
                        alt={'recipe link'}
                    />
                </div>
                <div
                    className={
                        'absolute w-full h-full flex items-center justify-center top-0 left-0'
                    }>
                    <h3 className={'text-white text-4xl text-center p-8'}>
                        {title}
                    </h3>
                </div>
            </div>
        </a>
    );
    return (
        <div className={'flex'}>
            <div className={'flex flex-col'} style={{ width: '25%' }}>
                <Recipe title={'BANAN- PANNEKAKER'} src={bananpannekaker} />
                <Recipe title={'BANANLAPPER'} src={bananlapper} />
                <Recipe title={'NICE CREAM'} src={nicecream} />
                <Recipe title={'BANANVAFLER'} src={bananvafler} />
            </div>

            <div className={'flex flex-col'} style={{ width: '35%' }}>
                <div className={'flex'}>
                    <div className={'w-1/2'}>
                        <Recipe
                            title={'BANAN- MILKSHAKE'}
                            src={bananmilkshake}
                        />
                    </div>
                    <div className={'w-1/2'}>
                        <Recipe title={'BANANBRØD'} src={bananbrod} />
                    </div>
                </div>
                <Recipe
                    title={'BANANMUFFINS'}
                    src={bananmuffins}
                    heightMulti={0.5}
                />
                <Recipe title={'HAVREGRØT MED BANAN'} src={havregrot} />
                <Recipe
                    title={'SMOOTHIE MED BANAN'}
                    src={banansmoothie}
                    heightMulti={0.5}
                />
                <Recipe title={'BANANCHIPS'} src={bananchips} />
            </div>

            <div className={'flex flex-col'} style={{ width: '20%' }}>
                <Recipe title={'BANANMOS SOM PÅLEGG'} src={bananmos} />
                <Recipe title={'BANANIS'} src={bananis} />
                <Recipe title={'BANANSALAT'} src={banansalat} />
                <Recipe title={'BANAN- SCONES'} src={bananscones} />
            </div>

            <div className={'flex flex-col'} style={{ width: '20%' }}>
                <Recipe
                    title={'BANANKAKE'}
                    src={banankake}
                    heightMulti={1.25}
                />
                <Recipe title={'BANANSPLIT'} src={banansplit} />
                <Recipe title={'FRUKTSALAT'} src={fruktsalat} />
                <Recipe
                    title={'SJOKOLADE- PÅLEGG AV BANAN'}
                    src={sjokoladepalegg}
                    heightMulti={0.75}
                />
            </div>
        </div>
    );
};

export default Recipes;
