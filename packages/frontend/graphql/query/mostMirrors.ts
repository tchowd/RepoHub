import Profile from "../../types/Profile";
import { basicClient } from "../initClient";

const mostMirrors = `
query ExploreProfiles {
  exploreProfiles(request: { sortCriteria: MOST_MIRRORS }) {
    items {
      id
      name
      bio
      handle
      picture {
        ... on MediaSet {
          original {
            url
          }
        }
      }
      stats {
        totalMirrors
      }
    }
  }
}
`;

/**
 * Load the top 25 most mirror profiles on Lens.
 */
async function mostMirrorsProfile(): Promise<Profile[]> {
  const response = await basicClient.query(mostMirrors, {}).toPromise();
  return response.data.exploreProfiles.items as Profile[];
}

export default mostMirrorsProfile;
