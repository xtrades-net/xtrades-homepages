export interface RoleModel {
  rankName: string;
  traders: RankedTraderModel[];
}

export interface RankedTraderModel {
  discordUsername: string;
  displayName: string;
  userId: string;
  userName: string;
  icon?: string;
  url?: string;
  instagramUrl?: string;
}
