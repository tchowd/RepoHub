import { useQuery } from "@tanstack/react-query";
import mostFollowedProfiles from "../../graphql/query/mostFollowedProfiles";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { MediaRenderer } from "@thirdweb-dev/react";
import { Box, Container } from "@chakra-ui/react";

export default function ExploreProfiles() {

    const { data, isLoading } = useQuery(
    ["mostFollowedProfiles"],
    mostFollowedProfiles
  );

  return (
    <>
      <Container>
        <Box className={styles.profileGrid}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data?.map((profile) => (
              <a
                href={`/Profile/${profile.handle}`}
                className={styles.profileContainer}
                key={profile.id}
              >
                <MediaRenderer
                  src={profile?.picture?.original?.url || ""}
                  style={{
                    borderRadius: "50%",
                    width: "64px",
                    height: "64px",
                    objectFit: "cover",
                  }}
                />
                <h2 className={styles.profileName}>{profile.name}</h2>
                <p className={styles.profileHandle}>@{profile.handle}</p>
              </a>
            ))
          )}
        </Box>
      </Container>
    </>
  );
}
