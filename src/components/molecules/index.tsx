type ListProps = {
  onClick(): void;
  amount: number;
  href: string;
  children: React.ReactNode;
};

export const ListMenu: React.FunctionComponent<ListProps> = ({children, amount, href}) => {
  const menu = [...Array(amount)]
  return(
    <ul>
      {menu.map((_, i) => (<li key={i}><a href={href}>{children}</a></li>))}
    </ul>
  )
}
