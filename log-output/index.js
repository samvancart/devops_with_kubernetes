const randomString = Math.random().toString(36).substring(2,18);

const getTimeStamp = () => {
    const timeStamp = new Date().toISOString();

    console.log(`${timeStamp}: ${randomString}`);
    setTimeout(getTimeStamp,5000);
}
getTimeStamp();

