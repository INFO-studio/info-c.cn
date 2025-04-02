<script setup lang="ts">
import { ref, onMounted } from 'vue'
import image from "@/assets/images/chattering/hello_world/logo_rhine.png"
const canvas = ref<HTMLCanvasElement | null>(null)
let context = ref<CanvasRenderingContext2D | null>(null)
let particleCanvas = ref<ParticleCanvas>()
const width = 200, height = 200
const animateTime = 10
const opacityStep = 1 / animateTime
const Radius = 40
const Force = 0.95

class Particle {
  x: number
  y: number
  totalX: number
  totalY: number
  mx?: number
  my?: number
  vx?: number
  vy?: number
  time: number
  r: number
  color: number[]
  opacity: number

  constructor(totalX: number, totalY: number, time: number, color: number[]) {
    this.x = (Math.random() * width) >> 0
    this.y = (Math.random() * height) >> 0
    this.totalX = totalX
    this.totalY = totalY
    this.time = time
    this.r = 1.2
    this.color = [...color]
    this.opacity = 0
  }

  draw() {
    context.value!.fillStyle = `rgba(${this.color.toString()})`
    context.value!.fillRect(this.x, this.y, this.r * 2, this.r * 2)
    context.value!.fill()
  }

  update(mouseX?: number, mouseY?: number) {
    this.mx = this.totalX - this.x
    this.my = this.totalY - this.y
    this.vx = this.mx / this.time
    this.vy = this.my / this.time

    if (mouseX && mouseY) {
      let dx = mouseX - this.x
      let dy = mouseY - this.y
      let distance = Math.sqrt(dx ** 2 + dy ** 2)
      let disPercent = Radius / distance
      disPercent = disPercent > 7 ? 7 : disPercent
      let angle = Math.atan2(dy, dx)
      let cos = Math.cos(angle)
      let sin = Math.sin(angle)
      let repX = cos * disPercent * -Force
      let repY = sin * disPercent * -Force
      this.vx += repX
      this.vy += repY
    }
    this.x += this.vx
    this.y += this.vy
    if (this.opacity < 1) this.opacity += opacityStep
  }
}

class LogoImg {
  src: string
  name: string
  particleData: Particle[]
  onLoad: Promise<void>

  constructor(src: string, name: string) {
    this.src = src
    this.name = name
    this.particleData = []

    this.onLoad = new Promise((resolve) => {
      const img = new Image()
      img.crossOrigin = ''
      img.src = src
      img.onload = () => {
        const tmpCanvas = document.createElement('canvas')
        const tmpCtx = tmpCanvas.getContext('2d')
        const imgW = width
        const imgH = ~~(width * (img.height / img.width))
        tmpCanvas.width = imgW
        tmpCanvas.height = imgH
        tmpCtx?.drawImage(img, 0, 0, imgW, imgH)
        const imgData = tmpCtx?.getImageData(0, 0, imgW, imgH).data

        for (let y = 0; y < imgH; y += y > 155 ? 1 : 3) {
          for (let x = 0; x < imgW; x += y > 155 ? 1 : 3) {
            const index = (x + y * imgW) * 4
            const r = imgData![index]
            const g = imgData![index + 1]
            const b = imgData![index + 2]
            const a = imgData![index + 3]
            const sum = r + g + b + a
            if (sum >= 100) {
              this.particleData.push(new Particle(x, y, animateTime, [r, g, b, a]))
            }
          }
        }
        resolve()
      }
    })
  }
}

class ParticleCanvas {
  canvasEle: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  width: number
  height: number
  ParticleArr: Particle[]
  mouseX?: number
  mouseY?: number

  constructor(target: HTMLCanvasElement) {
    this.canvasEle = target
    this.ctx = target.getContext('2d')!
    this.width = target.width
    this.height = target.height
    this.ParticleArr = []

    this.canvasEle.addEventListener('mousemove', (e) => {
      const { left, top } = this.canvasEle.getBoundingClientRect()
      this.mouseX = e.clientX - left
      this.mouseY = e.clientY - top
    })
    this.canvasEle.onmouseleave = () => {
      this.mouseX = 0
      this.mouseY = 0
    }
  }

  changeImg(img: LogoImg) {
    this.ParticleArr = img.particleData.map(
      (item) => new Particle(item.totalX, item.totalY, animateTime, item.color),
    )
  }

  drawCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.ParticleArr.forEach((particle) => {
      particle.update(this.mouseX, this.mouseY)
      particle.draw()
    })
    window.requestAnimationFrame(() => this.drawCanvas())
  }
}

onMounted(async () => {
  if (canvas.value) {
    context.value = canvas.value.getContext('2d')
    particleCanvas.value = new ParticleCanvas(canvas.value)
    const logo = new LogoImg(image, 'rhine')
    await logo.onLoad
    particleCanvas.value.changeImg(logo)
    particleCanvas.value.drawCanvas()
  }
})
</script>

<template>
  <canvas ref="canvas" :width="width" :height="height"></canvas>
</template>
