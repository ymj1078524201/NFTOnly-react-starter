import React from 'react'
import styles from './index.module.scss';
import classNames from 'classnames/bind';
import Header from 'src/components/custom-header/index'

const cx = classNames.bind(styles);

export default function index() {
  return (
    <div className={cx('component-page')}>
        <Header className={cx('header')} />
    </div>
  )
}
