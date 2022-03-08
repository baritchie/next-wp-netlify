export default function Nav(props) {
    function getNavItems() {
        const navItems = props.navItems
        let newNavItems = new Map()
        for(let navItem in navItems) {
           newNavItems.set(navItems[navItem].navMeta.itemName, navItems[navItem].navMeta.itemOrder)
        }
        const navItem = new Map([...newNavItems.entries()].sort((a, b) => a[1] - b[1]))
        let finalNavOutput =[...navItem.keys()]
        let output = ""
        for(let i = 0; i < finalNavOutput.length; i++)
            output += "<li>"+finalNavOutput[i]+"</li>"
        return output
    }
    let navOutput = getNavItems()
    return (
        <nav>
            <ul dangerouslySetInnerHTML={{__html: navOutput}} className="nav">
            </ul>
        </nav>
    )
}