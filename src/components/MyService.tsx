import Separator from './Separator'
import ServiceIcon from '@/assets/images/service.svg?react'
import FeatureIcon from '@/assets/images/feature.svg?react'

const SERVICES_LIST = [
  'Customized Website',
  'Wordpress',
  'API Integration',
  'Fullstack Development',
]
export default function MyService() {
  return (
    <div>
      <h2>My Service</h2>
      <div className="pt-1">Checkout services offered by me</div>
      <Separator />
      <div className="flex gap-1 items-center mt-2 mb-4">
        <ServiceIcon fill="#37352f" width={20} />
        <span>Service</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {SERVICES_LIST.map((service) => (
          <div className="border-[#37352f29] border-solid border-[1px] px-2 py-3 flex gap-1">
            <FeatureIcon />
            {service}
          </div>
        ))}
      </div>
    </div>
  )
}
