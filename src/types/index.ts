// Types for all pages

export interface Organization {
  id: string;
  name: string;
  amount: number;
  energy: number;
}

export interface Charger {
  name: string;
  id: string;
  time: string;
}

export interface Tariff {
  organizationId: string;
  locationId: string;
  chargerId: string;
  connectorId: string;
  peakType: string;
  tariffIdPk: string;
  tariffIdCounter: string;
  buyRate: number;
  sellRate: number;
  transactionFees: number;
  clientPercentage: number;
  partnerPercentage: number;
  status: string;
}

export interface User {
  firstName: string;
  lastName: string;
  count: number;
  mobile: string;
  energy: number;
  amount: number;
}

export interface PartnerUser {
  organizationId: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  roles: string;
  language: string;
}

export interface FinancialReport {
  organizationId: string;
  connectorId: string;
  locationId: string;
  period: string;
  payment: string;
  chargerId: string;
  fromDate: string;
  toDate: string;
}
