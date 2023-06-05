import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Oval
      height={35}
      width={35}
      color="#5736A3"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#EBD8FF"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};
