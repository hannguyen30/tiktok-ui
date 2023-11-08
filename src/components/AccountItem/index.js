import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://drive.google.com/file/d/1XL_g9qOcODYSA1nOwP2LV3-tAnjIpBsR/view?usp=drive_link"
                alt="Ngocc"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Ngo Bao Ngoc</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>bngc.o2</span>
            </div>
        </div>
    );
}

export default AccountItem;
