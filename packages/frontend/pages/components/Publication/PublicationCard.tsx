import { HStack, Box, Image, Text } from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";
import Link from "next/link";
import Publication from "../../../types/Publication";
import styles from "./Publication.module.css";

type Props = {
  publication: Publication;
};

export default function PublicationCard({ publication }: Props) {
  return (

      <>    

       <div>
      {/* <div className={styles.textContainer}>  */}


      {/* // </div> */}

                <Box
                  position={'relative'}
                  rounded={'2xl'}
                  borderWidth='0.2rem'
                  borderColor='gray.200'
                  // border={'red'}
                  backgroundColor={'white'}
                  overflow={'scroll'}
                  padding={'0.4rem'}
                  width={'15rem'}
                  marginTop={'1rem'}
                  _hover={{ boxShadow: 'lg' }}
                  className='overflowTest'
                >
                <Text fontSize={'l'} as='b' color={'black'}>{publication.metadata.name}</Text>
                <Text fontSize={'sm'}  color={'black'}>{publication.metadata.content}</Text>

                {publication.metadata.image && (
                  <MediaRenderer
                    src={publication.metadata.image || ""}
                    style={{
                      width: "100%",
                      maxHeight: 200,
                      objectFit: "cover",
                      borderRadius: 16,
                      overflow: 'scroll',
                      scrollBehavior: 'smooth'
                    }}
                    alt={publication.metadata.name}
                  />
                )}
                  
                </Box>
                </div>
    </>
    
  );
}
