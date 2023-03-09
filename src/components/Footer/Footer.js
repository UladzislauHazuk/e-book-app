import style from './Footer.module.css'
import { Link } from "react-scroll";

function Footer() {
    return (
        <div className={style["wrapper"]}>
            <div className={style["wrapper-wdth"]}>

                <Link activeClass="active" to="start" spy={true} smooth={true} offset={-50} duration={500}><div className={style["logo"]}></div></Link>
                <nav>
                    <p>Privacy Policy</p>
                    <p>Security</p>
                    <p>Terms of Services</p>
                    <p>Contact Us</p>
                </nav>
                <div className={style["icons"]}>
                    <div className={style["tw"]}></div>
                    <div className={style["linkedin"]}></div>
                    <div className={style["inst"]}></div>
                </div>
            </div>
        </div>
    )
}

export default Footer