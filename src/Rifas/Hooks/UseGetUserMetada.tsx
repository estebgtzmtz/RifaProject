import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { login } from "../../services";

export const UseGetUserMetada = () => {
  const { getAccessTokenSilently, user } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-4lhr8clbv7zx3s6y.us.auth0.com";

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          },
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const userInfo = await metadataResponse.json();

        setUserMetadata(userInfo);

        const response = await login(userInfo);
        console.log(response, "estop ya viene de mi BE");
      } catch (e) {
        console.log(e);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return { userMetadata };
};
