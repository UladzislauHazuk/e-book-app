import style from './Features.module.css'
import { useState } from 'react'
import FeatureItem from './FeatureItem';

function Features () {
    const [feature, setFeature] = useState(<FeatureItem label={'Internal editor'}></FeatureItem>);

    function showContent (event) {
        setFeature(<FeatureItem label={event.target.textContent}></FeatureItem>)
    }


    return (
        <div className={style['wrapper']}>
            <h2>Explore more features</h2>
            <div onClick={showContent} className={style['container']}>
                <p>Internal editor</p>
                <p>Compact preview</p>
                <p>Convenient search</p>
                <p>Audio version</p>
            </div>
            <div>{feature}</div>
        </div>
    )
}

export default Features