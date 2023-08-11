import React from 'react'
import FullScreenSection from '../components/FullScreenSection'
import { HStack, Heading, Box, VStack, Image } from '@chakra-ui/react'
import saving from '../assets/Savings.png'
import profile from '../assets/profile.png'
import token1 from '../assets/token1.png'
import token2 from '../assets/token2.png'
const HomePage = () => {
    return (
        <div>
            <FullScreenSection>
                <VStack gap={'20'}>
                    <Heading color={'#861657'} fontFamily={"DynaPuff"}>Welcome to the Reward coin Universe</Heading>
                    <HStack>
                        <Box margin={' 0px 69px'} padding={'30px'}>
                            Buckle up for a mind-blowing journey into the world of e-commerce reward coins, where every purchase gets you closer to the top. Our rewarding system is designed for the futuristic shopping experience, turning your orders into gold.
                        </Box>
                        <Box margin={' 0px 69px'} padding={'30px'}>Here, we break down the core principles of the reward coin system, teach you how to achieve them, and reveal the secrets to maximizing its benefits. Plunge headfirst into this neo-brutalist world and make your shopping more exciting than ever before.</Box>
                    </HStack>
                </VStack>
            </FullScreenSection>

            <FullScreenSection>
                <VStack gap={'20px'}>
                    <Heading color={'#861657'} fontFamily={"DynaPuff"}>
                        The Reward Coin Breakdown
                    </Heading>
                    <HStack>
                        <Image
                            // borderRadius='full'
                            boxSize='450px'
                            src={saving}
                            alt='Dan Abramov'
                        />
                        <VStack>
                            <Heading color={'#861657'} size='md' marginBottom={'10px'}>Earn Coins</Heading>
                            <p>Accumulate coins for every purchase made on our e-commerce site – the sky’s the limit!<br></br><br></br></p>
                            <Heading size='md' color={'#861657'} marginBottom={'10px'}>Boost Savings</Heading>
                            <p>Redeem your coins for exclusive discounts and offers, saving more with every order.<br></br><br></br></p>
                            <Heading size='md' color={'#861657'} marginBottom={'10px'} >Stay Updated</Heading>
                            <p>Keep track of your rewards, profile, and recent orders – all in one easy-to-navigate section.<br></br><br></br></p>
                        </VStack>
                    </HStack>
                </VStack>
            </FullScreenSection>
            <FullScreenSection height={'60vh'}>
                <VStack gap={'20px'}>
                    <Heading textAlign={'left'} justifyContent={'flex-start'} color={'#861657'} marginRight={'auto'}>Unveiling The Coins Craze</Heading>
                    <HStack width={'100vh'}>
                        <p style={{ marginRight: 'auto', color: '#861657' }}>Coins System</p>
                        <p style={{ marginLeft: 'auto' }}>2023</p>
                    </HStack>
                    <HStack width={'100vh'}>
                        <p style={{ marginRight: 'auto', color: '#861657' }}>Best Offers</p>
                        <p style={{ marginLeft: 'auto' }}>2023</p>
                    </HStack>
                    <HStack width={'100vh'}>
                        <p style={{ marginRight: 'auto', color: '#861657' }}>Elite Profile</p>
                        <p style={{ marginLeft: 'auto' }}>2023</p>
                    </HStack>
                    <HStack width={'100vh'}>
                        <p style={{ marginRight: 'auto', color: '#861657' }}>Terms and Conditions</p>
                        <p style={{ marginLeft: 'auto' }}>2023</p>
                    </HStack>
                </VStack>
            </FullScreenSection>
            <FullScreenSection height={'80vh'}>
                <HStack gap={'80px'}>
                    <VStack gap={'8'}>
                        <Heading fontFamily={'DynaPuff'}>Your Rewarding Profile</Heading>
                        <Box width={'450px'}>Our platform offers a dedicated section for your user profile and rewards. Keep tabs on recent orders and the number of coins earned per order. A transparent reward system right at your fingertips – never miss out on opportunities again.</Box>
                    </VStack>
                    <Image
                        // borderRadius='full'
                        boxSize='250px'
                        src={profile}
                        alt='Dan Abramov'
                    />
                </HStack>
            </FullScreenSection>
            <FullScreenSection>
                <VStack gap={100}>
                    <HStack gap={20}>
                        <VStack>

                            <Heading size={'lg'} fontFamily={'DynaPuff'}>Unlock the Power of your Coins</Heading>
                            <p style={{ width: '400px' }}>Redeem your hard-earned coins for jaw-dropping offers, exclusive deals, and unbelievable discounts. Keep an eye on the terms and conditions for seamless, hassle-free transactionsa</p>
                        </VStack>
                        <Image
                            // borderRadius='full'
                            boxSize='250px'
                            src={token1}
                            alt='Dan Abramov'
                        />
                    </HStack>
                    <HStack gap={20}>
                        <Image
                            borderRadius='20px'
                            boxSize='250px'
                            src={token2}
                            alt='Dan Abramov'
                        />
                        <VStack>
                            <Heading size={'lg'} fontFamily={'DynaPuff'}>Unlock the Power of your Coins</Heading>
                            <p style={{ width: '400px' }}>Redeem your hard-earned coins for jaw-dropping offers, exclusive deals, and unbelievable discounts. Keep an eye on the terms and conditions for seamless, hassle-free transactionsa</p>
                        </VStack>
                    </HStack>
                </VStack>
            </FullScreenSection>
        </div>
    )
}

export default HomePage