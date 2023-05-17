import React from 'react';
import PropTypes from 'prop-types';

const BaseSvg = ({ bgColor, children }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="39"
      viewBox="0 0 39 39"
    >
      <g fill="none" fillRule="evenodd">
        <circle cx="19.5" cy="19.5" r="19.5" fill={bgColor} />
        {children}
      </g>
    </svg>
  );
};

BaseSvg.propTypes = {
  bgColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const iconPropTypes = {
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export const IntransitIcon = ({ bgColor, color }) => {
  return (
    <BaseSvg bgColor={bgColor}>
      <path
        d="M15.8822 10.8462L10.3438 28.3847"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M25.1178 10.8462L30.6562 28.3847"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20.5 11V28"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="5 5"
      />
    </BaseSvg>
  );
};

export const OrderPlacedIcon = ({ bgColor, color }) => {
  return (
    <BaseSvg bgColor={bgColor}>
      <path
        d="M25 16.4L16 11.21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.5 23V15C29.4996 14.6493 29.4071 14.3048 29.2315 14.0012C29.056 13.6975 28.8037 13.4454 28.5 13.27L21.5 9.27002C21.196 9.09449 20.8511 9.00208 20.5 9.00208C20.1489 9.00208 19.804 9.09449 19.5 9.27002L12.5 13.27C12.1963 13.4454 11.944 13.6975 11.7685 14.0012C11.5929 14.3048 11.5004 14.6493 11.5 15V23C11.5004 23.3508 11.5929 23.6952 11.7685 23.9989C11.944 24.3025 12.1963 24.5547 12.5 24.73L19.5 28.73C19.804 28.9056 20.1489 28.998 20.5 28.998C20.8511 28.998 21.196 28.9056 21.5 28.73L28.5 24.73C28.8037 24.5547 29.056 24.3025 29.2315 23.9989C29.4071 23.6952 29.4996 23.3508 29.5 23Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7695 13.96L20.4995 19.01L29.2295 13.96"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 29.08V19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseSvg>
  );
};

export const OrderShippedIcon = ({ bgColor, color }) => {
  return (
    <BaseSvg bgColor={bgColor}>
      <g
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".85"
        transform="translate(12 9)"
      >
        <path d="M5.78286957,17.9565217 C5.78286957,19.3973913 4.61417391,20.5652174 3.17417391,20.5652174 C1.73330435,20.5652174 0.565478261,19.3973913 0.565478261,17.9565217 C0.565478261,16.5165217 1.73330435,15.3478261 3.17417391,15.3478261 C4.61417391,15.3478261 5.78286957,16.5165217 5.78286957,17.9565217 L5.78286957,17.9565217 Z" />
        <polyline points="4.044 15.511 4.044 .566 1.435 .566" />
        <polyline points="5.62 18.826 13.609 18.826 15.423 20.565" />
        <polygon points="5.783 17.087 14.478 17.087 14.478 9.261 5.783 9.261" />
        <polygon points="11.87 4.913 5.783 4.913 5.783 9.261 11.87 9.261" />
        <line x1="12.739" x2="11" y1="15.348" y2="15.348" />
        <line x1="8.392" x2="7.522" y1="7.522" y2="7.522" />
      </g>
    </BaseSvg>
  );
};

export const DeliveredIcon = ({ bgColor, color }) => {
  return (
    <BaseSvg bgColor={bgColor}>
      <path
        d="M22.72 16.79L18.43 21.09L16.78 19.44C16.6904 19.3353 16.58 19.2503 16.456 19.1903C16.3319 19.1303 16.1968 19.0965 16.0591 19.0912C15.9213 19.0859 15.784 19.1091 15.6557 19.1594C15.5274 19.2096 15.4108 19.2859 15.3134 19.3833C15.2159 19.4808 15.1396 19.5974 15.0894 19.7257C15.0391 19.854 15.0159 19.9913 15.0212 20.1291C15.0265 20.2668 15.0603 20.4019 15.1203 20.526C15.1803 20.65 15.2653 20.7604 15.37 20.85L17.72 23.21C17.8134 23.3027 17.9243 23.376 18.0461 23.4258C18.1679 23.4755 18.2984 23.5008 18.43 23.5C18.6923 23.4989 18.9437 23.3947 19.13 23.21L24.13 18.21C24.2237 18.117 24.2981 18.0064 24.3489 17.8846C24.3997 17.7627 24.4258 17.632 24.4258 17.5C24.4258 17.368 24.3997 17.2373 24.3489 17.1154C24.2981 16.9936 24.2237 16.883 24.13 16.79C23.9426 16.6037 23.6892 16.4992 23.425 16.4992C23.1608 16.4992 22.9074 16.6037 22.72 16.79ZM20 10C18.0222 10 16.0888 10.5865 14.4443 11.6853C12.7998 12.7841 11.5181 14.3459 10.7612 16.1732C10.0043 18.0004 9.8063 20.0111 10.1922 21.9509C10.578 23.8907 11.5304 25.6725 12.9289 27.0711C14.3275 28.4696 16.1093 29.422 18.0491 29.8079C19.9889 30.1937 21.9996 29.9957 23.8268 29.2388C25.6541 28.4819 27.2159 27.2002 28.3147 25.5557C29.4135 23.9112 30 21.9778 30 20C30 18.6868 29.7413 17.3864 29.2388 16.1732C28.7363 14.9599 27.9997 13.8575 27.0711 12.9289C26.1425 12.0003 25.0401 11.2638 23.8268 10.7612C22.6136 10.2587 21.3132 10 20 10ZM20 28C18.4178 28 16.871 27.5308 15.5554 26.6518C14.2398 25.7727 13.2145 24.5233 12.609 23.0615C12.0035 21.5997 11.845 19.9911 12.1537 18.4393C12.4624 16.8874 13.2243 15.462 14.3432 14.3431C15.462 13.2243 16.8874 12.4624 18.4393 12.1537C19.9911 11.845 21.5997 12.0035 23.0615 12.609C24.5233 13.2145 25.7727 14.2398 26.6518 15.5554C27.5308 16.871 28 18.4177 28 20C28 22.1217 27.1572 24.1566 25.6569 25.6569C24.1566 27.1571 22.1217 28 20 28Z"
        fill={color}
      />
    </BaseSvg>
  );
};

export const OutOfDeliveryIcon = ({ bgColor, color }) => {
  return (
    <BaseSvg bgColor={bgColor}>
      <path
        d="M31.5 20.5V25.5C31.5 25.7652 31.3946 26.0196 31.2071 26.2071C31.0196 26.3946 30.7652 26.5 30.5 26.5H29.5C29.5 27.2956 29.1839 28.0587 28.6213 28.6213C28.0587 29.1839 27.2956 29.5 26.5 29.5C25.7044 29.5 24.9413 29.1839 24.3787 28.6213C23.8161 28.0587 23.5 27.2956 23.5 26.5H17.5C17.5 27.2956 17.1839 28.0587 16.6213 28.6213C16.0587 29.1839 15.2956 29.5 14.5 29.5C13.7044 29.5 12.9413 29.1839 12.3787 28.6213C11.8161 28.0587 11.5 27.2956 11.5 26.5H10.5C10.2348 26.5 9.98043 26.3946 9.79289 26.2071C9.60536 26.0196 9.5 25.7652 9.5 25.5V13.5C9.5 12.7044 9.81607 11.9413 10.3787 11.3787C10.9413 10.8161 11.7044 10.5 12.5 10.5H21.5C22.2956 10.5 23.0587 10.8161 23.6213 11.3787C24.1839 11.9413 24.5 12.7044 24.5 13.5V15.5H26.5C26.9657 15.5 27.4251 15.6084 27.8416 15.8167C28.2582 16.025 28.6206 16.3274 28.9 16.7L31.3 19.9C31.3292 19.9435 31.3528 19.9905 31.37 20.04L31.43 20.15C31.4741 20.2615 31.4978 20.3801 31.5 20.5V20.5ZM15.5 26.5C15.5 26.3022 15.4414 26.1089 15.3315 25.9444C15.2216 25.78 15.0654 25.6518 14.8827 25.5761C14.7 25.5004 14.4989 25.4806 14.3049 25.5192C14.1109 25.5578 13.9327 25.653 13.7929 25.7929C13.653 25.9327 13.5578 26.1109 13.5192 26.3049C13.4806 26.4989 13.5004 26.7 13.5761 26.8827C13.6518 27.0654 13.78 27.2216 13.9444 27.3315C14.1089 27.4414 14.3022 27.5 14.5 27.5C14.7652 27.5 15.0196 27.3946 15.2071 27.2071C15.3946 27.0196 15.5 26.7652 15.5 26.5ZM22.5 13.5C22.5 13.2348 22.3946 12.9804 22.2071 12.7929C22.0196 12.6054 21.7652 12.5 21.5 12.5H12.5C12.2348 12.5 11.9804 12.6054 11.7929 12.7929C11.6054 12.9804 11.5 13.2348 11.5 13.5V24.5H12.28C12.5612 24.1906 12.9039 23.9435 13.2862 23.7743C13.6685 23.6052 14.082 23.5178 14.5 23.5178C14.918 23.5178 15.3315 23.6052 15.7138 23.7743C16.0961 23.9435 16.4388 24.1906 16.72 24.5H22.5V13.5ZM24.5 19.5H28.5L27.3 17.9C27.2069 17.7758 27.0861 17.675 26.9472 17.6056C26.8084 17.5361 26.6552 17.5 26.5 17.5H24.5V19.5ZM27.5 26.5C27.5 26.3022 27.4414 26.1089 27.3315 25.9444C27.2216 25.78 27.0654 25.6518 26.8827 25.5761C26.7 25.5004 26.4989 25.4806 26.3049 25.5192C26.1109 25.5578 25.9327 25.653 25.7929 25.7929C25.653 25.9327 25.5578 26.1109 25.5192 26.3049C25.4806 26.4989 25.5004 26.7 25.5761 26.8827C25.6518 27.0654 25.78 27.2216 25.9444 27.3315C26.1089 27.4414 26.3022 27.5 26.5 27.5C26.7652 27.5 27.0196 27.3946 27.2071 27.2071C27.3946 27.0196 27.5 26.7652 27.5 26.5ZM29.5 21.5H24.5V24.28C25.0902 23.7526 25.8649 23.4797 26.6553 23.5209C27.4457 23.5621 28.1879 23.914 28.72 24.5H29.5V21.5Z"
        fill={color}
      />
    </BaseSvg>
  );
};

export const IssueIcon = ({ bgColor, color }) => {
  return (
    <BaseSvg bgColor={bgColor}>
      <path
        d="M19.5005 23.5C19.3027 23.5 19.1093 23.5587 18.9449 23.6686C18.7804 23.7784 18.6523 23.9346 18.5766 24.1173C18.5009 24.3001 18.4811 24.5011 18.5197 24.6951C18.5583 24.8891 18.6535 25.0673 18.7933 25.2071C18.9332 25.347 19.1114 25.4422 19.3054 25.4808C19.4993 25.5194 19.7004 25.4996 19.8831 25.4239C20.0659 25.3482 20.222 25.22 20.3319 25.0556C20.4418 24.8911 20.5005 24.6978 20.5005 24.5C20.5005 24.2348 20.3951 23.9805 20.2076 23.7929C20.02 23.6054 19.7657 23.5 19.5005 23.5ZM30.1705 24.97L22.1205 10.97C21.8603 10.5035 21.4802 10.115 21.0196 9.8445C20.5591 9.57401 20.0346 9.4314 19.5005 9.4314C18.9663 9.4314 18.4419 9.57401 17.9813 9.8445C17.5207 10.115 17.1406 10.5035 16.8805 10.97L8.88046 24.97C8.61125 25.424 8.4666 25.941 8.4611 26.4688C8.4556 26.9966 8.58945 27.5166 8.84914 27.9761C9.10883 28.4356 9.48516 28.8185 9.94014 29.0861C10.3951 29.3536 10.9126 29.4964 11.4405 29.5H27.5605C28.0925 29.5053 28.6164 29.3689 29.0784 29.1049C29.5403 28.841 29.9238 28.4589 30.1894 27.9978C30.4551 27.5368 30.5933 27.0134 30.59 26.4814C30.5866 25.9493 30.4418 25.4277 30.1705 24.97ZM28.4405 26.97C28.3528 27.126 28.2249 27.2556 28.0701 27.3453C27.9154 27.435 27.7393 27.4815 27.5605 27.48H11.4405C11.2616 27.4815 11.0856 27.435 10.9308 27.3453C10.776 27.2556 10.6481 27.126 10.5605 26.97C10.4727 26.818 10.4265 26.6456 10.4265 26.47C10.4265 26.2945 10.4727 26.122 10.5605 25.97L18.5605 11.97C18.6444 11.8062 18.7719 11.6688 18.9289 11.5728C19.0859 11.4768 19.2664 11.426 19.4505 11.426C19.6345 11.426 19.815 11.4768 19.972 11.5728C20.129 11.6688 20.2565 11.8062 20.3405 11.97L28.3905 25.97C28.4897 26.1199 28.5467 26.2937 28.5555 26.4732C28.5643 26.6527 28.5245 26.8312 28.4405 26.99V26.97ZM19.5005 15.5C19.2352 15.5 18.9809 15.6054 18.7933 15.7929C18.6058 15.9805 18.5005 16.2348 18.5005 16.5V20.5C18.5005 20.7652 18.6058 21.0196 18.7933 21.2071C18.9809 21.3947 19.2352 21.5 19.5005 21.5C19.7657 21.5 20.02 21.3947 20.2076 21.2071C20.3951 21.0196 20.5005 20.7652 20.5005 20.5V16.5C20.5005 16.2348 20.3951 15.9805 20.2076 15.7929C20.02 15.6054 19.7657 15.5 19.5005 15.5Z"
        fill={color}
      />
    </BaseSvg>
  );
};

export const CustomsIcon = ({ bgColor, color }) => {
  return (
    <BaseSvg bgColor={bgColor}>
      <g
        stroke={color}
        strokeLinecap="round"
        strokeWidth=".85"
        transform="translate(8 8)"
      >
        <path d="M8.336 13.4782609L2.82208696 15.0043478C1.46469565 15.5130435.565565217 16.8113043.565565217 18.2608696L.565565217 20.4347826 20.5655652 20.4347826 20.5655652 18.2608696C20.5655652 16.8113043 19.6655652 15.5130435 18.3081739 15.0043478L12.8116522 13.4782609M7.95652174 8.26217391C7.95652174 7.78217391 8.34608696 7.8273913 8.82608696 7.8273913 9.30608696 7.8273913 9.69565217 7.78217391 9.69565217 8.26217391M11.4347826 8.26217391C11.4347826 7.78217391 11.8243478 7.8273913 12.3043478 7.8273913 12.7843478 7.8273913 13.173913 7.78217391 13.173913 8.26217391" />
        <path
          strokeLinejoin="round"
          d="M6.2173913 5.65217391L6.2173913 7.39130435C4.91304348 7.39130435 4.91304348 10 6.2173913 10 6.2173913 12.6086957 9.26086957 14.3713043 10.5652174 14.3713043M14.9130435 5.65217391L14.9130435 7.39130435C16.2173913 7.39130435 16.2173913 10 14.9130435 10 14.9130435 12.6086957 11.8695652 14.3713043 10.5652174 14.3713043"
        />
        <polygon
          strokeLinejoin="round"
          points="14.043 16.087 16.652 16.087 16.652 17.826 15.348 18.696 14.043 17.826"
        />
        <polygon
          strokeLinejoin="round"
          points="10.13 1.739 11 1.739 11 2.609 10.565 3.043 10.13 2.609"
        />
        <path
          strokeLinejoin="round"
          d="M10.5652174 6.52173913C5.34782609 6.52173913 5.34782609 4.34782609 5.34782609 4.34782609L15.7826087 4.34782609C15.7826087 4.34782609 15.7826087 6.52173913 10.5652174 6.52173913L10.5652174 6.52173913zM16.6521739 4.34782609L4.47826087 4.34782609 4.47826087 2.60869565C7.52173913 2.60869565 7.52173913.434782609 10.5652174.434782609 13.6086957.434782609 14.0434783 2.60869565 16.6521739 2.60869565L16.6521739 4.34782609 16.6521739 4.34782609z"
        />
        <line
          x1="9.261"
          x2="9.261"
          y1="14.185"
          y2="20.434"
          strokeLinejoin="round"
        />
        <line
          x1="11.87"
          x2="11.87"
          y1="14.185"
          y2="20.434"
          strokeLinejoin="round"
        />
      </g>
    </BaseSvg>
  );
};

export const AtCollectionPoint = ({ bgColor, color }) => {
  return (
    <BaseSvg bgColor={bgColor}>
      <g
        stroke={color}
        fill={color}
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth=".15"
        transform="translate(9.5 8)"
      >
        <g>
          <g>
            <path d="M10.25,12.87c-0.06,0-0.13-0.02-0.19-0.04L6.9,11.25c-0.14-0.07-0.24-0.22-0.24-0.38v-3.3c0-0.15,0.08-0.28,0.2-0.36 s0.28-0.08,0.41-0.02l3.17,1.58c0.14,0.07,0.24,0.22,0.24,0.38v3.3c0,0.15-0.08,0.28-0.2,0.36 C10.41,12.85,10.33,12.87,10.25,12.87z M7.51,10.6l2.31,1.16V9.41L7.51,8.25V10.6z" />
          </g>
          <g>
            <path d="M10.25,12.87c-0.08,0-0.16-0.02-0.22-0.06c-0.13-0.08-0.2-0.21-0.2-0.36v-3.3c0-0.16,0.09-0.31,0.24-0.38l3.17-1.58 c0.13-0.07,0.29-0.06,0.41,0.02s0.2,0.21,0.2,0.36v3.3c0,0.16-0.09,0.31-0.23,0.38l-3.17,1.58 C10.38,12.86,10.32,12.87,10.25,12.87z M10.68,9.41v2.35L13,10.6V8.25L10.68,9.41z" />
          </g>
          <g>
            <path d="M10.25,9.57c-0.06,0-0.13-0.02-0.19-0.04L6.9,7.95C6.75,7.87,6.66,7.73,6.66,7.57S6.75,7.26,6.9,7.19l3.17-1.58 c0.12-0.06,0.26-0.06,0.38,0l3.17,1.58c0.14,0.07,0.23,0.22,0.23,0.38s-0.09,0.31-0.23,0.38l-3.17,1.58 C10.38,9.56,10.32,9.57,10.25,9.57z M8.04,7.57l2.21,1.11l2.21-1.11l-2.21-1.11L8.04,7.57z" />
          </g>
        </g>
        <g>
          <path d="M10.25,15.32c-3.37,0-6.11-2.74-6.11-6.11S6.88,3.1,10.25,3.1s6.11,2.74,6.11,6.11S13.62,15.32,10.25,15.32z M10.25,3.96 C7.35,3.96,5,6.32,5,9.22s2.36,5.26,5.26,5.26s5.26-2.36,5.26-5.26S13.15,3.96,10.25,3.96z" />
        </g>
        <g>
          <path d="M10.25,23.28c-0.1,0-0.21-0.04-0.29-0.11C1.69,15.42,1.93,9.09,1.94,8.83c0-4.56,3.73-8.29,8.31-8.29s8.3,3.72,8.31,8.3 c0.02,0.41,0.15,6.67-8.02,14.32C10.46,23.24,10.36,23.28,10.25,23.28z M10.25,1.39c-4.11,0-7.46,3.35-7.46,7.46 c0,0.08-0.2,6.09,7.46,13.41c7.66-7.32,7.46-13.33,7.46-13.39c0-0.01,0-0.02,0-0.02C17.71,4.74,14.37,1.39,10.25,1.39z M18.56,8.85h0.01H18.56z" />
        </g>
      </g>
    </BaseSvg>
  );
};

export const CollectedIcon = ({ bgColor, color }) => {
  return (
    <BaseSvg bgColor={bgColor}>
      <g
        stroke={color}
        fill={color}
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth=".15"
        transform="translate(9.5 9)"
      >
        <g transform="translate(101.000000, 75.000000)">
          <g id="Stroke-4698">
            <path d="M-90.99-54.49c-0.06,0-0.12-0.01-0.17-0.04l-9.58-4.17c-0.16-0.07-0.26-0.22-0.26-0.39v-10.83 c0-0.14,0.07-0.28,0.19-0.36s0.27-0.09,0.4-0.03l9.58,4.17c0.16,0.07,0.26,0.22,0.26,0.39v10.83c0,0.14-0.07,0.28-0.19,0.36 C-90.82-54.52-90.9-54.49-90.99-54.49z M-100.15-59.36l8.73,3.8v-9.91l-8.73-3.8C-100.15-69.27-100.15-59.36-100.15-59.36z" />
          </g>
          <g>
            <path d="M-90.99-54.49c-0.08,0-0.16-0.02-0.23-0.07c-0.12-0.08-0.19-0.21-0.19-0.36v-10.83c0-0.17,0.1-0.32,0.26-0.39l9.58-4.17 c0.13-0.06,0.28-0.04,0.4,0.03c0.12,0.08,0.19,0.21,0.19,0.36v4.54c0,0.23-0.19,0.42-0.42,0.42c-0.23,0-0.42-0.19-0.42-0.42v-3.9 l-8.73,3.8v9.91l4.08-1.77c0.22-0.1,0.47,0.01,0.56,0.22c0.09,0.22,0,0.47-0.22,0.56l-4.67,2.03 C-90.87-54.5-90.93-54.49-90.99-54.49z" />
          </g>
          <g>
            <path d="M-100.57-69.49c-0.16,0-0.32-0.1-0.39-0.26c-0.09-0.22,0-0.47,0.22-0.56l9.58-4.17c0.11-0.05,0.23-0.05,0.34,0l9.58,4.17 c0.21,0.09,0.31,0.34,0.22,0.56s-0.34,0.31-0.56,0.22l-9.41-4.09l-9.41,4.09C-100.46-69.5-100.51-69.49-100.57-69.49z" />
          </g>
          <g>
            <rect
              x="-91.08"
              y="-74.96"
              transform="matrix(0.4647 -0.8855 0.8855 0.4647 13.5006 -117.7706)"
              width="0.85"
              height="9.81"
            />
          </g>
          <g>
            <path d="M-93.49-59.49c-0.06,0-0.12-0.01-0.18-0.04l-4.58-2.08c-0.15-0.07-0.24-0.22-0.24-0.39v-4.17c0-0.14,0.07-0.28,0.19-0.36 c0.12-0.07,0.27-0.08,0.41-0.02l4.58,2.08c0.15,0.07,0.25,0.22,0.25,0.39v4.17c0,0.14-0.07,0.28-0.19,0.36 C-93.33-59.51-93.41-59.49-93.49-59.49z M-97.65-62.27l3.73,1.7v-3.23l-3.73-1.7V-62.27z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M18.35,18.43c-2.19,0-3.97-1.78-3.97-3.97s1.78-3.97,3.97-3.97s3.97,1.78,3.97,3.97S20.54,18.43,18.35,18.43z M18.35,11.34c-1.72,0-3.12,1.4-3.12,3.12s1.4,3.12,3.12,3.12s3.12-1.4,3.12-3.12S20.07,11.34,18.35,11.34z" />
          </g>
          <g>
            <path d="M17.75,16.01L17.75,16.01c-0.11,0-0.22-0.04-0.3-0.12l-1.05-1.06c-0.17-0.17-0.16-0.44,0-0.6c0.17-0.17,0.44-0.16,0.6,0l0.75,0.75l1.95-1.95c0.17-0.17,0.44-0.17,0.6,0s0.17,0.44,0,0.6l-2.25,2.25C17.97,15.97,17.86,16.01,17.75,16.01z" />
          </g>
        </g>
      </g>
    </BaseSvg>
  );
};

export const ReturnToSenderIcon = ({ bgColor, color }) => {
  return (
    <BaseSvg bgColor={bgColor}>
      <g
        stroke={color}
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth=".15"
        transform="translate(9.5 9)"
        fill={color}
      >
        <g transform="translate(101.000000, 75.000000)">
          <g>
            <path d="M-91-54.5c-0.1,0-0.1,0-0.2,0l-9.6-4.2c-0.2-0.1-0.3-0.2-0.3-0.4v-10.8c0-0.1,0.1-0.3,0.2-0.4s0.3-0.1,0.4,0l9.6,4.2 c0.2,0.1,0.3,0.2,0.3,0.4v10.8c0,0.1-0.1,0.3-0.2,0.4C-90.8-54.5-90.9-54.5-91-54.5z M-100.2-59.4l8.7,3.8v-9.9l-8.7-3.8 C-100.2-69.3-100.2-59.4-100.2-59.4z" />
          </g>
          <g>
            <path d="M-91-54.5c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1-0.2-0.2-0.2-0.4v-10.8c0-0.2,0.1-0.3,0.3-0.4l9.6-4.2c0.1-0.1,0.3,0,0.4,0c0.1,0.1,0.2,0.2,0.2,0.4v4.5c0,0.2-0.2,0.4-0.4,0.4c-0.2,0-0.4-0.2-0.4-0.4v-3.9l-8.7,3.8v9.9l4.1-1.8c0.2-0.1,0.5,0,0.6,0.2c0.1,0.2,0,0.5-0.2,0.6l-4.7,2C-90.9-54.5-90.9-54.5-91-54.5z" />
          </g>
          <g>
            <path d="M-100.6-69.5c-0.2,0-0.3-0.1-0.4-0.3c-0.1-0.2,0-0.5,0.2-0.6l9.6-4.2c0.1-0.1,0.2-0.1,0.3,0l9.6,4.2c0.2,0.1,0.3,0.3,0.2,0.6s-0.3,0.3-0.6,0.2l-9.4-4.1l-9.4,4.1C-100.5-69.5-100.5-69.5-100.6-69.5z" />
          </g>
          <g>
            <rect
              x="-91.1"
              y="-75"
              transform="matrix(0.4647 -0.8855 0.8855 0.4647 13.5006 -117.7706)"
              width="0.9"
              height="9.8"
            />
          </g>
          <g>
            <path d="M-93.5-59.5c-0.1,0-0.1,0-0.2,0l-4.6-2.1c-0.2-0.1-0.2-0.2-0.2-0.4v-4.2c0-0.1,0.1-0.3,0.2-0.4c0.1-0.1,0.3-0.1,0.4,0 l4.6,2.1c0.2,0.1,0.2,0.2,0.2,0.4v4.2c0,0.1-0.1,0.3-0.2,0.4C-93.3-59.5-93.4-59.5-93.5-59.5z M-97.7-62.3l3.7,1.7v-3.2l-3.7-1.7 V-62.3z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M18.4,18.4c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S20.5,18.4,18.4,18.4z M18.4,11.3c-1.7,0-3.1,1.4-3.1,3.1 s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1S20.1,11.3,18.4,11.3z" />
          </g>
        </g>
      </g>
      <path
        stroke={color}
        fill={color}
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth=".15"
        transform="translate(9.5 9)"
        d="M19.2,13.5h-1.9l0.3-0.2c0.1-0.1,0.1-0.3,0-0.4c-0.1-0.1-0.3-0.1-0.4,0l-0.9,0.7c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l0.9,0.7c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.3,0-0.4l-0.2-0.2h1.9c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7h-2c-0.2,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3h2c0.7,0,1.3-0.6,1.3-1.3C20.5,14.1,19.9,13.5,19.2,13.5z"
      />
    </BaseSvg>
  );
};

IntransitIcon.propTypes = iconPropTypes;
OrderPlacedIcon.propTypes = iconPropTypes;
OrderShippedIcon.propTypes = iconPropTypes;
DeliveredIcon.propTypes = iconPropTypes;
OutOfDeliveryIcon.propTypes = iconPropTypes;
IssueIcon.propTypes = iconPropTypes;
CustomsIcon.propTypes = iconPropTypes;
AtCollectionPoint.propTypes = iconPropTypes;
CollectedIcon.propTypes = iconPropTypes;
ReturnToSenderIcon.propTypes = iconPropTypes;