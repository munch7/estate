import { Subject } from "rxjs";

import { Song } from "./song.model";

export class SongssService{
  songsChanged = new Subject<Song[]>();
  startedEditing = new Subject<number>();

  private songs: Song[] = [ 
    new Song(
      'Intro (Hate On Me)',
      'Meek Mill',
      '../../assets/music/Expensive pain/01. Intro (Hate On Me).mp3',
      'Expenssive Pain',
      500,
      '../../assets/music/Expensive pain/cover.jpg',
      '2022'
    ),
    new Song(
      'Outside',
      'Meek Mill',
      '../../assets/music/Expensive pain/02. Outside (100 MPH).mp3',
      'Expenssive Pain',
      500,
      '../../assets/music/Expensive pain/cover.jpg',
      '2022'
    ),
    new Song(
      'On My Soul',
      'Meek Mill',
      '../../assets/music/Expensive pain/03. On My Soul.mp3',
      'Expenssive Pain',
      500,
      '../../assets/music/Expensive pain/cover.jpg',
      '2022'
    ),
    new Song(
      'Sharing Locations',
      'Meek Mill feat. Lil Baby & Lil Durk',
      '../../assets/music/Expensive pain/04. Sharing Locations (feat. Lil Baby & Lil Durk).mp3',
      'Expenssive Pain',
      500,
      '../../assets/music/Expensive pain/cover.jpg',
      '2022'
    ),
  ];

  getSongs() {
    return this.songs.slice();
  }
  
  getSong(index: number){
    return this.songs[index];
  }
  

  addSong(song: Song) {
    this.songs.push(song);
    this.songsChanged.next(this.songs.slice());
  }

  updatedSong(index: number, newSong: Song){
    this.songs[index] = newSong;
    this.songsChanged.next(this.songs.slice())
  }

  deleteSong(index: number){
    this.songs.splice(index, 1);
    this.songsChanged.next(this.songs.slice());
  }

}