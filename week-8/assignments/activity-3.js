const timeout = (ms) => 
    new Promise(resolve => {
    setTimeout(resolve, ms);
    })


const generateRandomNumber = () => 
    Math.floor(Math.random() * 40)


const generateData = async () => 
    timeout(1000).then(() => 
    Array.from({ length: 20 }, generateRandomNumber))


const convertToFeet = (meters) => 
    timeout(3500).then(() => (meters * 3.2808))

const processData = async (data, conversion) =>
    await Promise.all(data.map(async (value) => {
    return { v: value, r: await conversion(value) };
    })
)

const logResult = (meters, feet) => 
    console.log(`Converted ${meters}m to ${feet}ft`)


const main = async () => {
    console.log("Start");
    const data = await generateData()
    const processedData = await processData(data, convertToFeet)
    processedData.forEach(element => {
        logResult(element.v, element.r)
    })
    console.log("Finish");
}

main();
