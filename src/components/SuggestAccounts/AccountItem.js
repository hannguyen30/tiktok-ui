import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as ProperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
import styles from './SuggestAccounts.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <ProperWrapper>
                    <AccountPreview></AccountPreview>
                </ProperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://instagram.fhan14-2.fna.fbcdn.net/v/t51.2885-15/331476402_756574592707134_6504562513833994648_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDEuc2RyIn0&_nc_ht=instagram.fhan14-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=yGE1ek_AUkYAX8UW-TV&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA0MTAzODcyODEyNzM3Mzg1NQ%3D%3D.2-ccb7-5&oh=00_AfAr5Zu-2_8MGjhKZKA89GY0Jn2U3c_JUbCgV7vXdTLBzQ&oe=654FFC51&_nc_sid=b41fef"
                        alt=""
                    />

                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Jao7731</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Tulip</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
