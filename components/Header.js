import Nav from "./Nav"

export default function Header(props) {
    const navItems = props.navItems
    return(    
    <header>
        <Nav navItems={navItems} />
    </header>)
}