setInterval(() => {
    $target.addClass(CLASSNAME);
    setTimeout(() => {
        $target.removeClass(CLASSNAME);
    }, TIMEOUT);
    }, TIMEOUT * 2);

/*オーディオスペクトラム*/
// spectrum.js
window.addEventListener('load', () => {
    const canvas = document.getElementById('spectrumCanvas');
    const ctx = canvas.getContext('2d');
    const audioElement = document.getElementById('audioElement');

    // Canvasのサイズを設定
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Web Audio APIの設定
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audioElement);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    function draw() {
        requestAnimationFrame(draw);

        analyser.getByteFrequencyData(dataArray);

        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const barWidth = (canvas.width / bufferLength) * 2.5;
        let barHeight;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];
            ctx.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
            ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
            x += barWidth + 1;
        }
    }

    draw();
});

