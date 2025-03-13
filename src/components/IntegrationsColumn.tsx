import React from 'react'
import { integrationsType } from '@/sections/Integrations';
const IntegrationsColumn = (props:{integrations:typeof integrationsType}) => {
  return (

      <div className="flex flex-col gap-4 pb-4 ">
                  {integrations.map((integration) => {
                    return (
                      <div className="bg-neutral-900 border border-white/10 rounded-3xl p-6 ">
                        <div className="flex justify-center">
                          <Image
                            src={integration.icon}
                            alt={integration.name}
                            className="size-24 "
                          />
                        </div>
                        <h3 className="text-3xl text-center mt-6">
                          {integration.name}
                        </h3>
                        <p className="text-center text-white/50 mt-2 text-md">
                          {integration.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
    
  )
}

export default IntegrationsColumn
