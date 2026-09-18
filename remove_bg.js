const { removeBackground } = require('@imgly/background-removal-node');
const fs = require('fs');

async function processImage(imagePath, outputPath) {
    try {
        console.log(`Processing ${imagePath}...`);
        const blob = await removeBackground(imagePath);
        const buffer = Buffer.from(await blob.arrayBuffer());
        fs.writeFileSync(outputPath, buffer);
        console.log(`Saved transparent image to ${outputPath}`);
    } catch (e) {
        console.error(`Error processing ${imagePath}:`, e);
    }
}

async function run() {
    await processImage('1763453509768.jpg', 'profile-transparent-1.png');
    await processImage('1763624695793.jpg', 'profile-transparent-2.png');
}

run();
