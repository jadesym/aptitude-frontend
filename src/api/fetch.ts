import { getAPIBaseUrl } from "../env/api";

export async function getServerStatus() {
  try {
    const serverStatusResponse = await fetch(`${getAPIBaseUrl()}/status`);
    const { isServerAvailable } = await serverStatusResponse.json();
    return isServerAvailable;
  } catch (err) {
    console.error(`Failed to get server status from API server.`);
    console.error(err);
    return false;
  }
}
