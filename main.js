let simplex = new SimplexNoise(Math.random);
console.log(simplex);

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

let WIDTH = canvas.width;
let HEIGHT = canvas.height;
let circles = [];

let analyser = undefined;

let now = Date.now();
let lastTime = now;
let deltaTime = 6;

position = new Vector(0, 0);


let button = document.querySelector('.button');
button.addEventListener('click', function () {
    button.classList.add('hidden');


    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        WIDTH = canvas.width;
        HEIGHT = canvas.height;

        update();
    }

        let audio = document.createElement('audio');
        audio.src = 'perdus.mp3';
        audio.controls = 'true';
        document.body.appendChild(audio);
        audio.style.width = window.innerWidth + 'px';

        let audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        let source = audioContext.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioContext.destination);

        setTimeout(function () {
            audio.play();
        }, 1500)

        // audio.play();


    function drawCircle() {

        let freqByteData = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(freqByteData);

        for (let i = 1; i === 1; i++) {
            let position = {x: WIDTH / 2, y: HEIGHT / 2};
            let velocity = {x: Math.random() * .2, y: Math.random() * .2};
            let size = freqByteData[i] + deltaTime / 100;
            let circle = new Circle(position, velocity, size);
            circles.push(circle);
            circle.draw(ctx);
        }
    }

    function drawBackground(changeBackground) {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);

        let freqByteData = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(freqByteData);

        for (x = 0; x < WIDTH; x += 10) {
            for (y = 0; y < HEIGHT; y += 10) {
                let n = simplex.noise3D(x / 1000, y / 1000, Date.now() * 0.0001);
                let dist = Math.sqrt(Math.pow((x - position.x), 2) + Math.pow((y - position.y), 2));

                let distanceToCenter = Math.sqrt(Math.pow((x - canvas.width / 2), 2) + Math.pow((y - canvas.height / 2), 2));
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(n * 2 - deltaTime / 10000);

                if (changeBackground === true) {
                    ctx.scale(n * 2 - deltaTime / 10000, n * 2 - deltaTime / 10000);
                }

                if (distanceToCenter < freqByteData[200]) {
                    ctx.fillStyle = 'red';
                } else if (dist < 100) {
                    ctx.fillStyle = `rgb(${100 - dist},0,0)`;
                }
                ctx.fillRect(0, 0, 10, 10);
                ctx.restore();
            }
        }
    }

    let changeBackground = false;

    function update() {
        now = Date.now();
        deltaTime = now - lastTime;
        requestAnimationFrame(update);
        lastTime = now;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawBackground(changeBackground);
        drawCircle();
    }


    window.addEventListener('resize', resize, false);
    resize();


    document.addEventListener('mousemove', function (e) {
        position.x = e.clientX;
        position.y = e.clientY;

        // ctx.fillStyle = `rgb(${100 - dist.x},${100 + dist.x},0)`;
    });


    document.addEventListener('click', function (e) {
        changeBackground = !changeBackground;
    });


});