import { Image } from 'phaser';

export class AndGate {
    public image: Image;
    public input1: boolean;
    public input2: boolean;
    public output: boolean;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        this.image = scene.add.image(x, y, 'and_gate_component');
        this.input1 = false;
        this.input2 = false;
        this.output = false;
    }

    public updateOutput() {
        this.output = this.input1 && this.input2;
    }

    public destroy() {
        this.image.destroy();
    }
}
