import reactIcon from '../assets/logo-react-icon.png';

const ReactIcon = ({ alt, className, height, width }) => (
  <img className={className} src={reactIcon} alt={alt} width={width} height={height} />
);
ReactIcon.defaultProps = {
  alt: 'Auth React-Redux',
  height: '36',
  width: '36'
};

export default ReactIcon;
