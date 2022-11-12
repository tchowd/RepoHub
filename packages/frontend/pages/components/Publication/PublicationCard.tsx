import { HStack, Box, Image, } from "@chakra-ui/react";
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

       <div className={styles.container}>
      {/* <div className={styles.textContainer}>  */}


      {/* // </div> */}

                <Box
                  position={'relative'}
                  rounded={'2xl'}
                  borderWidth='0.2rem'
                  borderColor='gray.200'
                  overflow={'scroll'}
                  width={'18rem'}
                  marginRight={'5rem'}
                  padding={'1rem'}
                  marginTop={'1rem'}
                  _hover={{ boxShadow: 'lg' }}
                  className='overflowTest'
                >
                          <h2 className={styles.title}>{publication.metadata.name}</h2>
              <p className={styles.content}>{publication.metadata.content}</p>
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
