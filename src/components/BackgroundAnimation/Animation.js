// Igor Abreu fork from Thomas Von Glabeke (https://twitter.com/latyr_)

import Particule from './Particule.js'

const Animation = canvas => {
  if (!canvas) return
  var ctx = canvas.getContext('2d')
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth

  var tabParticules = []

  const MAX_DIST = 100
  const NBR_PARTICULES = window.innerWidth / 8 - 10

  canvas.addEventListener('rezise', onWindowResize())

  for (var i = 0; i < NBR_PARTICULES; i++) {
    var opts = {
      position: {
        x: randomIntFromInterval(0, canvas.width),
        y: randomIntFromInterval(0, canvas.height),
      },
      velocity: {
        x: Math.random() * 2 - 1,
        y: Math.random() * 2 - 1,
      },
      size: 2,
      ctx: ctx,
    }
    tabParticules[i] = new Particule(opts)
    tabParticules[i].draw()
  }

  start()

  function onWindowResize(e) {
    console.log(e)
  }

  function start() {
    requestAnimationFrame(start)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (var origin = 0; origin < tabParticules.length; origin++) {
      tabParticules[origin].update()
      tabParticules[origin].draw()

      if (
        tabParticules[origin].position[0] >
          canvas.width - tabParticules[origin].size ||
        tabParticules[origin].position[0] < 0
      ) {
        tabParticules[origin].velocity[0] *= -1
      }
      if (
        tabParticules[origin].position[1] >
          canvas.height - tabParticules[origin].size ||
        tabParticules[origin].position[1] < 0
      ) {
        tabParticules[origin].velocity[1] *= -1
      }

      for (var other = 0; other < tabParticules.length; other++) {
        var a =
          tabParticules[origin].position[0] - tabParticules[other].position[0]
        var b =
          tabParticules[origin].position[1] - tabParticules[other].position[1]
        var distance = Math.sqrt(a * a + b * b)

        if (distance < MAX_DIST) {
          var opacity = 1 - distance / MAX_DIST

          ctx.beginPath()
          ctx.globalAlpha = opacity
          ctx.strokeStyle = '#000'
          ctx.shadowOffsetY = 1
          ctx.shadowColor = 'white'

          ctx.moveTo(
            tabParticules[origin].position[0],
            tabParticules[origin].position[1]
          )
          ctx.lineTo(
            tabParticules[other].position[0],
            tabParticules[other].position[1]
          )
          ctx.stroke()
          ctx.closePath()
        }
      }
    }
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}

export default Animation
