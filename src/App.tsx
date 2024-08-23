import Header from '@/components/Header'
import ProfileIcon from './components/ProfileIcon'
import AboutMe from './components/AboutMe'
import MyService from './components/MyService'
import Tools from './components/Tools'
import SkillSet from './components/SkillSet'
import WorkExamples from './components/WorkExamples'
import Separator from './components/Separator'

const App = () => {
  return (
    <div className="p-6 md:px-32 md:py-24">
      <Header />
      <div className="mb-5 grid gap-10 p-4 md:grid-cols-[2fr_7fr]">
        <div className="flex flex-col gap-8">
          <ProfileIcon />
          <SkillSet />
        </div>
        <div className="flex flex-col gap-8">
          <AboutMe />
          <MyService />
          <Tools />
        </div>
      </div>
      <Separator />
      <div className="mt-5 w-full">
        <WorkExamples />
      </div>
    </div>
  )
}

export default App
