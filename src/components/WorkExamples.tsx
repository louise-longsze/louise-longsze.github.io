import Separator from './Separator'
import onlineEnrollmentSrc from '@/assets/images/workExamples/onlineEnrollment.png'
import ERPSrc from '@/assets/images/workExamples/ERP.png'

const WORK_EXAMPLES_LIST = [
  { name: 'Online Enrolment System', src: onlineEnrollmentSrc },
  { name: 'ERP System', src: ERPSrc }
]
export default function WorkExamples() {
  return (
    <div>
      <h2>Work Examples</h2>
      <Separator />
      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {WORK_EXAMPLES_LIST.map(({ name, src }) => (
          <div
            key={name}
            className="flex flex-col rounded-lg border border-solid border-[#37352f29]"
          >
            <img className="aspect-video w-full rounded-t-lg" src={src} />
            <div className="px-4 py-2 hover:bg-[#37352f0a]">{name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
