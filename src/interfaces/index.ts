export interface AlertsInterface {
  isActive: boolean;
  handleAlert: () => void;
}

export type FiltersType = Record<string, boolean>