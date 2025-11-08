import React from 'react';

export default function SectionContent({ active }) {
  const title = active;
  const descriptionMap = {
    PMO: 'Project governance, timelines, risks and approvals in one place.',
    Marketing: 'Campaigns, assets and performance analytics at a glance.',
    'IT Support': 'Ticketing, knowledge base and service status.',
    Operation: 'Matter management, compliance and workflow orchestration.',
    CRM: 'Clients, contacts, pipelines and key relationships.'
  };

  return (
    <div className="px-6 py-8">
      <div className="max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-zinc-400">{descriptionMap[title] || ''}</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="text-sm text-zinc-400">Widget {i}</div>
              <div className="mt-2 h-24 rounded-lg bg-gradient-to-br from-white/10 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
