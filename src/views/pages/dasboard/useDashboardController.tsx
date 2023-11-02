import { useEffect, useState } from 'react';
import { Lead } from '../../../app/entities/Lead';
import { getLeadFn, updateLeadInfo } from '../../../app/services/leadsService';
import { toast } from 'react-toastify';

export function useDashboardController() {
  const [leads, setLeads] = useState<Lead[] | null>(null);

  function onDragOverFn(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function onDropFn(event: React.DragEvent<HTMLDivElement>, category: string) {
    const data = JSON.parse(event.dataTransfer.getData('lead'));
    if (
      (data.category === 'client_in_potential' &&
        category === 'data_confirmed') ||
      (data.category === 'data_confirmed' && category === 'lead_analysis')
    ) {
      const arrayLeads = leads;
      if (arrayLeads) {
        arrayLeads.forEach((lead) => {
          if (lead.name === data.name) {
            lead.category = category;
          }
        });
        setLeads(arrayLeads);
        updateLeadInfo(leads);
        window.location.reload();
      }
    } else {
      toast.error('movimento inválido');
    }
  }

  function onDragBeggining(
    event: React.DragEvent<HTMLLIElement>,
    name: string,
    leadCategory: string
  ) {
    event.dataTransfer.setData(
      'lead',
      JSON.stringify({ name: name, category: leadCategory })
    );
    return;
  }

  useEffect(() => {
    const createdUsers = getLeadFn();
    setLeads(createdUsers);
  }, []);

  return { leads, onDragBeggining, onDragOverFn, onDropFn };
}
