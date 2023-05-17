import React from 'react';
import PropTypes from 'prop-types';

const BaseSvg = ({ bgColor, children }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="20" fill={bgColor} />
      {children}
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

export const RequestReturnIcon = ({ bgColor, color }) => {
  return (
    <BaseSvg bgColor={bgColor}>
      <path
        d="M20.0001 10C18.8034 10 17.6334 10.2091 16.5218 10.6217L16.8119 11.4029C17.8302 11.0251 18.9031 10.8334 20.0001 10.8334C25.0548 10.8334 29.1668 14.9454 29.1668 20.0001C29.1668 25.0548 25.0548 29.1667 20.0001 29.1667C14.9454 29.1667 10.8334 25.0548 10.8334 20.0001C10.8334 17.2522 12.0681 14.669 14.1669 12.9342L14.1667 15.8334H15L15.0001 11.6667H10.8334V12.5H13.3859C11.2472 14.3876 10 17.1116 10 20C10 25.5138 14.4862 30 20 30C25.5138 30 30 25.5138 30 20C30 14.4862 25.5138 10 20 10H20.0001Z"
        fill={color}
      />
      <path
        d="M17.4994 23.3334H16.6662V24.1666H23.3328V23.3334H22.4996V21.9108L20.5886 20L22.4994 18.0892V16.6666H23.3327V15.8334H16.666V16.6666H17.4993V18.0892L19.4102 20L17.4994 21.9108V23.3334ZM18.3327 17.7441V16.6665H21.6661V17.7441L19.9994 19.4108L18.3327 17.7441ZM19.9994 20.5891L21.6661 22.2558V23.3333H18.3327V22.2558L19.9994 20.5891Z"
        fill={color}
      />
      <path d="M17.5 25.8334H18.3333V26.6666H17.5V25.8334Z" fill={color} />
      <path d="M19.584 25.8334H20.4172V26.6666H19.584V25.8334Z" fill={color} />
      <path d="M21.666 25.8334H22.4993V26.6666H21.666V25.8334Z" fill={color} />
    </BaseSvg>
  );
};

export const SelectShipmentMethodIcon = ({ bgColor, color }) => {
  return (
    <BaseSvg bgColor={bgColor}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.1693 18.7526L10.5859 14.5859V25.4193L20.1693 29.5859V18.7526V18.7526Z"
        stroke={color}
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.1719 18.7526L29.7552 14.5859V25.4193L20.1719 29.5859V18.7526V18.7526Z"
        stroke={color}
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5859 14.5846L20.1693 10.418L29.7526 14.5846"
        stroke={color}
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1562 12.1641L24.8413 16.7216"
        stroke={color}
        strokeWidth="0.85"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6693 20.4193L13.0859 18.3359V22.5026L17.6693 24.5859V20.4193V20.4193Z"
        stroke={color}
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseSvg>
  );
};

export const ReturnPropductIcon = ({ bgColor, color }) => {
  return (
    <BaseSvg bgColor={bgColor}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.2702 24.6C24.2702 25.484 25.0033 26.2 25.9066 26.2C26.8115 26.2 27.543 25.484 27.543 24.6C27.543 23.7168 26.8115 23 25.9066 23C25.0033 23 24.2702 23.7168 24.2702 24.6V24.6Z"
        stroke={color}
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8171 24.6C12.8171 25.484 13.5502 26.2 14.4535 26.2C15.3584 26.2 16.0898 25.484 16.0898 24.6C16.0898 23.7168 15.3584 23 14.4535 23C13.5502 23 12.8171 23.7168 12.8171 24.6V24.6Z"
        stroke={color}
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.5444 24.6004H29.5898V20.2004L27.9535 18.6004L25.908 15.0004H22.2262V13.4004H10.7717V24.6004H12.8171"
        stroke={color}
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.2734 24.5996H16.0916"
        stroke={color}
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.8619 16.5996H25.0891L26.3164 18.9996"
        stroke={color}
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.2266 15V23"
        stroke={color}
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.2702 24.6C24.2702 25.484 25.0033 26.2 25.9066 26.2C26.8115 26.2 27.543 25.484 27.543 24.6C27.543 23.7168 26.8115 23 25.9066 23C25.0033 23 24.2702 23.7168 24.2702 24.6V24.6Z"
        stroke={color}
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8171 24.6C12.8171 25.484 13.5502 26.2 14.4535 26.2C15.3584 26.2 16.0898 25.484 16.0898 24.6C16.0898 23.7168 15.3584 23 14.4535 23C13.5502 23 12.8171 23.7168 12.8171 24.6V24.6Z"
        stroke={color}
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.5444 24.6004H29.5898V20.2004L27.9535 18.6004L25.908 15.0004H22.2262V13.4004H10.7717V24.6004H12.8171"
        stroke={color}
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.2734 24.5996H16.0916"
        stroke={color}
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.8619 16.5996H25.0891L26.3164 18.9996"
        stroke={color}
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.2266 15V23"
        stroke={color}
        strokeWidth="0.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseSvg>
  );
};

export const RefundIcon = ({ bgColor, color }) => {
  return (
    <BaseSvg bgColor={bgColor}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.6673 11.873L16.2486 22.2918L13.3313 19.3745L10.4141 22.2918L16.2486 28.1263L29.5846 14.7903L26.6673 11.873V11.873Z"
        stroke={color}
        strokeWidth="0.85"
        strokeLinejoin="round"
      />
    </BaseSvg>
  );
};

RequestReturnIcon.propTypes = iconPropTypes;
SelectShipmentMethodIcon.propTypes = iconPropTypes;
ReturnPropductIcon.propTypes = iconPropTypes;
RefundIcon.propTypes = iconPropTypes;
