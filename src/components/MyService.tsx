import Separator from './Separator'
import ServiceIcon from '@/assets/images/service.svg?react'
import FeatureIcon from '@/assets/images/feature.svg?react'

const SERVICES_LIST = [
  'Customized Website',
  'Wordpress',
  'API Integration',
  'Fullstack Development'
]
export default function MyService() {
  return (
    <div>
      <h2>My Service</h2>
      <div className="pt-1">Checkout services offered by me</div>
      <Separator />
      <div className="mb-4 mt-2 flex items-center gap-1">
        <ServiceIcon fill="#37352f" width={20} />
        <span>Service</span>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {SERVICES_LIST.map((service) => (
          <div
            key={service}
            className="flex gap-1 border border-solid border-[#37352f29] px-2 py-3 hover:bg-[#37352f0a]"
          >
            <FeatureIcon />
            {service}
          </div>
        ))}
      </div>
    </div>
  )
}
