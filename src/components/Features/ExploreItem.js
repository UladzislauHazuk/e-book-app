import style from './Features.module.css'

function ExploreItems({ image, h3, p }) {

    return (
        <>
            <div className={style['block-feature']}>
                <div className={style['content']}>
                    <h3>{h3}</h3>
                    <p>{p}</p>
                </div>
                <div className={style[image]}></div>
            </div>
        </>
    )
}

export default ExploreItems