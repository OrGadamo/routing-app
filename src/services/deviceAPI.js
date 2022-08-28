const deviceAPI =
  "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
async function getDevicesApi() {
  try {
    return await fetch(deviceAPI).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
export default getDevicesApi;
