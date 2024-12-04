interface MainContainerProps {
  children: React.ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => {
  return <main>{ children }</main>;
};