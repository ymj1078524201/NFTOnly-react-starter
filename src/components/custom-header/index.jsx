import React from 'react'
import styles from './index.module.scss';
import classNames from 'classnames/bind';
import NFTOnlyIcon from 'src/assets/image/header.svg';
import { ImgContainer, Tooltip,DropDown } from 'src/components/custom-g-components/index';

import USIcon from 'src/assets/image/US.svg';
import ChineseIcon from 'src/assets/image/chinese.svg';
import DropdownIcon from 'src/assets/image/dropdown-checked.svg';

const cx = classNames.bind(styles);
export default function Header({className}) {
  return (
    <div className={cx('header', className)}>
        <ImgContainer src={NFTOnlyIcon}/>
        <Nav>
            <Tooltip title='soon'><NavItem content='name'/></Tooltip>
            <Tooltip title='soon'><NavItem content='name'/></Tooltip>
            <Tooltip title='soon'><NavItem content='name'/></Tooltip>
            <Tooltip title='soon'><NavItem content='name'/></Tooltip>
            <DropDown options={[
            <DropDownItem src={USIcon} title="English" checked />,
            <DropDownItem src={ChineseIcon} title="Chinense" checked />
            ]}>
                <div style={{display: 'flex'}}>
                    hover
                </div>
            </DropDown>
        </Nav>
    </div>
  )
}


const Nav = ({children}) => {
    return <div className={cx('nav')}>{children}</div>
}

const NavItem = ({content}) => {
   return <div className={cx('nav-item')}>{content}</div>
}

const DropDownItem = ({src, title, checked}) => {
   return <div className={cx('dropdown-item')}>
        <div className={cx('dropdown-item-left')}>
            <ImgContainer src={src} />
            <div>{title}</div>
        </div>
        {
            checked && <ImgContainer src={DropdownIcon}/>
        }
    </div>
}


const DownIcon = () => (
    <svg
        width="100%"
        viewBox="0 0 9 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L4.5 6L8 1" stroke="currentColor" fill="none" />
    </svg>
    );