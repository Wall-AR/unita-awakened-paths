
const SacredSymbol = ({ 
  type = "flowerOfLife", 
  className = "" 
}) => {
  const renderSymbol = () => {
    switch (type) {
      case "flowerOfLife":
        return (
          <svg viewBox="0 0 200 200" className={`sacred-symbol ${className}`}>
            <g fill="none" stroke="currentColor" strokeWidth="0.5">
              <circle cx="100" cy="100" r="50" />
              <circle cx="100" cy="50" r="50" />
              <circle cx="100" cy="150" r="50" />
              <circle cx="50" cy="75" r="50" />
              <circle cx="50" cy="125" r="50" />
              <circle cx="150" cy="75" r="50" />
              <circle cx="150" cy="125" r="50" />
              <circle cx="100" cy="100" r="90" />
            </g>
          </svg>
        );
      case "treeOfLife":
        return (
          <svg viewBox="0 0 200 300" className={`sacred-symbol ${className}`}>
            <g fill="none" stroke="currentColor" strokeWidth="0.5">
              <circle cx="100" cy="30" r="20" />
              <circle cx="60" cy="70" r="20" />
              <circle cx="140" cy="70" r="20" />
              <circle cx="100" cy="110" r="20" />
              <circle cx="60" cy="150" r="20" />
              <circle cx="140" cy="150" r="20" />
              <circle cx="100" cy="190" r="20" />
              <circle cx="60" cy="230" r="20" />
              <circle cx="140" cy="230" r="20" />
              <circle cx="100" cy="270" r="20" />
              
              {/* Connecting lines */}
              <line x1="100" y1="50" x2="100" y2="90" />
              <line x1="60" y1="90" x2="60" y2="130" />
              <line x1="140" y1="90" x2="140" y2="130" />
              <line x1="100" y1="130" x2="100" y2="170" />
              <line x1="60" y1="170" x2="60" y2="210" />
              <line x1="140" y1="170" x2="140" y2="210" />
              <line x1="100" y1="210" x2="100" y2="250" />
              
              <line x1="80" y1="30" x2="60" y2="70" />
              <line x1="120" y1="30" x2="140" y2="70" />
              <line x1="60" y1="70" x2="100" y2="110" />
              <line x1="140" y1="70" x2="100" y2="110" />
              <line x1="60" y1="150" x2="100" y2="110" />
              <line x1="140" y1="150" x2="100" y2="110" />
              <line x1="60" y1="150" x2="100" y2="190" />
              <line x1="140" y1="150" x2="100" y2="190" />
              <line x1="60" y1="230" x2="100" y2="190" />
              <line x1="140" y1="230" x2="100" y2="190" />
              <line x1="60" y1="230" x2="100" y2="270" />
              <line x1="140" y1="230" x2="100" y2="270" />
            </g>
          </svg>
        );
      case "sriYantra":
        return (
          <svg viewBox="0 0 200 200" className={`sacred-symbol ${className}`}>
            <g fill="none" stroke="currentColor" strokeWidth="0.5">
              <polygon points="100,10 120,80 190,100 120,120 100,190 80,120 10,100 80,80" />
              <polygon points="100,30 115,80 170,100 115,120 100,170 85,120 30,100 85,80" />
              <polygon points="100,50 110,80 150,100 110,120 100,150 90,120 50,100 90,80" />
              <circle cx="100" cy="100" r="60" />
              <circle cx="100" cy="100" r="10" />
            </g>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 100 100" className={`sacred-symbol ${className}`}>
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </svg>
        );
    }
  };

  return renderSymbol();
};

export default SacredSymbol;
