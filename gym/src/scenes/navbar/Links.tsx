import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
    page: string;
    selectedPage : string;
    setSelectedPage: (value: string) => void;

}

const Links = (props: Props) => {
    const lowerCasePage = props.page.toLocaleLowerCase().replace(/ /g, "")
  return (
    <AnchorLink 
    href={`#${lowerCasePage}`}
    onClick={()=> props.setSelectedPage(lowerCasePage)}
    className={`${props.selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
    `}
    >
        {props.page}
    </AnchorLink>
  )
}

export default Links