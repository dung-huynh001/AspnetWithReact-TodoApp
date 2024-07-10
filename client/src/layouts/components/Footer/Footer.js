import classNames from "classnames/bind";
import styles from './Footer.module.scss'

const cx = classNames.bind(styles);

function Footer() {
    return ( 
        <footer className={cx('wrapper')}>
            <div className={cx('info')}>Powered by CUSC@2024</div>
        </footer>
     );
}

export default Footer;