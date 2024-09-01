import Separator from './Separator'
import SkillIcon from '@/assets/images/skill.svg?react'

const SKILLS_LIST = [
  'React',
  'NextJS',
  'ExpressJS',
  'TailwindCSS',
  'Javascript',
  'Typescript',
  'HTML',
  'CSS',
  'Postgres',
  'Prisma',
  'Wordpress'
]
export default function SkillSet() {
  return (
    <div>
      <h2>Skill Set</h2>
      <Separator />
      <div className="flex flex-col gap-2">
        {SKILLS_LIST.map((skill) => (
          <div key={skill} className="flex gap-2">
            <SkillIcon width={20} />
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}
