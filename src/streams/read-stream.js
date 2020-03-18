const fs = require('fs');
const file = './src/streams/video.mp4';

const readStream = fs.createReadStream(file);
let progress = 0;

fs.stat(file, (err, data) => {
    const total = data.size;

    readStream.on('data', (chunk) => {
        progress += chunk.length;
        console.log(Math.round((100 * progress) / total) + '%');
    });
    readStream.on('end', () => {
        console.log('data has read end');
    })
})