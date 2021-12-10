
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
    clearall() {
     this.ctx.clearRect(0,0,this.ctx.canvas.width, this.ctx.canvas.height)
    }
    generateObjects(is: string[], min:number, max:number, width:number, height: number) {
      const random = is
        let y1 = Math.floor(Math.random() * (min - max) + min)
        let x1 = Math.floor(Math.random() * (min - max) + min)
        let i = random[Math.floor(Math.random() * random.length)]
        let img = new Image()        
        img.src = i                   
        this.ctx.drawImage(img,x1,y1,width,height) 
    }
}

