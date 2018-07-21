class Robot {
  constructor(){
    this.coordinates = [0,0]
    this.bearing = 'north'
  }

  setCoordinates(x,y){
    this.coordinates = [x,y]
  }

  setBearing(bearing){
    if(bearing != 'north' && bearing != 'south' && bearing != 'east' && bearing != 'west'){
      throw "Invalid Robot Bearing"
    }
    this.bearing = bearing
  }

  place(obj){
    this.setCoordinates(obj.x,obj.y)
    this.setBearing(obj.direction)
  }

  turnRight(){
    switch(this.bearing){
      case 'north':
        this.bearing = 'east'
        break;
      case 'east':
        this.bearing = 'south'
        break;
      case 'south':
        this.bearing = 'west'
        break;
      case 'west':
        this.bearing = 'north'
        break;
      default:
        this.bearing = 'north'
    }
  }

  advance(){
    switch(this.bearing){
      case 'north':
        this.coordinates = [this.coordinates[0],this.coordinates[1]+1]
        break;
      case 'east':
        this.coordinates = [this.coordinates[0]+1,this.coordinates[1]]
        break;
      case 'south':
        this.coordinates = [this.coordinates[0],this.coordinates[1]-1]
        break;
      case 'west':
        this.coordinates = [this.coordinates[0]-1,this.coordinates[1]]
        break;
    }
  }

  turnLeft(){
    switch(this.bearing){
      case 'north':
        this.bearing = 'west'
        break;
      case 'east':
        this.bearing = 'north'
        break;
      case 'south':
        this.bearing = 'east'
        break;
      case 'west':
        this.bearing = 'south'
        break;
      default:
        this.bearing = 'north'
    }
  }

  translateInstructions(str){
    for (let i = 0; i < str.length; i++) {
      switch(str.charAt(i)){
        case 'L':
          this.turnLeft()
          break;
        case 'R':
          this.turnRight()
          break;
        case 'A':
          this.advance()
      }
    }
  }
}
