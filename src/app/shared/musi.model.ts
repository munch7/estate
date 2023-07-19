import { Song } from "./song.model";

export class Musi {
    public title: string;
    public description: string;
    public artist: string;
    public image: string;
    public date: string;
    public songs: Song[];

    constructor( title: string, description: string, artist:string, image: string,
        date: string, songs: Song[]){
        this.title = title;
        this.description = description;
        this.artist = artist;
        this.image = image;
        this.date = date;
        this.songs = songs;
    }
}