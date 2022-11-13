import { Center, Button, Link, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
        <Center marginTop={'20rem'}>
          <VStack>
          <h1 className="text-4xl"> Hello World</h1>
          <Link href='/auth'>
            <div className="flex space-x-2 justify-center">
              {/* <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
              <Button>Enter</Button>  
            </div>
          </Link> 
          </VStack>    
        </Center>
    </div>
  );
}
