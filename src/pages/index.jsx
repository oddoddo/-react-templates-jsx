import React from 'react';
import Layout from '../components/layout/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Image, Box, Heading, Text } from '@chakra-ui/react';
import apple from '../assets/images/tables/apple.svg';

const Home = () => {
    return (
        <Layout title="Home" pagename="home">
            <NavLnb className="nav-lnb">
                <ul>
                    <li>
                        <Link to="#">모두</Link>
                    </li>
                    <li>
                        <Link to="#">아트</Link>
                    </li>
                    <li>
                        <Link to="#">게이밍</Link>
                    </li>
                </ul>
            </NavLnb>
            <SwiperStyled navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <Image src={apple} alt="" />
                    <Box>
                        <Heading as="h2">Title</Heading>
                        <Text as="strong" variant={'txt164'}>
                            슬라이드 내용
                        </Text>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </SwiperStyled>
        </Layout>
    );
};

// styled-components import 후 사용
// const 변수이름(첫자는 대문자) = styled(컴포넌트명)``;
const SwiperStyled = styled(Swiper)`
    width: 100%;
    .swiper-slide {
        height: 300px;
        background: yellow;
    }
`;

// const 변수이름(첫자는 대문자) = styled.태그명``;
const NavLnb = styled.nav`
    ul {
        display: flex;
        gap: 20px;
    }
    li {
    }
    a {
        display: block;
        padding: 10px;
    }
`;

export default Home;
