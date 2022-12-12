import { ObjectId } from "mongodb";

export default class Game {
    constructor(public yesVal: number, public noVal: number, public videoUrl: string, public videoUrlTitle: string, public videoUrlDesc: string, public videoUrlStaticPicture: string, public id?: ObjectId, ) {}
}