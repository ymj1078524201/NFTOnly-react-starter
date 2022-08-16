import React from 'react';
import styles from 'src/pages/LayoutOnly/index.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);


export default function index() {
  return (
    <div className={cx('page')}>
        <div className={cx('header')}>1111</div>
        <Main/>
        <div className={cx('footer')}>2222</div>
    </div>
  )
}


const Main = () => {
    return <>
        <div className={cx('first-page')}>
            <div className={cx('content')}></div>
            <div className={cx('content')}></div>
        </div>
        <FAQ/>
    </>
}

const FAQ = () => {
    return <div className={cx('FAQ')}></div>
}