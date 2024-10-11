import { cn } from "@/lib/utils";

type PropsType = {
  title: string;
  subtitle: string;
  className?: string;
}

const FormHeading = ({ title, subtitle, className }: PropsType) => {
  return (
    <div className={cn("text-start flex flex-col gap-2", className)}>
      <h1 className={`text-neutral-dark-grey text-2xl font-bold md:text-3xl`}>{title}</h1>
      <h2 className={`text-neutral-grey`}>{subtitle}</h2>
    </div>
  );
}

export default FormHeading;
