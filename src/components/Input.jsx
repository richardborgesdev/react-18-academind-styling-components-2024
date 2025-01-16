export default function CustomInput({ label, invalid, ...props }) {
  let labelClasses = [
    "block",
    "mb-2",
    "text-xs",
    "font-bold",
    "tracking-wide",
    "uppercase",
  ];

  let inputClasses = [
    "w-full",
    "px-3",
    "py-2",
    "leading-tight",
    "border",
    "rounded",
    "shadow",
  ];

  if (invalid) {
    inputClasses = inputClasses.concat([
      "text-red-500",
      "bg-red-100",
      "border-red-300",
    ]);
    labelClasses = labelClasses.concat(["text-red-400"]);
  } else {
    inputClasses = inputClasses.concat(["bg-stone-300"]);
    labelClasses = labelClasses.concat(["text-stone-300"]);
  }

  return (
    <p>
      <label className={labelClasses.join(" ")}>{label}</label>
      <input className={inputClasses.join(" ")} {...props} />
    </p>
  );
}
