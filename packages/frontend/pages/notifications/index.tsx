import { Web3Context } from '../../context/web3Context';
import { useWeb3React } from "@web3-react/core";
import Notifications from './display-notifications/Displaynotifications';
import ConnectButton from '../components/Connect';
import { useAccount } from 'wagmi';
import { Center, Container, Text, VStack } from '@chakra-ui/react';

interface Web3ReactState {
  active: boolean;
}

const checkForWeb3Data = ({ active  } : Web3ReactState) => {
  return active ;
}


export default function NotificationsHome() {
  const web3Data : Web3ReactState = useWeb3React();
  const { isConnected} = useAccount()

  return (
    <Container>
      <Center marginTop={'5rem'}>
        <VStack>
          <Text fontSize='4xl'>Notifications</Text>
          <ConnectButton />
        </VStack>
      </Center>

      {checkForWeb3Data(web3Data) && isConnected ? (
        <Web3Context.Provider value={web3Data}>
             <Notifications />
        </Web3Context.Provider>
      ) : null}
    </Container>
  )
}
