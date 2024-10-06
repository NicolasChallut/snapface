import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snaps";
import { SnapType } from "../models/snap-type.type";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Loulette',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      'la plus grande de toutes les  crapules !',
      new Date(),
      90
    ),

    new FaceSnap(
      'Un bon repas',
      'https://upload.wikimedia.org/wikipedia/commons/d/d0/Sushi_Barra.jpg',
      'Yumi !',
      new Date(),
      8
    ),

    new FaceSnap(
      'Three Rock Moutain',
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Three_Fingers_mountain_seen_from_Highway_530.jpg',
      'Magnifique randonnée',
      new Date(),
      180
    ).withLocation('à la montagne')
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId: string) {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!')
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const FaceSnap = this.getFaceSnapById(faceSnapId)
    FaceSnap.snap(snapType);
  }
}
