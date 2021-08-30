import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended For You</h4>
            <Content>
                <Wrap>
                    <img src="https://media.socastsrm.com/wordpress/wp-content/blogs.dir/460/files/2020/12/soul-banner.jpg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://www.disneyfoodblog.com/wp-content/uploads/2020/07/Disney-Pixar-Luca-Logo.jpeg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/77E79ECD60B7C2835EB514DD85E90314EC790B6F6C8D57D6BEEA0F19A3A53185/scale?width=1200&aspectRatio=1.78&format=jpeg" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C7B0AD12884120F55F5391EF8A487305D78D720B5211CBEBA3B38ACDA6A196AE/scale?width=1200&aspectRatio=1.78&format=jpeg" alt="" />
                </Wrap>
            </Content>
            
        </Container>
    )
}

const Container = styled.div`

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
`

export default Movies
