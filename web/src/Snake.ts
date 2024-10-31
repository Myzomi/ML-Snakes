export interface SnakeController {
    getNextMove(
        segments: Array<{x: number, y: number}>,
        foodPosition: {x: number, y: number}
    ): {x: number, y: number};
}
export class Snake {
    segments: Array<{x:number, y:number}>
    direction: {x: number, y: number};
    controller: SnakeController;

    constructor(
        initialPosition: {x: number, y: number},
        controller: SnakeController
    ) {
        this.segments = [initialPosition]
        this.direction = {x: 1, y: 0}
        this.controller = controller
    }
}

export class PlayerController implements SnakeController {
    direction: {x: number, y: number};
    constructor(){
        this.direction = {x: 1, y: 0}
        this.setupControls();
    }

    private setupControls() {
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            switch (e.key) {
                case 'w':
                    if (this.direction.y === 0) this.direction = {x: 0, y: 1}
                    break
                case 's':
                    if (this.direction.y === 0) this.direction = {x: 0, y: -1}
                    break
                case 'a':
                    if (this.direction.x === 0) this.direction = {x: -1, y: 0}
                    break
                case 'd':
                    if (this.direction.x === 0) this.direction = {x: 1, y: 0}
                    break
            }
        })
    }

    getNextMove(
        segments: Array<{x: number, y: number}>,
        foodPosition: {x: number, y: number}
    ) {
        return this.direction;
    }
}