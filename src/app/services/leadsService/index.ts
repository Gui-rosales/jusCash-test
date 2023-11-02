import { Lead } from '../../entities/Lead';

export interface CreateLeadParams extends Lead {}

export function createLeadFn(data: CreateLeadParams) {
  const existingLeads: Lead[] = JSON.parse(
    localStorage.getItem('leads') as string
  );
  if (!existingLeads) {
    const tempArray: Lead[] = [];
    tempArray.push(data);
    return localStorage.setItem('leads', JSON.stringify(tempArray));
  }
  existingLeads.push(data);
  return localStorage.setItem('leads', JSON.stringify(existingLeads));
}

export function getLeadFn() {
  const existingLeads: Lead[] = JSON.parse(
    localStorage.getItem('leads') as string
  );
  if (!existingLeads) {
    return null;
  }
  return existingLeads;
}

export function updateLeadInfo(data: Lead[]) {
  localStorage.removeItem('leads');
  localStorage.setItem('leads', JSON.stringify(data));
}
