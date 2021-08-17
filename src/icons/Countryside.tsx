import React from "react";
import createSvgIcon from "../createSvgIcon";

// this is where you create ur svg component. You need to provide at least its path property
const path: React.ReactNode = (
  <g>
    <path
      d="m495.517 512h-479.034c-9.103 0-16.483-7.38-16.483-16.483v-23.983h512v23.983c0 9.103-7.38 16.483-16.483 16.483z"
      fill="#ae6c6c"
    />
    <path
      d="m481.095 471.534v23.983c0 9.103-7.38 16.483-16.483 16.483h30.905c9.103 0 16.483-7.38 16.483-16.483v-23.983z"
      fill="#9b5e5e"
    />
    <path d="m48.661 68.216h32.966v107.139h-32.966z" fill="#7a6d79" />
    <path
      d="m84.718 68.216h-39.147c-2.276 0-4.121-1.845-4.121-4.121v-22.663c0-2.276 1.845-4.121 4.121-4.121h39.147c2.276 0 4.121 1.845 4.121 4.121v22.664c-.001 2.276-1.846 4.12-4.121 4.12z"
      fill="#fe7d43"
    />
    <path
      d="m188.766 257.545h-140.105v-117.44l70.053-36.572 70.052 36.572z"
      fill="#918291"
    />
    <path
      d="m118.714 103.533-33.377 17.425 72.524 38.695v97.892h30.905v-117.44z"
      fill="#7a6d79"
    />
    <path
      d="m0 479.034v-253.424s138.384-11.847 300.718 80.196 211.282 98.283 211.282 98.283v74.946h-512z"
      fill="#97da7b"
    />
    <g fill="#22b37f">
      <path d="m512 450.3v15.13c-.33 0-.66-.03-.99-.07-2.06-.28-52.33-7.86-214.13-104.06-82.6-49.12-158.72-69.09-208.02-77.2-53.48-8.79-87.85-5.91-88.19-5.88-.23.02-.44.03-.67.03v-15.02c5.24-.4 38.98-2.46 90.69 5.97 50.72 8.28 128.99 28.75 213.86 79.21 145.47 86.5 199.55 100.22 207.45 101.89z" />
      <path d="m462.77 479.03h-35.74c-31.12-15.09-73.73-37.65-130.14-71.19-82.61-49.12-158.72-69.1-208.03-77.2-53.48-8.79-87.85-5.91-88.19-5.89-.22.02-.45.03-.67.03v-15.02c5.24-.4 38.98-2.46 90.69 5.98 50.72 8.28 129 28.74 213.86 79.2 76.52 45.5 127.23 70.54 158.22 84.09z" />
      <path d="m370.02 479.03h-30.72c-13.68-7.77-27.86-16.02-42.41-24.67-82.61-49.12-158.72-69.09-208.03-77.2-53.48-8.79-87.85-5.91-88.19-5.88-.22.02-.45.03-.67.03v-15.02c5.25-.41 38.99-2.47 90.69 5.97 50.72 8.28 129 28.75 213.86 79.21 22.93 13.63 44.91 26.24 65.47 37.56z" />
      <path d="m288.98 479.03h-32.06c-68.04-34.09-129.06-49.12-170.53-55.74-52.06-8.3-85.4-5.51-85.72-5.48-.23.02-.45.03-.67.03v-15.02c5.14-.4 37.86-2.4 88.16 5.57 47.78 7.57 120.78 25.97 200.82 70.64z" />
      <path d="m184.81 479.03h-53.34c-77.38-19.03-130.15-14.74-130.8-14.68-.23.02-.45.03-.67.03v-15.03c8.32-.65 82.66-5.18 184.81 29.68z" />
    </g>
    <path d="m247.744 263.726h32.966v107.139h-32.966z" fill="#7a6d79" />
    <path
      d="m283.8 263.726h-39.147c-2.276 0-4.121-1.845-4.121-4.121v-22.664c0-2.276 1.845-4.121 4.121-4.121h39.147c2.276 0 4.121 1.845 4.121 4.121v22.664c0 2.276-1.845 4.121-4.121 4.121z"
      fill="#fe7d43"
    />
    <path
      d="m463.052 479.034h-232.821v-129.997l116.41-69.858 116.411 69.858z"
      fill="#918291"
    />
    <path
      d="m346.641 279.179-25.834 15.503 111.339 66.814v117.538h30.906v-129.997z"
      fill="#7a6d79"
    />
    <g fill="#fff9df">
      <path d="m334.279 479.034h-61.811v-95.807c0-2.276 1.845-4.121 4.121-4.121h53.569c2.276 0 4.121 1.845 4.121 4.121z" />
      <path d="m421.83 429.07h-53.57c-2.276 0-4.121-1.845-4.121-4.121v-41.722c0-2.276 1.845-4.121 4.121-4.121h53.569c2.276 0 4.121 1.845 4.121 4.121v41.722c0 2.277-1.845 4.121-4.12 4.121z" />
      <circle cx="346.641" cy="340.99" r="15.453" />
      <circle cx="118.714" cy="186.978" r="24.724" />
    </g>
    <path
      d="m118.713 154.753c-17.769 0-32.224 14.456-32.224 32.225s14.456 32.224 32.224 32.224 32.225-14.456 32.225-32.224-14.456-32.225-32.225-32.225zm0 49.449c-9.498 0-17.224-7.727-17.224-17.224s7.727-17.225 17.224-17.225 17.225 7.727 17.225 17.225-7.727 17.224-17.225 17.224z"
      fill="#fe7d43"
    />
    <path
      d="m491.47 345.172-137.012-80.352c-4.827-2.831-10.808-2.831-15.635 0l-137.012 80.352c-7.362 4.317-9.829 13.785-5.512 21.146 4.316 7.361 13.784 9.829 21.147 5.512l129.195-75.768 129.195 75.768c2.457 1.441 5.147 2.126 7.803 2.126 5.303 0 10.467-2.733 13.344-7.638 4.317-7.361 1.849-16.829-5.513-21.146z"
      fill="#fe7d43"
    />
    <path
      d="m205.764 131.458-79.911-41.63c-4.474-2.331-9.805-2.331-14.279 0l-79.911 41.63c-7.569 3.943-10.508 13.275-6.565 20.844 3.943 7.568 13.274 10.509 20.844 6.565l72.772-37.91 72.772 37.91c2.281 1.188 4.721 1.751 7.126 1.751 5.577 0 10.963-3.028 13.718-8.316 3.942-7.569 1.003-16.901-6.566-20.844z"
      fill="#fe7d43"
    />
    <path d="m387.545 379.106h15v49.964h-15z" fill="#7a6d79" />
    <circle cx="389.924" cy="81.673" fill="#ffd15b" r="38.117" />
    <path
      d="m389.924 43.556c-5.503 0-10.728 1.175-15.453 3.274 13.349 5.93 22.664 19.294 22.664 34.843 0 15.548-9.315 28.913-22.664 34.843 4.724 2.099 9.95 3.274 15.453 3.274 21.051 0 38.117-17.065 38.117-38.117-.001-21.052-17.066-38.117-38.117-38.117z"
      fill="#ffc344"
    />
    <g fill="#ffc344">
      <path d="m389.923 0c-4.142 0-7.5 3.358-7.5 7.5v10.302c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10.302c0-4.142-3.358-7.5-7.5-7.5z" />
      <path d="m389.923 138.044c-4.142 0-7.5 3.358-7.5 7.5v10.302c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10.302c0-4.142-3.358-7.5-7.5-7.5z" />
      <path d="m435.087 44.009c1.919 0 3.839-.732 5.304-2.197l7.284-7.285c2.929-2.929 2.928-7.678 0-10.607-2.93-2.929-7.677-2.928-10.607 0l-7.284 7.285c-2.929 2.929-2.928 7.678 0 10.607 1.465 1.465 3.384 2.197 5.303 2.197z" />
      <path d="m339.457 121.533-7.285 7.284c-2.929 2.929-2.929 7.678 0 10.607 1.465 1.464 3.384 2.197 5.304 2.197 1.919 0 3.839-.732 5.303-2.196l7.285-7.284c2.929-2.929 2.929-7.678 0-10.607-2.93-2.929-7.678-2.929-10.607-.001z" />
      <path d="m464.097 74.173h-10.302c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h10.302c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z" />
      <path d="m333.552 81.673c0-4.142-3.358-7.5-7.5-7.5h-10.302c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h10.302c4.142 0 7.5-3.358 7.5-7.5z" />
      <path d="m440.391 121.534c-2.929-2.929-7.678-2.929-10.606 0-2.929 2.929-2.929 7.678 0 10.606l7.284 7.284c1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197c2.929-2.929 2.929-7.678 0-10.606z" />
      <path d="m342.778 23.921c-2.929-2.929-7.678-2.929-10.606 0-2.929 2.929-2.929 7.678 0 10.606l7.285 7.285c1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197c2.929-2.929 2.929-7.678 0-10.606z" />
    </g>
  </g>
);

const Countryside = createSvgIcon(path, "0 0 512 512");

export default Countryside;
