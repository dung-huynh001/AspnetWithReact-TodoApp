import classNames from "classnames/bind";
import styles from './Header.module.scss'
import Logo from '~/assets/images/logo.png'
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Header() {
    const [timer, setTimer] = useState(new Date().toLocaleTimeString('en-US'));
    const today = new Date().toDateString()
    useEffect(() => {
        const timerId = setInterval(() => {
            setTimer(new Date().toLocaleTimeString('en-US'));
        }, 1000);

        return () => clearInterval(timerId);
    }, [timer]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={Logo} alt="logo" />
                </div>
                <div className={cx('today')}>
                    <p>{today}</p>
                    <span className={cx('timer')}>{timer}</span>
                </div>
            </div>
        </header>
    );
}

export default Header;