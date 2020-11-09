export class Painting {
  constructor(
    public title: string,
    public description: string,
    public category: string,
    public width: number,
    public height: number,
    public sold: boolean
  ) {}
}