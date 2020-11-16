var x_loc = 0;
var y_loc = 0;

window.onload = function() {

    const app = new PIXI.Application( {
        width: 168,
        height: 168,
    });

    document.getElementById("pfp").appendChild(app.view)

    const geometry = new PIXI.Geometry()
        .addAttribute('aVertexPosition', // the attribute name
            [-100, -100, // x, y
              100, -100, // x, y
              100, 100,
             -100, 100], // x, y
            2) // the size of the attribute
        .addAttribute('aUvs', // the attribute name
            [0, 0, // u, v
             1, 0, // u, v
             1, 1,
             0, 1], // u, v
            2) // the size of the attribute
        .addIndex([0, 1, 2, 0, 2, 3]);

    const vertexSrc = `
    precision mediump float;

    attribute vec2 aVertexPosition;
    attribute vec2 aUvs;

    uniform mat3 translationMatrix;
    uniform mat3 projectionMatrix;

    varying vec2 vUvs;

    void main() {

        vUvs = aUvs;
        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    }`;

    const fragmentSrc = `
    precision mediump float;

    varying vec2 vUvs;

    uniform sampler2D uSampler2;
    uniform float time;
    uniform float strx;
    uniform float stry;

    void main() {
        float disp_x = sin(vUvs.y * 9.3 + time) * (strx + 0.02);
        float disp_y = sin(vUvs.y + time) * (stry + 0.02);
        vec2 displacement = vec2(disp_x, disp_y);
        gl_FragColor = texture2D(uSampler2, vUvs + displacement);
    }`;

    const uniforms = {
        uSampler2: PIXI.Texture.from('./img/profile.png'),
        time: 0,
        strx: 0.1,
        stry: 0.1,
    }

    const shader = PIXI.Shader.from(vertexSrc, fragmentSrc, uniforms);

    const quad = new PIXI.Mesh(geometry, shader);

    quad.position.set(90, 90);
    quad.scale.set(1);

    app.stage.addChild(quad);

    app.ticker.add((delta) => {
        quad.shader.uniforms.time += 0.1;  
    });

    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        quad.shader.uniforms.strx = Math.max(Math.abs(event.pageX - x_loc), Math.abs(x_loc - event.pageX)) * 0.001
        quad.shader.uniforms.stry = Math.max(Math.abs(event.pageY - y_loc), Math.abs(y_loc - event.pageY)) * 0.001

        x_loc = event.pageX
        y_loc = event.pageY
    }

    // Listen for window resize events
    window.addEventListener('resize', resize);

    // Resize function window
    function resize() {

        // Get the p
        const parent = app.view.parentNode;
    
        // Resize the renderer
        app.renderer.resize(parent.clientWidth, parent.clientHeight);
    
   
    }

    resize();

}

