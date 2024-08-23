import profileIconSrc from '@/assets/images/profileIcon.png'

export default function ProfileIcon() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-full">
      <img src={profileIconSrc} width={200} />
      <div>Hi there! I&apos;m Long</div>
    </div>
  )
}
