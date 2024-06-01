// Define a union type for different shapes
type Shape = Square | Circle;

// Define interfaces for different shapes
interface Square {
    kind: 'square';
    size: number;
}

interface Circle {
    kind: 'circle';
    radius: number;
}

// Function to calculate area based on shape
function calculateArea(shape: Shape): number {
    switch (shape.kind) {
        case 'square':
            return shape.size ** 2;
        case 'circle':
            return Math.PI * shape.radius ** 2;
        default:
            // Ensure exhaustiveness checking
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

// Example usage
const square: Square = { kind: 'square', size: 5 };
const circle: Circle = { kind: 'circle', radius: 3 };

console.log(calculateArea(square)); // Output: 25
console.log(calculateArea(circle)); // Output: ~28.27
