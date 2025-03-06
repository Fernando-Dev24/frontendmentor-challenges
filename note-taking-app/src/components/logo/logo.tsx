import { Title } from "../ui/title/title";

export const Logo = () => {
  return (
    <div className="flex items-center mb-8">
      <img
        src={"/logo/logo.svg"}
        alt="logo"
        width={50}
        height={50}
        className="mr-3"
      />
      <Title title="Notes" />
    </div>
  );
};
