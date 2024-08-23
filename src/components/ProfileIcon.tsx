import profileIconSrc from "@/assets/images/profileIcon.png";

export default function ProfileIcon() {
  return (
    <div className="rounded-full flex flex-col items-center gap-3">
      <img src={profileIconSrc} width={200} />
      <div>Hi there! I'm Long</div>
    </div>
  );
}
