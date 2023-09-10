

export class Player {
    constructor() {
        this.width = 100;
        this.height = 100;
        this.color = 'blue';
        this.speed = 5;
        this.jumpStrength = 5; // Adjust the jump strength as needed
        this.gravity = 0.2; // Adjust the gravity force as needed
        this.position = {
            x: (canvas.width * 0.25) - (this.width / 2),
            y: canvas.height - this.height,
        };
        this.velocity = {
            x: 0,
            y: 0,
        };
        this.isJumping = false;
    }

    draw() {
        context.fillStyle = this.color;
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    updatePosition() {
        // Apply gravity
        this.velocity.y += this.gravity;

        // Update position based on velocity
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // Collision detection with the ground
        if (this.position.y + this.height >= canvas.height) {
            this.position.y = canvas.height - this.height;
            this.velocity.y = 0;
            this.isJumping = false;
        }
    }

    jump() {
        // Allow jumping regardless of whether the player is on the ground
        this.velocity.y = -this.jumpStrength;
        this.isJumping = true;
    }
}