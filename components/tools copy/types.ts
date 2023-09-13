// types.ts
export interface Extra {
    text?: string;
    linkText?: string;
    link?: string;
  }
  
  export interface ToolSectionProps {
    logos: Logo[];
    selectedLogo: Logo;
    setSelectedLogo: React.Dispatch<React.SetStateAction<Logo>>;
  }

  export interface Logo {
    id: number;
    name: string;
    src: string;
    link: string;
    descLabel: string;
    desc: string;
    useCaseLabel: string;
    useCase: string;
    extra?: string | Extra;
  }
  
  export interface LogoGridProps {
    logos: Logo[];
    setSelectedLogo: React.Dispatch<React.SetStateAction<Logo>>
    selectedLogo: Logo;
  }
  
  export interface GridItemProps {
    logo: Logo;
    setSelectedLogo: React.Dispatch<React.SetStateAction<Logo>>
    selectedLogo: Logo;
  }
  
  export interface DetailBoxProps {
    logo: Logo;
  }
  