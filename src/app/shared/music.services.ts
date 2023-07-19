import { Subject } from "rxjs";
import { Musi } from "./musi.model";
import { Song } from "./song.model";

export class MusicServices {
    musicChanged = new Subject<Musi[]>();
    
    private music: Musi[] = [
        new Musi(
            'Expenssive pain',
            'Hip-Hop',
            'Meek Mill',
            '../assets/music/Expensive pain/cover.jpg',
            '2022 jan 30',
            [
                new Song(
                    '01. Intro (Hate On Me)',
                    'Meek Mill',
                    '../assets/music/Expensive pain/01. Intro (Hate On Me).mp3',
                    'expenssive pain',
                    500,
                    '../assets/music/Expensive pain/cover.jpg',
                    '2022 jan 30',
                ),
                new Song(
                    '02. Outside (100 MPH)',
                    'Meek Mill',
                    '../assets/music/Expensive pain/02. Outside (100 MPH).mp3',
                    'expenssive pain',
                    500,
                    '../assets/music/Expensive pain/cover.jpg',
                    '2022 jan 30',
                ),
                new Song(
                    '03. On My Soul',
                    'Meek Mill',
                    '../assets/music/Expensive pain/03. On My Soul.mp3',
                    'expenssive pain',
                    500,
                    '../assets/music/Expensive pain/cover.jpg',
                    '2022 jan 30',
                ),
                new Song(
                    '04. Sharing Locations (feat. Lil Baby & Lil Durk)',
                    'Meek Mill',
                    '../assets/music/Expensive pain/04. Sharing Locations (feat. Lil Baby & Lil Durk).mp3',
                    'expenssive pain',
                    500,
                    '../assets/music/Expensive pain/cover.jpg',
                    '2022 jan 30',
                ),
            ]
        ),
        new Musi(
            'Giancana',
            'Hip-Hop',
            'Glock 7',
            'image',
            '2022 jan 30',
            [
                new Song(
                    'Bossy',
                    'glock 7',
                    'song1',
                    'giancana',
                    500,
                    'image',
                    '2022 jan 30',
                ),
                new Song(
                    'nasty',
                    'glock 7',
                    'song2',
                    'giancana',
                    500,
                    'image',
                    '2022 jan 30',
                ),
                new Song(
                    'money dance',
                    'glock 7',
                    'song3',
                    'giancana',
                    500,
                    'image',
                    '2022 jan 30',
                ),
                new Song(
                    'tasty',
                    'glock 7',
                    'song4',
                    'giancana',
                    500,
                    'image',
                    '2022 jan 30',
                ),
            ]
        ),
    ];

    getMusic() {
        return this.music.slice;
    }

    getMusi(index: number) {
        return this.music[index];
    }
}