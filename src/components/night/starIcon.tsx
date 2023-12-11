import { SVGProps } from "react";

export default function StarIcon({
  props,
  className,
}: {
  props: SVGProps<SVGSVGElement>;
  className: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="yellow"
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
      ></path>
    </svg>
  );
}
