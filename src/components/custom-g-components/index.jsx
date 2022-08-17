import React, { useMemo } from 'react'

import styles from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function index() {
  return (
    <div>index</div>
  )
}

export const ImgContainer = ({src, className}) => <div className={cx('img-container', className)}>
    <img src={src} alt="" />
</div>

export const Tooltip = ({
    title,
    children,
    className,
    onClick = () => {}
  }) => {
    return (
      <div
        className={cx('tooltip', className)}
        onClick={onClick}
        data-tooltip={title}
        data-position="top right">
        {children}
      </div>
    );
  };

export const DropDown = ({
  children,
  className,
  options = [],
  // onSelect,
  // showOnHover = false,
  }) => {
  const List = useMemo(() => {
    return options?.map(item => {
      return <div key={index} onClick={() => {}}>{ item } </div>
    });
  }, [options]);

  return <div className={cx('dropdown')}>
    <div>{children}</div>
    <ul className={cx('dropdown-container', className)}>{List}</ul>
  </div>
}