import Nav from "@components/Nav"

export default function Header(props) {
    const navItems = props.navItems
    return(    
    <header>
        <Nav navItems={navItems} />
    </header>)
}