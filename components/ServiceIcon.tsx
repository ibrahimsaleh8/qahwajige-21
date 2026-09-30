import { getIconComponent } from "@/lib/getIconComponent";

type Props = {
  icon?: string;
};
export default function ServiceIcon({ icon }: Props) {
  return (() => {
    const Icon = getIconComponent(icon);
    return Icon ? (
      <span className="w-14 h-14 bg-[#2f7a63] rounded-2xl flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-[#f8f3e8]" />
      </span>
    ) : null;
  })();
}
