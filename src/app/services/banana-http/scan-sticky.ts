export interface Action {
  id: string;
  roleId: string;
  message: string;
}

export interface ScanSticky {
  id: string;
  locationId: string;
  message: string;
  actions: Action[];
}
