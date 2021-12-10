
class Actions {
    ctx : CanvasRenderingContext2D
    constructor(ctx:CanvasRenderingContext2D) {
      this.ctx = ctx
    }
    draw(i: string,x: number,y: number,width: number,height: number) {
      const img = new Image()
      img.src = i  
      this.ctx.drawImage(img,x,y,width,height)
    }
}
