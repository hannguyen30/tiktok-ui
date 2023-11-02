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
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/4c84f86e1946a22f3bad98789b302e6d~c5_100x100.jpeg?x-expires=1699102800&x-signature=E5ExhgU5qGuzxA9kaMxbP3prLwM%3D"
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
