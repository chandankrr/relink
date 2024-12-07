import { LucideProps } from "lucide-react";

import { cn } from "@/lib/utils";

export const Icons = {
  logo: (props: LucideProps) => (
    <svg
      width="103"
      height="55"
      viewBox="0 0 103 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M76.8434 43.2789H75.4378L73.1802 40.0998C72.6265 40.6045 72.0372 41.0803 71.4125 41.5272C70.802 41.9597 70.156 42.3418 69.4745 42.6734C68.7929 42.9906 68.0901 43.2429 67.366 43.4303C66.6561 43.6178 65.932 43.7114 65.1937 43.7114C63.5892 43.7114 62.0771 43.4087 60.6572 42.8031C59.2517 42.1832 58.0164 41.3325 56.9516 40.2512C55.9009 39.1555 55.0702 37.8651 54.4597 36.3801C53.8492 34.8807 53.5439 33.2515 53.5439 31.4926C53.5439 29.748 53.8492 28.1261 54.4597 26.6266C55.0702 25.1272 55.9009 23.8297 56.9516 22.7339C58.0164 21.6382 59.2517 20.7803 60.6572 20.1603C62.0771 19.5405 63.5892 19.2305 65.1937 19.2305C65.7048 19.2305 66.2302 19.2737 66.7697 19.3602C67.3234 19.4467 67.8559 19.5909 68.367 19.7927C68.8923 19.9802 69.3822 20.2325 69.8365 20.5497C70.2909 20.8669 70.6742 21.2561 70.9866 21.7175V10.9043H76.8434V43.2789ZM70.9866 31.4926C70.9866 30.6852 70.8304 29.9066 70.518 29.1569C70.2198 28.3928 69.8081 27.7224 69.2828 27.1457C68.7574 26.5546 68.1398 26.086 67.4299 25.74C66.7342 25.3796 65.9887 25.1993 65.1937 25.1993C64.3985 25.1993 63.646 25.3435 62.9361 25.6319C62.2404 25.9202 61.6299 26.3383 61.1045 26.8862C60.5934 27.4196 60.1888 28.0757 59.8906 28.8541C59.5924 29.6327 59.4434 30.5122 59.4434 31.4926C59.4434 32.3432 59.5924 33.1506 59.8906 33.9148C60.1888 34.6788 60.5934 35.3493 61.1045 35.926C61.6299 36.5026 62.2404 36.9568 62.9361 37.2884C63.646 37.62 64.3985 37.7859 65.1937 37.7859C65.9887 37.7859 66.7342 37.6128 67.4299 37.2668C68.1398 36.9064 68.7574 36.4378 69.2828 35.8611C69.8081 35.27 70.2198 34.5996 70.518 33.8498C70.8304 33.0857 70.9866 32.2999 70.9866 31.4926ZM90.3675 37.6128C90.5948 37.6849 90.8212 37.7354 91.0486 37.7642C91.2759 37.7786 91.5032 37.7859 91.7305 37.7859C92.2979 37.7859 92.8448 37.7065 93.3705 37.5479C93.8953 37.3893 94.3854 37.1659 94.84 36.8775C95.308 36.5748 95.72 36.2143 96.0751 35.7962C96.4445 35.3637 96.742 34.8879 96.9693 34.3689L101.229 38.7157C100.69 39.4943 100.065 40.1936 99.3551 40.8135C98.659 41.4334 97.8998 41.9597 97.0758 42.3922C96.2669 42.8248 95.4074 43.1492 94.4991 43.3654C93.6049 43.5961 92.6815 43.7114 91.7305 43.7114C90.126 43.7114 88.6138 43.4087 87.194 42.8031C85.7884 42.1976 84.5531 41.3542 83.4882 40.2729C82.4376 39.1915 81.6069 37.9084 80.9964 36.4234C80.3859 34.924 80.0807 33.2804 80.0807 31.4926C80.0807 29.6615 80.3859 27.9891 80.9964 26.4752C81.6069 24.9614 82.4376 23.6711 83.4882 22.6041C84.5531 21.5372 85.7884 20.7083 87.194 20.1172C88.6138 19.526 90.126 19.2305 91.7305 19.2305C92.6815 19.2305 93.612 19.3458 94.5204 19.5764C95.4287 19.8072 96.2882 20.1388 97.0971 20.5713C97.9211 21.0038 98.6874 21.5372 99.3978 22.1716C100.107 22.7916 100.732 23.4908 101.271 24.2694L90.3675 37.6128ZM93.3492 25.4372C93.0793 25.3363 92.8093 25.2714 92.5394 25.2425C92.2837 25.2138 92.0146 25.1993 91.7305 25.1993C90.9349 25.1993 90.1828 25.3507 89.4725 25.6535C88.7771 25.9418 88.1666 26.3599 87.6412 26.9078C87.1301 27.4557 86.7255 28.1188 86.4273 28.8974C86.1292 29.6615 85.9801 30.5266 85.9801 31.4926C85.9801 31.7088 85.9872 31.954 86.0013 32.2279C86.0297 32.5018 86.0652 32.7829 86.1078 33.0713C86.1646 33.3452 86.2285 33.612 86.2995 33.8715C86.3705 34.131 86.4627 34.3617 86.5764 34.5635L93.3492 25.4372Z"
        fill="black"
      />
      <path
        d="M1.73389 21.5659C1.73389 20.2828 1.97525 19.0789 2.45799 17.9543C2.94074 16.8298 3.59386 15.8494 4.41737 15.0132C5.25507 14.1626 6.22766 13.4921 7.33513 13.0019C8.4426 12.5118 9.62818 12.2666 10.8918 12.2666H24.9056V18.4734H10.8918C10.4659 18.4734 10.0683 18.5527 9.69912 18.7112C9.33001 18.8698 9.00343 19.0934 8.71947 19.3817C8.4497 19.6556 8.23672 19.98 8.08054 20.3548C7.92436 20.7297 7.84627 21.1334 7.84627 21.5659C7.84627 21.9984 7.92436 22.4093 8.08054 22.7987C8.23672 23.1735 8.4497 23.5051 8.71947 23.7934C9.00343 24.0673 9.33001 24.2837 9.69912 24.4423C10.0683 24.6008 10.4659 24.6801 10.8918 24.6801H17.0042C18.2678 24.6801 19.4534 24.9253 20.5609 25.4154C21.6826 25.8912 22.6551 26.5544 23.4787 27.405C24.3163 28.2412 24.9695 29.2289 25.4381 30.3678C25.9207 31.4924 26.1622 32.6963 26.1622 33.9794C26.1622 35.2626 25.9207 36.4665 25.4381 37.591C24.9695 38.7156 24.3163 39.7032 23.4787 40.5538C22.6551 41.3901 21.6826 42.0533 20.5609 42.5435C19.4534 43.0337 18.2678 43.2788 17.0042 43.2788H3.43768V37.072H17.0042C17.4302 37.072 17.8277 36.9927 18.1969 36.8341C18.566 36.6755 18.8855 36.4593 19.1552 36.1853C19.4392 35.8969 19.6593 35.5654 19.8155 35.1905C19.9717 34.8157 20.0497 34.4119 20.0497 33.9794C20.0497 33.5469 19.9717 33.1432 19.8155 32.7683C19.6593 32.3935 19.4392 32.0691 19.1552 31.7952C18.8855 31.5069 18.566 31.2833 18.1969 31.1247C17.8277 30.9662 17.4302 30.8869 17.0042 30.8869H10.8918C9.62818 30.8869 8.4426 30.6417 7.33513 30.1516C6.22766 29.6614 5.25507 28.9981 4.41737 28.162C3.59386 27.3114 2.94074 26.3237 2.45799 25.1992C1.97525 24.0601 1.73389 22.8491 1.73389 21.5659Z"
        fill="black"
      />
      <path
        d="M26.6201 20.7329C29.9269 37.0489 40.7285 41.6656 54.2541 39.4589"
        stroke="black"
        strokeWidth="6.38743"
      />
      <path
        d="M36.5938 23.3623C37.0517 25.749 39.1595 31.1054 43.9266 33.4372"
        stroke="black"
        strokeWidth="5.10995"
      />
      <path
        d="M36.4214 20.7331C37.8309 20.7331 38.9736 19.5727 38.9736 18.1414C38.9736 16.7101 37.8309 15.5498 36.4214 15.5498C35.0118 15.5498 33.8691 16.7101 33.8691 18.1414C33.8691 19.5727 35.0118 20.7331 36.4214 20.7331Z"
        fill="black"
      />
    </svg>
  ),
  menu: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("feather feather-menu lg:hidden", props.className)}
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  ),
  robot: (props: LucideProps) => (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <mask
        id="mask0_1595_11787"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="56"
        height="56"
      >
        <circle cx="28" cy="28" r="28" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1595_11787)">
        <circle cx="28" cy="28" r="28" fill="#F4F3B0" />
      </g>
      <path d="M32.5713 13L32.5713 18" stroke="black" strokeWidth="2" />
      <path
        d="M35.6419 11C35.6419 12.6402 34.2835 14 32.5705 14C30.8574 14 29.499 12.6402 29.499 11C29.499 9.35976 30.8574 8 32.5705 8C34.2835 8 35.6419 9.35976 35.6419 11Z"
        fill="black"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M22.647 41.675L22.6417 40.6803H21.647H21.5634C15.274 40.6803 10.1602 35.5851 10.1602 29.3401C10.1602 23.0952 15.274 18 21.5634 18H35.4355C41.7248 18 46.8387 23.0952 46.8387 29.3401C46.8387 35.5851 41.7248 40.6803 35.4355 40.6803H29.8545H29.513L29.2429 40.8891L22.6697 45.9711L22.647 41.675Z"
        fill="black"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M26.4633 29.0889C26.4633 26.4222 25.6803 25 23.9187 25C22.157 25 21.374 26.4222 21.374 29.0889C21.374 31.5778 22.157 33 23.9187 33C25.6803 33 26.4633 31.5778 26.4633 29.0889Z"
        fill="#F4F3B0"
      />
      <path
        d="M35.6244 29.0889C35.6244 26.4222 34.8415 25 33.0798 25C31.3181 25 30.5352 26.4222 30.5352 29.0889C30.5352 31.5778 31.3181 33 33.0798 33C34.8415 33 35.6244 31.5778 35.6244 29.0889Z"
        fill="#F4F3B0"
      />
    </svg>
  ),
  hashtag: (props: LucideProps) => (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g clipPath="url(#clip0_7226_68)">
        <mask
          id="mask0_7226_68"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="56"
          height="56"
        >
          <path
            d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
            fill="#D9D9D9"
          />
        </mask>
        <g mask="url(#mask0_7226_68)">
          <path
            d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
            fill="#D2B6DE"
          />
        </g>
        <path
          d="M24.95 12.2952C26.1929 12.5006 27.0357 13.6694 26.8286 14.9019L26.1286 19.0669H32.9214L33.7429 14.1581C33.95 12.9256 35.1286 12.0898 36.3714 12.2952C37.6143 12.5006 38.4571 13.6694 38.25 14.9019L37.5571 19.0669H41.7143C42.9786 19.0669 44 20.0798 44 21.3335C44 22.5873 42.9786 23.6002 41.7143 23.6002H36.7929L35.2714 32.6669H39.4286C40.6929 32.6669 41.7143 33.6798 41.7143 34.9335C41.7143 36.1873 40.6929 37.2002 39.4286 37.2002H34.5071L33.6857 42.109C33.4786 43.3415 32.3 44.1773 31.0571 43.9719C29.8143 43.7665 28.9714 42.5977 29.1786 41.3652L29.8786 37.2073H23.0857L22.2643 42.116C22.0571 43.3485 20.8786 44.1844 19.6357 43.979C18.3929 43.7735 17.55 42.6048 17.7571 41.3723L18.4429 37.2002H14.2857C13.0214 37.2002 12 36.1873 12 34.9335C12 33.6798 13.0214 32.6669 14.2857 32.6669H19.2071L20.7286 23.6002H16.5714C15.3071 23.6002 14.2857 22.5873 14.2857 21.3335C14.2857 20.0798 15.3071 19.0669 16.5714 19.0669H21.4929L22.3143 14.1581C22.5214 12.9256 23.7 12.0898 24.9429 12.2952H24.95ZM25.3643 23.6002L23.8429 32.6669H30.6357L32.1571 23.6002H25.3643Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_7226_68">
          <rect width="56" height="56" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  chat: (props: LucideProps) => (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g clip-path="url(#clip0_7226_92)">
        <mask
          id="mask0_7226_92"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="56"
          height="56"
        >
          <path
            d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
            fill="#D9D9D9"
          />
        </mask>
        <g mask="url(#mask0_7226_92)">
          <path
            d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
            fill="#AAE0A5"
          />
        </g>
        <g clipPath="url(#clip1_7226_92)">
          <path
            d="M46.6802 27.1937C46.6802 35.4252 38.4702 42.095 28.3402 42.095C25.6823 42.095 23.1606 41.6365 20.8824 40.8126C20.0299 41.4359 18.64 42.2884 16.9923 43.0048C15.2729 43.7499 13.2025 44.3875 11.1464 44.3875C10.6808 44.3875 10.2652 44.1081 10.0861 43.6782C9.90704 43.2484 10.0073 42.7612 10.3297 42.4317L10.3512 42.4102C10.3727 42.3887 10.4014 42.3601 10.4443 42.3099C10.5231 42.2239 10.6449 42.0878 10.7954 41.9016C11.0891 41.5433 11.4831 41.0132 11.8843 40.3541C12.6007 39.1649 13.2813 37.6031 13.4174 35.8479C11.2682 33.4121 10.0002 30.4247 10.0002 27.1937C10.0002 18.9622 18.2102 12.2925 28.3402 12.2925C38.4702 12.2925 46.6802 18.9622 46.6802 27.1937Z"
            fill="black"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_7226_92">
          <rect width="56" height="56" fill="white" />
        </clipPath>
        <clipPath id="clip1_7226_92">
          <rect
            width="36.68"
            height="36.68"
            fill="white"
            transform="translate(10 10)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  verificatinBadge: (props: LucideProps) => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M17.7508 9.41667C17.7508 8.1 17.0217 6.95833 15.9608 6.41667C16.0892 6.05417 16.1592 5.6625 16.1592 5.25C16.1592 3.40833 14.7342 1.91833 12.9775 1.91833C12.5858 1.91833 12.2108 1.98833 11.8642 2.12667C11.3492 1.0125 10.2592 0.25 9.00083 0.25C7.7425 0.25 6.65417 1.01417 6.13667 2.125C5.79083 1.9875 5.415 1.91667 5.02333 1.91667C3.265 1.91667 1.84167 3.40833 1.84167 5.25C1.84167 5.66167 1.91083 6.05333 2.03917 6.41667C0.979167 6.95833 0.25 8.09833 0.25 9.41667C0.25 10.6625 0.901667 11.7483 1.86833 12.3217C1.85167 12.4633 1.84167 12.605 1.84167 12.75C1.84167 14.5917 3.265 16.0833 5.02333 16.0833C5.415 16.0833 5.79 16.0117 6.13583 15.875C6.6525 16.9867 7.74083 17.75 9 17.75C10.26 17.75 11.3483 16.9867 11.8642 15.875C12.21 16.0108 12.585 16.0817 12.9775 16.0817C14.7358 16.0817 16.1592 14.59 16.1592 12.7483C16.1592 12.6033 16.1492 12.4617 16.1317 12.3208C17.0967 11.7483 17.7508 10.6625 17.7508 9.4175V9.41667ZM12.2375 6.63833L8.62583 12.055C8.505 12.2358 8.3075 12.3333 8.105 12.3333C7.98583 12.3333 7.865 12.3 7.75833 12.2283L7.6625 12.15L5.65 10.1375C5.40583 9.89333 5.40583 9.4975 5.65 9.25417C5.89417 9.01083 6.29 9.00917 6.53333 9.25417L8.00833 10.7267L11.1958 5.94333C11.3875 5.65583 11.7758 5.58 12.0625 5.77083C12.3508 5.9625 12.4292 6.35083 12.2375 6.6375V6.63833Z"
        fill="#1D9BF0"
      />
    </svg>
  ),
};
