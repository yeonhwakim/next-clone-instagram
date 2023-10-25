type Props = {
  imege?: string | null;
};

export default function Avatar({ imege }: Props) {
  return (
    <div
      className={
        "w-9 h-9 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
      }
    >
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className={
          "rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.1rem]"
        }
        src={imege ?? undefined}
        alt="user profile"
      />
    </div>
  );
}
