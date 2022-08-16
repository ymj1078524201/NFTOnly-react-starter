import React, { useMemo,useState, useRef } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames/bind';

import headerImg from 'src/assets/image/header.svg'
import USIcon from 'src/assets/image/US.svg';
import ChineseIcon from 'src/assets/image/chinese.svg';
import DropdownIcon from 'src/assets/image/dropdown-checked.svg'
import Discord1Icon from 'src/assets/image/discord.svg';
import Twitter1Icon from 'src/assets/image/twitter.svg';
import Ins1Icon from 'src/assets/image/ins.svg'
import Picture1Img from 'src/assets/image/img01.png';
import Picture2Img from 'src/assets/image/img02.png';
import Picture3Img from 'src/assets/image/img03.png';
import Picture4Img from 'src/assets/image/img04.png';
import CloseIcon from 'src/assets/image/xmark.svg'
import Discord2Icon from 'src/assets/image/discord-white.svg'
import Twitter2Icon from 'src/assets/image/twitter-white.svg'
import Ins2Icon from 'src/assets/image/ins-white.svg'

const cx = classNames.bind(styles);

export default function NFTOnly() {
  return (
    <div className={cx('page')}>
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

const Header = () => {
    return <header>
        <ScrollTopImg src={headerImg} />
        <div className={cx('nav-container')}>
            <Nav />
        </div>
    </header>
}

const Main = () => {
    return <div className={cx('main-container')}>
        <ContentPage className={cx('full-screen')}>
            <MainContent />
        </ContentPage>
        <ContentPage>
            <FAQ/>
        </ContentPage>
    </div>
}

const ContentPage = ({children, className}) => {
    return <div className={cx('content',className)}>{children}</div>
}
const MainContent = () => {
    return <div className={cx('main-content')}>
        <div className={cx('left-content')}>
            <h2 className={cx('left-caption')}>inspire Web3 lifestyle for all</h2>
            <p className={cx('left-subtitle')}>NFTOnly is the world's first NFT copyright circulation and commercial value realization protocol. Let NFT enter the WEB2 field to gain a larger market.</p>
          <div className={cx('left-button-area')}>
            <div className=''>
                <MagicButton>LITEPAPER</MagicButton>
            </div>
            <div className={cx('btn-group')}>
                <a href="https://discord.gg/nftonly" target='_blank' rel="noreferrer"><LinkIcon  src={Discord1Icon}  className={cx('left-icon')} /></a>
                <a href="https://twitter.com/NFTOnlyOfficial" target='_blank' rel="noreferrer"><LinkIcon  src={Twitter1Icon}  className={cx('left-icon')} /></a>
                <a href="https://www.instagram.com/nftonly.app/" target='_blank' rel="noreferrer"><LinkIcon  href="https://www.instagram.com/nftonly.app/" src={Ins1Icon}  className={cx('left-icon')} /></a>
            </div>
          </div>
        </div>
        <div className={cx('right-content')}>
             <div
                className={cx('poster', 'poster-top')}
                data-atropos-offset="3">
                <div className={cx('poster2')}>
                  <img src={Picture1Img} alt="" />
                </div>
              </div>

              <div
                className={cx('poster', 'poster-right')}
                data-atropos-offset="-6">
                <div className={cx('poster2')}>
                  <img src={Picture2Img} alt="" />
                </div>
              </div>

              <div
                className={cx('poster', 'poster-left')}
                data-atropos-offset="6">
                <div className={cx('poster2')}>
                  <img src={Picture3Img} alt="" />
                </div>
              </div>

              <div
                className={cx('poster', 'poster-bottom')}
                data-atropos-offset="-3">
                <div className={cx('poster2')}>
                  <img src={Picture4Img} alt="" />
                </div>
              </div>
        </div>
    </div>
}

const LinkIcon = ({className, src}) => {
    return (
        <div className={cx('body-share-button')}>
            <ImgContainer src={src} className={cx({className})} />
        </div>
    )
}

const FAQ = () => {
    return <div className={cx('FAQ')}>
    <div className={cx('FAQ-content')} id="FAQ">
      <div className={cx('FAQ-title')}>FAQ</div>
      <Accordion />
    </div>
  </div>
}

const Footer = () => {

    const Nav = () => {

        // const router = useRouter();
    
        const [showSoonTip, setSoonTip] = useState(false);
    
        // const { t } = useTranslation();
    
        // const litepaperLink = useMemo(
        //   () =>
        //     litepaperLinks[(router.locale as keyof typeof litepaperLinks) || 'en'],
        //   [router]
        // );
    
        // const handleShowTip = () => {
        //   setSoonTip(true);
        //   let timer = setTimeout(() => {
        //     setSoonTip(false);
        //   }, 2000);
        // };
    
        const NavSoonList = ['Create', 'Gallery', 'Blueprint', 'Shop'].map(
          (item, index) => (
            <Tooltip
              title="soon"
              key={index}
              onClick={() => {}}>
              <div className={cx('footer-nav-item')}>{(`${item}`)}</div>
            </Tooltip>
          )
        );
        return (
          <>
            {/* <MobileMessage show={showSoonTip} /> */}
            <div className={cx('footer-nav')}>
              {/* <a href={litepaperLink} target="_blank" rel="noreferrer"> */}
                <div className={cx('footer-nav-item')}>{('Litepaper')}</div>
              {/* </a> */}
              <div
                className={cx('footer-nav-item')}
                onClick={() => {}}>
                {('FAQ')}
              </div>
              {NavSoonList}
            </div>
          </>
        );
      };

    return <footer>
        {/* <JoinCommunity /> */}
        <div className={cx('footer-container')}>
            <div className={cx('footer-left')}>
                <ScrollTopImg src={headerImg} className={cx('footer-icon')} />
                <Nav />
                <div className={cx('footer-nav')}>{`Copyright  © 2022 NFTOnly`}</div>
            </div>
            {/* <div className={cx('footer-mobileArea')}> */}
            <MobileArea />
            {/* </div> */}
        </div>
    </footer>
}

const Nav = () => {
    const SoonList = () => {
        return ['Create','Gallery', 'Blueprint', 'Shop'].map(item => {
            return <Tooltip title='soon'><div className={cx('nav-item')}>{item}</div></Tooltip>
        })
    }
    return <nav>
        <div className={cx('nav-item')}>Litepaper</div>
        <div className={cx('nav-item')}>FAQ</div>
        <SoonList />
        <div className={cx('nav-item')}>
          <div className={cx('nav-item-lan')}>
            <div>Language</div>
            <div className={cx('nav-item-lan-icon')}>
              <DownIcon />
            </div>
          </div>

          <div className={cx('dropDown')}>
            <div>
                <div className={cx('dropDown-item')}>
                  <div className={cx('dropDown-item-text')}>
                    <ImgContainer
                      src={USIcon}
                      className={cx('dropdown-icon')}
                    />
                    <div className={cx('dropdown-title')}>English</div>
                  </div>
                  <div className={cx('dropdown-checked')}>
                    {/* {router.locale === 'en' && (
                       <ImgContainer
                        src={DropdownIcon}
                        className=""
                      /> 
                    )} */}
                    <ImgContainer src={DropdownIcon} />    
                  </div>
                </div>

                <div className={cx('dropDown-item')}>
                  <div className={cx('dropDown-item-text')}>
                    <ImgContainer
                      src={ChineseIcon}
                      className={cx('dropdown-icon')}
                    />
                    <div className={cx('dropdown-title')}>
                      简体中文
                    </div>
                  </div>
                  <div className={cx('dropdown-checked')}>
                    {/* {router.locale === 'zh' && (
                      <ImgContainer
                        src={DropdownIcon}
                        className=""
                      /> 
                    )} */}
                     <ImgContainer src={DropdownIcon} /> 
                  </div>
                </div>
            </div>
          </div>
        </div>
    </nav>
}

const Accordion = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const FAQList = [{
        "title": "What is NFTOnly?",
        "content": "NFTOnly is the first NFT copyright circulation and commercial value realization protocol. The vision of NFTOnly is to break the barrier between WEB3 and WEB2 and realize the commercial value of NFT digital copyright by expanding the practical value and interoperability in the WEB2 field of NFT's digital copyright."
    }, {
        "title": "What products and functions do we have? (iterative development)",
        "content": "The NFTOnly platform allows NFT digital rights to be associated with real life, allowing NFT to gain a larger market in the WEB2 field. It contains the following parts: NFTOnly Protocol: NFT copyright circulation and commercial value realization protocol; NFTOnly Creator: NFT Print on Demand tool NFTOnly Copyright Trading Platform; NFTOnly Shop: Let everyone have an NFT shop"
    }, {
        "title": "NFTOnly Core Team",
        "content": "NFTOnly is a huge project that requires top talents in the blockchain industry and artists in the art field, and our team has both conditions. Our team has top talents in the blockchain industry and artists in the art field that nft needs as a massive project. We hope to create a high-quality platform by combining blockchain and artists. Our core technical team has many years of blockchain R&D experience from blockchain projects such as blockchain public chains, digital currency exchanges, and NFT trading platforms, which can ensure the implementation of NFTOnly's technology.In addition, our team also includes famous artists from well-known art platform founders that can guarantee the quality of NFTOnly's products."
    }, {
        "title": "NFTOnly's partner",
        "content": "We will continue to cooperate with commercial brands and institutions. When you authorize NFTOnly digital rights, NFT digital copyright commercial derivatives can appear from the Florence Art Museum to the Prada brand flagship store."
    }, {
        "title": "How can I get my own NFT items? (In development)",
        "content": "Just follow these simple steps: 1. Connect your wallet 2. Select the NFT and the item you want 3. Select your size (if applicable) and other information required 4. Pay"
    },
    {
        "title": "What types of products can I make with my NFTs?",
        "content": "You can browse available products on our \"Create Product\" page. Currently supports the design and customization of NFT exclusive T-shirts you hold. If you don't see the product you want, please don't worry! We will add new product options!"
    },
    {
        "title": "Which countries do you deliver to?",
        "content": "Currently it is free delivery in mainland China. Other countries specified have differentiated shipping fees; please submit a request to our customer service email or our Discord."
    },{
        "title": "Where is the product made and can you tell me something about the quality?",
        "content": "We partner with the best manufacturers in the world to create unique works for you. We guarantee the quality of the product you get. If you are unsatisfied, please get in touch with us, and we will customize it."
    },{
        "title": "When will I receive my product?",
        "content": "Since we made each custom piece with skill, craftsmanship, and your unique NFT, it will take approximately 10-14 days to produce and ship to you. If you haven't received your order after 14 days, Please contact us via Discord create-a-ticket."
    },{
        "title": "How can I contact you if I am interested in business with NFTOnly?",
        "content": "Please contact us via Discord create-a-ticket"
    }
]
    const ItemList = useMemo(
      () =>
        FAQList.map((item, index) => {
          return <Item {...item} key={index} />;
        }),
      [FAQList]
    );
    
    return <ul className={cx('FAQ-ul')}>{ItemList}</ul>;
  };

  const Item = ({ title, content }) => {
    const [selectFlag, setSelectFlag] = useState(false);
  
    const pRef = useRef(null);
  
    const handleClick = () => {
      setSelectFlag((v) => !v);
    };
    return (
      <li className={cx('accordion')}>
        <div className={cx('titleArea')} onClick={handleClick}>
          <h2>{title}</h2>
          <div className={cx(selectFlag ? 'transformBack' : 'transform')}>
            <ImgContainer src={CloseIcon} className={cx('FAQ-mark')} />
          </div>
        </div>
        <div
          className={cx('item-content')}
          style={{ height: selectFlag ? pRef?.current?.offsetHeight : 0 }}>
          <p ref={pRef}>{content}</p>
        </div>
      </li>
    );
  };


const Tooltip = ({
    title,
    children,
    onClick
  }) => {
    return (
      <div
        className={cx('tooltip')}
        onClick={onClick}
        data-tooltip={title}
        data-position="top right">
        {children}
      </div>
    );
  };

const DownIcon = () => (
<svg
    width="100%"
    viewBox="0 0 9 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L4.5 6L8 1" stroke="currentColor" fill="none" />
</svg>
);
  
const ScrollTopImg = ({ className, src }) => (
    // <div onClick={() => scrollToAnchor('page')} style={{ cursor: 'pointer' }}>
    <div onClick={() => {}} style={{ cursor: 'pointer' }}>
      <ImgContainer src={src} className={className} />
    </div>
  );

const ImgContainer = ({className, src}) => <div className={cx('img-container', className)}>
  <img src={src} alt="" />
</div>

const MagicButton = ({children}) => {
    return <a href="https://www.instagram.com/nftonly.app/" target='_blank' rel="noreferrer"><div className={cx('magic-button')} tabIndex='1'><span>{children}</span></div></a>
}

const MobileArea = () => {
    return (
      <div className={cx('mobile-area')}>
        <ImgContainer
          className={cx('mobile-area-item')}
          href="https://discord.gg/nftonly"
          src={Discord2Icon}
        />
        <ImgContainer
          className={cx('mobile-area-item')}
          href="https://twitter.com/NFTOnlyOfficial"
          src={Twitter2Icon}
        />
        <ImgContainer
          className={cx('mobile-area-item')}
          href="https://www.instagram.com/nftonly.app/"
          src={Ins2Icon}
        />
      </div>
    );
  };