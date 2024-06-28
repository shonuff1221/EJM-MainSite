import { useEffect } from "react";

const Chatwoot = () => {
  useEffect(() => {
    const BASE_URL = "https://chat.117aub.xyz";
    const script = document.createElement("script");
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      window.chatwootSDK.run({
        websiteToken: "MaNm7e4eFjH3SGQhfcm3fTLy",
        baseUrl: BASE_URL,
      });
    };
  }, []);
  return null;
};

export default Chatwoot;
