export class UserModel {
  name: string;
  /**
   * 1: White, 2: Blue, 3: Purple, 4: Brown, 5: black
   */
  level: 1 | 2 | 3 | 4 | 5;
  profileUrl?: string;
}
