/* adapted from https://codepen.io/NyX/pen/OydVzp */

import React, { useEffect, useRef } from 'react';

class Line {
  constructor(x, y) {
    this.location = {
      x: x,
      y: y,
    };

    this.width = Math.random() * 2 + 0.5;
    this.color = `hsla(260, 91%, ${Math.floor(Math.random() * 25) + 60}%, 0.80)`;
  }
}

class Signalz {
  constructor(canvas, speedFactor = 2) { // Add speedFactor parameter with a default value
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.center = { x: null, y: null };
    this.drawNo = 0;
    this.speedFactor = speedFactor; // Initialize speedFactor

    this.linesNo = 30;
    this.linesSize = 50;
    this.lines = [];

    this.init();
  }

  init() {
    this.setup();
    for (let i = 0; i < this.linesNo; i++) {
      this.lines.push(new Line(this.center.x, this.center.y));
    }
    this.animate();
  }

  setup() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.center.x = Math.round(this.canvas.width / 3) * 2;
    this.center.y = Math.round(this.canvas.height / 2);

    window.addEventListener('resize', this.onScreenResize.bind(this));
  }

  onScreenResize() {

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    if( this.canvas.width > 768 ){
      this.center.x = Math.round(this.canvas.width / 3) * 2;
      this.center.y = Math.round(this.canvas.height / 2);
  
      this.lines.forEach((line) => {
        line.location.x = this.center.x;
        line.location.y = this.center.y;
      });
    }

  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.draw();
  }

  draw() {
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.drawNo++;
    if (this.drawNo % this.speedFactor !== 0) { // Use speedFactor to control frame skipping
      return;
    }

    for (let idx = 0; idx < this.lines.length; idx++) {
      let line = this.lines[idx];
      let lineSize = this.linesSize;
      let dir = Math.floor(Math.random() * 3) * 90;

      if (idx % 4 === dir / 90) {
        dir = 270;
      }

      this.ctx.lineWidth = line.width;
      this.ctx.strokeStyle = line.color;
      this.ctx.beginPath();
      this.ctx.moveTo(line.location.x, line.location.y);

      switch (dir) {
        case 0:
          line.location.y -= lineSize;
          break;
        case 90:
          line.location.x += lineSize;
          break;
        case 180:
          line.location.y += lineSize;
          break;
        case 270:
          line.location.x -= lineSize;
          break;
        default:
          break;
      }

      this.ctx.lineTo(line.location.x, line.location.y);

      if (
        line.location.x < 0 ||
        line.location.x > this.canvas.width ||
        line.location.y < 0 ||
        line.location.y > this.canvas.height
      ) {
        line.location.x = this.center.x;
        line.location.y = this.center.y;
      }

      this.ctx.stroke();
    }
  }
}

const CanvasComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const signalz = new Signalz(canvas, 4); // Adjust the speedFactor here as needed

    return () => {
      window.removeEventListener('resize', signalz.onScreenResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="cvs" />;
};

export default CanvasComponent;
